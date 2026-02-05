"use client";

const API_ENDPOINT = "https://consulting-api.vercel.app/v1/clients/update-client-body?client_id=0590bc6a-8d60-4af7-9e7e-78d72919153b";

// Use crypto.randomUUID() available in modern browsers and workers for a true UUIDv4.
const generateId = () => crypto.randomUUID();

async function updateClientBody(payload: object) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store', 
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`API Error: ${response.status} ${response.statusText}`, errorBody);
      throw new Error(`API request failed: ${response.statusText}`);
    }
     return await response.json();
  } catch (error) {
    console.error("Failed to call tracking API", error);
    throw error;
  }
}

export async function trackVisit(data: { city: string; state: string }) {
    const visitData = {
        id: generateId(),
        city: (data.city || "Unknown").toLowerCase(),
        state: data.state || "Unknown",
    };
    
    await updateClientBody({ 
        visits: [visitData],
        mailingLeads: [],
        calls: 0
    });
}

export async function trackLead(leadData: { name: string; email: string; phone: string; service: string; message: string; zip: string; }) {
     const leadPayload = {
        id: generateId(),
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        service: leadData.service,
        details: `${leadData.message} (ZIP: ${leadData.zip})`,
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
