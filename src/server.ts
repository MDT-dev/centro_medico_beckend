import "dotenv/config";
console.log("DATABASE_URL:", process.env.DATABASE_URL);
import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { swaggerDocs } from "./config/swagger";
// import { ensureAdmin } from "./utils/ensureAdmin";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";
import path from "path";

const app = express();

// Middleware para CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mwanganza.vercel.app"," http://192.168.0.15:3000"], // domínio do Next.js
    credentials: true, // 🔥 necessário para cookies/JWT no navegador
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(routes);
// Servir a pasta uploads publicamente
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Logs HTTP no console
// ou formato customizado
app.use(morgan(":method :url :status :response-time ms"));

// middleware de erros
app.use(errorHandler);
const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, async () => {
  // await ensureAdmin(); // cria admin se não existir
  console.log(`🚀 Server is running on port ${PORT}`);
  swaggerDocs(app, PORT);
});
