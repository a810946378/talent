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
                imgUrl:"/img/openEuler.png",
                answerList:[
                    {option:"A",des:"OpenHarmony",index:0,status:""},
                    {option:"B",des:"OpenArkCompiler",index:1,status:""},
                    {option:"C",des:"openEuler",index:2,status:""},
                    {option:"D",des:"openLooKeng",index:3,status:""}
                ],
                answer:"C"
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
                imgUrl:"/img/mindSpore.png",
                answerList:[
                    {option:"A",des:"MindSpore",index:0,status:""},
                    {option:"B",des:"KubeEdge",index:1,status:""},
                    {option:"C",des:"openLooKeng",index:2,status:""},
                    {option:"D",des:"Karmada",index:3,status:""}
                ],
                answer:"A"
            },
            {
                imgUrl:"/img/openGemini-logo.png",
                answerList:[
                    {option:"A",des:"OpenHarmony",index:0,status:""},
                    {option:"B",des:"openGauss",index:1,status:""},
                    {option:"C",des:"openGemini",index:2,status:""},
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
                    {option:"D",des:"Kubernetes",index:3,status:""}
                ],
                answer:"A"
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
                imgUrl:"/img/openLooKengLogo.png",
                answerList:[
                    {option:"A",des:"openLookeng",index:0,status:""},
                    {option:"B",des:"Istio",index:1,status:""},
                    {option:"C",des:"SODA",index:2,status:""},
                    {option:"D",des:"KubeEdge",index:3,status:""} 
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
                imgUrl:"/img/modelBox.png",
                answerList:[
                    {option:"A",des:"OpenArkCompiler",index:0,status:""},
                    {option:"B",des:"MindSpore",index:1,status:""},
                    {option:"C",des:"openHarmony",index:2,status:""},
                    {option:"D",des:"ModelBox",index:3,status:""}  
                ],
                answer:"D"
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
			imageUrl:"/img/avatar.png",
		}
	}
})