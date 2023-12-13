import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: [3, "Username at-least have 3 characters"],
    },
    email: {
      type: String,
      validate: {
        validator: function (mail) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail);
        },
        message: (props) => `${props.value} is not a valid Email-id!`,
      },
      required: [true, "User Email is required"],
    },
    gender: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
