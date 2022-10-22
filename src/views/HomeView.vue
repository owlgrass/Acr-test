<template>
	<div class="home-view">
		<TodoAdd />
		<TodoList />
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
			todos: [],
		}
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
