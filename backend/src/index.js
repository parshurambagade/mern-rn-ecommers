import express from "express";

const app = express();

const PORT = 3000;

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Welcome to the ecommers app!" });
});

app.listen(PORT, () => {
  console.log("Server is running on the port: ", PORT);
});
