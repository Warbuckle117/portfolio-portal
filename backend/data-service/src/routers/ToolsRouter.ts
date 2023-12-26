import {Tool} from "../Helpers/Types";

const dockerDB = require("../../db/db.js")

const toolTable = dockerDB("tools")

export const getAllTools = async () => {
    try {
        return await toolTable.select("id", "name", "description", "url", "created_at", "updated_at" ).then((data: Tool) => data)
    }
    catch (error) {
        console.log(error)
        return error
    }
}