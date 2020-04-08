<template>
<div class="topic">

    <div class="big">
        <div class="head">
            <div class="h-top">
                <span class="be-top" v-if="this.topicData.top===true">置顶</span>
                <h1 class="title">{{this.topicData.title}}</h1>
            </div>
            <div class="h-bottom">
               <div >
                   <span class="create-at">●发布于{{this.topicData.last_reply_at|timeF()}}</span>
                   <span class="user">●作者<!--{{this.topicData.author.loginname}}--> </span>
                   <span class="reply-count">●{{this.topicData.visit_count}}次浏览</span>
                   <span class="type">● 来自{{this.topicData.tab}}</span>
               </div>
                <button class="fav" @click="favThis()" style="margin-right: 20px; width: 80px" v-if="this.$store.state.ak">收藏</button>
                <button class="fav" @click="unFavThis()" v-if="isFav" style="width: 80px">取消收藏</button>
                <transition name="slide-fade">
                    <div class="favinfo" v-if="isFavSuccess">收藏成功</div>
                    <div class="favinfo" v-if="isUnFavSuccess">取消成功</div>
                </transition>

            </div>
        </div>
        <div class="main" v-html="this.markContent">

        </div>
    </div>
</div>
</template>

<script>
    const marked = require('marked');
    export default {
        data() {
            return {
                id:"",
                topicData:[],
                markContent:"",
                isFavSuccess:false,
                isUnFavSuccess:false,
                isFav:false,
            }
        },
        created(){
           if(this.$route.params.id){
               this.id = this.$route.params.id;
               this.getTopicData();
           }
        },
        mounted(){

        },
        methods: {
          getTopicData(){
              this.axios({
                  method:"get",
                  url:`https://cnodejs.org/api/v1/topic/${this.id}`,
                  params:{
                      "mdrender":"true"
                  }
              }).then(res=>{
                  if(res.status ==200){
                      this.topicData = res.data.data;
                      this.markContent =marked(this.topicData.content);
                  }

              })
          },
            unFavThis(){
                this.axios({
                    method: "post",
                    url: `https://cnodejs.org/api/v1/topic_collect/de_collect`,
                    data: {
                        "accesstoken": this.$store.state.ak,
                        "topic_id": this.id
                    }
                }).then(res=>{
                    if(res.status ==200){
                        this.isUnFavSuccess =true;
                        this.isFav =false;
                        setTimeout(e=>{
                            this.isUnFavSuccess =false;
                        },1000)
                    }
                })
            },
            favThis(){
                this.axios({
                    method:"post",
                    url:`https://cnodejs.org/api/v1/topic_collect/collect`,
                    data:{
                        "accesstoken": this.$store.state.ak,
                        "topic_id": this.id
                    }
                }).then(res=>{
                    if(res.status ==200){
                        console.log(res);
                        this.isFavSuccess =true;
                        this.isFav =true;
                        setTimeout(e=>{
                            this.isFavSuccess =false;
                        },1000)
                    }

                })
            }
        },
        components: {}
    }
</script>

<style   lang="less">

    .markdown-text img{
        width: 100%!important;
    }
    .favinfo{
        position: fixed;
        width: 200px;
        height: 100px;
        border-radius: 5px;
        color: white!important;
        font-size: 30px!important;
        line-height: 100px!important;
        text-align: center;
        background-color:#80bd01;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

    }
    .topic{
        background-color: #e5e5e5;
    .big{
        font-size: 100%;
        height: 100%;
        overflow: hidden;
        .head{
            border-bottom: 1px solid #e5e5e5;
            .h-top{

                font-size: 100%;
                font-weight: 700;
                margin: 8px 0;
                display: flex;
                vertical-align: bottom;
                width: 100%;
                height: 40px;
                line-height: 30px;

                span{
                    height: 30px;
                    color: white;
                    padding: 0 10px;
                    margin-right: 20px;
                    display: inline-block;
                    border-radius: 5px;
                    background-color: cornflowerblue;
                    box-shadow: 1px 1px 1px #333;
                    border-right: 1px solid #e5e5e5;
                    border-bottom: 1px solid #e5e5e5;
                    vertical-align: bottom;
                }
                h1{
                    display: inline-block;
                    white-space: nowrap;
                    flex-grow: 1;
                }
            }
            .h-bottom{
                display: flex;
                padding-bottom: 10px;
                div{
                    flex-grow: 1;
                    font-size: 12px;
                    color: #838383;
                    span{
                        margin-right: 10px;
                    }
                }
                .fav{
                    cursor: pointer;
                    transition: all 0.3s ease;
                    &:hover{
                        opacity: 0.6;

                    }
                    display: inline-block;
                    height: 40px;
                    padding: 0 10px;
                    border: none;
                    border-radius: 3px;
                    background-color: #80bd01;
                    color: white;
                }
            }
        }

        padding: 20px;
        background-color: #fff;
        width: 95%;
        min-height:650px;
        margin: auto;
        text-align: left;
        p{
            margin-bottom: 10px!important;
        }
        a{
            color: #08c;
            text-decoration: none;
        }
     ul{
         list-style: none;
     }
    }
    }
.main{

}
</style>