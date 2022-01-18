import { logger } from 'module-core';

class LoggerConsumer {
    logMsg() {
        logger.log('logging from the module');
    }

    logInstances() {
        logger.log(`number of instance ${logger.getInstanceNumbers()}`);
    }
}

const logConsumer = new LoggerConsumer();
export default logConsumer;
