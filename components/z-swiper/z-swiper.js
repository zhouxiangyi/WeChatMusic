// components/z-swiper/z-swiper.js
import API from '../..//utils/Api/api.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    background: ['red', 'yellwo', 'black'],
    banners:null

  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    created: function () {
      this.getBannerData()
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      //this.getBannerData()
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
      //获取轮播图数据
      getBannerData(){
        API.getBanner({type:1}).then((res)=>{
          this.setData({
            banners: res.banners
          })
          console.log(res.banners)
        })
      }
  }
})
