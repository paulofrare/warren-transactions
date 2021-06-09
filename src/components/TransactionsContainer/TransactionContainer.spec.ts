import TransactionContainer from './index.vue'
import { mount } from '@vue/test-utils'

describe('<TransactionContainer />', () => {
    it('should render header correctly ', () => {
        const wrapper = mount(TransactionContainer)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render six buttons ', () => {

        const wrapper = mount(TransactionContainer)
        expect(wrapper.findAll('button').length).toBe(7)

    })
    it('should render button filter', () => {

        const wrapper = mount(TransactionContainer)
        expect(wrapper.find('.transaction-container__button-filter').exists()).toBe(true)

    })
    it('should render loader', () => {

        const wrapper = mount(TransactionContainer)
        expect(wrapper.find('.loading').exists()).toBe(true)

    })
    it('should render title', () => {

        const wrapper = mount(TransactionContainer)
        const title = wrapper.find('.transaction-container__title')

        expect(wrapper.find('.transaction-container__title').exists()).toBe(true)
        expect(title.text()).toBe('Transações')

    })
})

