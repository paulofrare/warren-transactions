import Header from '@/components/Header/index.vue'
import { shallowMount } from '@vue/test-utils'

describe('<Header />', () => {
    it('should render header correctly ', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render header logo correctly ', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.find('header__logo')).toBeTruthy()
    })
})