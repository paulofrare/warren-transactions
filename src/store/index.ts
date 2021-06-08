import { Transaction } from '@/types/transaction'
import { reactive, readonly } from 'vue'

export type StoreState = {
  stateModal: boolean
  transaction: Transaction
}

const initialState: StoreState = {
  stateModal: false,
  transaction: {
    id: '',
    title: '',
    description: '',
    status: '',
    amount: 0,
    date: '',
    from: '',
    to: '',
  }
}

const state = reactive<StoreState>({ ...initialState })


export function setStateModal(newState: boolean): void {
  state.stateModal = newState
}
export function setTransaction(newTransaction: Transaction): void {
  state.transaction = newTransaction
}

export function resetStore(): void {
  setStateModal(initialState.stateModal)
  setTransaction(initialState.transaction)
}

export default readonly(state)
