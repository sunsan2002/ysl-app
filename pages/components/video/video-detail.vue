<template>
  <view class="video-detial">
    <view class="top">
      <view class="left">
        <view class="title">{{ data.titile }}</view>
      </view>
      <view class="right">
        <view class="right-top">
          <button size="mini" class="subscribe" plain="true">
            订阅
            <uni-icons
              type="plusempty"
              size="11"
              color="RGB(36,121,176)"
            ></uni-icons>
          </button>
        </view>
        <view class="right-bottom">
          <uni-icons type="eye" size="18" color="RGB(189,225,251)"></uni-icons>
          <view class="watchNum">{{ data.watchNum }}</view>
        </view>
      </view>
    </view>
    <view class="middle">
      <video-test ref="videoTestRef" />
    </view>
    <view class="bottom">
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
          <view class="right">
            <view class="danmu">
              <uni-easyinput
                class="uni-mt-5"
                v-model="value"
                suffixIcon="paperplane-filled"
                placeholder="点我发弹幕"
                @iconClick="handleSendDanmu"
              ></uni-easyinput>
            </view>
          </view>
        </view>
        <view class="content">
          <block v-if="data.tabbarIndex == 0">
            <view class="content-show">
              <agenda></agenda>
            </view>
          </block>
          <block v-if="data.tabbarIndex == 1">
            <view class="content-show" v-for="(item,index) in data.commentsList" :key='index'>
              <comments :commentContent="item"></comments>
            </view>
          </block>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { reactive, ref } from "vue";
import videoTest from "/pages/components/video/video-test.vue";
import comments from "/pages/components/comments/comments.vue";
import agenda from "/pages/components/agenda/agenda.vue";
const data = reactive({
  titile: "格致论道@西湖论剑",
  watchNum: 1000,
  tabbarIndex: 0,
  handlingType: [
    {
      value: "会议议程",
    },
    {
      value: "讨论区",
    },
  ],
  danmu: "",
  commentsList:[
	  {
	  pic:"https://tupian.qqw21.com/article/UploadPic/2020-6/20206417112066435.jpg",
	  userName:"嘻嘻",
	  time:"2024-03-19 18:00:00",
	  title:"2024最佳",
	  content:"我看过的最好的大会简介",
	  commentsNum:50,
	  likeNum:100,
	},
  ]
});
const videoTestRef = ref(null);
// 切换显示内容
const showType = (tbIndex) => {
  data.tabbarIndex = tbIndex;
};
// 发送弹幕
const handleSendDanmu = () => {
  console.log("发送弹幕");
};
</script>
<style scoped lang="less">
.video-detial {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15rpx 30rpx;
    background-image: url("/static/title-background.jfif");
    background-size: 100% 100%;
    height: 90rpx;
    .left {
      .title {
        font-size: 40rpx;
        font-weight: bolder;
        color: white;
        max-width: 450rpx;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      .right-top {
        margin-bottom: 10rpx;
        .subscribe {
          color: RGB(36, 121, 176);
          font-weight: bolder;
          border-radius: 25px;
          border: 2px solid white;
          background-color: white;
        }
      }
      .right-bottom {
        min-width: 120rpx;
        display: flex;
        justify-content: space-around;
		align-items: center;
        color: RGB(189, 225, 251);
		font-size: 12px;
      }
    }
  }
  .middle {
    margin: 0;
    padding: 0;
  }
  .bottom {
    .nav {
      .topTabBar {
        width: 100%;
        height: 80upx;
        display: flex;
        justify-content: space-around;
        background-color: white;
		border-bottom: 1.5px solid RGB(192,196,204);
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
        .right {
          width: 50%;
		  display: flex;
		  justify-content: center;
		  align-items: center;
          .danmu {
            margin-right: 10rpx;
            ::v-deep .uni-easyinput__content {
              font-size: 28rpx;
              height: 62rpx;
              border-radius: 25px;
			  background-color: RGB(244,244,246);
            }
          }
        }
      }
	  .content{
		height: 100%;
		// color: ;
	  }
    }
  }
}
// 导航栏被选中
.active {
  color: RGB(32,123,196);
  border-bottom: solid 4upx  RGB(32,123,196);
  font-weight: bolder;
}
::v-deep button {
  height: 50rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0rem 1rem;
}
</style>
