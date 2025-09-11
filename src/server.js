import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import authRoute from "./routes/auth.route.js";

const PORT = process.env.PORT || 8080;

const app = express();

//global middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);


//route middlewares
app.use("/api/auth", authRoute);

//home route
app.get("/", (req, res) => {
  res.status(200).send("Task Manager API Home route");
});

app.listen(PORT, () => {
  console.log(`Server live at ${PORT}`);
});
