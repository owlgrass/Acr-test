<template>
	<div class="todo-add">
		<el-input
			placeholder="Enter a todo item..."
			v-model="input"
			@keydown.native.enter="() => add()"
		/>
		<el-button type="primary" @click="add">Add</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			/**
			 * @type {String}
			 */
			input: '',
		}
	},
	methods: {
		add() {
			this.$emit('add', {
				content: this.input,
				checked: false,
			})
			this.input = ''
		},
	},
	components: {},
}
</script>

<style scoped lang="scss">
@import '@/theme.scss';

.el-input {
	margin-right: 1em;

	&::v-deep > .el-input__inner {
		border: 1px solid $--color-secondary;
	}
}
.todo-add {
	display: flex;

	padding: 1em;
	margin-bottom: -1px;
	border: 1px solid $--color-secondary;
	border-radius: $--border-radius-base $--border-radius-base 0 0;
	background: $--color-white;
}
</style>
