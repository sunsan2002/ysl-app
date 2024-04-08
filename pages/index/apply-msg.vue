<template>
	<view class="container">
		<p class="option">请填写报名信息</p>
		<view class="form" @click="submitForm">
			<view class="form-item">
				<text>姓名：</text>
				<span style="color: red">*</span>
				<input type="text" v-model="name" placeholder="请输入姓名" required />
			</view>
			<view class="form-item">
				<text>电话号码：</text>
				<span style="color: red">*</span>
				<input type="tel" v-model="phone" placeholder="请输入电话号码" required />
			</view>
			<view class="form-item">
				<text>公司：</text>
				<input type="text" v-model="company" placeholder="请输入公司名称" />
			</view>
			<view class="form-item">
				<text>职务：</text>
				<input type="text" v-model="position" placeholder="请输入职务" />
			</view>
		</view>
		<view class="submit" @click="submit()">提交报名信息</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const phone = ref('');
const company = ref('');
const position = ref('');

const submit = () => {
	uni.showToast({
		title: '报名成功！',
		icon: 'success',
		duration: 2000
	});
};
</script>

<style lang="scss" scoped>
.container {
	padding: 100rpx 0px;
	min-height: 100vh;
	background-color: #f0eff4;
}
.form {
	background-color: #fff;
	box-shadow: 0px 10px 15px -7px rgba(0, 0, 0, 0.1);
}
.form-item {
	padding: 20rpx;
	margin-bottom: 10px;
	background-color: #fff;
	line-height: 60rpx;
	border-bottom: 1rpx solid #ebebeb;
	text {
		font-weight: bold;
	}
}

input[type='text'],
input[type='tel'],
select {
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

button {
	width: 100%;
	padding: 10px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

button:hover {
	background-color: #0056b3;
}
.submit {
	position: fixed;
	bottom: 200rpx;
	left: 30rpx;
	right: 30rpx;
	background-color: #00c6d2;
	border-radius: 30rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-weight: bold;
	font-size: 33rpx;
	padding: 30rpx;
}
.option {
	color: #6f6f6f;
	margin: 10rpx;
}
</style>
