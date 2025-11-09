import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // tu contraseña MySQL
  database: "ecommerce_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ Conectado a MySQL");
});

export default db;
