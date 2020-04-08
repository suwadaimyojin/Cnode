<template>
    <transition name="slide-left">
        <div v-show="isShowAsideMenu" class="aside-menu">
            <div class="menu">

                <div class="user">
                    <div class="user-avatar" @click="showLogin">
                        <img  :src="userInfo.avatar_url" alt="">

                       <!-- <div class="cover"></div>--><!-- <div class="cover"></div>-->
                        <!-- <img @click="showLogin" :src="userInfo.avatar_url || 'https://icdn.microzz.com/20170417_vue_cnode/icon-unlogin.svg'" alt=""> -->
                    </div>
                    <div class="username">
                        {{userInfo.success ? userInfo.loginname : '点击头像登录'}}
                    </div>
                </div>

                <div class="infos block">

                    <div @click="showMsg"  class="new block">
                        <i class="icon-msg"></i>我的消息
                    </div>
                    <div @click="showNewArticle" class="new block">
                        <i class="icon-new"></i>发布话题
                    </div>
                    <div class="cotent-info" v-if="mark">
                        该功能因接口不提供无法使用关闭。
                    </div>

                    <div @click="showAbout" class="info block">
                        <i class="icon-info"></i>个人中心
                    </div>

             <!--       <div class="about block">
                        <i class="icon-about"></i>关于
                    </div>-->

                    <div class="cnode"></div>

                </div>

            </div>

            <div @click.stop.prevent="showAsideMenu" class="mask"></div>

        </div>
    </transition>

</template>


<script>
    export default {

        name: 'asideMenu',
        computed: {
            isShowAsideMenu() {
                return this.$store.state.isShowAsideMenu;
            },
            userInfo() {
                return this.$store.state.userInfo;
            }
        },
        methods: {
            showMsg(){
                this.$store.commit('showMsg', true);
            },
            showAsideMenu() {
                this.$store.commit('showAsideMenu', false);
            },
            showLogin() {
                this.$store.commit('showLogin', true);
            },
            showInfo() {
                this.$store.commit('showInfo', true);
                this.$router.push('/')
            },
            showNewArticle() {
                this.mark =true;
                setTimeout(e=>{
                    this.mark =false;
                },4000)
         /*       this.$store.commit('showNewArticle', true);*/
            },
            showAbout() {
              if(this.$store.state.ak){
                  this.$store.commit('showAbout', true);
              }else {
                  this.$store.commit('showLogin', true);
              }
            }
        },
        data(){
            return {
                mark:false
            }
        }
    }
</script>

<style lang="less" scoped>
    .cotent-info{
        display: block;
        width: 400px;
        height: 100px;
        background-color: #333;
        color: white;
         position: absolute;
        top: 50%;
        left: 45%;
        transform: translate(50% 50%);
        text-align: center;
        line-height: 100px;
        padding: 10px 10px;
        border-radius: 10px;
        letter-spacing: 3px;
        outline: none;
        transition: all 0.4s ease;
        text-shadow: 0px 0px 10px cornflowerblue,
        0px 0px 20px white;

        &:hover{
            background-color: rgba(10,10,10,0.5);
            color:white;
        }

    }

    .aside-menu {
        position: absolute;
        display: flex;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;

        .menu {
            display: flex;
            flex-direction: column;
            width: 220px;
            background-color: white;
            box-shadow: 0 0 12px gray;
            .user {
                padding-top: 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 200px;
                background-color:#333;
                color: white;
                .user-avatar {
                    overflow: hidden;

                    box-shadow: #E0E0E0 0px 1px 20px;
                    background-color: #eee;
                    width: 100px;
                    height: 100px;
                    box-sizing: border-box;
                    border-radius: 50px;
                    margin-bottom: 10px;
                    transition: all 0.8s ease;
                    cursor: pointer;
                    position: relative;

                    .cover{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 50px;
                        background-color: #333;
                        top: 0%;
                        transform: translateX(50%);
                        transition: all 0.3s ease;
                        &:hover{
                            transform: translateX(-50%);
                        }
                    }
                    &:hover{

                        box-shadow: #ffffff 0px 1px 30px;
                    }
                    img {
                        border: 1px solid #f4f4f4;
                        width: 100px;
                        height: 100px;
                        border-radius: 50px;
                        cursor: pointer;
                    }
                }

                .username {
                    font-size: 1.2rem;
                    margin: 20px;
                }
            }

            .infos {

                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;

                .block {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    padding-left: 50px;
                    align-items: center;
                    cursor: pointer;
                }

                .block + .block {
                    border-top: 1px solid rgba(0, 0, 0, .05);
                }
                i {
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    background-repeat: no-repeat;
                    margin-right: 8px;
                }
                .icon-msg {
                    background: url('../../common/icons/icon-msg-blue.svg');
                    background-size: contain;
                }
                .icon-collect {
                    background: url('../../common/icons/icon-collect.svg');
                    background-size: contain;
                }
                .icon-msg {
                    background: url('../../common/icons/icon-msg-blue.svg');
                    background-size: contain;
                }
                .icon-new {
                    background: url('../../common/icons/icon-new.svg');
                    background-size: contain;
                }
                .icon-info {
                    background: url('../../common/icons/icon-info.svg');
                    background-size: contain;
                }
                .icon-about {
                    background: url('../../common/icons/icon-about.svg');
                    background-size: contain;
                }
                .cnode {
                    margin-top: 150px;
                    flex: 1;
                    width: 50%;
                    background-color: red;
                    background: url('../../common/icons/icon-cnode.svg') no-repeat;
                    background-size: contain;
                    opacity: .1;
                }
            }
        }

        .mask {
            flex: 1;
        }
    }
</style>
