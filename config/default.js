require('dotenv').config()

module.exports = {
    pathStudentEndpoint: process.env.PATH_STUDENT_ENDPOINT,
    roomEndpoint: process.env.ROOM_ENDPOINT,
    roomInsertPath : process.env.ROOM_INSERT_PATH,
    roomUpdatePath : process.env.ROOM_UPDATE_PATH,
    dnsSentryUrl: process.env.DSN_SENTRY_URL,
    ports: process.env.PORT,
    mongoDbAdminUrl: process.env.MONGO_URL,
    mongoDbAdmin: process.env.MONGO_DB,
    mongoDbAdminCol: process.env.MONGO_COL,
}
