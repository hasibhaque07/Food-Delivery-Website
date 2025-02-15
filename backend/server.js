import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import cartRouter from "./routes/cartRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";

// import dotenv from "dotenv";
// dotenv.config();


// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/images", express.static("uploads"));
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter); 
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API is working");
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})


