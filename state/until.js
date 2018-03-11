var msglist = {}

function message(e) {
  var this_ = this;
  wx.showToast({
    title: '数据正在加载中',
    icon: "loading",
    duration: 5000
  });
  wx.request({
    url: "http://t.yushu.im/v2/movie/subject/" + e.currentTarget.dataset.id,
    data: {},
    header: {
      'content-type': 'json'
    },
    success: function (res) {
      wx.hideToast();
      msglist = JSON.stringify(res.data)
      wx.navigateTo({
        url: '../exp/exp?msglist=' + msglist,
      })
    }
  })
}
module.exports = {
  message: message
}