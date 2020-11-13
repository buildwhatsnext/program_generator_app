import {BuildingModel as Building} from "./model.building";

describe("A Building", () => {

  it("should be able to create itself", async () => {
    const result = new Building();

    expect(result).not.toBeNull();
    expect(result.id).not.toBeNull();
  });

  // it(",on creation, should have the same date for modified & created", async () => {
  //   const result = new Building();

  //   expect(result.dateCreated).toEqual(result.dateModified);
  // });

  it("should be able to update a Building's properties", async () => {
    const elementA = new Building();
    const elementB = { ...elementA };

    elementA.targetAreaPerWorkseat = 500;
    elementA.targetFactorLoss = 15;
    elementB.targetAreaPerWorkseat = 700;
    elementB.targetFactorLoss = 18;

    elementA.updateElement(elementB);

    expect(elementB.targetAreaPerWorkseat).toEqual(700)
    expect(elementB.targetFactorLoss).toEqual(18);
  });

  it("should not be able to update a Building with a completely different element", async () => {
    const elementA = new Building();
    const elementB = new Building();

    const update = () => {
      elementA.updateElement(elementB);
    }

    expect(update).toThrowError();
  });

  it('should be able to update with Building-Like objects without adding other properties', () => {
    const elementA = new Building();
    const elementB = { ...elementA};
    const newPropName = 'newProp';
    elementB[newPropName] = 'someNewProp';

    elementA.targetAreaPerWorkseat = 500;
    elementA.targetFactorLoss = 15;
    elementB.targetAreaPerWorkseat = 700;
    elementB.targetFactorLoss = 18;

    elementA.updateElement(elementB);

    const propA = Object.keys(elementA);
    const propB = Object.keys(elementB);

    expect(elementB.targetAreaPerWorkseat).toEqual(700)
    expect(elementB.targetFactorLoss).toEqual(18);
    expect(propB).toContain(newPropName);
    expect(propA).not.toContain(newPropName);
  })
});