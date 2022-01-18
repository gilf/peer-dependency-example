class Logger {
    static instances = 0;

    constructor() {
        Logger.instances += 1;
    }

    log(msg) {
        console.log(msg);
    }

    getInstanceNumbers() {
        return Logger.instances;
    }
}

const logger = new Logger();
export default logger;
