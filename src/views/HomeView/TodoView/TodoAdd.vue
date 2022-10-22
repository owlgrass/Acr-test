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
			this.$emit('add', this.input)
			this.input = ''
		},
	},
	components: {},
}
</script>

<style>
.el-input {
	margin-right: 1em;
}
.todo-add {
	display: flex;
}
</style>
