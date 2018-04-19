// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: null,
    id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.lid
    })
    wx.request({
      url: 'http://localhost/ajia_code/data/product/details.php?lid=' + options.lid,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log(res);
        this.setData({
          details: res.data.details
        })
      }
    })
  },
  checkUserLogin() {
    //var session_id = wx.getStorageSync('PHPSESSID');//获取本地取存储的sessionID  
    //header头部加入cookie   PHPSESSID为php服务器跟浏览器中cookie中的session_id名字，不能更换，java为：JSESSIONID
    //var header = { 'content-type': 'application/json', 'Cookie': 'PHPSESSID=' + session_id }

    wx.request({
      url: 'http://localhost/ajia_code/data/user/session_data.php',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.uname) {
          this.addToCart()
        } else {
          wx.showToast({
            title: '未登录，将跳转到登录页面'
          })
          wx.navigateTo({
            url: '../login/login'
          })
        }
      }
    })
  },
  addToCart() {


    //添加到购物车
    wx.request({
      url: 'http://localhost/ajia_code/data/cart/add.php?buyCount=1&lid=' + this.data.id,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log(res);
        if (res.data.code == 200) {
          wx.showToast({
            title: '成功'
          })
        }

      }
    })
  }
})