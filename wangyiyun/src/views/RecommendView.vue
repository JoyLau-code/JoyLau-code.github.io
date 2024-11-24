<template>
    <div class="recommend">
        <h3 class="title">编辑推荐</h3>
        <ul class="personalized">
            <!-- <li v-for="item in personalized" :key="item.id">{{ item.name }}</li> -->
            <PlaylistCard v-for="item in personalized.slice(0, 6)" :key="item.id" :item="item" :col="3" />
        </ul>
        <h3 class="title">最新音乐</h3>
        <ul class="newsong">
            <!-- <li v-for="item in newsong" :key="item.id">{{ item.name }}</li> -->
            <NewsongCard v-for="item in newsong" :key="item.id" :item="item" @play-tihs-song="$emit('xxx',$event)" :currentSongId="currentSongId" :playing="playing" />
        </ul>
    </div>
</template>

<script>
import PlaylistCard from "@/components/PlaylistCard.vue";
import NewsongCard from "@/components/NewsongCard.vue";

    export default {
        props:{
            currentSongId: Number,
            playing: Boolean,
        },
        components: {
            PlaylistCard,
            NewsongCard,
        },
        data: function(){
            return {
                personalized: [],
                newsong: [],
            };
        
        },
        // methods:{
        //     xxx(){
        //         this.$emit("playsong",item);
        //     },
        // },
        created: function(){
            
            //获取推荐歌单
            this.axios.get("/personalized").then((response) =>{
                console.log("推荐歌单",response.data.result);
                this.personalized = response.data.result;
            });

            //获取最新音乐
             this.axios.get("/personalized/newsong").then((response) =>{
                console.log("最新音乐",response.data.result);
                this.newsong = response.data.result;
            });
        },
    };
</script>

<style lang="less" scoped>
    .recommend{
        margin-bottom: 60px;
    }
    .title{
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        margin-left: 10px;
        position: relative;
    }
    .title:after{
            content: " ";
            position: absolute;
            left: -10px;
            top: 50%;
            margin-top: -9px;
            width: 2px;
            height: 20px;
            background-color: #d33a31;
        }
    .personalized {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
    }
</style>