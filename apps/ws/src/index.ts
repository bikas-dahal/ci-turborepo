import { WebSocketServer } from "ws";
import {db} from "@repo/db/prisma";

const server = new WebSocketServer({
    port: 8081
})

server.on("connection", async (socket) => {
    console.log("New client connected");

    const user = await db.user.create({
        data: {
            name: "John",
            email: "john@john",
            password: "john"
        }
    })

    socket.on("message", async (message) => {
        console.log(message.toString());
    })
})