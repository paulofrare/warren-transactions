import axios from 'axios'
import TransactionsService from './transactions'

const httpClient = axios.create({
    baseURL: 'https://warren-transactions-api.herokuapp.com/api'
})

httpClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const canThrowAnError = error.request.status === 0 ||
        error.request.status === 500

    if (canThrowAnError) {
        throw new Error(error.message)
    }

    return error
})

export default {
    transactions: TransactionsService(httpClient)
}
