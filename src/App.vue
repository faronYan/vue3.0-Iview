<template>
  <div id="app">
    <div id="nav">
      <div class="imx-logo">
        <router-link to="/">
        <img src="./assets/logoIMX.png">
        </router-link>
        <router-link to="/">首页</router-link>
        <router-link to="/Coin">币币交易</router-link>
        <router-link to="/otc">法币交易</router-link>
        <router-link to="/SuperWallet">超级钱包</router-link>
      </div>
      <div class="select">
        <i-select v-model="SelectBgColor" @on-change="OnSelectBgColor" style="width:100px">
          <i-option value="0">专业版</i-option>
          <i-option value="1">标准版</i-option>
        </i-select>
        <i-select v-model="SelectLang" @on-change="OnSelectLang" style="width:100px">
          <i-option value="zh">中文简体</i-option>
          <i-option value="en">English</i-option>
        </i-select>
      </div>
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
              SelectBgColor:this.color,
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
          },
          OnSelectBgColor(){
              let arr = ["#eaeff3",'#eee', '#e0e0e0', '#eaeaea','#232740'];
              if(this.SelectBgColor==1){
                  var body = document.querySelector('body')
                  body.style.transition = 'background-color 500ms'
                  let v = arr.pop();
                  body.style.backgroundColor = v;
              }else{
                  var body = document.querySelector('body')
                  body.style.transition = 'background-color 500ms'
                  let v = arr.shift();
                  body.style.backgroundColor = v;
              }
          }
      },
      mounted(){
        this.SelectLang = this.lang; /*语言默认值*/
          // (function changeColor() {
          //     var arr = ["#eaeff3",'#494b62', '#828595', '#c1c5cf','#232740'];
          //     var t = 1000
          //     var n = false
          //     var body = document.querySelector('body')
          //     body.style.transition = 'background-color 500ms'
          //     function change() {
          //         n = !n
          //         var v = arr.shift()
          //         body.style.backgroundColor = v;
          //         arr.push(v)
          //         if(n) {
          //             setTimeout(change, t)
          //         } else {
          //             setTimeout(change, 3*t)
          //         }
          //     }
          //     change()
          // })()
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
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  .imx-logo{
    display: flex;
    align-items: center;
    img{
      width: 150px;
      height: 25px;
    }
    a:nth-of-type(1){
      margin: 0;
    }
    a{
      font-size: 15px;
      margin-left: 30px;
    }
    a:hover{
      color: #19d6e1;
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #19d6e1;
    }
  }
  .select{
    display: flex;
  }
}
</style>
