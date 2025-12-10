"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().optional(),
    service: z.string().min(1, "Please select a service."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
    message: string;
    status: "idle" | "success" | "error";
};

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const validatedFields = contactSchema.safeParse({
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
    
    // Here you would typically send an email or save to a database.
    // For this example, we'll just log it to the console.
    console.log("New Contact Form Submission:", validatedFields.data);

    return {
        message: "Thank you for contacting us! We will get back to you soon.",
        status: "success",
    };
}
