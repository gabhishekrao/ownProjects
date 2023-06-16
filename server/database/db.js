import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@abhiscluster.ms6f7ef.mongodb.net/todoList`

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });


    mongoose.connection.on('connected', () => {
        console.log('Database is connected successfully.');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected.');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with database.', error.message);
    })

}

export default Connection;