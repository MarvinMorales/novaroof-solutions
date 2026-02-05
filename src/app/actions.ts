
"use server";

import { z } from "zod";

const API_ENDPOINT = "https://consulting-api.vercel.app/v1/clients/update-client-body";

// A simple and reliable way to generate a unique ID without extra dependencies.
const generateId = () => `id-${Date.now()}-${Math.random().toString(36).substring(2)}`;

async function updateClientBody(payload: object) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`, await response.text());
    }
  } catch (error) {
    console.error("Failed to call tracking API", error);
  }
}

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
    
    console.log("New Roofing Lead Captured:", validatedFields.data);

    const leadData = {
        id: generateId(),
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone || "",
        service: validatedFields.data.service,
        details: validatedFields.data.message,
    };
    await updateClientBody({ mailingLeads: [leadData] });

    return {
        message: "Thank you! We've received your request and will connect you with a qualified local roofer shortly.",
        status: "success",
    };
}

export async function trackCallAction() {
    await updateClientBody({ calls: 1 });
}

export async function trackVisitAction(data: { city: string; state: string }) {
    const visitData = {
        id: generateId(),
        city: data.city || "",
        state: data.state || "",
    };
    await updateClientBody({ visits: [visitData] });
}
