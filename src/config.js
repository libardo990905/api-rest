import {config} from "dotenv";

config();

export default{
    host: process.env.HOST || "",
    database: process.env.DATABASE_NAME || "",
    userdb: process.env.DATABASE_USERNAME || "",
    password: process.env.PASSWORD || "",
    port: process.env.PORT || "",
}