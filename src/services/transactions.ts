import { AxiosInstance } from 'axios'
import { Transaction } from '../types/transaction'
import { RequestError } from '../types/error'

type GetTransactions = {
    data: Transaction[];
    errors: RequestError | null;
}

export interface TransactionServiceInterface {
    getTransactions(): Promise<GetTransactions>;
}
function TransactionService(httpClient: AxiosInstance): TransactionServiceInterface {
    async function getTransactions(): Promise<GetTransactions> {
        const response = await httpClient.get<Transaction[]>('/transactions')

        let errors: RequestError | null = null

        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }

        return {
            data: response.data,
            errors
        }
    }

    return {
        getTransactions
    }
}

export default TransactionService
