import axios from "axios";

const $token = axios.create({
    baseURL: process.env.REACT_APP_API_URL_TOKEN
})

const $bonus = axios.create({
    baseURL: process.env.REACT_APP_API_URL_BONUS
})

export {
    $token,
    $bonus,
}