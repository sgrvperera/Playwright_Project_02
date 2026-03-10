// tests/fixtures/userFactory.ts
export function createTestUser() {
  const ts = Date.now();
  return {
    firstName: 'PW',
    lastName: 'Tester',
    email: `pw+${ts}@example.com`,
    password: 'Password123!'
  };
}