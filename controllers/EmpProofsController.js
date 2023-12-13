import EmpProofs from "../models/EmpProofs.js";

//add employee Proof
export const addNewProof = (req, res) => {
  new EmpProofs(req.body)
    .save()
    .then((proofs) => {
      res.status(201).json({
        message: "Proof added",
        data: proofs,
      });
    })
    .catch((err) => res.status(400).json({ message: err }));
};

//get all proofs the employee
export const getProofs = async (req, res) => {
  // const { id } = req.params;
  EmpProofs.find()
    .then((proof) => {
      res.status(201).json({ success: true, data: proof });
    })
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//delete particuler proof
export const deleteProof = (req, res) => {
  const { id } = req.params;
  EmpProofs.findByIdAndDelete(id)
    .then((proof) =>
      res.status(201).json({ success: true, message: "proof details deleted" })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
