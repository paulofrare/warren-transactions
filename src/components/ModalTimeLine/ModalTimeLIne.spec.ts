import ModalTimeLine from './index.vue'
import { mount } from '@vue/test-utils'

describe('<ModalTimeLine />', () => {
    it('should render timeline correctly ', () => {
        const wrapper = mount(ModalTimeLine, {
            props: {
                setup: {
                    stepOne: true,
                    stepTwo: true,
                    stepThree: false
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render header circles correctly ', () => {
        const wrapper = mount(ModalTimeLine, {
            props: {
                setup: {
                    stepOne: true,
                    stepTwo: true,
                    stepThree: false
                }
            }
        })

        const circleStepOne = wrapper.find('#label-circle-one')
        const circleStepTwo = wrapper.find('#label-circle-two')
        const circleStepThree = wrapper.find('#label-circle-three')

        expect(circleStepOne.text()).toBe('Solicitada')
        expect(circleStepTwo.text()).toBe('Processando')
        expect(circleStepThree.text()).toBe('Concluída')

    })
})
