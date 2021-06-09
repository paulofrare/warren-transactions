import { mockTransactions } from './transaction.stubs'
import { Transaction } from '@/types/transaction'
import { filterTransactions } from './filterTransactions'

const filter = {
  'titleOptions':[{
    'title':'Depósito',
    'active':false
  },{
    'title':'Resgate',
    'active':true
  },{
    'title':'Mov. Interna',
    'active':false
  }],
  'statusOptions': [{
    'title':'Processando',
    'active':false
  },{
    'title':'Solicitada',
    'active':false
  },{
    'title':'Concluída',
    'active':false
  }]
}

describe('Filter Transactions', () => {
  it('should return expected transactions', () => {
    const expectResult = [ mockTransactions[0] ]

    const filteredTransactions: Transaction[] = filterTransactions(filter, mockTransactions)
    expect(filteredTransactions).toEqual(expectResult)
  })
  it('should return expected transactions', () => {
    const anotherFilter = {
      ...filter
    }
    anotherFilter.titleOptions[0].active = true
    anotherFilter.titleOptions[1].active = false
    const anotherExpectedResult =[ mockTransactions[1] ]

    anotherExpectedResult
    const filteredTransactions: Transaction[] = filterTransactions(anotherFilter, mockTransactions)
    expect(filteredTransactions).toEqual(anotherExpectedResult)
  })
})
