export const mainLogin = async (event, context) => {
	const metaInfo = uni.getFacialRecognitionMetaInfo();
	uni.startFacialRecognitionVerify({
	    certifyId:"",
	    progressBarColor: "#CC0000", //刷脸圈的颜色
	    screenOrientation: "port", //认证界面UI朝向
	    success:(e)=>{
	        console.log(JSON.stringify(e))
	    },
	    fail:(e)=>{
	        console.log(JSON.stringify(e))
	    },
	    complete:(e)=>{
	        console.log(JSON.stringify(e))
	    }
	})

  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId
  })
  const result = await frvManager.getCertifyId({
    realName: '李珊',
    idCard: '431021200209210068',
    metaInfo: metaInfo
  })
  return result
};
