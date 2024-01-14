require('dotenv').config()
import express from 'express'
import config from 'config'
import connectToDb from './utils/connectToDb'
import log from './utils/logger'
import router from './routes'
import cors from 'cors'


const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const app = express()
app.use(express.json())

app.use(cors(corsOptions))

app.use(router)

const port = config.get('port')

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`)

  connectToDb();
}) 