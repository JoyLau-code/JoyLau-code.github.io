<template>
    <li class="song-card">
        <span class="num" :class="{'activeRed': index < 3}">{{`0${ index+1 }`.slice(-2)}}</span>
        <div class="song-pic">
            <div class="song-pic-img"></div>
        </div>
        <span class="song-name">{{ item.name }}</span>
        <br>
        <span class="singer">{{singer}} - {{album}}</span>
        <div class="song-play">
            <div class="play-btn"></div>
        </div>
    </li>
</template>

<script>
    export default {
        props:{
            item: Object,
            index: Number,
        },
        computed:{
            singer(){
                return this.item.ar.map(ar => ar.name).join('/')
            },
            album(){
                return this.item.al.name
            }
        }
    }
</script>

<style lang="less" scoped>
.song-card{
    position: relative;
    padding-bottom: 31px;
    // box-sizing: border-box;
    .num{
        font-size: 17px;
        position: absolute;
        left: 0;
        top: 8px;
    }
    .activeRed{
        color: red;
    }
    .song-pic{
        width: 10%;
        .song-pic-img{
            background: url('https://s3.music.126.net/mobile-new/img/index_icon_2x.png') no-repeat 0 0;
            width: 24px;
            height: 16px;
            background-size: 253px 111px;
            position: absolute;
            left: 26px;
            top: 25px;
        }
    }
    .song-name{
        font-size: 17px;
        position: absolute;
        left: 30px;
        top: 0;
    }
    .singer{
        font-size: 12px;
        position: absolute;
        left: 46px;
        top: 22px;
    }
    .song-play{
        .play-btn{
            background: url('https://s3.music.126.net/mobile-new/img/index_icon_2x.png'); 
            width: 22px;
            height: 22px;
            background-position: -24px 0;
            background-size: 166px 97px;
            position: absolute;
            right: 0;
            top: 0;
        }
    }
}
</style>