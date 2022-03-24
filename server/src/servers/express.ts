import express from 'express'

const app = express()

app.get('/api', (req, res) => {
  res.send('Hello world')
})

export default app
