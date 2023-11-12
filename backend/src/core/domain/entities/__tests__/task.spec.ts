import Task, { TaskPriority } from "../tasks/task";
import TaskStatus from "../tasks/task-status";

describe("Task", () => {
  const taskStatusToDo = new TaskStatus("status-1", "TO_DO");
  const taskStatusInProgress = new TaskStatus("status-2", "IN_PROGRESS");
  const taskStatusDone = new TaskStatus("status-3", "DONE");

  const task = new Task(
    "task-1",
    "Implement unit tests",
    "Implement unit tests for the Task entity",
    "project-1",
    taskStatusToDo,
    TaskPriority.Medium
  );

  it("should create a task with the correct initial values", () => {
    expect(task.getId()).toBe("task-1");
    expect(task.getTitle()).toBe("Implement unit tests");
    expect(task.getDescription()).toBe(
      "Implement unit tests for the Task entity"
    );
    expect(task.getStatus()).toBe(taskStatusToDo);
    expect(task.getPriority()).toBe(TaskPriority.Medium);
    expect(task.getAssigneeId()).toBeNull();
    expect(task.getProjectId()).toBe("project-1");
  });

  it("should allow updating the status of the task", () => {
    task.updateStatus(taskStatusInProgress);
    expect(task.getStatus()).toBe(taskStatusInProgress);

    task.updateStatus(taskStatusDone);
    expect(task.getStatus()).toBe(taskStatusDone);
  });

  it("should allow assigning and unassigning a user to the task", () => {
    const userId = "user-123";
    task.assignToUser(userId);
    expect(task.getAssigneeId()).toBe(userId);

    task.unassignUser();
    expect(task.getAssigneeId()).toBeNull();
  });

  it("should allow updating the priority of the task", () => {
    task.updatePriority(TaskPriority.High);
    expect(task.getPriority()).toBe(TaskPriority.High);
  });

  // ... mais testes conforme necessário
});
