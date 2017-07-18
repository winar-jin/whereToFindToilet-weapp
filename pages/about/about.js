//获取应用实例
var app = getApp()
Page({
  // 数据
  data: {
  },
  // 页面加载
  onLoad: function () {
  },
  //关于作者界面
  doAuthor: function () {
    wx.navigateTo({
      url: '../author/author'
    })
  },
  //功能列表界面
  doFunction() {
    wx.navigateTo({
      url: '../function/function'
    })
  },
  //帮助界面
  doHelp: function () {
    wx.navigateTo({
      url: '../help/help'
    })
  }
})
