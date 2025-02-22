import express from "express";
import {db} from "@repo/db/prisma";
 
const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", async (req, res) => {
    const {username, password} = req.body;
    
    const user = await db.user.create({
        data: {
            name: username,
            email: username,
            password: password
        }
    })

    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});