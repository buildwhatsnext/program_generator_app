import { EnclosedOfficeSpace } from "../../shared/types/Space";
import Project from "../models/model.project";
import SpaceModel from "../models/model.space";
import ProjectRepo from "./repo.project";

describe("Project Repository", () => {
  let repo: ProjectRepo;
  
  beforeAll(() => {
    repo = new ProjectRepo();
    repo.dbType = 'TEST';
  });

  afterEach( async () => {
    await repo.deleteAll();
  })

  it("should be able to create and get a project", async () => {
    const project = await repo.createNew();
    const result = await repo.getById(project.id);

    expect(result).not.toBeNull();
    expect(project.id).toEqual(result.id);
  });

  it("should be able to update a project", async () => {
    const original = await repo.createNew();
    const newName = 'Some New Name';
    const newProject = {...original};

    newProject.hasLab = true;
    newProject.hasBroadcast = true;
    newProject.name = newName;

    await repo.updateData(newProject)
    const result = await repo.getById(original.id);

    expect(result).not.toBeNull();
    expect(result.id).toEqual(original.id);
    expect(result.hasLab).toBeTruthy();
    expect(result.hasBroadcast).toBeTruthy();
    expect(result.name).toEqual(newName);
  });

  it("should saves SPACES when saving itself", async () => {
    const original = await repo.createNew();
    const newName = 'Some New Name';
    const newProject = {...original};
    const space = new EnclosedOfficeSpace();
    space.name = 'Executive Office';
    space.area = 150;
    space.seats = 15;
    space.quantitySelected = 1;
    space.seatTotal = space.seats * space.quantitySelected;
    space.areaTotal = space.area * space.quantitySelected;

    newProject.hasLab = true;
    newProject.hasBroadcast = true;
    newProject.name = newName;
    newProject.spaces = [space];

    const result = await repo.updateData(newProject);

    expect(result).not.toBeNull();
    expect(result.id).toEqual(original.id);
    expect(result.hasLab).toBeTruthy();
    expect(result.hasBroadcast).toBeTruthy();
    expect(result.name).toEqual(newName);
    expect(result.spaces).not.toBeNull();
    expect(result.spaces).not.toBeUndefined();
    expect(result.spaces.length).toBeGreaterThan(0);
  });
});