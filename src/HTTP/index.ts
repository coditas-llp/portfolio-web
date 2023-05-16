import axios from 'axios'

export const BASE_URL = 'https://careers.coditas.com'
export const API_URL = 'https://careers.coditas.com/api/v1'

export const GET = async (URL: string) => {
    try {
        const response = await axios.get(`${API_URL}${URL}&showId=true`)
        return response.data
    } catch (error) {
        throw error
    }
}