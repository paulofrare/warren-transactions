import { formatDateFull, formatDateShort } from "./formatDate"

describe('Format Dates', () => {
  it('should return a brazilian formated date', () => {
    const date = '2020-05-22'
    const formatedDate = formatDateFull(date)
    expect(formatedDate).toEqual('22 de Maio de 2020')
  })
  it('should return a shorten brazilian formated date', () => {
    const date = '2020-05-22'
    const formatedDate = formatDateShort(date)
    expect(formatedDate).toEqual('22 de Maio')
  })
})
