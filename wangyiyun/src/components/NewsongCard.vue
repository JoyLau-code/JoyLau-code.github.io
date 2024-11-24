<template>
    <li class="newsong-card" :class="{ active: currentSongId === item.id}" @click="$emit('play-tihs-song',item)">
        <!-- <span class="num" :class="{'activeRed': index < 3}">{{`0${ index+1 }`.slice(-2)}}</span> -->
        <div class="thumb">
            <span class="a">{{ item.name }}</span>
            <br>
            <span class="b" v-for="ar in item.song ? item.song.artists : item.ar" :key="ar.id">{{ar.name}}</span>
        </div>

        <div class="icon">

            <div v-if="currentSongId !== item.id" class="play"></div>

            <div v-else class="anima" :class="{ playing: playing }">
                <span></span><span></span><span></span><span></span>
            </div>

        </div>
    </li>
</template>

<script>
    export default {
        props:["item","currentSongId","playing","index"],
    }
</script>

<style lang="less" scoped>
.active{
    background-color: #ffeded;
}
.newsong-card{
    width: 97%;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin-left: 10px;
    padding-left: 0;
    border-bottom: 1px solid lightgray;
    // .num{
    //     font-size: 17px;
    //     position: absolute;
    //     left: 0;
    //     top: 8px;
    // }
    // .activeRed{
    //     color: red;
    // }
    .thumb{
        width: 80%;
        .a{
            font-size: 17px;
            font-weight: 400px;
        }
        .b{
            font-size: 12px;
            // padding-top: 20px;
        }
    }
    .icon{
        width: 6%;
        .play{
            background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png");
            width: 22px;
            height: 22px;
            background-position: -24px 0;
            background-size: 166px 97px;
            margin-top: 10px;
        }

        @keyframes xxx {
            0% {
                transform: scaleY(1);
            }
            100% {
                transform: scaleY(0);
            }
        }

        .anima {
            width: 22px;
            height: 22px;
            display: flex;
            justify-content: space-around;
            // background-color: antiquewhite;
            span {
                display: block;
                width: 15%;
                height: 100%;
                background-color: red;
                animation: xxx 0.8s linear 0;
                animation-iteration-count: infinite;
                animation-direction: alternate;
                transform-origin: bottom;
                animation-play-state: paused;
                &:nth-child(1) {
                    animation-delay: 0s;
                }
                &:nth-child(2) {
                    animation-delay: -0.4s;
                }
                &:nth-child(3) {
                    animation-delay: -0.2s;
                }
                &:nth-child(4) {
                    animation-delay: -0.6s;
                }
            }
            &.playing {
                span {
                    animation-play-state: running;
                }
            }
        }    
    }
}
</style>