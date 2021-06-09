import ButtonFilter from './index.vue'
import { shallowMount } from '@vue/test-utils'

describe('<ButtonFilter />', () => {
    it('should render button filter inactive correctly ', async () => {
        const wrapper = shallowMount(ButtonFilter, {
            props: {
                isActive: false,
                title: 'Resgate'
            }
        })
        expect(wrapper.find('.btn-active').exists()).toBe(false)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render button filter active correctly ', async () => {
        const wrapper = shallowMount(ButtonFilter, {
            props: {
                isActive: true,
                title: 'Resgate'
            }
        })
        expect(wrapper.find('.btn-active').exists()).toBe(true)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
