import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js"
const app= express();

const corsOptions = {
  origin: 'http://localhost:5173', // Exact origin match
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials if needed
  optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800!");
});