import { wxml, style } from './utils/wxml-to-canvas.js'
App({
	globalData: {
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
						fail: function () {
							wx.hideLoading()
							wx.showToast({
								title: '保存失败',
								icon: 'error',
								duration: 2000
							})
						}
					})
				}).catch(()=>{
					wx.hideLoading()
				})
			}).catch(()=>{
				wx.hideLoading()
			})
		}
	},
	onLaunch: function () {
		
	}
});