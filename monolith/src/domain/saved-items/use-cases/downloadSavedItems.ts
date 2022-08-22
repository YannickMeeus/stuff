import { StoreSavedItems } from "../commands";
import { GetAllSavedItemForGivenPlatform } from "../queries";

type Params = {
  getAllSavedItemForGivenPlatform: GetAllSavedItemForGivenPlatform;
  storeSavedItems: StoreSavedItems;
};

export const makeDownloadSavedItems = ({ getAllSavedItemForGivenPlatform, storeSavedItems }: Params) => async ():Promise<void> => {

    const savedItems = await getAllSavedItemForGivenPlatform()
    await storeSavedItems(savedItems)
}
