
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carouselItems:[],
    recommendedItems:[],
    newArrivalItems:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost/ajia_code/data/product/',
      header: {
        'Content-Type': 'application/json'
      },
      success: (res)=> {
        console.log(res);
        //因为这是第一次请求，在此保存session的数据
        //var wxSession = res.data.data.session_id;
         //存储缓存数据
         //服务器的session_id值
        //wx.setStorageSync('PHPSESSID', wxSession);

        // 处理recommendItems中href中等号后的lid
        for(var i=0;i<res.data.recommendedItems.length;i++){
          var href = res.data.recommendedItems[i].href;
          var pos = href.lastIndexOf('=');
          var lid = href.substring(pos+1)
          res.data.recommendedItems[i].lid = lid;
        }
        this.setData({
          carouselItems:res.data.carouselItems,
          recommendedItems:res.data.recommendedItems,
          newArrivalItems:res.data.newArrivalItems
        })
      }
    })
  },
  jump(e){
    console.log(e.currentTarget.id);
    var lid = this.data.recommendedItems[e.currentTarget.id].lid
    wx.navigateTo({
      url: '../detail/detail?lid='+lid
    })
  }
})