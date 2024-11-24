<template>
    <div class="playbar" @click="gotoPlaySongPage">
        
        <div class="cover">
            <img :src="currentSong.song?currentSong.picUrl:currentSong.al.picUrl" alt="">
        </div>  

        <h3>{{ currentSong.name }} <br> {{ artists }}</h3>

        <button v-if="playing" @click.stop="$emit('pause-play-song')">暂停</button>
        <button v-else @click.stop="$emit('start-play-song')">播放</button>
    </div>
</template>

<script>
    export default {
        props:["currentSong","playing"],
        methods:{
            gotoPlaySongPage: function () {
                this.$router.push({ 
                    path: "/song", 
                    query: { 
                        id: this.currentSong.id
                    },
                });
            }
        },
        computed:{
            artists(){
                return this.currentSong?.song?.artists.map(artist => artist.name).join('/')
            },
        },
    }
</script>

<style lang="less" scoped>
.playbar{
    width: 100%;
    height: 60px;
    background-color: rgb(252, 149, 111);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    .cover{
        width: 10%;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    
    h3{
        font-size: 15px;
        width: 70%;
    }
    button{
        border: none;
        color: none;
    }
}
</style>