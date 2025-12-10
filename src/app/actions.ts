"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    email: z.string().email("Por favor, introduce una dirección de correo electrónico válida."),
    phone: z.string().optional(),
    service: z.string().min(1, "Por favor, selecciona un servicio."),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
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
        message: "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.",
        status: "success",
    };
}
