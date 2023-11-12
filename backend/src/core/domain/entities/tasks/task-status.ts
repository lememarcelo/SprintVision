export type TaskStatusId = string;

class TaskStatus {
  private id: TaskStatusId;
  private name: string;
  private description?: string;

  constructor(id: TaskStatusId, name: string, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  // Getters e setters...
  getId(): TaskStatusId {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string | undefined {
    return this.description;
  }
}

export default TaskStatus;
