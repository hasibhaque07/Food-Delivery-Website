import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://hasibhaque07:%23Hh19283777@cluster0.c4r1o.mongodb.net/food-del")
    .then(() => console.log("DB connected"));
};
