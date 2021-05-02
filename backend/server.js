import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import roommateRoutes from './routes/roommateRoutes.js'
import  authRoutes from './routes/authRoutes.js'
import roomsRoutes from './routes/roomsRoutes.js'

import packerRoutes from './routes/packerRoutes.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors());
connectDB()

app.get('/', (req,res) => {
    res.send('API is running....')
})
app.use(express.static('images'));
app.use('/api/roommates', roommateRoutes)
app.use('/api/houses', roomsRoutes)

app.use('/api/packer',packerRoutes)
app.use(authRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold))
)

