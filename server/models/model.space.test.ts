import Space from "./model.space";

describe("A Space", () => {

  it("should be able to create itself", async () => {
    const result = new Space();

    expect(result).not.toBeNull();
    expect(result.id).not.toBeNull();
    expect(result.name).not.toBeNull();
    expect(result.seats).not.toBeNull();
  });

  it("should be able to update a Space's properties", async () => {
    const spaceA = new Space();
    const spaceB = { ...spaceA };

    spaceA.seats = 10;
    spaceA.area = 150;
    spaceB.seats = 15;
    spaceB.area = 100;

    spaceA.updateData(spaceB);

    expect(spaceA.seats).toBe(15);
    expect(spaceA.area).toBe(100);
  });

  it("should not be able to update a Space with a completely different space", async () => {
    const spaceA = new Space();
    const spaceB = new Space();

    spaceA.seats = 10;
    spaceA.area = 150;
    spaceB.seats = 15;
    spaceB.area = 100;

    const update = () => {
      spaceA.updateData(spaceB);
    }

    expect(update).toThrowError();
  });

  it('should be able to update with Space-Like objects without adding other properties', () => {
    const spaceA = new Space();
    const spaceB = { ...spaceA};
    const newPropName = 'newProp';
    spaceB[newPropName] = 'someNewProp';

    spaceA.seats = 10;
    spaceA.area = 150;
    spaceB.seats = 15;
    spaceB.area = 100;

    spaceA.updateData(spaceB);

    const propA = Object.keys(spaceA);
    const propB = Object.keys(spaceB);

    expect(spaceA.seats).toBe(15);
    expect(spaceA.area).toBe(100);
    expect(propB).toContain(newPropName);
    expect(propA).not.toContain(newPropName);
  })
});