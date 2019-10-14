import { Types } from "./Types";

export const updateCollections = collectionsMap => ({
  type: Types.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
