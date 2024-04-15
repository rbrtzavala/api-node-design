import express from 'express'
import morgan from 'morgan'

import router from './router'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  console.log('hello from express')
  res.status(200)
  res.json({message: 'howdy!'})
})

app.use('/api', router)

export default app;