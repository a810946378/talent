// pages/levelOne/start/start.js
Page({
    data: {
        timer:null,
        activeStep:3,
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
                        url: '/pages/levelOne/question/question',
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

    onHide: function () {
 
    },
    onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
			imageUrl:"/img/avatar.png",
		}
	}
})