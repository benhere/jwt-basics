require('dotenv').config()
require('express-async-errors')

const express = require('express')
const server = express();

const loginRouter = require('./routes/loginRoute')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
server.use(express.static('./public'))
server.use(express.json())

server.use('/api/v1', loginRouter)

server.use(notFoundMiddleware);
server.use(errorHandlerMiddleware);

const portNo = process.env.PORT || 3131

const start = async () => {
    try {
        server.listen(portNo, () => {
            console.log(`Server running on port: ${portNo}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();