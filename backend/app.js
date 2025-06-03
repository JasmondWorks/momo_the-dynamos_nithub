import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
// import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false })); // helps to process data sent via HTML forms in a simple format

app.use(cookieParser()); // reads cookies from incoming requests so that our app can store user data

app.get('/', function (req, res) {
    res.json({ data: "Home page" })
})

app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (_, res) => {
    res.send("Welcome to the Momo API!");
});

app.listen(PORT, () => {
    console.log(`Momo API is running on http://localhost:${PORT}`);

    connectToDatabase();
});

export default app;
