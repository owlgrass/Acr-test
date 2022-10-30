import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import store from '@/store'
import TodoView from '@/views/HomeView/TodoView.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

describe('TodoView.vue', () => {
	it('renders todo list with 0 items', () => {
		const wrapper = mount(TodoView, {
			localVue,
			store,
		})
		expect(wrapper.text()).toMatch('No items')
	})

	it('renders todo list with 1 or more items', () => {
		store.dispatch('add', {
			content: 'this is the first item',
			checked: true,
		})
		store.dispatch('add', {
			content: 'this is the second item',
			checked: true,
		})
		const wrapper = mount(TodoView, {
			localVue,
			store,
		})
		expect(wrapper.text()).toMatch('this is the first item')
		expect(wrapper.text()).toMatch('this is the second item')
	})
})
