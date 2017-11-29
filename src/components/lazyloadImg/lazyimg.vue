<template>
    <img v-lazy="imgObj" lazy="loading" class="bg-box" />
</template>

<script>
    export default {
        name: 'v-img',
        props: {
            imgUrl: {
                type: String
            }
        },
        computed: {
            imgObj() {
                return `${this.imgUrl}?imageView2/0/w/200`;
            }
        }
    };
</script>

<style lang="stylus">
    @import './lazyimg.styl';
</style>

