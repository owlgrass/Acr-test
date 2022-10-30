import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import TodoView from '@/views/HomeView/TodoView.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

describe('TodoView.vue', () => {
	it('renders todo list with 0 items', () => {
		const store = new Vuex.Store({
			getters: {
				todos() {
					return []
				},
			},
		})
		const wrapper = mount(TodoView, { localVue, store })

		expect(wrapper.text()).toMatch('No items')
	})

	it('renders todo list with 1 or more items', () => {
		const store = new Vuex.Store({
			getters: {
				todos() {
					return [
						{
							content: 'this is the first item',
							checked: true,
						},
						{
							content: 'this is the second item',
							checked: true,
						},
					]
				},
			},
		})
		const wrapper = mount(TodoView, { localVue, store })

		expect(wrapper.text()).toMatch('this is the first item')
		expect(wrapper.text()).toMatch('this is the second item')
	})
})
