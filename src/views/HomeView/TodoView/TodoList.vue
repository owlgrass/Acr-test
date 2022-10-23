<template>
	<div>
		<div v-if="todos.length === 0" class="empty-placeholder">No items</div>
		<template v-else>
			<TodoListItem
				v-for="(item, i) in todos"
				:key="i + item"
				:item="item"
				@remove="remove(i)"
				@check="
					(checked) => $emit('update', i, { content: item.content, checked })
				"
			/>
		</template>
	</div>
</template>

<script>
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
	},
	components: {
		TodoListItem,
	},
}
</script>

<style>
.empty-placeholder {
	text-align: center;
	padding: 1em;
	color: hsl(0, 0%, 80%);
}
</style>
