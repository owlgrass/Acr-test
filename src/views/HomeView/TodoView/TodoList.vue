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

<style scoped lang="scss">
@import '@/theme.scss';

.empty-placeholder {
	text-align: center;
	padding: 1em;

	background: $--color-white;
	border: 1px solid $--color-secondary;
	border-radius: 0 0 $--border-radius-base $--border-radius-base;

	color: hsl(0, 0%, 80%);
	font-size: $--font-size-base;
}
</style>
