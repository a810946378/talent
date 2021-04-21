// pages/levelOne/success/success.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    down:function(e){
        wx.navigateTo({
            url: '/pages/levelTwo/down/down',
        })
    },
    restart: function(){
        wx.redirectTo({
            url: '/pages/levelThree/start/start',
        })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
			imageUrl:"/img/avatar.png",
		}
	}
})