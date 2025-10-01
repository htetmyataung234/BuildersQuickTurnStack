import type { ContactInput } from "./contactSchema"

// Simple in-memory storage for demo purposes
let contacts: ContactInput[] = [];

// Export function to clear contacts for testing
export function clearContacts() {
  contacts = [];
}

export async function submitContact(data: ContactInput) {
  // Check if contact already exists (same email and phone)
  const existing = contacts.find(
    contact => contact.email === data.email && contact.phone === data.phone
  );

  if (existing) {
    const error = new Error("A contact with this email and phone already exists.") as Error & { statusCode?: number }
    error.statusCode = 409
    throw error
  }

  // Add to in-memory storage
  contacts.push(data);
  
  // Simulate successful response
  return {
    id: Math.random().toString(36).substr(2, 9),
    ...data,
    createdAt: new Date().toISOString()
  };
}



