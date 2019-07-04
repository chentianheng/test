import store from './store'

export async function share() {
  await store.dispatch('latestWxConfig', "http://binarytre.com/")
  wx.config(store.state.wxConfig)
  let option = {
    title: '全城寻求潮流达人', // 分享标题, 请自行替换
    desc: '全新BMW 3系广州发布会', // 分享描述, 请自行替换
    link: "http://binarytre.com/", // 分享链接，根据自身项目决定是否需要split
    imgUrl: "https://mo.bintre.com/bmw.png" // 分享图标, 请自行替换，需要绝对路径
  }
  wx.onMenuShareTimeline({
    title: option.title, // 分享标题
    link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: option.imgUrl, // 分享图标
    success() {
      alert('分享朋友圈成功')
      // 用户确认分享后执行的回调函数
    },
    cancel() {
      // 用户取消分享后执行的回调函数
    }
  })
  wx.onMenuShareAppMessage({
    title: option.title, // 分享标题
    desc: option.desc, // 分享描述
    link: option.link,
    imgUrl: option.imgUrl, // 分享图标
    success: function () {
      alert('分享给朋友成功')
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  })
}