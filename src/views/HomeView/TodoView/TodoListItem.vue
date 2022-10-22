<template>
	<div class="todo-list-item">
		<el-checkbox v-model="checked">
			{{ item }}
		</el-checkbox>
		<el-button type="text" icon="el-icon-close" @click="remove" />
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: String,
		},
	},
	data() {
		return {
			checked: false, // TODO
		}
	},
	methods: {
		remove() {
			this.$emit('remove')
		},
	},
}
</script>

<style>
.todo-list-item {
	display: flex;
	justify-content: space-between;

	padding: 1em;
}
.el-button.el-button--text {
	padding: 0;
}
</style>
