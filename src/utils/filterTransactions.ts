import { Transaction } from '@/types/transaction'

type Active = {
    title: string,
    active: boolean
}

export function filterTransactions(filter: any, transactions: Transaction[]): Transaction[] {

    const filteredList: Transaction[] = []
    const { titleOptions, statusOptions } = filter

    const activeTitle = titleOptions.filter((el: Active) => el.active)
    const activeStatus = statusOptions.filter((el: Active) => el.active)
    const options = activeTitle.concat(activeStatus)
    options.forEach((el: Active) => {
        if (el.title === 'Mov. Interna') el.title = 'Movimentação interna'
    })

    const optValues: string[] = []
    options.forEach((el: Active) => {
        optValues.push(el.title)
    });

    transactions.forEach((transaction: Transaction) => checkFilters(transaction))

    if (options.length === 0) return transactions;

    function checkFilters(el: Transaction): void {

        let title: string

        if (el.title === 'Mov. interna') title = 'Movimentação interna'
        else title = el.title

        if (optValues.includes(title) || optValues.includes(el.status)) filteredList.push(el)
    }

    return filteredList
}
