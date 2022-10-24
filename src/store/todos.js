const state = {
	/**
	 * @type {Array<{ content: String, checked: Boolean }>}
	 */
	_todos: [],
}
const getters = {
	todos(state) {
		return state._todos
	},
}
const mutations = {
	ADD(state, item) {
		state._todos.push(item)
	},
	REMOVE(state, index) {
		state._todos.splice(index, 1)
	},
	UPDATE(state, { index, newValue }) {
		state._todos[index].content = newValue.content
		state._todos[index].checked = newValue.checked
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
