import { TOKEN_CLIENT_ID, TOKEN_DEVICE_ID } from "../utils/consts";
import { $token, $bonus } from "./index";

export const getToken = async () => {
    const {data} = await $token.post('/api/v3/clients/accesstoken', {idClient: TOKEN_CLIENT_ID, accessToken: "", paramName: "device", paramValue: TOKEN_DEVICE_ID, latitude: 0, longitude: 0, sourceQuery: 0})
    localStorage.setItem('token', data.accessToken)
    return (data.accessToken)
}

export const getBonus = async () => {
    const token = localStorage.getItem('token')
    const {data} = await $bonus.get(`/api/v3/ibonus/generalinfo/${token}`)
    return(data)
}