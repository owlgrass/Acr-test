<template>
	<div id="app">
		<TopBar />
		<router-view />
	</div>
</template>
<script>
import TopBar from '@/layout/TopBar'
export default {
	components: {
		TopBar,
	},
}
</script>

<style lang="scss">
@import 'normalize.css';
@import './theme.scss';
@import './App.css';
</style>
