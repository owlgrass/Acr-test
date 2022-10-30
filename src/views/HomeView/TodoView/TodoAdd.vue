<template>
	<div class="todo-add">
		<span class="input">
			<el-input
				placeholder="Enter a todo item..."
				v-model="input"
				@keydown.native.enter="() => add()"
			/>
			<div class="error-message">{{ errorMessage }}</div>
		</span>
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
			errorMessage: '',
		}
	},
	methods: {
		add() {
			if (this.input === '') {
				this.error()
				return
			}
			this.$emit('add', {
				content: this.input,
				checked: false,
			})
			this.input = ''
		},
		error() {
			this.errorMessage = '* This cannot be empty'
			setTimeout(() => {
				this.errorMessage = ''
			}, 1000)
		},
	},
	components: {},
}
</script>

<style scoped lang="scss">
@import '@/theme.scss';

.input {
	margin-right: 1em;

	flex-grow: 1;
}
.el-input {
	&::v-deep > .el-input__inner {
		border: 1px solid $--color-secondary;
	}
}
.error-message {
	color: $--color-danger;
	font-size: 0.8em;
}
.todo-add {
	display: flex;
	align-items: flex-start;

	padding: 1em;
	margin-bottom: -1px;
	border: 1px solid $--color-secondary;
	border-radius: $--border-radius-base $--border-radius-base 0 0;
	background: $--color-white;
}
</style>
