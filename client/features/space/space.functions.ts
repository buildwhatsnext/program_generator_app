import { Space } from "../../../shared/types/Space";

export function hydrateSpaceState<T extends Space>(dehydratedState: string[]) {
  console.log('Hydrating space data...')
  const enclosed: T[] = dehydratedState?.map(space => {
    const hydrated: T = JSON.parse(space);
    return hydrated;
  });

  console.log('Hydrated!')

  return enclosed;
}

export function dehydrateSpaceData<T extends Space>(elements: T[]) {
  console.log('Serializing space data...')
  const serialized = elements?.map(space => {
    const reduced = JSON.stringify(space);
    return reduced;
  })
  console.log('Serialized!')

  return serialized;
}