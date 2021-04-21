// pages/levelOne/down/down.js

Page({
    data: {
        contentHeight: 0,
        userName:""
    },
    onReady: function () {
        let that = this
        wx.getStorage({
            key: 'userInfo',
            success: function(res){
                let data = JSON.parse(res.data)
                that.setData({
                    userName: data.nickName
                })
            }
        })
        this.setData({
            contentHeight:wx.getMenuButtonBoundingClientRect().bottom+5,
        })
    },
    goBack: function() {
        wx.navigateBack({
            delta: 1
        })
    },
    saveImg: function() {
        let url = "https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/level-down.png"
        let widget = this.selectComponent('.widget')
        getApp().globalData.downImage(widget, {url,name:this.data.userName,type:"牛刀小试"})
    },
    onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
			imageUrl:"/img/avatar.png",
		}
	}
})