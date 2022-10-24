<template>
	<div class="empty-placeholder">No items</div>
</template>

<script>
export default {}
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
