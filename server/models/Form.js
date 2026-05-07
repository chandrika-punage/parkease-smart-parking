import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  city: {
    type: String,
  },
  companyName: {
    type: String,
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

let Form = mongoose.model("Form", FormSchema);

export default Form;