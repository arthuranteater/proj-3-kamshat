const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy(
      {
    usernameField: "email"
  },
    function(email, password, done) {
        console.log('called local strategy')
        db.User.findOne({
            email: email
        }, function(err, user) {
            if (err) {
                console.log("something went wrong\n", err);
                return done(err)
            }
            if (!user) {
                console.log("No user found");
                return done(null, false, {message: "No user found"});
            }
            if (!user.validPassword(password, user.password)) {
                console.log("wrong password");
                return done(null, false, {message: "incorrect password"});
            } else {
                console.log("passed login")
                return done(null, user)
            }
        });
    }
  ));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
        done(err, user);
    });
});


module.exports = passport;