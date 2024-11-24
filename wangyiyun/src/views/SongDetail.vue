<template>
  <div class="song-detail" v-if="song">
    <button class="back"  @click="$router.back()">返回</button>
    <!-- <h3>SongDetail - {{ $route.query.id }}</h3> -->
    <img
      class="anima"
      :class="{ playing: playing }"
      style="width: 200px; height: 200px; border-radius: 50%; margin-top:20%"
      :src="song.al.picUrl"
      alt=""
    />

    <div class="card">

      <div class="progress-bar">

        <div class="progress">
          
            <div class="mask" :style="{ width: (userValue / duration) * 100 + '%' }"></div>
            
            <div>
                
                <input type="range" style="width: 100%" min="0" :max="duration" v-model.number="userValue" @input="inputing = true" @change="inputing = false;$emit('change-play-time', userValue);"/>
            
            </div>
        
        </div>
        <div class="time">
            
            <div class="span">{{ currentTime | time2mmss }}</div>
            
            <div class="span">{{ duration | time2mmss }}</div>
        
        </div>

      </div>

      <div class="controls">

        <button>模式</button>
        
        <button>上</button>
        
        <button v-if="playing" @click="togglePlay">暂停</button>
        <button v-else @click="togglePlay">播放</button>
        
        <button>下</button>
        
        <button>列表</button>
      
      </div>
    
    </div>
  
  </div>
</template>

<script>
export default {
  props: {
    currentSongId: Number,
    playing: Boolean,
    currentTime: Number,
    duration: Number,
  },
  data: function () {
    return {
      song: null,
      userValue: this.currentTime,
      inputing: false,
    };
  },
  created: function () {
    this.axios
      .get("/song/detail", {
        params: {
          ids: this.$route.query.id,
        },
      })
      .then((res) => {
        this.song = res.data.songs[0];
        this.$emit("xxx",res.data.songs[0]);
      });
  },
  methods:{
    togglePlay(){
      this.$emit("toggle-play",!this.playing)
    },
    
  },
  watch: {
      currentTime: function (currentTime) {
        if (!this.inputing) {
          this.userValue = currentTime;
        }
      },
    },
};
</script>

<style lang="less" scoped>

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.song-detail {
    height: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .progress.bar{
          width: 100%;
          display: flex;
    }
    .progress {
        width: 60%; 
        height: 5px; 
        background: lightgray;
        margin: 0 auto;
        position: relative;
          .mask {
            width: 50%;
            height: 100%;
            background-color: rgb(218, 127, 94);
            z-index: 0;
          }
          input {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
    }
    .back{
        width: 50px;
        height: 50px;
        border: none;
        background-color: transparent;
    }

    .anima {
        margin-left: 20px;
        margin-top: 20px;
        margin: 0 auto;
        animation: rotate 3s linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
    }
    .playing {
        animation-play-state: running;
    }

    .card{
      margin-top: 30%;
    }
    .time{
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .controls{
        width: 60%;
        margin: 0 auto;
    }

}

</style>
