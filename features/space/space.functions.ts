import { Space } from "../../components/spaces/Space";

export function hydrateSpaceState<T extends Space>(dehydratedState: string[]) {
  const enclosed: T[] = dehydratedState.map(space => {
    const hydrated: T = JSON.parse(space);
    return hydrated;
  });
  
  return enclosed;
}