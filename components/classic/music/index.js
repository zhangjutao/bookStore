import { classicBeh } from '../classic-beh.js';

const mMgr = wx.getBackgroundAudioManager();

Component({
  /**
   * 组件的属性列表
   */

  behaviors: [classicBeh], //继承behaviors 其中有properties属性
  properties: {
    src:String,  //音乐播放地址
    title:String,
  },

  /**
   * 组件的初始数据
   * 播放音乐API 老版  新版
   */
  data: {
    playing:false,
    
    pauseSrc:'images/player@pause.png',
    playSrc:'images/player@play.png'
  },

  detached: function() {
    mMgr.pause()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(event){
      if(!this.data.playing){
        //图片要切换
        this.setData({
          playing: true
        })
        if (mMgr.src == this.properties.src) {
          mMgr.play()
        }else {
          mMgr.src = this.properties.src
        }
        mMgr.title = this.properties.title;
      }else{
        this.setData({
          playing: false
        })
        mMgr.pause();
      }
    }
  }
})
