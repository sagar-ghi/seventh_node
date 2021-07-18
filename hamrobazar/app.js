import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import config from "config";

import userRoute from "./api/user/router.js";

const app = express();

//client trust
//mongoose
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());

console.log("CONFIG:", config.get("mail.normalUser.user"));

console.log(process.env.NODE_ENV);
//
// console.log("Sendgrid APi key",process.env.SENDGRID_API_KEY)
// console.log("Test APi key",process.env.TEST_KEY)

// app.post('/users/create', async (req, res) => {
//     console.log(req)
// })

// app.put('/users/update', async (req, res) => {
//     console.log(req)
// })

app.use("/users", userRoute);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res
    .status(err.status || 500)
    .send("Something wen't wrong on server.Please try agin later");
});

export default app;
