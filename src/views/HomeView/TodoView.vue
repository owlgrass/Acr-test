<template>
	<div>
		<TodoAdd @add="add" />
		<TodoList :todos="todos" />
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
	},
	components: {
		TodoAdd,
		TodoList,
	},
}
</script>
