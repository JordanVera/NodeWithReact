const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { mongoURI, cookieKey } = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI, (_) =>
  console.log(colors.blue('MongoDB Connected'))
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
