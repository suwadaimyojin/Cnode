<template>


    <div class="Home">
   <div class="list-item" v-for="(i,index) in this.homeData">
       <div class="user-img">
           <img :src="i.author.avatar_url" alt="">
       </div>
       <div class="content" >
           <div class="content-top">
               <span class="type">{{i.tab}}</span>
            <router-link :to="'/topic/'+i.id" @click.native="showTopic"> <span class="title">{{i.title}}</span></router-link>
           </div>
           <div class="content-bottom">
               <p>
                   <span >回复:{{i.reply_count}}/访问:{{i.visit_count}}</span>
                   <span style="text-align: right">最近一次回复: {{i.last_reply_at|timeF(i.last_reply_at)}}</span>
               </p>
           </div>
  <!--         <div v-html="i.content"></div>-->
       </div>
   </div>

    </div>
</template>

<script>
    export default {
        name:"Home",
        data() {

            return {
                homeData:[]
            }
        },
        created(){
          this. getHomeData();
        },
        methods: {
            showTopic(){
                this.$store.commit("showTopic",true);
            },
            getHomeData(){
                this.$store.commit("showWaiting",true);
             this.axios({
                 method:'get',
                 url:`https://cnodejs.org/api/v1/topics?page=1&tab=all`
             }).then(res=>{
                 console.log(res.data.data);
                 this.homeData = res.data.data
                 this.$store.commit("showWaiting",false);
             })
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @media all and(min-width: 1200px) {
    .Home{
        width: 80%;
        margin: auto;
    }
        img{
            width: 120px;
            height: 120px;
        }
    }
.Home{

    .list-item{
        font-size: 15px;
        margin: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
        .user-img{
            img{
                margin-bottom: 15px;
                margin-right: 10px;
                width: 60px;
                height: 60px;
                min-width: 60px;
                min-height: 60px;
            }
        }
        .content{
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            white-space: nowrap;
            .content-top{
                display: flex;
                .type{
                    margin-right: 20px;
                    position: relative;
                    left: 0%;
                    width: 50px;
                    height: 25px;
                    line-height: 25px;
                    display: inline-block;
                    background-color: dodgerblue;
                    color: white;
                    text-shadow: 0px 0px 10px white,
                                 0px 0px 20px white;


                }
                .title{

                }
            }
            .content-bottom{
                position: relative;
                height: 100%;
                color: gray;
                text-align: left;
                margin-left:  70px;
                p{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    span{
                        display: inline-block;
                    }


                }
            }
        }

    }
}
</style>