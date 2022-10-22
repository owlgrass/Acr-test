<template>
	<div>
		<TodoAdd @add="add" />
		<TodoList :todos="todos" @remove="remove" />
	</div>
</template>

<script>
import TodoAdd from './TodoView/TodoAdd'
import TodoList from './TodoView/TodoList'
export default {
	data() {
		return {
			/**
			 * @type {string[]}
			 */
			// todos: ['abc', 'xyz', 'haha'],
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
	},
	components: {
		TodoAdd,
		TodoList,
	},
}
</script>
