import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import path from 'path'
const { combine, timestamp, label, printf } = format

// formating the logger according to mine,
const logFormat = printf(({ label, timeStamp: timestamp, message, level }) => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${date.toDateString()}, -  , ${hours}, - , ${minute}, - , ${second} [${label} ${level}] `
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'informate given about' }),
    timestamp(),
    logFormat,
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'university-%DATE%-sucess.log',
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
