<template>
    <div>
        <v-header></v-header>
        <loading :v-show="loadingShow"></loading>
        <v-hero></v-hero>
        <router-view></router-view>
    </div>
</template>

<script>
import vMenu from './components/menu/menu.vue';
import vHeader from './components/header/header.vue';
import loading from './components/loading/loading';
import vHero from './components/heromodule/hero';
import { mapState } from 'vuex';
export default {
    name: 'app',
    components: {
        vMenu,
        vHeader,
        loading,
        vHero
    },
    data() {
        return {
            firstShow: true,
            show: false
        };
    },
    computed: {
        ...mapState([
            'loadingShow'
        ])
    },
    methods: {
        isShow() {
            this.show = !this.show;
        },
        hideDetail() {
            this.detaileShow = false;
        }
    }
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        padding-top: 50px;
    }
    #app .show {
        transform: translateX(250px);
    }
    #app .page-cover {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 7;
    }
    #app .first{
        position: fixed;
        top: 0px;
        z-index: 20;
        width: 100%;
        height: 100%;
        background: red;
    }
</style>

