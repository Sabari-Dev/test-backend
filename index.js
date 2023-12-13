import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employeeRoutes.js";
import employeeProofs from "./routes/employeeProofRoute.js";

dotenv.config();
//get a values from env folder
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

//import the routers
app.use("/api/employees", employeeRoutes);
app.use("/api/employeeProofs", employeeProofs);

app.get("/", (req, res) => {
  res.status(200).send("<h3>Backend added...</h3>");
});

mongoose
  .connect(CONNECTION_URL)
  .then(
    app.listen(PORT, () => {
      console.log("Server connected");
    })
  )
  .catch((error) => console.log(error));
