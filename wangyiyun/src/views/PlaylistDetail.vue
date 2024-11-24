<template>
    <div v-if="tip">{{ tip }}</div>
    <div v-else-if="playlist">
        
        <div class="introduction"  v-if="playlist.coverImgUrl">

            <div class="background">

                <div class="bg" :style="{backgroundImage:` url(${playlist?.coverImgUrl})`}"></div>

                <img class="cover" :src="playlist.coverImgUrl" alt="" />

                <div style="width:200px;height:150px;font-weight:200px;padding:10px;">
                    
                    <span class="s1" style="font-size:17px;color:white">{{ playlist.name }}</span>

                    <div class="autor" style="display:flex;align-items:center">
                        <span class="s2">

                            <img style="width:40px;height:40px;border-radius:50%" :src="playlist.creator.avatarUrl" alt="">
                        
                        </span>

                        <span class="s3" style="color:white">{{ playlist.creator.nickname }}</span>
                    </div>
                    
                </div> 

            </div>

        </div>

        <div class="title">歌曲列表</div>

        <ul class="song-list">
            
            <li class="song-item" v-for="(track,index) in tracks" :key="track.id" :index="index">
                
                <div class="num" style="font-size:17px">{{ index + 1}}</div>
                
                <div class="boder">
                    <div class="song-mesg">
                        <div class="song-name" style="font-size:17px">{{ track?.name }}</div>
                        <div class="singer">
                            {{ track?.ar?.map(artist => artist.name).join('/')}}
                            -{{ track?.al?.name }}
                        </div>
                    </div>
                </div>

                <div class="icon">
                    <div class="play"></div>
                </div>
            </li>

        
        </ul>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            tip: "",
            playlist: null,
            tracks: null,
        };
    },
    created: function () {
        if (this.$route.query.id) {
            this.axios
                .get("https://apis.netstart.cn/music/playlist/detail", {
                    params: { id: this.$route.query.id },
                })
                .then((response) => {
                    // console.log(response.data.playlist.tracks.ar);
                    // console.log("图片",response.data.playlist.creator.avatarUrl);
                    // console.log("名字",response.data.playlist.creator.nickname);
                    // console.log(response.data.playlist.tracks.ar.map(ar => ar.name).join('/'));
                    this.playlist = response.data.playlist;
                    this.tracks = response.data.playlist.tracks;
                });
        } else {
            this.tip = "路由参数不合法";
        }
    },
};
</script>

<style lang="less" scoped>
.introduction{
    
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 30px 10px 30px 15px;
    .background{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
         .bg{
            width: 100%;
            height: 200px;
            position: absolute;
            top: 0;
            left: 0;
            background-position: 50%;
            background-size: cover;
            z-index: -1;
            filter: blur(20px);
            transform: scale(1.5);
            &::after{
                content: '';
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.25);
                position: absolute;
                top: 0;
                left: 0;
                z-index: -2;
            }
        }
        .cover{
            width: 150px;
            height: 150px;
        }
    }
   
}
.title{
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;

}

.song-list{
    
    .song-item{
        display: flex;
        padding-top: 10px;
        .num{
            width: 5%;
            font-size: 22px;
            margin-top: 10px;
            margin-left: 10px;
            box-sizing: border-box;
            color: rgb(179, 178, 178);
        }
        .song-mesg{
            width: 88%;
            .song-name{
                display: -webkit-box;
                -webkit-line-clamp: 1; 
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .singer{
                display: -webkit-box;
                -webkit-line-clamp: 1; 
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .icon{
            width: 7%;
            padding-top: 12px;
            
            .play{
                background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png");
                width: 22px;
                height: 22px;
                background-position: -24px 0;
                background-size: 166px 97px;
            }
        }
    }
}
.boder{
    width: 100%;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
}
</style>
