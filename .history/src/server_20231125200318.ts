import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    logger.info('database has been connected')

    app.listen(config.port, () => {
      logger.info(`app listening on port ${config.port}`)
    })
  } catch (error) {
      errorLogger.error('database dont want to connect ', error)
  }
}
