const express = require("express");
const next = require("next");
const cors = require("cors");

const port = 3300;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Middleware para manejar solicitudes POST
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  // Configurar CORS
  server.use(cors());

  app.post('/auth', (req, res) => {
    res.status(200).json({ message: 'Login exitoso' });
  });
  // Manejar otras rutas con Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
