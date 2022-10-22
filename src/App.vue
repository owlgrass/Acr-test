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

<style>
@import './App.css';
</style>
