const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {

  app.get('/api/v1', function(req, res) {
    res.json({ hi: 'there' });
  });
  app.post('/api/v1/signin', requireSignin, Authentication.signin);
  app.post('/api/v1/signup', Authentication.signup);
}
