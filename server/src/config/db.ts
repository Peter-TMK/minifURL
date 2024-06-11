import mongoose from "mongoose";

// mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(
      `Database connected successfully: ${connection.connection.host},${connection.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
