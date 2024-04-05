<!-- 积分明细页面 -->
<template>
	<view class="content">
		<view class="avatar">
			<view class="avatar-img"></view>
			<view class="avatar-text">
				<p>sunsan</p>
				<view class="score">
					<image src="../../static/icon/score-icon.png" style="height: 40rpx;width: 40rpx;"></image>
					<p>400</p>
					<uni-icons type="right" size="10" color="#fff"></uni-icons>
				</view>
			</view>
		</view>
		<h3 class="title">积分明细</h3>
		<view class="table">
			<table>
			    <thead>
			        <tr>
			            <th>时间</th>
			            <th>操作</th>
			            <th>积分变动</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td>2024-01-01</td>
			            <td>注册</td>
			            <td>+200</td>
			        </tr>
			        <tr>
			            <td>2024-01-05</td>
			            <td>观看直播</td>
			            <td>+2000</td>
			        </tr>
			        <tr>
			            <td>2024-01-10</td>
			            <td>订阅</td>
			            <td>+200</td>
			        </tr>
					<tr>
					    <td>2024-01-10</td>
					    <td>订阅</td>
					    <td>+200</td>
					</tr>
					<tr>
					    <td>2024-01-10</td>
					    <td>订阅</td>
					    <td>+200</td>
					</tr>
			        <tr>
			            <td>2024-01-15</td>
			            <td>兑换</td>
			            <td>-2000</td>
			        </tr>
			        <tr>
			            <td>2024-01-20</td>
			            <td>签到</td>
			            <td>+100</td>
			        </tr>
			        <tr>
			            <td>2024-01-25</td>
			            <td>邀请好友</td>
			            <td>+500</td>
			        </tr>
			        <tr>
			            <td>2024-01-30</td>
			            <td>兑换</td>
			            <td>-500</td>
			        </tr>
			    </tbody>
			</table>
		</view>
	</view>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.content{
	background-color: #fff;
	min-height:100vh;
}
.title{
	margin: 30rpx;
}
.table{
	padding: 10rpx;
}
.avatar {
	background-image: url('https://www.gcsis.cn/img/activity_banner.jpg');
	min-height: 10rem;
	padding: 2rem 1rem;
	box-sizing: border-box;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20rpx;
}
.avatar-img {
	border-radius: 50% 50%;
	height: 110rpx;
	width: 110rpx;
	background: url('../../static/icon/user-icon.png');
	background-color: #efefef;
	background-position: center;
	background-size: cover;
	border: 6rpx solid #ffffff;
	box-sizing: bord;
}
.avatar-text {
	line-height: 50rpx;
}

.avatar-text > p {
	color: #ffffff;
	font-weight: bold;
	text-shadow: 4rpx 4rpx 0px rgba(0, 0, 0, 0.1);
}
.score {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12rpx;
}
.score > img {
	height: 40rpx;
}
.score > p {
	color: #fff;
	text-shadow: 4rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	font-weight: bold;
}
 table {
        border-collapse: collapse;
        width: 100%;
		color:#505050;
    }

    th, td {
        padding:30rpx;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>
