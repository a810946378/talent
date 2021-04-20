const wxml = (data) => {
    return `
    <view class="container">
        <image mode="widthFix" class="bgImg" src="${data.url}" />
        <text class="name">亲爱的${data.name}</text>
        <text class="des">恭喜您获得达人现身勋章！</text>
    </view>
    `
}

const style = () => {
    return {
        container: {
            width: 375,
            height: 750,
            flexDirection: 'column',
            alignItems: 'center'
        },
        name: {
            marginTop: 330,
            fontSize: 16,
            color: '#ffffff',
            height: 25,
            width: 300,
            textAlign: 'center'
        },
        des: {
            marginTop: 5,
            fontSize: 16,
            color: '#ffffff',
            height: 25,
            width: 300,
            textAlign: 'center'
        },
        bgImg: {
            position: 'absolute',
            width: 375,
            height: 750,
            top: 0,
            left: 0
        }
    }
}

module.exports = {
    wxml,
    style
}