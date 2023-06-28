import axios from "axios";
import { ACCESS_KEY } from "../utils/consts";

const $token = axios.create({
    baseURL: process.env.REACT_APP_API_URL_TOKEN
})

const $bonus = axios.create({
    baseURL: process.env.REACT_APP_API_URL_BONUS
})

const accessKeyInceptor = config => {
    config.headers.AccessKey = ACCESS_KEY
    return config
}

$token.interceptors.request.use(accessKeyInceptor)
$bonus.interceptors.request.use(accessKeyInceptor)

export {
    $token,
    $bonus,
}