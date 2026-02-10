import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 DATABASE CONNECTION
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jobportal",
  password: "admin123",
  port: 5432,
});
