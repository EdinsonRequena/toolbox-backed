import express, { json } from "express";
import cors from "cors";
import fileRoutes from "./routes/fileRoutes.js";

const app = express();

app.use(cors());

app.use(json());
app.use("/api", fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
