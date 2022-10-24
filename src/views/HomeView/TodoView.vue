<template>
	<div class="todo-view">
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
		update(index, newValue) {
			this.todos[index].content = newValue.content
			this.todos[index].checked = newValue.checked
		},
	},
	components: {
		TodoAdd,
		TodoList,
	},
}
</script>

<style scoped lang="scss">
@import '@/theme.scss';

.todo-view {
	// background: $--color-white;
}
</style>
