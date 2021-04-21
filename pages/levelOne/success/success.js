// pages/levelOne/success/success.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    down:function(e){
        wx.navigateTo({
            url: '/pages/levelOne/down/down',
        })
    },
    goTwo: function() {
        wx.redirectTo({
            url: '/pages/levelTwo/start/start',
        })
    },
    onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
			imageUrl:"/img/avatar.png",
		}
	}
})