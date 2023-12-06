import express, {Request, Response} from "express";
import cors from "cors";
const app = express()
const port = process.env.PORT || 3102;
import {User, Tool} from "./Helpers/Types";

app.use(cors())

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
})

app.get("/users", (req: Request, res: Response) => {
    res.json({testUsers})
})

app.get("/tools", (req: Request, res: Response) => {
    res.json({testTools})
})

app.listen(port, () => { console.log(`server running on port localhost:${port}`)})

