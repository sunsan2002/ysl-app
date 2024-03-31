// @/api/user.js
 
// 获取verify_token（百度云实名认证）
export function getVerifyToken() {
	return uni.$u.http.get('/szg-ynf/api/app/userDetail/verifyIdentify')
}
 
// 实名认证成功
export function h5VerifyIdentifyReturn() {
	return uni.$u.http.get('/szg-ynf/api/app/userDetail/h5VerifyIdentifyReturn')
}