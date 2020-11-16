import { Space } from "./Space";

export default class SpaceFactory {
  static create<T extends Space>(type: new () => T): T {
    // eslint-disable-next-line new-cap
    const obj = new type();

    return obj;
  }
}