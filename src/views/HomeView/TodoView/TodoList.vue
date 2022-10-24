<template>
	<div>
		<EmptyPlaceholder v-if="todos.length === 0" />
		<template v-else>
			<TodoListItem
				v-for="(item, i) in todos"
				:key="i + item"
				:item="item"
				@remove="remove(i)"
				@check="(e) => check(i, e)"
			/>
		</template>
	</div>
</template>

<script>
import EmptyPlaceholder from './EmptyPlaceholder'
import TodoListItem from './TodoListItem'

export default {
	props: {
		todos: {
			type: Array,
		},
	},
	data() {
		return {}
	},
	methods: {
		remove(index) {
			this.$emit('remove', index)
		},
		check(index, checked) {
			const newValue = {
				content: this.todos[index].content,
				checked,
			}
			this.$emit('update', { index, newValue })
		},
	},
	components: {
		EmptyPlaceholder,
		TodoListItem,
	},
}
</script>

<style scoped lang="scss"></style>
