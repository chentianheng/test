<template>
  <div id="app">
    <!--音乐icon-->
    <img :class="audio.musicIcon" src="./assets/icon/music.png" @click="startPlayOrPause" alt=""/>

    <!--动态视图-->
      <router-view :style="{height : myHeight}"/>
    <!--音乐-->
      <audio ref="audio" id="music_mp3_0" class="dn" loop="loop"
             :src="music" :preload="audio.preload"
             @play="onPlay"
             @error="onError"
             @waiting="onWaiting"
             @playing="onPlaying"
             @pause="onPause"
             @timeupdate="onTimeupdate"
             @loadedmetadata="onLoadedmetadata"></audio>

  </div>
</template>
<script>
  import {audioPlay} from "./wx";

  export  default {
    data(){
      return{
        myHeight: (window.innerHeight) + 'px',
        music: 'https://zhaocha.yf-gz.cn/file/1558359586024_7e903f1a0ab60a058a2f3157b9ac84c8.mp3',
        audio: {
          musicIcon: {
            onPause: false,
            onPlay: true
          },
          currentTime: 0,
          maxTime: 0,
          playing: false,
          muted: true,
          speed: 1,
          waiting: true,
          preload: 'auto'
        },
        time:10,
        controlList: {
          // 不显示下载
          noDownload: false,
          // 不显示静音
          noMuted: false,
          // 不显示音量条
          noVolume: false,
          // 不显示进度条
          noProcess: false,
          // 只能播放一个
          onlyOnePlaying: false,
          // 不要快进按钮
          noSpeed: false
        },
      }
    },
    created(){
      audioPlay()
    },
    methods:{

      // audioAutoPlay(id){
      //   var audio = document.getElementById(id);
      //
      //   if (window.WeixinJSBridge) {
      //     WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      //       audio.play();
      //     }, false);
      //   } else {
      //     document.addEventListener("WeixinJSBridgeReady", function () {
      //       WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      //         audio.play();
      //       });
      //     }, false);
      //   }
      //   audio.play();
      //
      //   return false;
      // },

      // //处理微信浏览器音乐自动播放问题
      // audioAutoPlay() {
      //   var musicEle0 = document.getElementById('music_mp3_0');
      //   musicEle0.play();
      // },
      // musicPlay(isPlay) {
      //   if (isPlay && !this.audio.playing) {
      //     this.startPlay()
      //   }
      //   if (!isPlay && !this.audio.playing) {
      //     this.pausePlay()
      //   }
      // },
      onError() {
        console.log('onError')
        this.audio.waiting = true
      }
      ,
      startPlayOrPause() {
        // const that = this
        return this.audio.playing ? this.pausePlay() : this.startPlay()
      }
      ,
      // 开始播放
      startPlay() {
        this.$refs.audio.play()
      }
      ,
      // 暂停
      pausePlay() {
        this.$refs.audio.pause()
      }
      ,
      // 当音频暂停
      onPause(e) {
        this.audio.playing = false
        console.log("onPause")
        this.audio.musicIcon.onPlay = false
        this.audio.musicIcon.onPause = true
      }
      ,
      // 当音频开始等待
      onWaiting(res) {
      }
      ,
      onPlaying(res) {
      }
      ,
      // 当音频开始播放
      onPlay(res) {
        this.audio.musicIcon.onPlay = true
        this.audio.musicIcon.onPause = false
        this.audio.playing = true
        this.audio.loading = false
        if (!this.controlList.onlyOnePlaying) {
          return
        }
        let target = res.target
        let audios = document.getElementsByTagName('audio');
        [...audios].forEach((item) => {
          if (item !== target) {
            item.pause()
          }
        })
      }
      ,
      // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
      onTimeupdate(res) {
        this.audio.currentTime = res.target.currentTime
        this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
      }
      ,
      // 当加载语音流元数据完成后，会触发该事件的回调函数
      // 语音元数据主要是语音的长度之类的数据
      onLoadedmetadata(res) {
        // console.log('onLoadedmetadata')
        // this.showPositionValue = true
        // const that = this
        this.audio.waiting = false
        this.audio.maxTime = parseInt(res.target.duration)
        if (!this.audio.playing) {
          this.startPlay()
        }
      }
    },
  }


</script>
<style>
  @import "./assets/common/font/font.css";
#app {
  font-family: BMW-Light,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  *{
    margin: 0;

  }

  /*音乐样式*/
  .onPause {
    position: absolute;
    height: 45px;
    width: auto;
    left: 10px;
    top: 10px;
    z-index: 10
  }

  .onPlay {
    position: absolute;
    height: 45px;
    width: auto;
    left: 10px;
    top: 10px;
    z-index: 10;
    animation: rotating 2s linear infinite;
  }

  @keyframes rotating {
    to {transform: rotate(0)}
    from {transform: rotate(360deg)}
  }
</style>

