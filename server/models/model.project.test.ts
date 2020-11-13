import Project from "./model.project";

describe("Project Model", () => {

  it("should be able to create a project", async () => {
    const result = new Project();

    expect(result).not.toBeNull();
    expect(result.id).not.toBeNull();
    expect(result.dateCreated).not.toBeNull();
    expect(result.dateModified).not.toBeNull();
    expect(result.name).not.toBeNull();
  });

  it("should be able to update a Project's properties", async () => {
    const result = new Project();

    expect(0).toBeNull()
  });
});