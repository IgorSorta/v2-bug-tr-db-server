const winston = require('winston');
const config = {
    levels: {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
        verbose: 5,
        silly: 6,
        custom: 7
    },
    colors: {
        error: 'red',
        debug: 'blue',
        warn: 'yellow',
        data: 'grey',
        info: 'green',
        verbose: 'cyan',
        silly: 'magenta',
        custom: 'yellow'
    }
};

winston.addColors(config.colors);

const logger = winston.createLogger({
    levels: config.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //winston.format.simple(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
        new winston.transports.Console()
    ],
    level: 'custom'
});

function loggerExp(req, res, next) {
    const {
        protocol,
        ip,
        method
    } = req;
    const date = Date.now();
    logger.info(`Request:\n protocol -- ${protocol}\n ip -- ${ip}\n method -- ${method}`);
    next();
}

module.exports = {
    loggerExp
};