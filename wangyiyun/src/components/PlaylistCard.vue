<template>
    <li class="playlist-card" :class="{ col3: col === 3, col2: col === 2 }"  @click="gotoPlaylistDetailPage(item.id)">
        <div class="thumb">
            <img :src="`${item.picUrl}?imageView=1&type=webp&thumbnail=247x0`" alt="" />
            <span style="padding-right:5px">{{ item.playCount | formatPlayCount }}</span>
        </div>
        <h5>{{ item.name }}</h5>
    </li>
</template>

<script>
    export default {
        // props: ["item"],
        props: {
            item: Object,
            col: Number,
        },
        methods: {
            gotoPlaylistDetailPage: function (id) {
                // 编程式导航
                this.$router.push({ path: "playlist", query: { id } });
            },
        },
    }
</script>

<style lang="less" scoped>
    .playlist-card {
        list-style: none;
        flex-grow: 1;
        // margin-top: 3px;
        margin-bottom: 3px;
        .thumb {
            position: relative;
            img {
                width: 100%;
                display: block;
            }
            span {
                position: absolute;
                top: 0;
                right: 0;
                color: white;
            }
        }

        &.col3 {
            width: 30%;
            &:nth-child(3n + 2) {
                // outline: 5px solid red;
                margin-left: 3px;
                margin-right: 3px;
            }
        }
        &.col2 {
            width: 40%;
        }

        h5 {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
    }
</style>