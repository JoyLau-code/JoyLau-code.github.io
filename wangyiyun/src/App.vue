<template>
  <div id="app">
    <div class="logo">
      <span>网易云音乐</span>
    </div>
    <nav v-if="$route.meta.showNav">
      <router-link to="/"  :class="{ 'active': activeRoute === 'recommend'}">推荐音乐</router-link>
      <router-link to="/hot" :class="{ 'active': activeRoute === 'hot' }">热歌榜</router-link>
      <router-link to="/search" :class="{ 'active': activeRoute === 'search' }">搜索</router-link>
    </nav>
    <router-view @xxx='currentSong = $event' :currentSongId='currentSong?.id'  :playing='playing' :duration='duration' :currentTime='currentTime' @change-play-time="$refs.audioEle.currentTime = $event"
    @toggle-play="Toggle" />
    
    <audio autoplay v-if="currentSong" controls style="height:30px; display:none;" :src="`https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`" @play="playing = true" @pause="playing = false" @durationchange="duration=$event.target.duration" @timeupdate="currentTime = $event.target.currentTime" ref="audioEle"></audio>
    
    <PlaysongBar v-if="currentSong" :currentSong="currentSong" :playing="playing" @start-play-song="$refs.audioEle.play()" @pause-play-song="$refs.audioEle.pause()"/>

  </div>
</template>

<script>
import PlaysongBar from "@/components/PlaysongBar.vue";
export default {
  components: {
      PlaysongBar,
  },
  data: function() {
    return {
        duration: 0,
        currentTime: 0,
        currentSong: null,
        playing: false,
        activeRoute: this.$route.name, 
    };
  },
  methods:{
    Toggle: function(){
      this.playing = !this.playing;
      this.$refs.audioEle[this.playing ? "play" : "pause"]();
    },
  },
  created: function() {
    this.$watch('$route', (to) => {
      this.activeRoute = to.name;
    });
  },
};
</script>

<style lang="less">
.active {
  border-bottom: 3px solid #d43c33;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.logo{
  width: 100%;
  height: 84px;
  background-color: #d43c33;
    span{
      font-size: 20px;
      color: white;
      line-height: 84px;
      margin-left: 30px;
      box-sizing: border-box;
    }
}
nav {
  height: 40px;
  line-height: 40px;
  // padding: 30px;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d43c33;
    }
  }
}
</style>
