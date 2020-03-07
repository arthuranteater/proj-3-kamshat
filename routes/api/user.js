const express = require("express")
const router = express()
const db = require("../../models");
const passport = require("../../config/passport");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.post("/login", passport.authenticate("local"), 
function (req, res, next) {
  console.log("sign in successful")
  res.json({
    user: req.user,
    loggedIn: true
  });
}
);

router.post("/signup", function(req, res, next) {
  console.log('called signup')
  db.User.findOne({username: req.body.username}, function(err, user) {
    if (err) {
      console.log('mongo err')
      throw err
      }
    if (user) {
      console.log("user already exists")
      return res.json("user already exists");
    }
    if (!user) {
      db.User.findOne({email: req.body.email}, function(err, useremail) {
        if (err) throw err;
        if (useremail) {
          return res.json("email is already in use") 
        }
        if (!useremail) {
          console.log('creating new user')
          let newUser = new db.User({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
          })
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save(function(err, user) {
            if (err) throw err;
            console.log(`user ${user.id} saved!`)
            res.redirect(307, "/api/users/login")
          });
        }
      })
    } 
    }) 

    })

  


router.get("/unauthorized", function(req, res, next) {
  res.json({
    error: req.flash("error"),
    message: "user not authenticated"
  });
});

router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
  res.json("User logged out successfully");
});

module.exports = router;
