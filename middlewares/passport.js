const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { findOneById } = require("../services/user");

passport.use(
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (payload, done) {
      const { id } = payload;
    
      const user = await findOneById(id);

      if (!user) {
        return done({ message: "Usuario inexistente" });
      }
      console.error(user.id);
      done(null, user);
    }
  )
);

module.exports = passport.authenticate("jwt", { session: false });
