import express from "express";
import bcrypt from "bcrypt";
import db from "../db.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, result) => {
    if (err) return res.status(500).json({ error: "Error interno" });
    if (result.length === 0) return res.status(401).json({ error: "Usuario no encontrado" });

    const user = result[0];
    const valid = password === user.password; // Simplificado, luego se cambia a bcrypt.compare()

    if (!valid) return res.status(401).json({ error: "Contraseña incorrecta" });

    res.json({ success: true, message: "Login exitoso", user: user.username });
  });
});

export default router;
