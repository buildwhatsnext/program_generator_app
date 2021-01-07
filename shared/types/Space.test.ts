import { EnclosedOfficeSpace } from "./Space";
import SpaceType from "./SpaceType";

describe('A Space', () => {

  it('should create itself with properties passed to it', () => {
    const name = 'Private Office';
    const area = 120;
    const seats = 1;
    
    const space = new EnclosedOfficeSpace({ name, area, seats });

    expect(space.name).toEqual(name);
    expect(space.area).toEqual(area);
    expect(space.seats).toEqual(seats);
    expect(space.type).toEqual(SpaceType.Enclosed);
  })
});