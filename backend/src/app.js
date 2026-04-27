
import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

// Initialize Socket.IO
connectToSocket(server);

// ✅ Use environment PORT (important for Render)
const PORT = process.env.PORT || 8000;

// ✅ Middleware
app.use(cors({
  origin: "*", // later replace with your frontend URL
  credentials: true
}));

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// ✅ Routes
app.use("/api/v1/users", userRoutes);

// ✅ Start server with DB connection
const start = async () => {
  try {
    // 🔒 Use env variable (NOT hardcoded)
    const connectionDb = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

start();