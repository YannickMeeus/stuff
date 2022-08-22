import { SavedItem } from "../models";

export type GetAllSavedItemForGivenPlatform = () => Promise<SavedItem[]>;
