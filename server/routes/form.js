import express from 'express'
import Form from '../models/Form.js';

let router=express.Router()

// POST - Create the form
router.post("/", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    const savedInfo = await newForm.save();
    res.status(201).json(savedInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - Get all forms
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;