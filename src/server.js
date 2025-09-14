import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import authRoute from "./routes/auth.route.js";
import bodyParser from "body-parser";
import taskRoute from "./routes/task.route.js";
import FileStore from "session-file-store";

const PORT = process.env.PORT || 8080;

const app = express();
const filestore = FileStore(session);

//global middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    store: new filestore(),
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000 * 7,
    },
  })
);


//route middlewares
app.use("/api/auth", authRoute);
app.use("/api/tasks" , taskRoute);

//home route
app.get("/", (req, res) => {
  res.status(200).send("Task Manager API Home route");
});

app.listen(PORT, () => {
  console.log(`Server live at ${PORT}`);
});
