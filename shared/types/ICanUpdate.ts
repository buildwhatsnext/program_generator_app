/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ICanUpdate {

}

export interface IUpdateable<T extends ICanUpdate> {
  updateData:(element: T) => void;
}