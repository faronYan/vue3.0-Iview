<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Dome">dome</router-link>
      <i-select v-model="SelectLang" @on-change="OnSelectLang" style="width:150px">
        <i-option value="zh">中文简体</i-option>
        <i-option value="en">English</i-option>
      </i-select>
    </div>

    <router-view/>
  </div>
</template>
<script>
    import {mapGetters, mapActions, mapState, mapMutations} from 'vuex'
    import Vue from "vue";
  export default{
      data(){
          return{
              SelectLang:this.lang,
          }
      },
      computed:{
          ...mapState('userOperating',['lang'])
      },
      methods:{
          ...mapMutations('userOperating',['setLang']),
          OnSelectLang(){
              this.$i18n.locale = this.SelectLang;
              this.setLang(this.SelectLang);
          }
      },
      mounted(){
        this.SelectLang = this.lang; /*语言默认值*/
      }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #19d6e1;
    }
  }
}
</style>
