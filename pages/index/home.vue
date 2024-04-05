<template>
  <view class="home top-content">
    <tabbar :current="0"></tabbar>
    <view class="top">
      <swiper class="swiper-box" indicator-dots="true">
        <swiper-item>
          <home-top-item></home-top-item>
        </swiper-item>
      </swiper>
    </view>
	<button @click="goto()">拍照打卡</button>
    <view class="middle">
      <view class="middle-item">
        <vectically-title :title="'精彩回顾'"></vectically-title>
        <view class="nums">
          <view
            class="nums-item"
            v-for="(item, index) in data.numList"
            :key="index"
          >
            <view class="nums-top">
              <view>{{ item.num }}</view>
              <view class="little">{{ item.unit }}</view>
              <view class="little">+</view>
            </view>
            <view class="nums-title">{{ item.title }}</view>
          </view>
        </view>
        <view class="agenda">
          <swiper class="swiper-box" indicator-dots="true">
            <swiper-item>
              <agenda-home-item></agenda-home-item>
            </swiper-item>
			<swiper-item>
			  <agenda-home-item></agenda-home-item>
			</swiper-item>
          </swiper>
        </view>
      </view>
	  <view class="middle-item">
	    <vectically-title :title="'精彩活动'"></vectically-title>
		<view class="swiper-item-show">
			<swiper class="swiper-box" indicator-dots="true">
			  <swiper-item>
			   <home-activity></home-activity>
			  </swiper-item>
			  <swiper-item>
			   <home-activity></home-activity>
			  </swiper-item>
			  <swiper-item>
			   <home-activity></home-activity>
			  </swiper-item>
			</swiper>
		</view>
	  </view>
	  <view class="middle-item">
		   <vectically-title :title="'重磅嘉宾'"></vectically-title>
		   <view class="swiper-item-show">
			   <swiper class="swiper-box" indicator-dots="true">
			     <swiper-item>
			       <home-guest></home-guest>
			     </swiper-item>
				 <swiper-item>
				   <home-guest></home-guest>
				 </swiper-item>
			   </swiper>
		   </view>
	  </view>
	  <view class="middle-item">
		   <vectically-title :title="'媒体中心'"></vectically-title>
		   <view class="swiper-item-show-one">
			   <swiper class="swiper-box" indicator-dots="true">
				 <swiper-item>
					 <home-video-item></home-video-item>
				 </swiper-item>
				 <swiper-item>
					 <home-video-item></home-video-item>
				 </swiper-item>
			   </swiper>
		   </view>
	  </view>
	  <view class="middle-item">
	  		<view class="nav">
	  		  <view class="topTabBar">
	  		    <view
	  		      class="grid"
	  		      v-for="(item, tbIndex) in data.handlingType"
	  		      :key="tbIndex"
	  		      @tap="showType(tbIndex)"
	  		    >
	  		      <view
	  		        class="text"
	  		        :class="[tbIndex == data.tabbarIndex ? 'active' : '']"
	  		        >{{ item.value }}</view
	  		      >
	  		    </view>
	  		  </view>
	  		  <view class="content">
	  		    <block v-if="data.tabbarIndex == 0">
	  		      <view class="content-show">
	  		        <home-video></home-video>
	  		      </view>
	  		    </block>
	  		    <block v-if="data.tabbarIndex == 1">
	  		      <view class="content-show"><home-video></home-video> </view>
	  		    </block>
	  		  </view>
	  		</view>
	  </view>
    </view>
	<view class="bottom">
		<button size="default" type="default" 
			style="color:#ffffff;backgroundColor:#3371e1;" 
			>关于大会</button>
			<button size="default" type="default" 
				style="color:#ffffff;backgroundColor:RGB(118,135,165);" 
			>参会指南</button>
	</view>
	<view class="right">
		<view class="right-item">
			<uni-icons type="redo" size="25" color="white"></uni-icons>
			<view class="text">分享</view>
		</view>
		<view class="right-item">
			<uni-icons type="email" size="25" color="white"></uni-icons>
			<view class="text">参会指南</view>
		</view>
		<view class="right-item">
			<uni-icons type="bars" size="25" color="white"></uni-icons>
			<view class="text">互动有礼</view>
		</view>
	</view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import tabbar from "/components/tabbar.vue";
import homeTopItem from "/pages/components/common/home-top-item.vue";
import vecticallyTitle from "/pages/components/common/vectically-title.vue";
import agendaHomeItem from "/pages/components/agenda/agenda-home-item.vue";
import homeActivity from '/pages/components/common/home-activity.vue';
import homeGuest from '/pages/components/common/home-guest.vue';
import homeVideoItem from '/pages/components/common/home-video-item.vue';
import homeVideo from "/pages/components/common/home-video/home-video.vue";

function goto(){
	uni.navigateTo({
		url: '/pages/index/photo-card',
		success: res => {},
		fail: () => {},
		complete: () => {}
	});
}

const data = reactive({
  numList: [
    {
      num: 500,
      unit: "",
      title: "主题演讲",
    },
    {
      num: 550,
      unit: "",
      title: "合作伙伴",
    },
    {
      num: 10000,
      unit: "",
      title: "与会嘉宾",
    },
    {
      num: 10,
      unit: "万",
      title: "与行业从事者",
    },
    {
      num: 250,
      unit: "",
      title: "直播观看",
    },
  ],
  handlingType: [
    {
      value: "精彩视频",
    },
    {
      value: "精彩图片",
    },
  ],
  tabbarIndex: 0,
});
// 切换显示内容
const showType = (tbIndex) => {
  data.tabbarIndex = tbIndex;
};
</script>
<style scoped lang="less">
.home {
  .top {
    .swiper-box {
      height: 630rpx;
    }
  }
  .middle {
	  padding:20rpx;
    .middle-item {
      .nums {
        display: flex;
        justify-content: space-around;
        .nums-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .nums-top {
            display: flex;
            justify-content: center;
            align-items: center;
            color: RGB(20, 127, 163);
            font-size: 20px;
            font-weight: bolder;
            .little {
              font-size: 15px;
            }
          }
          .nums-title {
            font-size: 13px;
          }
        }
      }
	  .agenda{
		  .swiper-box{
		   	height: 350rpx;	 
			background-color: rgb(241,246,249);
		  }
	  }
	  .swiper-item-show{
		  .swiper-box{
			  	height: 320rpx;	 
		  }
	  }
	  .swiper-item-show-one{
	  		  .swiper-box{
	  			  	height: 350rpx;	 
	  		  }
	  }
	  .nav {
		  background-color: RGB(244,249,252);
		  padding: 20rpx;
	    .topTabBar {
	      width: 100%;
	      height: 80upx;
	      display: flex;
	      justify-content: space-around;
	      background-color: white;
	      .grid {
	        width: 50%;
	        height: 100%;
	        display: flex;
	        align-items: center;
	        justify-content: center;
	        .text {
	          height: 100%;
	          display: flex;
	          align-items: center;
	        }
	      }
	    }
	    .content {
			margin-top: 10rpx;
	      height: 100%;
	    }
	  }
    }
    .middle-item > view {
      margin-bottom: 20rpx;
    }
  }
  .bottom{
	  display: flex;
	  justify-content: center;
  }
  .bottom > button{
	  width: 40%;
	  margin: 10rpx;
  }
  .right{
	  position: fixed;
	  right: 10rpx;
	  bottom: 100rpx;
	  .right-item{
		  background-image: linear-gradient(
		    to right,
		    RGB(55, 200, 210),
		    RGB(32, 123, 196)
		  );
		  border-radius: 50%;
		  margin-bottom: 30rpx;
		  height: 130rpx;
		  width: 130rpx;
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		  align-items: center;
		  color: white;
		  font-size: 12px;
	  }
  }
}
// 导航栏被选中
.active {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    RGB(55, 200, 210),
    RGB(32, 123, 196)
  );
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-content{
	padding-bottom: 130rpx;
}
</style>
