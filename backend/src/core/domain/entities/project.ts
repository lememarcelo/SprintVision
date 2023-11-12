type ProjectId = string;
type UserId = string;

export enum ProjectStatus {
  Active,
  Archived,
  OnHold,
}

class Project {
  private id: ProjectId;
  private name: string;
  private description: string;
  private members: UserId[];
  private status: ProjectStatus;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(id: ProjectId, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.members = [];
    this.status = ProjectStatus.Active;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Methods to manipulate the project entity
  addMember(userId: UserId): void {
    if (!this.members.includes(userId)) {
      this.members.push(userId);
    }
  }

  removeMember(userId: UserId): void {
    this.members = this.members.filter((memberId) => memberId !== userId);
  }

  updateStatus(newStatus: ProjectStatus): void {
    this.status = newStatus;
    this.updatedAt = new Date();
  }

  // ... other methods such as updateName, updateDescription, etc.

  // Getters and setters as needed
  getId(): ProjectId {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getMembers(): UserId[] {
    return this.members;
  }

  getStatus(): ProjectStatus {
    return this.status;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}

export default Project;
