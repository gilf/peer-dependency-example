import { logger } from "module-core";
import { logConsumer } from "module";

console.log('start logging');
logger.log('log the first message');
logConsumer.logMsg();
logConsumer.logInstances();
console.log(`logger instances through logger API: ${logger.getInstanceNumbers()}`);


