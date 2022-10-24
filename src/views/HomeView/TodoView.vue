<template>
	<div class="todo-view">
		<TodoAdd @add="add" />
		<TodoList :todos="getTodos" @remove="remove" @update="update" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
		...mapActions(['add', 'remove', 'update']),
	},
	computed: {
		...mapGetters(['getTodos']),
	},
	components: {
		TodoAdd,
		TodoList,
	},
}
</script>

<style scoped lang="scss"></style>
