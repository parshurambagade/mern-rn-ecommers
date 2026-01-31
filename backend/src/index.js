import express from "express";
import { ENV } from "./config/env.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Welcome to the ecommers app!" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log("Server is running on the port: ", ENV.PORT);
});
