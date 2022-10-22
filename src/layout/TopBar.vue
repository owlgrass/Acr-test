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
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import '~element-ui/packages/theme-chalk/src/index';

.top-bar {
	max-width: $--md;
	margin: 0 auto;

	& > .el-menu--horizontal > .el-menu-item {
		color: $--color-primary;

		& > a {
			text-decoration: inherit;
		}
	}
}
</style>
