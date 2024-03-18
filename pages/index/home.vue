<template>
	<view>
		<tabbar :current="0"></tabbar>
		<uni-easyinput class="test" v-model="value" placeholder="请输入内容"></uni-easyinput>
	</view>
</template>

<script setup>
import tabbar from '/components/tabbar.vue';

</script>

<style scoped>
.test{
	background: black;
}
</style>
