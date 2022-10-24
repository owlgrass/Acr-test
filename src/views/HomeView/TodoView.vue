<template>
	<div class="todo-view">
		<TodoAdd @add="add" />

		<EmptyPlaceholder v-if="todos.length === 0" />
		<template v-else>
			<TodoListItem
				v-for="(item, i) in todos"
				:key="i + item"
				:item="item"
				@remove="remove(i)"
				@check="(e) => handleCheck(i, e)"
			/>
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoAdd from './TodoView/TodoAdd'
import EmptyPlaceholder from './TodoView/EmptyPlaceholder'
import TodoListItem from './TodoView/TodoListItem'

export default {
	methods: {
		...mapActions(['add', 'remove', 'update']),
		handleCheck(i, checked) {
			this.update({
				index: i,
				newValue: {
					content: this.todos[i].content,
					checked,
				},
			})
		},
	},
	computed: {
		...mapGetters(['todos']),
	},
	components: {
		TodoAdd,

		EmptyPlaceholder,
		TodoListItem,
	},
}
</script>

<style scoped lang="scss"></style>
