import User from "../user";

describe("User", () => {
  const user = new User(
    "user-1",
    "johndoe",
    "john@example.com",
    "hashedPassword123"
  );

  it("should create a user with the correct initial values", () => {
    expect(user.getId()).toBe("user-1");
    expect(user.getUsername()).toBe("johndoe");
    expect(user.getEmail()).toBe("john@example.com");
    expect(user.getPasswordHash()).toBe("hashedPassword123");
  });
});
