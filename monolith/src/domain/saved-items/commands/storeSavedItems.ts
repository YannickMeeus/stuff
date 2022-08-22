// I'm going to assume we'll want to store multiples to start with

import { SavedItem } from "../models";


export type StoreSavedItems = (toStore: SavedItem[]) => Promise<void>;
