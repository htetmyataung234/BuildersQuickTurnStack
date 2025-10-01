
import { describe, expect, it, beforeEach } from "vitest";
import { TRPCError } from "@trpc/server";
import { appRouter } from "~/server/api/root";
import { clearContacts } from "~/modules/contact/logic/submitContact";

import type { AppRouter } from "~/server/api/root";
import type { inferRouterInputs } from "@trpc/server";
import type { ContactInput } from "~/modules/contact/logic/contactSchema";

const createCaller = () => {
  const ctx = { session: null };
  return appRouter.createCaller(ctx);
};

type RouterInputs = inferRouterInputs<AppRouter>;
type ContactSubmitInput = RouterInputs['contact']['submit'];

const validTestData: ContactInput = {
  firstName: "John",
  lastName: "Doe",
  phone: `09${Math.floor(Math.random() * 1_000_000_000)}`,
  email: "john.doe@example.com",
};

describe("contactRouter integration", () => {
  beforeEach(() => {
    clearContacts();
  });

  it("should submit contact successfully", async () => {
    const caller = createCaller();
    const result = await caller.contact.submit(validTestData);

    expect(result).toHaveProperty("id");
    expect(result.email).toBe(validTestData.email);
    expect(result.firstName).toBe(validTestData.firstName);
  });


  it("should reject an invalid contact submission", async () => {
    const caller = createCaller();
    const invalidInput: Partial<ContactSubmitInput> = {
      firstName: "Test",
      email: "test@example.com",
    };
    await expect(caller.contact.submit(invalidInput as ContactSubmitInput)).rejects.toThrow(TRPCError);
    await expect(caller.contact.submit(invalidInput as ContactSubmitInput)).rejects.toHaveProperty('code', 'BAD_REQUEST');
  });


  it("should throw a CONFLICT error for a duplicate contact", async () => {
    const caller = createCaller();
    // First submit the contact
    await caller.contact.submit(validTestData);
    const duplicateData: ContactInput = {
      firstName: "Jane",
      lastName: "Doe",
      phone: validTestData.phone,
      email: validTestData.email,
    };
    await expect(caller.contact.submit(duplicateData)).rejects.toThrow(TRPCError);
    await expect(caller.contact.submit(duplicateData)).rejects.toHaveProperty('code', 'CONFLICT');
    await expect(caller.contact.submit(duplicateData)).rejects.toHaveProperty('message', 'This contact already exists.');
  });
});




