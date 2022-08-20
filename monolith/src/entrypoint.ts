// So apparently fly.io has an issue when smashing their internal DNS server to pulp...
//  In order to sidestep absolutely breaking their *free* service I am taking advantage of..
//  I'll be monkey-patching node's dns module by wrapping a cache around it.
//  That's right... I am adding a naive cache around DNS, what could possibly go wrong?

// Everything

// Everything could go wrong

// eslint-disable-next-line @typescript-eslint/no-var-requires

import { randomUUID } from "crypto";
import { config } from "dotenv";

(async () => {
  try {
    if (process.env.NODE_ENV !== "production") {
      const configurationLoadingResult = config();
      if (configurationLoadingResult.error) {
        throw configurationLoadingResult.error;
      }
      console.log("---- DEV MODE ----");
      console.log("---- Configuration Loaded ----");
      console.log(configurationLoadingResult.parsed);
      console.log("------------------------------");
    }

    const serverPort = process.env.PORT || 3000;
    const apiKey = process.env.API_KEY || randomUUID();


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