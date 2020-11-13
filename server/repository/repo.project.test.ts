import Project from "../models/model.project";
import ProjectRepo from "./repo.project";

describe("Project Repository", () => {
  beforeAll(() => {
    ProjectRepo.dbType = 'TEST';
  });

  afterEach( async () => {
    await ProjectRepo.deleteAllProjects();
  })

  it("should be able to create and get a project", async () => {
    const project = await ProjectRepo.createNewProject();
    const result = await ProjectRepo.getProjectById(project.id);

    expect(result).not.toBeNull();
    expect(project.id).toEqual(result.id);
  });

  it("should be able to update a project", async () => {
    const original = await ProjectRepo.createNewProject();
    const newName = 'Some New Name';
    const newProject = {...original};

    newProject.hasLab = true;
    newProject.hasBroadcast = true;
    newProject.name = newName;

    await ProjectRepo.updateProject(newProject)
    const result = await ProjectRepo.getProjectById(original.id);

    expect(result).not.toBeNull();
    expect(result.id).toEqual(original.id);
    expect(result.hasLab).toBeTruthy();
    expect(result.hasBroadcast).toBeTruthy();
    expect(result.name).toEqual(newName);
  });
});