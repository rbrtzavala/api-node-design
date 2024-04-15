import express from 'express'
import morgan from 'morgan'

import { protect } from './modules/auth'
import router from './router'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extend: true}))

/**
 * Can use as many middleware as need separated by comma or as an array
 * app.get("/todo/:id", myMiddleware, my2ndMiddleware, handler);
 */

app.get('/', (req, res) => {
  console.log('hello from express')
  res.status(200)
  res.json({message: 'howdy!'})
})

app.use('/api', protect, router)

export default app;