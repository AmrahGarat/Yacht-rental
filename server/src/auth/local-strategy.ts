import passport from "passport";
import { Strategy } from "passport-local";
import User from "../mongoose/schemas/user";
import { comparePasswords } from "../utils/bcrypt";
import { IUser } from "../types/user";
import { v4 as uuidv4 } from "uuid";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id).select(
    "-resetPasswordToken -resetPasswordTokenExpires"
  );
  if (!user) {
    return done(new Error("User not found"));
  }
  const userObj: IUser = user.toObject();
  delete userObj.password;
  // delete userObj.__v;
  done(null, userObj);
});

console.log(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_SECRET);
console.log(process.env.GOOGLE_CALLBACK);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK,
      passReqToCallback: true,
    },
    async (_req, _accessToken, _refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails?.[0].value });

        if (!user) {
          user = new User({
            name: profile.displayName.split(" ")[0],
            surname: profile.displayName.split(" ")[1] || "",
            email: profile.emails?.[0].value,
            password: uuidv4(), // No password for OAuth users
          });
          await user.save();
        }

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async function (email, password, done) {
      try {
        const user = await User.findOne({
          email,
        }).select("-resetPasswordToken -resetPasswordTokenExpires");
        if (!user || !comparePasswords(password, user.password)) {
          return done(null, false, {
            message: "Invalid email or password",
          });
        }
        if (user.isBlocked) {
          return done(null, false, {
            message: "User is blocked",
          });
        }
        const userObj: IUser = user.toObject();
        delete userObj.password;
        // delete userObj.__v;
        done(null, userObj);
      } catch (error: any) {
        done(null, false, {
          message: error.message,
        });
      }
    }
  )
);
