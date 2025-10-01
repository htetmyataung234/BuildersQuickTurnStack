import { describe, it, expect, beforeEach } from "vitest"
import { submitContact } from "./submitContact"

function generateTestEmail() {
  const timestamp = Date.now()
  return `test-${timestamp}@example.com`
}

describe("submitContact()", () => {
  it("saves contact to in-memory storage", async () => {
    const testData = {
      firstName: "John",
      lastName: "Doe",
      phone: `09${Math.floor(Math.random() * 1_000_000_000)}`,
      email: generateTestEmail(),
    }

    const result = await submitContact(testData)

    expect(result).toHaveProperty("id")
    expect(result.email).toBe(testData.email)
    expect(result.firstName).toBe(testData.firstName)
    expect(result.lastName).toBe(testData.lastName)
    expect(result.phone).toBe(testData.phone)
  })
})
