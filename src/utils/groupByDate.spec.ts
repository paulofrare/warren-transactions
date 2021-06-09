import { groupByDate } from './groupByDate'
import { mockTransactions } from './transaction.stubs'

describe('Group transactions by date', () => {
  it('should return ordered transactions', () => {

    const ordered = groupByDate(mockTransactions)
    expect(ordered[0][0]).toEqual('2020-07-01')
    expect(ordered[0][1].length).toBe(1)
    expect(ordered[1][0]).toEqual('2020-06-23')
    expect(ordered[1][1].length).toBe(2)
  })
})
