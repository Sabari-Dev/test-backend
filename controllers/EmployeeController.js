import Employee from "../models/Employee.js";

//create new employee
export const createEmployee = (req, res) => {
  new Employee(req.body)
    .save()
    .then((employee) => {
      res.status(201).json({
        success: true,
        message: "Employee added",
        data: employee,
      });
    })
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//get all employee
export const getAllEmployee = (req, res) => {
  Employee.find()
    .then((employees) =>
      res.status(200).json({ success: true, employees: employees })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//get single employee
export const getEmployee = (req, res) => {
  const { id } = req.params;
  Employee.findById(id)
    .then((employee) => {
      res.status(201).json({
        success: true,
        message: "search success!!",
        employee: employee,
      });
    })
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//delete employee
export const deleteEmployee = (req, res) => {
  const { id } = req.params;
  Employee.findByIdAndDelete(id)
    .then((employee) =>
      res
        .status(201)
        .json({ success: true, message: "employee details deleted" })
    )
    .then((err) => res.status(400).json({ success: false, message: err }));
};
