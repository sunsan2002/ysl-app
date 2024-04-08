<!-- 拍照打卡页面 -->
<template>
  <view class="box">
    <!-- 显示所有人拍照的图片 -->
    <view v-for="(item, index) in photoList" :key="index" class="photo-item">
      <img :src="item.photo" class="photo" />
      <view class="user-info">
        <img :src="item.avatar" class="avatar" />
        <span class="username">{{ item.username }}</span>
      </view>
      <view class="comment">{{ item.comment }}</view>
    </view>

    <!-- 点击我也要打卡 -->
    <view class="check-in">
      <button @click="takePhoto">我也要打卡</button>
    </view>

    <!-- 输入打卡宣言 -->
        <view v-if="showPrompt">
          <input v-model="inputValue" placeholder="请输入打卡宣言" />
          <button @click="confirmDeclaration">确认</button>
        </view>
		<!-- 评论弹窗 -->
		<uni-popup ref="cPopupRef" type="bottom" @change="popChange">
		  <view class="c_popup_box">
		    <view class="reply_text">
		      <template v-if="Object.keys(replyTemp).length">
		        <span class="text_aid">回复给</span>
		        <span class="text_main">{{
		          replyTemp.item2
		            ? replyTemp.item2.user_name
		            : replyTemp.item1.user_name
		        }}</span>
		      </template>
		      <span v-else class="text_main">发表新评论</span>
		    </view>
		    <view class="content">
		      <view class="text_area">
		        <uni-easyinput
		          class="text_area"
		          type="textarea"
		          v-model="commentValue"
		          :placeholder="commentPlaceholder"
		          :focus="focus"
		          trim
		          autoHeight
		          maxlength="300"
		        ></uni-easyinput>
		      </view>
		      <view class="send_btn" @tap="() => sendClick()">发送</view>
		    </view>
		  </view>
		</uni-popup>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const photoList = ref([
  { 
    avatar: 'https://img.keaitupian.cn/uploads/2021/03/15/feb4f91cad8a40d5985e0fed763b3f6c.jpg',
    username: 'sunsan',
    photo: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg',
    comment: '今天的大会很精彩',
  },
  {
    avatar: 'https://img.keaitupian.cn/uploads/2021/03/15/feb4f91cad8a40d5985e0fed763b3f6c.jpg',
    username: 'staticchit',
    photo: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/526899a3e3f7459da9c6a3120d1a9b84.jpg',
    comment: '很高兴来到这里~',
  },
  // 可以根据实际情况添加更多数据
]);


const declaration = ref('');

const showPrompt = ref(false)

function takePhoto() {
  // 调用uni-app的拍照功能
  uni.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['camera'],
    success: function(res) {
      showPrompt.value = true;
    }
  });
}

function confirmDeclaration() {
  declaration.value = inputValue.value;
  showPrompt.value = false;
  uni.showToast({
    title: '打卡成功',
    icon: 'success',
    duration: 2000
  });
}
</script>

<style lang="scss" scoped>
	.box{
		padding: 10rpx;
	}
.photo-item {
  margin-bottom: 50rpx;
}

.photo {
  width: 100%;
  border-radius: 30rpx;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  margin-right: 10rpx;
}

.username {
  color: #2DB1BA;
}

.comment {
  margin-top: 10rpx;
  color: #666;
}

.check-in {
  margin-top: 20rpx;
}

.check-in button {
	position: fixed;
	bottom: 30rpx;
  background-color: #2DB1BA;
  color: #fff;
  left:20rpx;
  right:20rpx;
  border: none;
  border-radius: 25rpx;
  padding: 8rpx 16rpx;
  cursor: pointer;
}

.declaration {
  margin-top: 20rpx;
}

.declaration p {
  margin-bottom: 10rpx;
}

.center {
  display: flex;
  align-items: center;
}
////////////////////////
.c_total {
  padding: 20rpx 30rpx 0 30rpx;
  font-size: 28rpx;
}
.empty_box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 150rpx 10rpx;
  font-size: 28rpx;
  .txt {
    color: RGB(32,123,196);
  }
  .click {
    color: $uni-color-primary;
  }
}
.c_comment {
  padding: 20rpx 30rpx;
  font-size: 28rpx;

  .children_item {
    padding: 20rpx 30rpx;
    margin-top: 10rpx;
    margin-left: 80rpx;
    background-color: $uni-bg-color-grey;
    .expand_reply {
      margin-top: 10rpx;
      margin-left: 80rpx;
      .txt {
        font-weight: 600;
         color: RGB(32,123,196);
      }
    }
  }
}
.c_popup_box {
  background-color: #fff;
  .reply_text {
    @extend .center;
    padding: 20rpx 20rpx 0 20rpx;
    font-size: 26rpx;
    .text_aid {
      color: $uni-text-color-grey;
      margin-right: 5rpx;
    }
    .text_main {
    }
  }
  .content {
    @extend .center;
    .text_area {
      flex: 1;
      padding: 20rpx;
    }
    .send_btn {
      @extend .center;
      justify-content: center;
      width: 120rpx;
      height: 60rpx;
      border-radius: 20rpx;
      font-size: 28rpx;
      color: #fff;
      background-color: $uni-color-primary;
      margin-right: 20rpx;
    }
  }
}
</style>
