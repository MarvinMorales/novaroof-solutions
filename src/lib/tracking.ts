'use client';

const API_URL = 'https://consulting-api.vercel.app/v1/clients/update-client-body?client_id=0590bc6a-8d60-4af7-9e7e-78d72919153b';

async function sendTrackingData(body: Record<string, any>) {
  try {
    await fetch(API_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      keepalive: true,
    });
  } catch (error) {
    console.error('Failed to send tracking data:', error);
  }
}

export function trackVisit() {
  sendTrackingData({ visits: 1, calls: 0 });
}

export function trackCall() {
  sendTrackingData({ visits: 0, calls: 1 });
}
