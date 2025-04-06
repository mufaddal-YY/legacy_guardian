import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("MONGODB_URL not found");
    return;
  }
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Cluster0",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB is Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
  }
};
connectToDatabase();