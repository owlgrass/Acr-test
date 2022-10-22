<template>
	<div>
		<TodoListItem v-for="(item, i) in todos" :key="i + item" :item="item" />
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
	components: {
		TodoListItem,
	},
}
</script>

<style></style>
