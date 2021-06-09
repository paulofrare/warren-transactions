import TransactionCard from './index.vue'
import { mount } from '@vue/test-utils'
import { Transaction } from '@/types/transaction'

describe('<TransactionCard />', () => {

    const transaction: Transaction = {
        amount: 2078.66,
        date: "2020-07-01",
        description: "et labore proident aute nulla",
        from: "Aposentadoria",
        id: "5f89f9f257fe42957bf6dbfd",
        status: "created",
        title: "Resgate",
        to: "Conta Warren",
    }

    it('should render transaction card correctly ', () => {
        const wrapper = mount(TransactionCard, {
            props: {
                transactionItem: transaction
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    it('should render transaction card informations correctly ', () => {
        const wrapper = mount(TransactionCard, {
            props: {
                transactionItem: transaction
            }
        })

        const title = wrapper.find('.card-transaction__title')
        const description = wrapper.find('.card-transaction__description')
        const status = wrapper.find('.card-transaction__status')

        expect(title.text()).toBe('Resgate')
        expect(description.text()).toBe('et labore proident aute nulla')
        expect(status.text()).toBe('Solicitada')

    })
})
