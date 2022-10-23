<template>
	<div>
		<TodoAdd @add="add" />
		<TodoList :todos="todos" @remove="remove" @update="update" />
	</div>
</template>

<script>
import TodoAdd from './TodoView/TodoAdd'
import TodoList from './TodoView/TodoList'
export default {
	data() {
		return {
			/**
			 * @type {Array<{ content: String, checked: Boolean }>}
			 */
			todos: [],
		}
	},
	methods: {
		add(item) {
			this.todos.push(item)
		},
		remove(index) {
			this.todos.splice(index, 1)
		},
		update(i, newValue) {
			this.todos[i].content = newValue.content
			this.todos[i].checked = newValue.checked
		},
	},
	components: {
		TodoAdd,
		TodoList,
	},
}
</script>
