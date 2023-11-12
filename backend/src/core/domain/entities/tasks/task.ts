import TaskStatus, { TaskStatusId } from "./task-status";

export type TaskId = string;

export enum TaskPriority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Critical = "CRITICAL",
}

class Task {
  private id: TaskId;
  private title: string;
  private description: string;
  private status: TaskStatus;
  private priority: TaskPriority;
  private assigneeId: string | null;
  private projectId: string;

  constructor(
    id: TaskId,
    title: string,
    description: string,
    projectId: string,
    status: TaskStatus,
    priority: TaskPriority,
    assigneeId: string | null = null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.assigneeId = assigneeId;
    this.projectId = projectId;
  }

  // Métodos para manipular a entidade Task
  assignToUser(userId: string): void {
    this.assigneeId = userId;
  }

  unassignUser(): void {
    this.assigneeId = null;
  }

  updateStatus(newStatus: TaskStatus): void {
    this.status = newStatus;
  }

  updatePriority(newPriority: TaskPriority): void {
    this.priority = newPriority;
  }

  // Getters
  getId(): TaskId {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getStatus(): TaskStatus {
    return this.status;
  }

  getPriority(): TaskPriority {
    return this.priority;
  }

  getAssigneeId(): string | null {
    return this.assigneeId;
  }

  getProjectId(): string {
    return this.projectId;
  }
}

export default Task;
