<template>
  <div class="main">
     <header>
            <div class="icon-msg" @click="openAside()">
                <div style="width: 100%;height: 4px;background-color:#fff;"></div>
                <div style="width: 100%;height: 4px;background-color:#fff;"></div>
                <div style="width: 100%;height: 4px;background-color:#fff;"></div>
            </div>
          <!--  <h1  >CNode社区</h1>-->
            <h1  ><img src="../static/img/cnodejs_light.svg" alt=""> </h1>
        <div>

            <i @click="showMsg" v-show="ak" class="msg"></i>
            <span v-show="ak" class="msg-count">{{msgCount}}</span>
        </div>

     </header>

      <div class="content">
          <div class="navbar" >

              <!--<router-link to="/home">      <h1>首页</h1>    </router-link>
              <router-link to="/essence">   <h1>精华</h1>  </router-link>
              <router-link to="/share">     <h1>分享</h1>   </router-link>
              <router-link to="/q&a">       <h1>问答</h1>     </router-link>
              <router-link to="/advertise"> <h1>招聘</h1></router-link>-->
              <div v-for="(i,index) in this.op2" :key="index" class="h1-bigbox">
                 <div class="h1-smbox" style="height: 50px;">
                         <h1  :class="{strong:getClass(k)}"v-for="(val,k) in i" :key="k" @click="changeTab(k)">
                             <router-link :to="'/'+k">
                             {{k}}
                             </router-link>
                         </h1>
                 </div>
              </div>
          </div>
          <router-view/>
          <div class="main">
        <!--      <Home v-if="this.default===String(Object.keys(this.op2[0]))" />
                <Essence  v-if="this.default===String(Object.keys(this.op2[1]))"></Essence>-->
          </div>
      </div>
      <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
    data(){
        return{
            msgCount: 0,
            asideOpenFlag:false,
            default:"Home",
            op: ['Home','Essence','Share','Q&A','Advertise'],
            op2:[{"Home":"all"},{"Essence":"good"},{"Share":"share"},{"Q&A":"ask"},{"Advertise":"job"}]
        }
    },
    created(){
        this.default =String(Object.keys(this.op2[0]));
        if (!this.ak) {
            return;
        }
        this.axios.get('https://cnodejs.org/api/v1/message/count?accesstoken=' + this.ak)
            .then(result => result.data)
            .then(data => {
                if (data.success) {
                    this.msgCount = data.data;
                }
            })

    },
      methods:{
          showMsg(){
              this.$store.commit('showMsg', true);
          },
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
    computed: {
        ak() {
            return this.$store.state.ak;
        }
    },

  name: 'Main',
  components: {
  }
}

</script>
<style scoped lang="less">
    footer{
        width: 100%;
        height: 80px;
        background-color: #333;
    }
    .msg{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width:  35px;
        height: 35px;
        margin: 20px 30px;
        position: absolute;
            right: 30px;
            top: 3px;
            background: url('../static/icons/icon-msg.svg') no-repeat;
            background-size: contain;
    }
    .msg-count{
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        width: 20px;
        height: 20px;
        right: 40px;
        top: 20px;
        text-align: center;
        background-color: #ff4081;
        border-radius: 10px;
        font-size: 80%;
    }
    *{
        transition: all 0.2s ease;
    }
    .actived{
        transform: translateX(0%)!important;
    }
     .aside{
         background-color:#333;
         height: 92%;
         width: 35%;
         position: absolute;
         left: 0;
         transform: translateX(-350%);
         transition: all 1s ease;
     }
    .strong{
        font-weight: bolder!important;
        font-size: 28px!important;
    }

    header{
        display: flex;
        background-color:#333;
        height: 80px;
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
         img{
             height: 40px;
         }
            flex-grow: 1;
        }
    }
    .content{
        height: 100%;
        min-height: 760px;
        overflow: auto;
        .navbar{
            display: flex;
            justify-content: space-around;
            background-color:#333;
            height: 60px;

         .h1-bigbox{
             position: relative;
             color: white;
             .h1-smbox{
                 color: white;
                 h1{
                     transition: all 0.2s ease;
                     /*    border-bottom:2px solid white ;*/
                     cursor: pointer;
                     color: white;
                     font-size: 20px;
                     margin: auto;
                     font-weight: normal;
                     position: relative;
                     top: 50%;
                     transform: translateY(-50%);
                     &:hover{
                         width: 100%;
                     }
                     a{
                         color: white;
                     }
                 }

             }
         }


        }
    }
</style>