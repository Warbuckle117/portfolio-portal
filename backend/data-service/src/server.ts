import express, {Request, Response} from "express";
import cors from "cors";
const app = express()
const port = process.env.PORT || 3102;
import {User} from "./Helpers/Types";

app.use(cors())

const testUsers: User[] = [{username: "Mark"}, {username: "Narcy"}, {username: "Guest"}]

app.get("/", (req, res) => {
    res.json("This is the root of the server.")
})

app.get("/users", (req: Request, res: Response) => {
    res.json({testUsers})
})

app.listen(port, () => { console.log(`server running on port localhost:${port}`)})

