// pages/levelOne/question/question.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fail:false,
        nowtopicCount:0,
        nowtopic:{},
        questionList:[
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/question/1.png",
                answerList:[
                    {option:"A",des:"Linux",index:0,status:""},
                    {option:"B",des:"Openhub",index:1,status:""},
                    {option:"C",des:"OpenHatch",index:2,status:""},
                    {option:"D",des:"Apache",index:3,status:""}	
                ],
                answer:"D"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/question/2.png",
                answerList:[
                    {option:"A",des:"Rust",index:0,status:""},
                    {option:"B",des:"OpenAtom",index:1,status:""},
                    {option:"C",des:"FSF",index:2,status:""},
                    {option:"D",des:"ASWF",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/question/3.png",
                answerList:[
                    {option:"A",des:"Rust",index:0,status:""},
                    {option:"B",des:"CNCF",index:1,status:""},
                    {option:"C",des:"FSF",index:2,status:""},
                    {option:"D",des:"Linux",index:3,status:""}
                ],
                answer:"D"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/question/4.png",
                answerList:[
                    {option:"A",des:"Linaro",index:0,status:""},
                    {option:"B",des:"CNCF",index:1,status:""},
                    {option:"C",des:"FSF",index:2,status:""},
                    {option:"D",des:"Linux",index:3,status:""}
                ],
                answer:"B"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/question/5.png",
                answerList:[
                    {option:"A",des:"CNCF",index:0,status:""},
                    {option:"B",des:"FSF",index:1,status:""},
                    {option:"C",des:"SFLC",index:2,status:""},
                    {option:"D",des:"SODA",index:3,status:""}
                ],
                answer:"D"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/question/6.png",
                answerList:[
                    {option:"A",des:"SFLC",index:0,status:""},
                    {option:"B",des:"SODA",index:1,status:""},
                    {option:"C",des:"Apache",index:2,status:""},
                    {option:"D",des:"OpenAtom",index:3,status:""}
                ],
                answer:"D"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level1/question/7.png",
                answerList:[
                    {option:"A",des:"SFLC",index:0,status:""},
                    {option:"B",des:"FSF",index:1,status:""},
                    {option:"C",des:"OpenI",index:2,status:""},
                    {option:"D",des:"OpenAtom",index:3,status:""}
                ],
                answer:"C"
            },
        ]
    },
        /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.changeTopic()
    },
    changeTopic: function(){
        let nowtopicCount = this.data.nowtopicCount+1
        if(nowtopicCount>5){
            wx.redirectTo({
                url: '/pages/levelOne/success/success',
            })
            return
        }
        let list = this.data.questionList
        let len = list.length
        let index = parseInt(Math.random()*len)
        let nowtopic = list.splice(index,1)[0]
        this.setData({
            nowtopic,
            questionList:list,
            nowtopicCount
        })
    },
    handleClick: function(e){
        let item = e.currentTarget.dataset.item
        let answer = item.option
        if(answer==this.data.nowtopic.answer){
            let nowtopic = this.data.nowtopic
            nowtopic.answerList[item.index].status = "correct"
            this.setData({
                nowtopic
            })
            setTimeout(()=>{
                this.changeTopic()
            },300)
        }else{
            let nowtopic = this.data.nowtopic
            nowtopic.answerList[item.index].status = "error"
            this.setData({
                nowtopic
            })
            setTimeout(()=>{
                this.setData({
                    fail:true
                })
            },300)
        }
    },
    restart: function(){
        wx.redirectTo({
            url: '/pages/levelOne/start/start',
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