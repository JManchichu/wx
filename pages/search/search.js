var API_URL = "http://t.yushu.im/v2/movie/search?q="
var until = require('../../state/until.js')

Page({
  data: {
    searchMovieList: [],
    searchvalue: ""
  },
  searchvalue: function(e){
    this.setData({
      searchvalue: e.detail.value
    })
  },
  searchclick: function(){
    var this_ = this;
    wx.showToast({
      title: '数据正在加载中',
      icon: "loading",
      duration: 5000
    });
    wx.request({
      url: API_URL + this_.data.searchvalue,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        wx.hideToast();
        console.log(res)
        this_.setData({
          searchMovieList: []
        })
        this_.setData({
          searchMovieList: res.data.subjects
        })
      }
    })
  },
  getmessage: function (e) {
    until.message(e)
  }
})