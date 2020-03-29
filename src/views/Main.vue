<template>
  <div class="main">
     <header>
            <i class="icon-msg">缩略</i>
            <h1>CNode社区</h1>
     </header>
      <div class="content">
          <div class="navbar">
              <!--<router-link to="/home">      <h1>首页</h1>    </router-link>
              <router-link to="/essence">   <h1>精华</h1>  </router-link>
              <router-link to="/share">     <h1>分享</h1>   </router-link>
              <router-link to="/q&a">       <h1>问答</h1>     </router-link>
              <router-link to="/advertise"> <h1>招聘</h1></router-link>-->
              <div v-for="(i,index) in this.op2" >
                  <div class="h1-cover"></div>
                  <h1 v-for="(val,key) in i" @click="changeTab(key)"> {{key}}</h1>
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
            default:"",
            op: ['Home','Essence','Share','Q&A','Advertise'],
            op2:[{"Home":"all"},{"Essence":"good"},{"Share":"share"},{"Q&A":"ask"},{"advertise":"job"}]
        }
    },
    created(){
        this.default =String(Object.keys(this.op2[0]));

    },
      methods:{
          changeTab(i){
              this.default = i;
          }
      },

  name: 'Main',
  components: {
      Home,
      Essence
  }
}

</script>
<style scoped lang="less">
    header{
        display: flex;
        background-color: #2196F3;
        color: white;
        i{
            display: block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            margin: auto 0px;
        }
        h1{

            flex-grow: 1;
        }
    }
    .content{
        .navbar{
            display: flex;
            justify-content: space-around;
            background-color: #2196F3;

              div{
                  h1{
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