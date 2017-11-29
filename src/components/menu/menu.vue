<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="menu-header">
        <img class="menu-avatar" v-bind:src="url" alt="">
        <div class="menu-title">{{ title }}</div>
      </div>
      <div class="menu-ul">
        <div v-for='menu in menus' @click="updateHeader(MENU_CONVERT[menu], menu)">
          <router-link class="icon-quanbu iconfont item border-1px" :to="menu">
            <div class="menu-icon">
              <i class="iconfont " :class="'icon-'+ menu"></i>
            </div>
            <span class="menu-text">{{MENU_CONVERT[menu]}}</span>
            <div class="menu-new" v-show="menu ==='day' && news>0">
              <span>{{ news }}</span>
            </div>
          </router-link>
        </div>

      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>


<script>
import headUrl from '../../assets/head.png';
import { mapState } from 'vuex';
const MENU_CONVERT = { 'welfare': '福利', 'day': '每日推荐', 'ios': 'IOS', android: 'Android', web: '新品' };
export default {
  name: 'v-menu',
  components: {
    headUrl
  },
  props: {
    show: {
      type: Boolean
    }
  },
  data() {
    return {
      MENU_CONVERT: MENU_CONVERT,
      title: 'WU YAN ZU',
      url: headUrl
    };
  },
  computed: {
    ...mapState([
      'menus', 'news'
    ])
  },
  methods: {
    updateHeader(title, menu) {
      this.$store.commit('UPDATE_TITLE', title);
        this.$store.commit('UPDATE_MENUSHOW');
        if (menu === 'day') {
          this.$store.commit('UPDATE_NEWS');
        }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import './menu.styl';
</style>

