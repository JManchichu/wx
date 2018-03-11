var API_URL = "http://t.yushu.im/v2/movie/top250"
var until = require('../../state/until.js')

Page({
  data: {
    topMovieList: [],
    page: "0",
    text: "加载更多"
  },

  moreMovies: function () {
    var that = this
    that.setData({
      page: (parseInt(that.data.page)+25).toString()
    })
    if (parseInt(that.data.page)>=250){
      that.setData({
        text: "没有更多了"
      })
    } else {
      wx.request({
        url: API_URL + '?start=' + that.data.page + "&count=25",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          wx.hideToast();
          that.setData({
            topMovieList: that.data.topMovieList.concat(res.data.subjects)
          })
        }
      })
    }
  },

  onLoad: function (options) {
    var this_ = this;
    wx.showToast({
      title: '数据正在加载中',
      icon: "loading",
      duration: 5000
    });
    wx.request({
      url: API_URL + '?start=' + this_.data.page + "&count=25",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        wx.hideToast();
        this_.setData({
          topMovieList: res.data.subjects
        })
      }
    })
  },
  getmessage: function (e) {
    until.message(e)
  },
  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})