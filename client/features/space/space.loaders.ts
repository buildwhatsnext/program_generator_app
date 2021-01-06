import { EnclosedOfficeSpace } from "../../../shared/types/Space";

export function loadEnclosedSpaces() {
  const priv = new EnclosedOfficeSpace();
  priv.name = 'Private Office';
  priv.area = 120
  priv.seats = 5;

  const shared = new EnclosedOfficeSpace();
  shared.name = 'Shared Office';
  shared.area = 240;

  const executive = new EnclosedOfficeSpace();
  executive.name = 'Executive Office';
  executive.area = 240;

  return [priv, shared, executive];
}