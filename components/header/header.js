// components/header/header.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:String
    },

    /**
     * 组件的初始数据
     */
    data: {
        height: 0,
        titleHeight:0,
    },
    lifetimes: {
        attached: function() {
            this.setData({
                height:wx.getMenuButtonBoundingClientRect().bottom,
                titleHeight:wx.getMenuButtonBoundingClientRect().height
            })
        }
    }
})
