<template>
  <div id="app">

    <router-view/>
 <AsideBox class="aside"></AsideBox>
  </div>
</template>
<script>
 import AsideBox from './components/aside/AsideBox.vue'
export default {
name:"App",
  components:{
  AsideBox
  }

}
</script>
<style>

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
