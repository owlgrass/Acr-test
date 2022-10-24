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
	padding: 1em 3em;

	& > div {
		max-width: $--sm;
		margin: 0 auto;
	}
}
</style>
