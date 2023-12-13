import mongoose from "mongoose";
import Employee from "./Employee.js";

const proofSchema = new mongoose.Schema(
  {
    EmployeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Employee,
      required: true,
    },
    documentName: String,
    category: String,
  },
  { timestamps: true }
);

const EmpProofs = mongoose.model("EmpProofs", proofSchema);
export default EmpProofs;
