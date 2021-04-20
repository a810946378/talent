// pages/levelOne/question/question.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nowtopicCount:0,
        nowtopic:{},
        questionList:[
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/1.png",
                answerList:[
                    {option:"A",des:"freeCodeCamp",index:0,status:""},
                    {option:"B",des:"OpenHarmony",index:1,status:""},
                    {option:"C",des:"OpenArkCompiler",index:2,status:""},
                    {option:"D",des:"EdgeGallery",index:3,status:""}
                ],
                answer:"B"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/2.png",
                answerList:[
                    {option:"A",des:"OpenHarmony",index:0,status:""},
                    {option:"B",des:"OpenArkCompiler",index:1,status:""},
                    {option:"C",des:"openEuler",index:2,status:""},
                    {option:"D",des:"openLooKeng",index:3,status:""}
                ],
                answer:"C"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/3.png",
                answerList:[
                    {option:"A",des:"Kubernetes",index:0,status:""},
                    {option:"B",des:"ServiceComb",index:1,status:""},
                    {option:"C",des:"openHarmony",index:2,status:""},
                    {option:"D",des:"KubeEdge",index:3,status:""}   
                ],
                answer:"B"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/4.png",
                answerList:[
                    {option:"A",des:"ServiceComb",index:0,status:""},
                    {option:"B",des:"Kubernetes",index:1,status:""},
                    {option:"C",des:"KubeEdge",index:2,status:""},
                    {option:"D",des:"openGauss",index:3,status:""} 
                ],
                answer:"D"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/5.png",
                answerList:[
                    {option:"A",des:"MindSpore",index:0,status:""},
                    {option:"B",des:"KubeEdge",index:1,status:""},
                    {option:"C",des:"openLooKeng",index:2,status:""},
                    {option:"D",des:"Karmada",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/6.png",
                answerList:[
                    {option:"A",des:"OpenHarmony",index:0,status:""},
                    {option:"B",des:"openGauss",index:1,status:""},
                    {option:"C",des:"openLooKeng",index:2,status:""},
                    {option:"D",des:"openEuler",index:3,status:""}
                ],
                answer:"C"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/7.png",
                answerList:[
                    {option:"A",des:"EdgeGallery",index:0,status:""},
                    {option:"B",des:"KubeEdge",index:1,status:""},
                    {option:"C",des:"ServiceComb",index:2,status:""},
                    {option:"D",des:"EdgeGallery",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/8.png",
                answerList:[
                    {option:"A",des:"LiteOS",index:0,status:""},
                    {option:"B",des:"Volcano",index:1,status:""},
                    {option:"C",des:"UCOS",index:2,status:""},
                    {option:"D",des:"Kubernetes",index:3,status:""}
                ],
                answer:"B"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/9.png",
                answerList:[
                    {option:"A",des:"Kubernetes",index:0,status:""},
                    {option:"B",des:"EdgeGallery",index:1,status:""},
                    {option:"C",des:"openGauss",index:2,status:""},
                    {option:"D",des:"Karmada",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/10.png",
                answerList:[
                    {option:"A",des:"LiteOS",index:0,status:""},
                    {option:"B",des:"Istio",index:1,status:""},
                    {option:"C",des:"SODA",index:2,status:""},
                    {option:"D",des:"KubeEdge",index:3,status:""} 
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/11.png",
                answerList:[
                    {option:"A",des:"Istio",index:0,status:""},
                    {option:"B",des:"Karmada",index:1,status:""},
                    {option:"C",des:"KubeEdge",index:2,status:""},
                    {option:"D",des:"OpenArkCompiler",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/12.png",
                answerList:[
                    {option:"A",des:"CarbonData",index:0,status:""},
                    {option:"B",des:"Volcano",index:1,status:""},
                    {option:"C",des:"OpenArkCompiler",index:2,status:""},
                    {option:"D",des:"LiteOS",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/13.png",
                answerList:[
                    {option:"A",des:"Karmada",index:0,status:""},
                    {option:"B",des:"Istio",index:1,status:""},
                    {option:"C",des:"CarbonData",index:2,status:""},
                    {option:"D",des:"Volcano",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"https://openeuler-website.obs.ap-southeast-1.myhuaweicloud.com/open-source-talent/level2/question/14.png",
                answerList:[
                    {option:"A",des:"OpenArkCompiler",index:0,status:""},
                    {option:"B",des:"MindSpore",index:1,status:""},
                    {option:"C",des:"openHarmony",index:2,status:""},
                    {option:"D",des:"openGauss",index:3,status:""}  
                ],
                answer:"A"
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
                url: '/pages/levelTwo/success/success',
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
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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
                wx.redirectTo({
                    url: '/pages/levelTwo/fail/fail',
                })
            },300)
        }
    },
    onShareAppMessage: function() {
		return {
			title:'和我一起变身开源达人吧',
			path:'pages/index/index',
		}
	}
})