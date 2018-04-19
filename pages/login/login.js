// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uname:'',
    upwd:''
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
  changeUname:function(e){
    //注意：input的change事件处理函数定义时不能写成箭头函数！
    this.setData({
      uname:e.detail.value
    })
  },
  changeUpwd:function(e){
    
    this.setData({
      upwd:e.detail.value
    })
  },
  dologin:function(){
    wx.request({
      url: 'http://localhost/ajia_code/data/user/login.php?uname='+this.data.uname+"&upwd="+this.data.upwd,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
          console.log(res.data);
          if(res.data.code == 200){
            wx.showToast({
              title: '登录成功',
            })
            wx.navigateBack();
          }
          else{
            wx.showModal({
              title: '登录失败',
              content: res.data.msg,
              showCancel:false
            })
          }
      }
    })
  }
})