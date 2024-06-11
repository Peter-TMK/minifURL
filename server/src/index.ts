import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import shortUrl from "./routes/shortlurl.route";
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/", shortUrl);

app.listen(PORT, () => {
  console.log(`Server runnning at http://localhost:${PORT}`);
});
