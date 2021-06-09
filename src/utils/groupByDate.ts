import { Transaction } from '../types/transaction'

type groupList = { [key: string]: Transaction[] }
type orderedGroupList = [string, Transaction[]]

export function groupByDate(list: Transaction[]): orderedGroupList[] {
    const groupList: groupList = {}

    list.forEach((transaction: Transaction) => {
        const keys = Object.keys(groupList)
        if (!keys.includes(transaction.date)) groupList[transaction.date] = []
        groupList[transaction.date].push(transaction)
    });

    const arrGroup = new Array(Object.entries(groupList));
    const reverse = arrGroup.reverse()

    return reverse[0]
}
