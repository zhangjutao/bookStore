// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    yesSrc:"images/like.png",
    noSrc:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count - 1 : count + 1;
      this.setData({
        count:count,
        like:!like
      })
      //激活
      let behavior = this.properties.like?'like':'cancel';
      //三个参数：事件名称； detail对象(提供给事件监听函数) ； 触发事件的选项
      this.triggerEvent('like',{
        behavior: behavior
      },{})
    }
  }
})
