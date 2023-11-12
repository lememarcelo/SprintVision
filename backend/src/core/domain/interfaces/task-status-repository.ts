import TaskStatus from "../entities/tasks/task-status";

export interface ITaskStatusRepository {
  findAll(): Promise<TaskStatus[]>;
  findById(id: string): Promise<TaskStatus | null>;
  create(taskStatus: TaskStatus): Promise<TaskStatus>;
  update(taskStatus: TaskStatus): Promise<TaskStatus>;
  delete(id: string): Promise<void>;
}
