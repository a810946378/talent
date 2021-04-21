// pages/levelOne/down/down.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        contentHeight:0,
        userName:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
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
        let url = "https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level3/level-down.png"
        let widget = this.selectComponent('.widget')
        getApp().globalData.downImage(widget, {url,name:this.data.userName,type:"达人现身"})
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },
    onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
			imageUrl:"/img/avatar.png",
		}
	}
})