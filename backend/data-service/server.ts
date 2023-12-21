// @ts-ignore
import express, {Request, Response} from "express";
// @ts-ignore
import cors from "cors";
const knex = require("./db/db.js");
import {User, Tool} from "./src/Helpers/Types";
import {getAllUsers} from "./src/routers/UserRouter";

const app = express()

const port = process.env.PORT || 3102;


app.use(cors())
app.use(express.json())


const testUsers: User[] = [
    {username: "Mark"},
    {username: "Narcy"},
    {username: "Guest"}]


const testTools: Tool[] = [
    {name:"Notes", description: "Note Taking Service", url: "/tools/notes"},
    {name: "Meal Planner", description: "Meal Planning Service", url: "/tools/meal-planner"},
    {name: "Gym Tracker", description: "Tracks workouts for gym and fitness goals", url: "/tools/gym-tracker"}]

app.get("/", (req, res) => {
    res.json("This is the root of the server.")
    console.log("Success")
})

app.get("/users", (req: Request, res: Response) => {
    res.json({testUsers})
})

app.get("/tools", (req: Request, res: Response) => {
    res.json({testTools})
})

app.get("/all/users", async (req: Request, res: Response) => {
    const result = await getAllUsers()
    res.json(result)
})

app.listen(port, () => { console.log(`server running on port localhost:${port}`)})

