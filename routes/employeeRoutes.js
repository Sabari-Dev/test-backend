import express from "express";
import {
  getAllEmployee,
  getEmployee,
  deleteEmployee,
  createEmployee,
} from "../controllers/EmployeeController.js";
const router = express.Router();

//add new employee
router.post("/add", createEmployee);

//get all employees
router.get("/", getAllEmployee);

//get single employee
router.get("/:id", getEmployee);

//delete employee
router.delete("/:id", deleteEmployee);

export default router;
