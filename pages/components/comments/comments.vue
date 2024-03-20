<template>
  <view class="btn" @tap="openComment">发布评论</view>
  <CComment
    ref="ccRef"
    v-model:userInfo="userInfo"
    v-model:tableData="tableData"
    v-model:tableTotal="tableTotal"
    @likeFun="likeFun"
    @replyFun="replyFun"
    @deleteFun="deleteFun"
    :deleteMode="deleteMode"
  ></CComment>
</template>

<script setup>
import CComment from "@/components/cc-comment/index";
import { ref } from "vue";

// 唤起新评论弹框
let ccRef = ref(null);
function openComment() {
  ccRef.value.newCommentFun();
}

// 点赞回调事件
function likeFun({ params }, callback) {
  console.log("likeFun", params);
  // 当请求失败, 调用callback重置点赞效果;
  // Demo如下:
  // axios.post("http://xxx/like", { id: params }).then((res) => {
  //   if (res.code !== 0) {
  //     callback(res);
  //   }
  // });
}

// 评论回调事件
function replyFun({ params }, callback) {
  console.log("replyFun", params);
  // 当请求成功, 调用callback执行评论插入;
  // Demo如下:
  // axios.post("http://xxx/reply", { ...params }).then((res) => {
  //   if (res.code === 0) {
  //     callback(res);
  //   }
  // });
  const res = { id: Math.random() }; // 很重要的回参! 必须拿到后端返回评论id! 删除需要!
  setTimeout(() => callback(res), 500); // 目前为了展示效果, 直接执行callback
}

/** 删除回调事件
 * mode 删除模式
 * -- bind: 当被删除的一级评论存在回复评论, 那么该评论内容变更显示为[当前评论内容已被移除]
 * -- only: 仅删除当前评论(后端删除相关联的回复评论, 否则总数显示不对)
 * -- all : 删除所有评论包括回复评论
 */
const deleteMode = ref("all");
function deleteFun({ params, mode }, callback) {
  console.log("deleteFun", { params, mode });
  // 当请求成功, 调用callback执行评论删除;
  switch (deleteMode) {
    case "bind":
      // 逻辑: 调用接口进行评论内容修改 update
      setTimeout(() => callback(), 500); // 目前为了展示效果, 直接执行callback
      break;
    case "only":
      // 逻辑: 调用接口删除一个评论 delete
      setTimeout(() => callback(), 500); // 目前为了展示效果, 直接执行callback
      break;
    default:
      // all
      // 逻辑: 调用接口删除多个评论 [delete]
      // Demo如下:
      // axios.post("http://xxx/delete", { ids: params }).then((res) => {
      //   if (res.code === 0) {
      //     callback(res);
      //   }
      // });
      setTimeout(() => callback(), 500); // 目前为了展示效果, 直接执行callback
      break;
  }
}
// ----模拟数据------模拟数据------模拟数据----
// 作者信息(提示: 一般来自localstorage, 如果是实时获取的话, 那么获取到数据后再v-if显示评论组件)
let userInfo = ref({
  id: 110, // 评论id
  user_name: "爱莲说", // 用户名
  user_avatar:
    "https://img.touxiangwu.com/uploads/allimg/2022053117/ivhiashhpu1.jpg", // 用户头像
});
let tableTotal = ref(4); // 评论总数
let tableData = ref([
  {
    id: 120, // 评论id
    parent_id: null, // 父级评论id
    reply_id: null, // 被回复人评论id
    reply_name: null, // 被回复人名称
    user_name: "爱莲说", // 用户名
    user_avatar:
      "http://tupian.qqw21.com/article/UploadPic/2021-1/202111921572654663.jpg", // 评论者头像地址
    user_content: "这个是今年发布的吗", // 评论内容
    is_like: false, // 是否点赞
    like_count: 120, // 点赞数统计
    create_time: "2024-01-01 09:16", // 创建时间
  },
  {
    id: 130,
    parent_id: 120, // 评论的父级id
    reply_id: 120, // 被回复评论id
    reply_name: "爱莲说", // 被回复人名称
    user_name: "xixi", // 用户名
    user_avatar:
      "http://tupian.qqw21.com/article/UploadPic/2021-1/202111921572654663.jpg", // 评论者头像地址
    user_content: "是的", // 评论内容
    is_like: false, // 是否点赞
    like_count: 67, // 点赞数统计
    create_time: "2024-01-01 17:06", // 创建时间
  },
  {
    id: 140,
    parent_id: 120, // 评论的父级id
    reply_id: 130, // 被回复评论id
    reply_name: "xixi", // 被回复人名称
    user_name: "守护宗主维护宗门", // 用户名
    user_avatar:
      "http://tupian.qqw21.com/article/UploadPic/2022-12/202212102137578766.jpg", // 评论者头像地址
    user_content: "不是把", // 评论内容
    is_like: false, // 是否点赞
    like_count: 16, // 点赞数统计
    create_time: "2024-01-02 23:08", // 创建时间
  },
  {
    id: 150,
    parent_id: null, // 评论的父级id
    reply_id: null, // 被回复评论id
    reply_name: null, // 被回复人名称
    user_name: "音乐制作人", // 用户名
    user_avatar:
      "https://img.keaitupian.cn/uploads/2021/03/15/feb4f91cad8a40d5985e0fed763b3f6c.jpg", // 评论者头像地址
    user_content:
      "这种感觉我从未有 Cause I got a crush on you who you 你是我的 我是你的 谁 再多一眼看一眼就会爆炸 再近一点靠近点快被融化", // 评论内容
    is_like: true, // 是否点赞
    like_count: 8, // 点赞数统计
    create_time: "2024-01-08 00:45", // 创建时间
  },
]); // 评论表
</script>

<style lang="scss" scoped>
.btn {
  text-align: center;
  color: #fff;
  padding: 20rpx;
  margin: 20rpx;
  border-radius: 20rpx;
  background-color: #2979ff;
}
page,
.content {
  height: 100%;
  width: 100%;
}
</style>
