<template>
  <div id="app">

      <transition name="slide-top">
          <div class="html-cover" v-if="this.$store.state.isWaiting">
              <button class="load"> </button>
          </div>

      </transition>

    <router-view/>
         <AsideBox class="aside"></AsideBox>
       <transition name="slide-fade">
           <Login class="login" v-if="this.$store.state.isShowLogin"></Login>
       </transition>

  </div>
</template>
<script>
 import AsideBox from './components/aside/AsideBox.vue'
 import Login from  './components/aside/Login.vue'
export default {
    name:"App",
     data(){
       return{
           flag:false
       }
     },
    mounted(){
        console.log(this.$store.state.isShowLogin);
    },
    computed:{
        //监视另一种方法
       f1(){
          return this.$store.state.isShowLogin
        }
    },
    watch:{
        f1(nv,ov){
             if (nv===true){
                 this.flag =true;
             }
         }
    },

  components:{
  AsideBox,
      Login
  }

}
</script>
<style>
    .app{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .html-cover{
        z-index: 50;
        position: absolute;
        background-color: rgba(244,244,244,0.5);
        width: 100%;
        height: 100%;
    }
    button.load {
    position: absolute;
        top: 50%;
        border: none;
        background-color: rgba(255,255,255,0);
        cursor: default;
        pointer-events: none;
    }

    button.load:before {
        content: '';
        display: inline-block;
        width:  3em;
        height: 3em;
        margin-right: 0.5em;
        color: #333;
        border: 1px solid #333;
        border-radius: 50%;
        vertical-align: -10%;
        clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%);
        animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotatez(0deg);
        }

        to {
            transform: rotatez(360deg);
        }
    }
.aside{
    height: 100%!important;
}
    .show-enter-active {
        transition: all .3s ease;
    }
    .show-leave-active {
        transition: all .2s ease-in;
    }
    .show-enter, .show-leave-active {
        transform: translateX(200px);
        opacity: 0;
    }

    *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
    .slide-fade-enter-active {
        transition: all .6s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(60px);
        opacity: 0;
    }

    .slide-left-enter-active {
        transition: all .3s ease;
    }
    .slide-left-leave-active {
        transition: all .2s ease-out;
    }
    .slide-left-enter, .slide-left-leave-active {
        transform: translateX(-150px);
        opacity: 0;
    }

    .slide-top-enter-active {
        transition: all .5s ease;
    }
    .slide-top-leave-active {
        transition: all .2s ease-out;
    }
    .slide-top-enter, .slide-top-leave-active {
        transform: translateY(-5px);
        opacity: 0;
    }

</style>
