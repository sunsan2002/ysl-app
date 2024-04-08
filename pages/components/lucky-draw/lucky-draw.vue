<template>
  <view class="choose">
    <view class="count-down" v-if="data.begin >= 0">
      <count-dowm></count-dowm>
    </view>
    <view class="start" v-else>
      <view class="time" v-if="data.time == 0">
        <view class="end-img">
          <button v-if="!data.checkEnd" type="warn" @click="checkEnd">
            查看中奖名单
          </button>
          <image v-if="data.checkEnd" :src="data.list[data.endActive].img" />
        </view>
      </view>
      <view class="list" v-if="!data.checkEnd">
        <view
          class="item"
          :class="index === data.active ? 'active' : ''"
          v-for="(item, index) in data.list"
          :key="index"
        >
          <image :src="item.img" />
          <view>{{ item.name }}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { onMounted, reactive } from "vue";
import countDowm from "@/pages/components/count-dowm/count-dowm.vue";
const data = reactive({
  list: [
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/k13wromzf4o.jpg",
      name: "ttt",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/v1bo4wkb0tn.jpg",
      name: "t",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/prcnlqfomlf.jpg",
      name: "gere",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/ivhiashhpu1.jpg",
      name: "fref",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/4iiyukjqu43.jpg",
      name: "vrftb",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/2kekoxb3arc.jpg",
      name: "rgrt4b",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/fr5n4mf150k.jpg",
      name: "ewvcd",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/ta5vzinpqzk.jpg",
      name: "vwdvcsx",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/0jexeqzaccz.jpg",
      name: "wcw",
    },
    {
      img: "https://img.touxiangwu.com/uploads/allimg/2022053117/h3ceztjuuub.jpg",
      name: "edwv",
    },
  ],
  active: 0,
  time: 6,
  endActive: -1,
  checkEnd: false,
  begin: 5,
});
// 随机选人
const resetActive = () => {
  setTimeout(() => {
    if (data.time > 0) {
      data.active += 1;
      if (data.active == 10) {
        data.active = 0;
        data.list = resetList(data.list);
      }
      resetActive();
    }
  }, 150);
};
// 重置用户数组
const resetList = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var iRand = parseInt(arr.length * Math.random());
    var temp = arr[i];
    arr[i] = arr[iRand];
    arr[iRand] = temp;
  }
  return arr;
};
// 随机选人
const choosePersonTime = () => {
  setTimeout(() => {
    data.time -= 1;
    if (data.time <= 0) {
      // 得到最后获奖人
      data.endActive = data.active;
      data.active = -1;
    } else {
      choosePersonTime();
    }
  }, 1000);
};
// 查看选中名单
const checkEnd = () => {
  data.checkEnd = true;
};
// 开始倒计时
const beginTime = () => {
  setTimeout(() => {
    data.begin -= 1;
    if (data.begin < 0) {
      // 得到最后获奖人
      resetActive();
      choosePersonTime();
    } else {
      beginTime();
    }
  }, 1000);
};
onLoad((options) => {
  uni.setNavigationBarTitle({
    title: options.name,
  });
});
onMounted(() => {
  beginTime();
});
</script>
<style scoped lang="less">
.choose {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    RGB(55, 200, 210),
    RGB(32, 123, 196)
  );
  color: white;
}
.count-down{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.time {
  image {
    width: 250rpx;
    height: 250rpx;
    border-radius: 50%;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: orangered;
  z-index: 10;
}
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  .item {
    text-align: center;
    padding: 20rpx;
    image {
      width: 130rpx;
      height: 130rpx;
      border-radius: 50%;
    }
  }
}
.item,
.end-img {
  animation-name: likes; // 动画名称
  animation-direction: alternate; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
  animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
  animation-delay: 0s; // 动画延迟时间
  animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放
  animation-duration: 1s; // 动画完成时间
}
@keyframes likes {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.active {
  image {
    box-shadow: -5px -5px 5px 5px white;
  }
}
</style>
