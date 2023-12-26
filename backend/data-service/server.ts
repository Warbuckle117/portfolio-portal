// @ts-ignore
import express, {Request, Response} from "express";
// @ts-ignore
import cors from "cors";
const knex = require("./db/db.js");
import {getAllUsers} from "./src/routers/UserRouter";
import {getAllTools} from "./src/routers/ToolsRouter";

const app = express()

const port = process.env.PORT || 3102;

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.json("This is the root of the server.")
    console.log("Success")
})


app.get("/tools", async (req: Request, res: Response) => {
    res.json(await getAllTools())
    console.log("Success")
})

app.get("/all/users", async (req: Request, res: Response) => {
    res.json(await getAllUsers())
    console.log("Success")
})

app.listen(port, () => { console.log(`server running on port localhost:${port}`)})

