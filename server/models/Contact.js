import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    companyName: {
      type: String
    },
    message: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

let Contact= mongoose.model("Contact", contactSchema);

export default Contact