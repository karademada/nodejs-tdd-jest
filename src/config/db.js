import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async function connectDBCallback() {
  mongoose.Promise = Promise;

  mongoose.connection.on("connected", () => {
    console.log("MongoDB Connection Established");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("MongoDB Connection Reestablished");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Connection Disconnected");
  });

  mongoose.connection.on("close", () => {
    console.log("MongoDB Connection Closed");
  });

  mongoose.connection.on("error", (error) => {
    console.log(`MongoDB ERROR: ${error}`);

    process.exit(1);
  });

  mongoose.set("debug", process.env.MONGO_DEBUG);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
