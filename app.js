//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    config: {
      loginRequestUrlByMobile: 'https://juejin.im/auth/type/phoneNumber',
      loginRequestUrlByEMail: 'https://juejin.im/auth/type/email',
      timelineRequestUrl: 'https://timeline-merger-ms.juejin.im/v1', //热门推荐
      bannerRequestUrl: 'https://banner-storage-ms.juejin.im/v1',
      xiaoceRequestUrl: 'https://xiaoce-timeline-api-ms.juejin.im/v1',
      shortMsgMsRequestUrl: 'https://short-msg-ms.juejin.im/v1',
      apiRequestUrl: 'https://user-storage-api-ms.juejin.im/v1',
      notifyRequestUrl: 'https://ufp-api-ms.juejin.im/v1',
      postStorageApiMsRequestUrl: 'https://post-storage-api-ms.juejin.im/v1',
      entryViewStorageApiMsRequestUrl: 'https://entry-view-storage-api-ms.juejin.im/v1',
      lccroApiMsRequestUrl: 'https://lccro-api-ms.juejin.im/v1',
    }
  }
})