<template>
  <div class="main">
     <header>
            <div class="icon-msg" @click="openAside()">
                <div style="width: 100%;height: 4px;background-color:#fff;"></div>
                <div style="width: 100%;height: 4px;background-color:#fff;"></div>
                <div style="width: 100%;height: 4px;background-color:#fff;"></div>
            </div>
            <h1  >CNode社区</h1>
     </header>

      <div class="content">
          <div class="navbar" >

              <!--<router-link to="/home">      <h1>首页</h1>    </router-link>
              <router-link to="/essence">   <h1>精华</h1>  </router-link>
              <router-link to="/share">     <h1>分享</h1>   </router-link>
              <router-link to="/q&a">       <h1>问答</h1>     </router-link>
              <router-link to="/advertise"> <h1>招聘</h1></router-link>-->
              <div v-for="(i,index) in this.op2" :key="index">
                  <div class="h1-cover"></div>
                  <h1  :class="{strong:getClass(k)}"v-for="(val,k) in i" :key="k" @click="changeTab(k)"> {{k}}</h1>
              </div>

          </div>
          <div class="main">
              <Home v-if="this.default===String(Object.keys(this.op2[0]))" />
              <Essence  v-if="this.default===String(Object.keys(this.op2[1]))"></Essence>
          </div>
      </div>


  </div>
</template>

<script>
// @ is an alias to /src
import Home from '../components/main/Home.vue'
import Essence from '../components/main/Essence.vue'

export default {
    data(){
        return{
            asideOpenFlag:false,
            default:"Home",
            op: ['Home','Essence','Share','Q&A','Advertise'],
            op2:[{"Home":"all"},{"Essence":"good"},{"Share":"share"},{"Q&A":"ask"},{"advertise":"job"}]
        }
    },
    created(){
        this.default =String(Object.keys(this.op2[0]));

    },
      methods:{
          openAside(){
              this.$store.commit('showAsideMenu', true);
          },
          getClass(k){
              if( this.default ===k){
                  return true;
              }else
              {
                  return false;
              }
          },
          changeTab(i){

              this.default = i;

          }
      },

  name: 'Main',
  components: {
      Home,
      Essence,
  }
}

</script>
<style scoped lang="less">
    *{
        transition: all 0.2s ease;
    }
    .actived{
        transform: translateX(0%)!important;
    }
     .aside{
         background-color: #2196F3;
         height: 92%;
         width: 35%;
         position: absolute;
         left: 0;
         transform: translateX(-350%);
         transition: all 1s ease;
     }
    .strong{
        font-weight: bolder!important;
        font-size: 30px!important;
        transform: translateY(-20%);
    }

    header{
        display: flex;
        background-color: #2196F3;
        color: white;
        .icon-msg{

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 30px;
            height: 20px;
            margin: 20px 30px;
            div{

            }
        }

        h1{

            flex-grow: 1;
        }
    }
    .content{
        max-height: 850px;
        overflow: auto;
        .navbar{
            display: flex;
            justify-content: space-around;
            background-color: #2196F3;

              div{
                  h1{ transition: all 0.2s ease;
                      /*    border-bottom:2px solid white ;*/
                      cursor: pointer;
                      color: white;
                      font-size: 20px;
                      font-weight: normal;
                      position: relative;
                      &:hover .h1-cover{
                          width: 100%;
                      }

                  }
                  .h1-cover{
                      position: absolute;
                      border-bottom: 3px solid #fff;
                      width: 0%;
                      left: 50%;
                      transform: translateX(-50%);
                      height: 100%;
                      transition: all 0.5s ease;


                  }
              }


        }
    }
</style>