import { INamedPerson } from './NamedPerson';

export interface IClient extends INamedPerson {
  company?: string;
}