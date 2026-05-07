import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST 
router.post("/", async (req, res) => {
  try {
    const { name, phone, city, companyName, message } = req.body;

    if (!name || !phone || !city || !message) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    const newContact = new Contact({
      name,
      phone,
      city,
      companyName,
      message
    });

    await newContact.save();

    res.status(201).json({ message: "Contact Form submitted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET 
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;