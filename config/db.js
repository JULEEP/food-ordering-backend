import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose
    .connect(process.env.MONGO_URI, {
    })
    .then((data) => {
      console.log(`servers is connected with server: ${data.connection.host}`);
    });
}