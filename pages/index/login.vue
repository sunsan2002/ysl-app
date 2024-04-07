// index.vue
 
<template>
	<view class="page">
		<button class="btn" @click="livenessDetection()">
            开始刷脸验证
        </button>
	</view>
</template>
 
<script>
	import { getVerifyToken, h5VerifyIdentifyReturn } from '@/api/user.js'
	// import { HTTP_REQUEST_URL, H5_URL } from '@/config.js'
	import permision from '/utils/js_sdk/permission.js'
	// const permision = require('/utils/js_sdk/permission.js');
	// import store from '@//store'
	export default {
		data() {
			return {
                // 终端id
				orgId: 0,
                // 姓名
				legalPerson: '李珊',
                // 身份证
				idCard: '431021200209210068',
			}
		},
 
		onLoad(options) {
			this.orgId = options.orgId || 0
			this.legalPerson = options.legalPerson || ''
			this.idCard = options.idCard || ''
		},
 
		methods: {
			// 检查是否开启摄像头权限
			checkPermissionCamera() {
				return new Promise(async (resolve) => {
					switch (uni.getSystemInfoSync().platform) {
						case 'android':
							const val = await permision.requestAndroidPermission('android.permission.CAMERA')
							if (val == 1) {
								// 已获取授权
								resolve()
							} else if (val == -1) {
								// 被永久拒绝授权
								uni.showModal({
									title: '温馨提示',
									content: '摄像头权限已经被您永久拒绝，请前往设置页面打开',
									showCancel: false,
									confirmText: '前往设置',
									success() {
										// 打开当前App的权限设置界面
										permision.gotoAppPermissionSetting()
									}
								})
							}
							break
 
						case 'ios':
							// 是不是第一次开启相机
							const iosFirstCamera = uni.getStorageSync('iosFirstCamera');
							if (iosFirstCamera) {
								// 判断iOS上是否给予摄像头权限，有权限返回true，否则返回false
								const val2 = await permision.judgeIosPermission('camera')
								if (val2) {
									resolve()
								} else {
									uni.showModal({
										title: '温馨提示',
										content: '摄像头权限已经被您拒绝，请前往设置页面打开',
										showCancel: false,
										confirmText: '前往设置',
										success() {
											// 打开当前App的权限设置界面
											permision.gotoAppPermissionSetting()
										}
									})
								}
							} else {
								uni.setStorageSync('iosFirstCamera', true);
								resolve()
							}
							break
					}
				})
			},
 
			// 活体认证
			async livenessDetection() {
				// // #ifdef MP-WEIXIN
				// uni.$u.toast('请使用app进行刷脸验证')
				// // #endif
				// console.log(111)
				// #ifdef APP-PLUS
				this.callco()
				console.log(3)
				// #endif
 
			},
 
			// #ifdef APP-PLUS
			// app端实名认证
			async callco(){
				const co1 = uniCloud.importObject("uni-sunsan")
				let res = await co1.say()
				uni.showModal({
					content:JSON.stringify(res),
					showModal:false
				})
			},
			appAuth() {
				console.log(3)
				// uni.showLoading({
				// 	title: '认证中',
				// 	mask: true
				// })
				// 1、获取实人认证设备信息
				const metaInfo = uni.getFacialRecognitionMetaInfo()
				console.log(metaInfo)
				// 2、提交姓名、身份证号、metaInfo到云函数获取certifyId
				
				
				uniCloud.callFunction({
					name: 'uni-sunsan',
					data: {
						step: 1,
						metaInfo,
						legalPerson: this.legalPerson,
						idCard: this.idCard
					},
					
				}).then(res => {
					console.log('11111111111111111111')
					console.log(res)
					if (res.result.code == 500) return uni.$u.toast(res.result.msg)
 
					const certifyId = res.result.data
 
					// 3、云函数获取certifyId后，调起实人认证界面
					uni.startFacialRecognitionVerify({
						certifyId,
						// 刷脸圈的颜色 加上这个参数会在ios端会提示 errCode: 10013 刷脸失败
						// progressBarColor: '#4a9f8b;',
						// 认证界面UI朝向 竖屏
						screenOrientation: 'port',
						success: async (e) => {
							if (e.errCode != 0) return uni.$u.toast(e.errMsg)
 
							// 4、获取认证结果
							const certResult = await uniCloud.callFunction({
								name: 'livenessDetection',
								data: {
									step: 2,
									orgId: this.orgId,
									certifyId,
									serversUrl: HTTP_REQUEST_URL
								}
							})
 
							if (certResult.result.code == 200) {
								this.successAfter()
							} else {
								uni.hideLoading()
								uni.showModal({
									title: '认证失败',
									content: certResult.result.msg,
									showCancel: false
								})
							}
						},
						fail: (e) => {
							console.log('err')
							uni.$u.toast(e.errMsg)
						}
					})
				}).catch(err => {
					uni.$u.toast('请求云函数失败：' + JSON.stringify(err))
				})
			},
			// #endif
 
			// 认证成功后的处理
			successAfter() {
				// 审核状态变更为:待审核
				store.commit('user/set_userStatus', 1)
				uni.showToast({
					title: '认证成功',
					icon: 'success',
					mask: true
				})
 
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/index/index'
					})
				}, 1200)
			}
		}
	}
</script>
 
<style lang="scss" scoped>
	.btn {
		width: 440rpx;
		height: 88rpx;
		border-radius: 44rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 44rpx;
		margin-top: 102rpx;
        display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>