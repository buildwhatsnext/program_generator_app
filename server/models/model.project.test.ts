import Project from "./model.project";

describe("A Project", () => {

  it("should be able to create itself", async () => {
    const result = new Project();

    expect(result).not.toBeNull();
    expect(result.id).not.toBeNull();
    expect(result.dateCreated).not.toBeNull();
    expect(result.dateModified).not.toBeNull();
    expect(result.name).not.toBeNull();
  });

  it(",on creation, should have the same date for modified & created", async () => {
    const result = new Project();

    expect(result.dateCreated).toEqual(result.dateModified);
  });

  it("should be able to update a Project's properties", async () => {
    const projectA = new Project();
    const projectB = { ...projectA };

    projectA.hasBroadcast = false;
    projectA.hasLab = false;
    projectB.hasBroadcast = true;
    projectB.hasLab = true;

    projectA.updateProject(projectB);

    expect(projectA.hasBroadcast).toBeTruthy();
    expect(projectA.hasLab).toBeTruthy();
  });

  it("should not be able to update a Project with a completely different project", async () => {
    const projectA = new Project();
    const projectB = new Project();

    projectA.hasBroadcast = false;
    projectA.hasLab = false;
    projectB.hasBroadcast = true;
    projectB.hasLab = true;

    const update = () => {
      projectA.updateProject(projectB);
    }

    expect(update).toThrowError();
  });

  it('should be able to update with Project-Like objects without adding other properties', () => {
    const projectA = new Project();
    const projectB = { ...projectA};
    const newPropName = 'newProp';
    projectB[newPropName] = 'someNewProp';

    projectA.hasBroadcast = false;
    projectA.hasLab = false;
    projectB.hasBroadcast = true;
    projectB.hasLab = true;

    projectA.updateProject(projectB);

    const propA = Object.keys(projectA);
    const propB = Object.keys(projectB);

    expect(projectA.hasBroadcast).toBeTruthy();
    expect(projectA.hasLab).toBeTruthy();
    expect(propB).toContain(newPropName);
    expect(propA).not.toContain(newPropName);
  })
});