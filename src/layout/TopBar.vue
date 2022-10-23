<template>
	<div class="top-bar">
		<el-menu mode="horizontal">
			<el-menu-item>
				<router-link to="/about">About</router-link>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<style lang="scss">
@import '@/theme.scss';

.top-bar {
	border-bottom: 1px solid $--color-secondary;
}

.el-menu.el-menu--horizontal {
	max-width: $--md;
	margin: 0 auto;
	border: none;

	& > .el-menu-item {
		color: $--color-primary;
		& > a {
			text-decoration: inherit;
		}
	}
}
</style>
