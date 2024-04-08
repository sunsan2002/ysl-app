<template>
	<view class="tabbar">
		<view class="tarbar-list">
			<view class="barPart" @click="changPage(index)" v-for="(list , index) in tabBar.list" :key="index">
				<view :class=" 2 != index ? 'barPart-item' : ' middle'" >
					<image :src="selected == index ? list.selectedIconPath : list.iconPath"
						:style="{width : list.iconWith+'rpx' , height : list.iconHeight+'rpx'}">
					</image>
					<view class="text" :style='{color: selected == index ? tabBar.selectedColor : tabBar.color}'>
						{{list.text}}
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabBar: {
				color: '#8F8F8F',
				selectedColor: '#4792DC',
				list: [{
						iconPath: "/static/tab/home.png",
						selectedIconPath: "/static/tab/home-active.png",
						text: '首页',
						pagePath: "/pages/index/home",
						iconWith: '50',
						iconHeight: '50',
					},
					{
						iconPath: "/static/tab/wonderful-life.png",
						selectedIconPath: "/static/tab/wonderful-life-active.png ",
						text: '精彩生活',
						pagePath: "/pages/index/wonderful-life",
						iconWith: '50',
						iconHeight: '50',
					},
					{
						iconPath: "/static/tab/agenda-active.png",
						selectedIconPath: "/static/tab/agenda-active.png",
						pagePath: "/pages/index/agenda",
						iconWith: '90',
						iconHeight: '90',
					},
					{
						iconPath: "/static/tab/exhibtion-style.png",
						selectedIconPath: "/static/tab/exhibtion-style-active.png",
						text: '展商风采',
						pagePath: "/pages/index/exhibition-style",
						iconWith: '50',
						iconHeight: '50',
					},
					{
						iconPath: "/static/tab/myself.png",
						selectedIconPath: "/static/tab/myself-active.png",
						text: '我的',
						pagePath: "/pages/index/myself",
						iconWith: '50',
						iconHeight: '50',
					}
				]
			},
			selected: this.current,
		}
	},
	//接收父组件传来的参数
	props: {
		//参数名
		current: {
			type: [Number, String],//参数类型
			default: 0//默认值
		},
	},
	methods: {
		changPage(index) {
			if(index != this.selected){
				//页面跳转
				uni.redirectTo({
					url: this.tabBar.list[index].pagePath
				})
				//改变选中下标
				this.selected = index;
				if (this.selected == index){
					return
				} 
				this.$emit('change', index)
			}
		}
	},
}
</script>

<style scoped lang="less">
.tarbar-list {
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	height: 100rpx;
	background-color: #F8F8F8;
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 100;
}
.middle{
	border: 2px solid #4792DC;
	background-color: rgb(248,248,248);
	border-radius: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 99;
	margin-bottom: 30rpx;
	image {
		width: 100rpx;
		height: 100rpx;
	}
}
.barPart {
	width: 20%;
	font-size: 24rpx;
}

.barPart-item>view {
	text-align: center;
}

.barPart-item>image {
	bottom: 36rpx;
	position: fixed;
	margin-left: 44rpx;
	background-color: #F8F8F8;
	border-radius: 50%;
	object-fit: cover;
	object-position: center;
	z-index: 99;
}
</style>
