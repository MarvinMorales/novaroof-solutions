
"use server";

import { z } from "zod";

// NOTE: This file is now only for server-side form validation.
// All external API tracking calls have been moved to the client-side
// in /src/lib/api-client.ts.

const leadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().optional(),
    service: z.string().min(1, "Please select a service."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

// We are adding the validated data to the state so the client component can
// access it and make the tracking call.
export type LeadFormState = {
    message: string;
    status: "idle" | "success" | "error";
    data?: z.infer<typeof leadSchema>;
};

export async function submitLeadForm(
    prevState: LeadFormState,
    formData: FormData
): Promise<LeadFormState> {
    const validatedFields = leadSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        const errorMessages = validatedFields.error.errors.map((e) => e.message).join("\n");
        return {
            message: errorMessages,
            status: "error",
        };
    }
    
    console.log("New Roofing Lead Captured (Server Validation Complete):", validatedFields.data);

    // The external API call is now handled on the client-side (in contact.tsx) 
    // upon receiving this successful state.
    return {
        message: "Thank you! We've received your request and will connect you with a qualified local roofer shortly.",
        status: "success",
        data: validatedFields.data
    };
}
