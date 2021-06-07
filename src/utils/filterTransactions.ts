import { Transaction } from '../types/transaction'

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
    options.map((el: Active) => {
        if (el.title === "Mov. Interna") el.title = 'Movimentação interna'
    })



    const optValues: any = []
    options.forEach((el: Active) => {
        optValues.push(el.title)
    });


    transactions.forEach(transaction => {

        checkFilters(transaction)

    })

    if (options.length === 0) return transactions;

    function checkFilters(el: Transaction): void {

        let status: string = ''

        if (el.status === 'created') status = 'Solicitada'
        if (el.status === "processing") status = 'Processando'
        if (el.status === 'processed') status = 'Concluída'

        if (optValues.includes(el.title) || optValues.includes(status)) filteredList.push(el)
    }

    return filteredList

}