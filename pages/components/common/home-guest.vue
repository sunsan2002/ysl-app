<template>
  <view class="home-guest">
    <view class="item" v-for="(item,index) in data.userList" :key="index">
      <view class="top">
        <image :src="item.pic"></image>
      </view>
      <view class="bottom">
        <view class="name">{{ item.name }}</view>
        <view class="describe">{{ item.describe }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
const data = reactive({
  userList: [
    {
      pic: "/static/home/person.png",
      name: "刘世经",
      describe: "基金会副理事长",
    },
	{
	  pic: "https://img2023.gcsis.cn/2023/4/c113813fe5414f2e9aa7cee9a4d1030e.png",
	  name: "沈昌祥",
	  describe: "中国工程院院士",
	},
	{
	  pic: "https://img2023.gcsis.cn/2023/4/aa1635e18de24d88b86753e1ca39a05e.png",
	  name: "郝志强",
	  describe: "教育与考试书记",
	},
  ],
});
</script>

<style scoped lang="less">
.home-guest {
  display: flex;
  .item {
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top {
      image {
        height: 150rpx;
        width: 150rpx;
        border-radius: 50%;
      }
    }
    .bottom {
      text-align: center;
      .name {
        font-size: 18px;
        font-weight: bold;
      }
      .describe {
        margin-top: 10rpx;
        color: RGB(200, 200, 200);
      }
    }
  }
}
.item > view {
  margin-top: 10rpx;
}
</style>
