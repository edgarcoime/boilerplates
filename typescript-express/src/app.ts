// Dependencies
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// local imports
import { errorHandler, notFound } from "./middlewares";
import api from "./api";

const app = express();

// Library middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "Hello world api! :)"
  });
});

app.use("/api/v1", api);

// Custom Middleware
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
})