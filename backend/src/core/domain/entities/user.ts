export type UserId = string;

class User {
  private id: UserId;
  private username: string;
  private email: string;
  private passwordHash: string; // Armazene apenas o hash da senha

  constructor(
    id: UserId,
    username: string,
    email: string,
    passwordHash: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;
  }

  // Métodos para manipular a entidade User
  // Como redefinir a senha, atualizar o email, etc.

  // Getters e setters
  getId(): UserId {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  getEmail(): string {
    return this.email;
  }

  getPasswordHash(): string {
    return this.passwordHash;
  }
}

export default User;
