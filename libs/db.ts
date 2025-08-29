import { connect } from "mongoose";
import { seedServices } from '@/script/seed';
const connectDB = async (): Promise<void> => {
  try {
    console.log(process.env.ATLAS_URI)
    if (!process.env.ATLAS_URI) {
      throw new Error("MongoDB connection string (ATLAS_URI) is missing in .env");
    }

    const conn = await connect(process.env.ATLAS_URI, {
      dbName: process.env.DB_NAME,});
await seedServices();
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
