const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/auth/logout', (req, res) => {
    req.logout();

    res.send({ msg: 'logout successful' });
  });

  app.get('/auth/currentUser', (req, res) => res.send(req.user));
};
