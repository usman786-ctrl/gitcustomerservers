const bodyParser = require('body-parser');
const router = require('./server/router');
const express = require('express')
const next = require('next');
const routes = require('./routes')

const mongoose = require('mongoose');
const { modelName } = require('./server/models/user');
const app = express();
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set("useUnifiedTopology", true )

// DB Setup
mongoose.connect('mongodb://localhost/auth');



// // App Setup
// app.use(morgan('combined'));
// app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));


//


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'


const next1 = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(next1)

router(app);

app.use(handler);


next1.prepare()
  .then(() => {
 
    

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.listen(3000, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })

  })