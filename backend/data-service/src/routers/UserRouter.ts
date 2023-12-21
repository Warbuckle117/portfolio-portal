import {User} from "../Helpers/Types";

const db = require("../../db/db.js")

const userTable = db("users")
export const getAllUsers = async () => {
    try {
        return await userTable.select("").then((data: User) => data)
    }
    catch (error) {
        console.log(error)
        return error
    }

}

