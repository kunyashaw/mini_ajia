// pages/userCenter/userCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  logout(){
    wx.request({
      url: 'http://localhost/ajia_code/data/user/logout.php',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
          console.log(res.data);
          wx.showToast({
            title: '退出登录成功'
          });
          //记在缓存中
          wx.setStorage({
            key: 'isLogin',
            data: 'false'
          })
          wx.switchTab({url:'../index/index'})
      }
    })
  }
})