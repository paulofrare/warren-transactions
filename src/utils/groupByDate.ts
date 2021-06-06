import { Transaction } from '../types/transaction'

type groupList = { [key: string]: Transaction[]; }

export function groupByDate(list: Transaction[]) {
    const groupList: groupList = {}

    list.forEach(el => {
        const keys = Object.keys(groupList)
        if (!keys.includes(el.date)) groupList[el.date] = []
        groupList[el.date].push(el)
    });

    const arrGroup = new Array(Object.entries(groupList));
    const reverse = arrGroup.reverse()

    return reverse[0]
}