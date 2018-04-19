// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    cartList:[]
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
    //检查用户是否登录
   var value = wx.getStorageSync('isLogin')
   if(value == "true"){
     this.setData({isLogin:true})
     this.getCartList();
   }else{
    this.setData({isLogin:false})
   }
    //获取商品列表
  },
  getCartList:function(){
    wx.request({
      url: 'http://localhost/ajia_code/data/cart/list.php',
      header: {
        'Content-Type': 'application/json'
      },
      success: (res)=> {
        console.log(res,res);
        this.setData({
          cartList:res.data.data
        });
      }
    })
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
  jumpToLogin:function(){
    wx.navigateTo({
      url: '../login/login'
    })
  }
})