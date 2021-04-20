Page({
    data: {
        nowtopicCount:0,
        nowtopic:{},
        questionList:[
            {
                answerList:[
                    {option:"A",des:"KubeEdge",index:0,status:""},
                    {option:"B",des:"Kubenetes",index:1,status:""}
                ],
                answer:"A"
            },
            {
                answerList:[
                    {option:"A",des:"SiteWhere",index:0,status:""},
                    {option:"B",des:"ISula",index:1,status:""}
                ],
                answer:"B"
            },
            {
                answerList:[
                    {option:"A",des:"OpenHarmony",index:0,status:""},
                    {option:"B",des:"Android",index:1,status:""}
                ],
                answer:"A"
            },
            {
                answerList:[
                    {option:"A",des:"Kubernetes",index:0,status:""},
                    {option:"B",des:"Karmada",index:1,status:""}
                ],
                answer:"B"
            },
            {
                answerList:[
                    {option:"A",des:"Volcano",index:0,status:""},
                    {option:"B",des:"vue",index:1,status:""} 
                ],
                answer:"A"
            },
            {
                answerList:[
                    {option:"A",des:"OpenStack",index:0,status:""},
                    {option:"B",des:"openEuler",index:1,status:""}
                ],
                answer:"B"
            },
            {
                answerList:[
                    {option:"A",des:"MindSpore",index:0,status:""},
                    {option:"B",des:"tensorflow",index:1,status:""}
                ],
                answer:"A"
            },
            {
                answerList:[
                    {option:"A",des:"HBase",index:0,status:""},
                    {option:"B",des:"openGauss",index:1,status:""}
                ],
                answer:"B"
            },
        ]
    },
    onLoad: function () {
        this.changeTopic()
    },
    changeTopic: function(){
        let nowtopicCount = this.data.nowtopicCount+1
        if(nowtopicCount>5){
            wx.redirectTo({
                url: '/pages/levelThree/success/success',
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
                wx.redirectTo({
                    url: '/pages/levelThree/fail/fail',
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