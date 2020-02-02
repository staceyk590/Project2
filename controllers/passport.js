// Login page
app.get('/login', (req, res) => res.send('Login'));

// Register page
app.get('/register', (req, res) => res.send('Register'));

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });


  app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));


                                   