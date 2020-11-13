import Project from "../models/model.project";
import ProjectRepo from "./repo.project";

describe("Project Repository", () => {
  beforeAll(() => {
    ProjectRepo.dbType = 'TEST';
  });

  afterEach( async () => {
    await ProjectRepo.deleteAllProjects();
  })

  it("should be able to create a project", async () => {
    const project = await ProjectRepo.createNewProject();
    const result = await ProjectRepo.getProjectById(project.id);

    expect(result).not.toBeNull();
    expect(project.id).toEqual(result.id);
  });
});