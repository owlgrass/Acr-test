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

<style scoped lang="scss">
@import '@/theme.scss';

.home-view {
	max-width: $--md;
	margin: 0 auto;

	padding: 1em 3em;
}
</style>
