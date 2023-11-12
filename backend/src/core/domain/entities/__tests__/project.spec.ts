// /backend/src/core/domain/entities/__tests__/project.spec.ts

import Project, { ProjectStatus } from "../project";

describe("Project", () => {
  let project: Project;

  // Roda antes de cada teste
  beforeEach(() => {
    project = new Project("1", "SprintVision", "Project Management Tool");
  });

  it("should create a project with the correct initial values", () => {
    expect(project.getId()).toBe("1");
    expect(project.getName()).toBe("SprintVision");
    expect(project.getDescription()).toBe("Project Management Tool");
    expect(project.getStatus()).toBe(ProjectStatus.Active);
    expect(project.getMembers()).toEqual([]);
    expect(project.getCreatedAt()).toBeInstanceOf(Date);
    expect(project.getUpdatedAt()).toBeInstanceOf(Date);
  });

  it("should allow adding a member to the project", () => {
    const userId = "user1";
    project.addMember(userId);
    expect(project.getMembers()).toContain(userId);
  });

  it("should not add a member twice", () => {
    const userId = "user1";
    project.addMember(userId);
    project.addMember(userId);
    expect(project.getMembers()).toEqual([userId]);
  });

  it("should allow removing a member from the project", () => {
    const userId = "user1";
    project.addMember(userId);
    project.removeMember(userId);
    expect(project.getMembers()).not.toContain(userId);
  });

  it("should update the project status", () => {
    project.updateStatus(ProjectStatus.OnHold);
    expect(project.getStatus()).toBe(ProjectStatus.OnHold);
  });

  // ... mais testes conforme necessário
});
