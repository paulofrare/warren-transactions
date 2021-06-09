import TransactionGroup from './index.vue'
import { mount } from '@vue/test-utils'

describe('<TransactionGroup />', () => {

    const transaction: any = ["2020-07-22", [{
        amount: 2078.65,
        date: "2020-07-24",
        description: "et labore proident aute nulla",
        from: "Aposentadoria",
        id: "5f89f9f257fe42957bf6dbfd",
        status: "created",
        title: "Resgate",
        to: "Conta Warren",
    }]]

    it('should render transaction group correctly ', () => {
        const wrapper = mount(TransactionGroup, {
            props: {
                transaction
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
    it('should render title correctly ', () => {
        const wrapper = mount(TransactionGroup, {
            props: {
                transaction
            }
        })

        const title = wrapper.find('.transaction-group__title')
        expect(title.text()).toBe('22 de Julho de 2020')
    })
})
