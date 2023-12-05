import express, {Request, Response} from "express";
import cors from "cors";
const app = express()
import {User} from "./src/Helpers/Types";

app.use(cors())

const testUsers: User[] = [{username: "Mark"}, {username: "Narcy"}, {username: "Guest"}]

app.get("/", (req, res) => {
    res.json("This is the root of the server")
})

app.get("/users", (req: Request, res: Response) => {
    res.json({testUsers})
})

app.listen(3102, () => { console.log("server running on port localhost:3102")})