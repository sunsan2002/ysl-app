<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
 /*每个页面公共css 
/* 文字多余部分用省略号代替，最多两行 */
.text-content-superfluous {
  word-break: break-word;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
<style scoped>
/* 	* {
	  background-color: #f0f1f8;
	} */
</style>