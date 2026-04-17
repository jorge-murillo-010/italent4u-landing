const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

// TEST ROUTE (to check if server works)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Newsletter
app.post("/api/newsletter", async (req, res) => {
  const { name, email } = req.body;

  try {
    await pool.query(
      "INSERT INTO newsletter(name, email) VALUES($1, $2)",
      [name, email]
    );

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome 🎉",
      text: `Hi ${name}, thanks for subscribing!`
    });

    res.json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving data" });
  }
});

// Contact
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
    await pool.query(
      "INSERT INTO contacts(name, email, phone, company, message) VALUES($1,$2,$3,$4,$5)",
      [name, email, phone, company, message]
    );

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Message Received",
      text: `Hi ${name}, we received your message.`
    });

    res.json({ message: "Message sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error sending message" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));