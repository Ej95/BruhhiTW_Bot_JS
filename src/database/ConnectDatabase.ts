import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI as string);
}
