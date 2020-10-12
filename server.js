const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const routes = require('./routes')
const next1 = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(next1)

const app = express();
app.use(handler);


next1.prepare()
  .then(() => {
 
    

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })

  })