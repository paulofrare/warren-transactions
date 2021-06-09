import TransactionModal from './index.vue'
import { mount } from '@vue/test-utils'

describe('<TransactionModal />', () => {

    it('should render transaction modal correctly ', () => {
        const wrapper = mount(TransactionModal)

        expect(wrapper.html()).toMatchSnapshot()
    })
})
