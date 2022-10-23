<template>
	<div class="todo-list-item">
		<el-checkbox v-model="checked">
			{{ item.content }}
		</el-checkbox>
		<el-button type="text" icon="el-icon-close" @click="remove" />
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
		},
	},
	computed: {
		checked: {
			get() {
				return this.item.checked
			},
			set(v) {
				this.$emit('check', v)
			},
		},
	},
	methods: {
		remove() {
			this.$emit('remove')
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/theme.scss';

.todo-list-item {
	display: flex;
	justify-content: space-between;

	padding: 1em;
	margin-bottom: -1px;
	border: 1px solid $--color-secondary;

	&:hover {
		background: $--color-primary-light-9;
	}
}
.el-button.el-button--text {
	padding: 0;
}
</style>
