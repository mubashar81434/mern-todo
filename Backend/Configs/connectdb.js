import mongoose from "mongoose";

export const connectdb = async (DB_URL) => {
  if (mongoose.connection.readyState === 1) {
    console.log("Database already connected");
    return;
  } else {
    try {
      let dbOpt = {
        dbName: "tasksdb",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      await mongoose.connect(DB_URL, dbOpt);
      console.log(`✅ Successfully connected to ${dbOpt.dbName}`);
      return;
    } catch (error) {
      console.error("❌ Error connecting to database =>", error);
      return;
    }
  }
};
