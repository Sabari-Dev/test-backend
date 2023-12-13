import express from "express";
import {
  getProofs,
  deleteProof,
  addNewProof,
} from "../controllers/EmpProofsController.js";
const router = express.Router();

//add proof
router.post("/add", addNewProof);

//get proofs
router.get("/", getProofs);

//delete proof
router.delete("/:id", deleteProof);

export default router;
