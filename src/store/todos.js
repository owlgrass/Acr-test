const state = {
	todos: [{ content: 'Hello-state', checked: false }],
}
const getters = {
	getTodos(state) {
		console.log('haha get')
		return state.todos
	},
}
const mutations = {
	ADD({ todos }, item) {
		todos.push(item)
	},
	REMOVE({ todos }, index) {
		todos.splice(index, 1)
	},
	UPDATE({ todos }, { index, newValue }) {
		console.log('hhh', newValue)
		todos[index].content = newValue.content
		todos[index].checked = newValue.checked
	},
}

const actions = {
	add({ commit }, item) {
		commit('ADD', item)
	},
	remove({ commit }, index) {
		commit('REMOVE', index)
	},
	update({ commit }, payload) {
		commit('UPDATE', payload)
	},
}

export default {
	// namespaced: true, // TODO
	state,
	getters,
	mutations,
	actions,
}
