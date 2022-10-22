<template>
	<div class="home-view">
		<TodoAdd @add="add" />
		<TodoList :todos="todos" />
	</div>
</template>

<script>
import TodoAdd from './HomeView/TodoAdd'
import TodoList from './HomeView/TodoList'
export default {
	data() {
		return {
			/**
			 * @type {string[]}
			 */
			todos: ['abc', 'xyz', 'haha'],
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

<style lang="scss">
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import '~element-ui/packages/theme-chalk/src/index';

.home-view {
	max-width: $--md;
	margin: 0 auto;

	padding: 1em 3em;
}
</style>
