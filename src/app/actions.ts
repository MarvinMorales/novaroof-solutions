"use server";

import { z } from "zod";

const leadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().optional(),
    service: z.string().min(1, "Please select a service."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

export type LeadFormState = {
    message: string;
    status: "idle" | "success" | "error";
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
    
    // In a real application, this lead would be sent to a CRM
    // or a lead distribution system.
    console.log("New Roofing Lead Captured:", validatedFields.data);

    return {
        message: "Thank you! We've received your request and will connect you with a qualified local roofer shortly.",
        status: "success",
    };
}
