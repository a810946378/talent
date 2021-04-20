// pages/levelOne/start/start.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        timer:null,
        activeStep:3,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    loadImgSuccess: function () {
        this.setData({
            timer:setInterval(()=>{
                let step = this.data.activeStep
                if(step<=0){
                    clearInterval(this.data.timer)
                    this.setData({
                        timer:null
                    })
                    wx.redirectTo({
                        url: '/pages/levelTwo/question/question',
                    })
                    return
                }
                step--
                this.setData({
                    activeStep:step
                })
            },1000)
        })
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
		}
	}
})