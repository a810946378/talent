
Page({
	data: {
		progressWidth: 0,
		canStart: false,
		canIUseGetUserProfile: false,
	},
	loadImgSuccess: function(){
		this.setData({
			timer: setInterval(()=>{
				if(this.data.progressWidth>=100){
					clearInterval(this.data.timer)
                    this.setData({
						timer:null,
						canStart:true
					})
					return
				}
				let width = this.data.progressWidth
				width++
				this.setData({
					progressWidth: width
				})
			},16)
		})
	},
	goStart: function() {
		if( this.data.canStart ){
			wx.getStorage({
				key: 'userInfo',
				success: function() {
					wx.navigateTo({
						url: '/pages/levelOne/start/start'
					})
				},
				fail: function(){
					wx.getUserProfile({
						desc: '用于获得勋章的展示', 
						success: (res) => {
							wx.setStorage({
								key: "userInfo",
								data: JSON.stringify(res.userInfo)
							})
							wx.navigateTo({
								url: '/pages/levelOne/start/start'
							})
						}
					})
				}
			})
		}
	},
	getUserInfo(e) {
		wx.getStorage({
			key: 'userInfo',
			success: function() {
				wx.navigateTo({
					url: '/pages/levelOne/start/start'
				})
			},
			fail: function(){
				wx.setStorage({
					key: "userInfo",
					data: e.detail.userInfo,
					success: function(){
						wx.navigateTo({
							url: '/pages/levelOne/start/start'
						})
					}
				})
			}
		})
	},
	onLoad() {
		if (wx.getUserProfile) {
			this.setData({
				canIUseGetUserProfile: true
			})
		}
	},
	onHide: function () {
        clearInterval(this.data.timer)
        this.setData({
            timer:null
        })
    },
	onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
		}
	}
})