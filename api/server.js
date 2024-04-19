require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions.js')
const connectDB = require('./config/dbConn')
const PORT = process.env.PORT || 3500 
const mongoose = require('mongoose')


//Establish connection to the MongoDB
connectDB()


//Uncomment below if you require logs for the app, do configure which logs will be recorded and not 
app.use(logger)


//Using the CORS functionality for security purposes to block out any requests from unknown sources
app.use(cors(corsOptions))


//Allows the app to process JSON Data
app.use(express.json())



app.use(cookieParser())


 //Tells the server to get Static files from the public folder 
app.use('/',express.static(path.join(__dirname,'public')))


 //Defines the Root page of the server
app.use('/',require('./routes/root'))

app.use('/users',require('./routes/userRoutes'))

app.use('/payments',require('./routes/paymentRoutes'))


 //Defines Error 404 page
app.all('*',(req,res)=>{ 
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    } else if (req.accepts('json')){
        res.json({message: '404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
    
})


//Overrides the default Error handler in order to log Errors
app.use(errorHandler)



//Open PORT for requests once the DB connection is established or log error if the connection is failed
mongoose.connection.once('open',() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server Running on ${PORT} `))
})


mongoose.connection.on('error', err => {
    console.log(err)
    console.log('test2')
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,'mongoErrLog.log')
    
})

