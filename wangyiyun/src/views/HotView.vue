<template>
    <div class="hot-view">
        <img src="https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg" alt="">
        <div class="hot-pic">
            <div class="pic"></div>
        </div>
        <ul class="hot-song">
            <!-- <HotsongCard v-for="(item,index) in hotsong.slice(0, 20)" :key="item.id" :item="item" :index="index" /> -->
            <NewsongCard v-for="item in hotsong.slice(0, 20)" :key="item.id" :item="item" @play-tihs-song="$emit('xxx',$event)" :currentSongId="currentSongId" :playing="playing"></NewsongCard>
        </ul>
    </div>
</template>

<script>
// import HotsongCard from '@/components/HotsongCard.vue';
import NewsongCard from '../components/NewsongCard.vue';

    export default {
        props:{
            currentSongId: Number,
            playing: Boolean,
        },
        components:{
            // HotsongCard,
            NewsongCard,
        },
        data:function(){
            return{
                hotsong:[],
            };
        },
        created: function(){
            //获取热歌榜
            this.axios.get("/playlist/detail?id=3778678").then((response) =>{
                console.log("热歌榜",response.data.playlist.tracks);
                this.hotsong = response.data.playlist.tracks;
            });
        },
    }
</script>

<style lang="less" scoped>
.hot-view{
    position: relative;
    img{
        width: 100%;
    }
    .hot-pic{
        .pic{
            background: url('https://s3.music.126.net/mobile-new/img/index_icon_2x.png') no-repeat -24px -30px;
            width: 142px;
            height: 67px;
            position: absolute;
            top: 38px;
            left: 45px;
            background-size: 166px 97px;
        }
    }  
}

</style>