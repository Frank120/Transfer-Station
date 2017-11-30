<template>
    <div class="hero-module" v-show="showHero">{{ title }}</div>
</template>

<script>
export default {
    name: 'hero',
    props: {
        showHero: {
            type: Boolean
        }
    },
    data() {
        return {
            title: 'this is hero module'
        };
    }
};
</script>

<style lang="stylus">
    @import './hero.styl';
</style>


