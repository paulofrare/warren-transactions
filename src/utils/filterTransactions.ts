import { Transaction } from '@/types/transaction'

type Active = {
    title: string,
    active: boolean
}

export function filterTransactions(filter: any, transactions: Transaction[]): Transaction[] {

    let filteredListStepOne: Transaction[] = []
    let filteredListStepTwo: Transaction[] = []
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

    if (options.length === 0) return transactions;

    transactions.forEach((transaction: Transaction) => checkFiltersTitle(transaction))

    if (filteredListStepOne.length != 0) {
        filteredListStepOne.forEach((transaction: Transaction) => checkFiltersStatus(transaction))
        if (filteredListStepTwo.length === 0) filteredListStepTwo = filteredListStepOne
    }
    else transactions.forEach((transaction: Transaction) => checkFiltersStatus(transaction))

    function checkFiltersTitle(el: Transaction): void {

        let title: string

        if (el.title === 'Mov. interna') title = 'Movimentação interna'
        else title = el.title

        if (optValues.includes(title)) filteredListStepOne.push(el)
    }

    function checkFiltersStatus(el: Transaction): void {

        if (optValues.includes(el.status)) filteredListStepTwo.push(el)
    }

    return filteredListStepTwo
}
