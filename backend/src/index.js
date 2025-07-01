import dotenv from 'dotenv';
dotenv.config();
//hi
import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors';
import path from 'path';

import { connectDB } from "./lib/db.js";
import authRouters from "./routers/auth.route.js";
import messageRouters from "./routers/message.route.js"
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT;
const __dirname = path.resolve()

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: "https://chhaty.vercel.app",
        credentials: true,
    }));

app.use("/api/auth", authRouters);
app.use("/api/messages", messageRouters);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'))
    });
}

server.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
});