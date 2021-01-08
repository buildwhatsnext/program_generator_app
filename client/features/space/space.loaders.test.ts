import { EnclosedOfficeSpace } from "../../../shared/types/Space";
import SpaceType from "../../../shared/types/SpaceType";
import { preloadSpaces } from "./space.loaders";

describe('The Space Preloader', () => {

  it('should load spaces correctly', () => {
    const name = 'Private Office';
    const area = 120;
    const seats = 1;
    
    const spaces = preloadSpaces(EnclosedOfficeSpace);
    const space = spaces[0];

    expect(space.name).toEqual(name);
    expect(space.area).toEqual(area);
    expect(space.seats).toEqual(seats);
    expect(space.type).toEqual(SpaceType.Enclosed);
  })
});