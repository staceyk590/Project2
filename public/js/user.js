req.login(user, function (err) {
    if (err) { return next(err); }
    return res.redirect('/users/' + req.user.username);
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});