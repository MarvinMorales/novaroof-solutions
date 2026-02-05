"use client";

const API_ENDPOINT = "https://consulting-api.vercel.app/v1/clients/update-client-body";

const generateId = () => `id-${Date.now()}-${Math.random().toString(36).substring(2)}`;

async function updateClientBody(payload: object) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`API Error: ${response.status} ${response.statusText}`, errorBody);
    }
  } catch (error) {
    console.error("Failed to call tracking API", error);
  }
}

export async function trackVisit(data: { city: string; state: string }) {
    const visitData = {
        id: generateId(),
        city: data.city || "",
        state: data.state || "",
    };
    
    await updateClientBody({ 
        visits: [visitData],
        mailingLeads: [],
        calls: 0
    });
}

export async function trackLead(leadData: { name: string; email: string; phone?: string; service: string; message: string; }) {
     const leadPayload = {
        id: generateId(),
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone || "",
        service: leadData.service,
        details: leadData.message,
    };
    
    await updateClientBody({ 
        visits: [],
        mailingLeads: [leadPayload],
        calls: 0
    });
}

export async function trackCall() {
    await updateClientBody({ 
        visits: [],
        mailingLeads: [],
        calls: 1 
    });
}
