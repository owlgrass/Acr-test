<template>
	<div class="home-view">
		<TodoView />
	</div>
</template>

<script>
import TodoView from './HomeView/TodoView'
export default {
	components: {
		TodoView,
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
