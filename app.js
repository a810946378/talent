
import { wxml, style } from './utils/wxml-to-canvas.js'
App({
	globalData: {
		userInfo:"11111",
		downImage: function(widget,data) {
			wx.showLoading({
				title : '图片生成中',
				mask: true
			});
			const p1 = widget.renderToCanvas({ 
				wxml: wxml(data),
				style: style() 
			})
			p1.then(() => {
				const p2 = widget.canvasToTempFilePath();
				p2.then(res => {
					wx.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function () {
							wx.hideLoading()
							wx.showToast({
								title: '保存成功',
								icon: 'success',
								duration: 2000
							})
						},
						fail: function (err) {
							wx.hideLoading()
							if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
								wx.openSetting({
									success(settingdata) {
										if (settingdata.authSetting['scope.writePhotosAlbum']) {
											console.log('获取权限成功')
										} else {
											console.log('获取权限失败')
										}
									}
								})
							} else{
								wx.showToast({
									title: '获取图片失败',
									icon: 'error',
									duration: 2000
								})
							}
						}
					})
				}).catch(()=>{
					wx.hideLoading()
				})
			}).catch(()=>{
				wx.hideLoading()
			})
			if(widget){
				return
			}
			wx.downloadFile({
				url,
				success: function (res) {
					wx.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function () {
							wx.showToast({
								title: '保存成功',
								icon: 'success',
								duration: 2000
							})
						},
						fail: function (err) {
							if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
								wx.openSetting({
									success(settingdata) {
										if (settingdata.authSetting['scope.writePhotosAlbum']) {
											console.log('获取权限成功')
										} else {
											console.log('获取权限失败')
										}
									}
								})
							} else{
								wx.showToast({
									title: '获取图片失败',
									icon: 'error',
									duration: 2000
								})
							}
						}
					})
				}
			})
		}
	},
	onLaunch: function () {
		wx.getSetting({
			success(res) {
				if (!res.authSetting['scope.writePhotosAlbum']) {
					wx.authorize({
						scope:'scope.writePhotosAlbum',
						success() {
							console.log('授权成功')
						}
					})
				}
			}
		})
	}
});