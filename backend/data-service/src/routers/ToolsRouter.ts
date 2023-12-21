import {Tool} from "../Helpers/Types";

const db = require("../../db/db.js")

const toolTable = db("tools")

export const getAllTools = async () => {
    try {
        return await toolTable.select("id", "name", "description", "url").then((data: Tool) => data)
    }
    catch (error) {
        console.log(error)
        return error
    }

}