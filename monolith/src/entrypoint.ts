import { randomUUID } from "crypto";

(async () => {
  try {

    const serverPort = process.env.PORT || 3000;

    // console.log("---- Workers ----");

    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const retrieveInventoryWorker = makeRetrieveInventoryWorker({
    //   database: postgres,
    //   kortteliKauppaBaseUrl: "http://188.166.11.123",
    //   schedule: CronTime.every(30).minutes(),
    // });

    // const importSnapshotWorker = makeImportSnapshotWorker({
    //   database: postgres,
    //   schedule: CronTime.every(1).minutes(),
    // });

    // await retrieveInventoryWorker.start();
    // await importSnapshotWorker.start();

    // httpApi.listen(serverPort, () => {
    //   console.log(listEndpoints(httpApi));
    //   console.log(`Server is listening on port ${serverPort}`);
    // });
  } catch (e) {
    console.error(e);
    throw e;
  }
})();
