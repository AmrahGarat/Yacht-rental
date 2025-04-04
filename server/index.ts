import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import { createServer } from "node:http";

import reservationRoutes from "./src/routes/reservation";
import locationRoutes from "./src/routes/location";
import categoryRoutes from "./src/routes/category";
import authRoutes from "./src/routes/auth";
import rentRoutes from "./src/routes/rent";
import reviewRoutes from "./src/routes/review";
import conversationRoutes from "./src/routes/conversation";
import favoriteRoutes from "./src/routes/favorite";
import dashboardRoutes from "./src/routes/dashboard";

import { connectSocket } from "./src/socket";
import "./src/auth/local-strategy";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);
connectSocket(server);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/auth", authRoutes);

app.use("/category", categoryRoutes);
app.use("/location", locationRoutes);
app.use("/rent", rentRoutes);
app.use("/reservation", reservationRoutes);
app.use("/review", reviewRoutes);
app.use("/conversation", conversationRoutes);
app.use("/favorite", favoriteRoutes);
app.use("/dashboard", dashboardRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function connecToDb() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.is1uz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      connectTimeoutMS: 30000, // 30 sec
      socketTimeoutMS: 45000, // 45 sec
    }
  );
}
connecToDb()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));
