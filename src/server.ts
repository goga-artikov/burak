import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL as string, {})
  .then((data) => {
      console.log("MongoDB connected");
      const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


