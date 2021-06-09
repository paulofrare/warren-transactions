import TransactionFilter from './index.vue'
import { mount } from '@vue/test-utils'

describe('<TransactionFilter />', () => {
    it('should render TransactionFilter correctly ', () => {
        const wrapper = mount(TransactionFilter)

        expect(wrapper.html()).toMatchSnapshot()
    })
    it('should render six buttons ', () => {

        const wrapper = mount(TransactionFilter)
        expect(wrapper.findAll('button').length).toBe(6)

    })
})
