const axios = require("axios");

const basicAddition = (num1, num2) => {
    if(typeof num1 !== "number" && typeof num2 !== "number") return "Invalid Types for numbers"
    return num1 + num2
}

const getUsernameById = async (id) => {
    try {
        if(typeof id !== "number") throw "Invalid Types for Id"
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return data.username;
    } catch(err) {
        return err.toString();
    }
}

module.exports = {
    basicAddition,
    getUsernameById
}