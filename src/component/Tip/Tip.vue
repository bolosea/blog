<template>
  <div class="tip">
    <span class="info">
      <i class="iconfont icon-volume"></i> There are questions remain, We'll search for the answers together. But one thing we known for sure,the future is not set!
    </span>
    <span v-if="!username" class="login" @click="login">
      <i class="iconfont icon-gerenzhongxin1"></i>
      登录
    </span>
    <span v-else class="login logout">
      <span>{{username}}</span>
      <span @click="logout" class="test">退出</span>
    </span>
    <Login v-if="isShowLogin" @setuser="setuser"></Login>
  </div>
</template>
<script>
import Login from '@/component/Login/Login'

export default {
  components: {
    Login
  },
  data() {
    return {
      username: ''
    }
  },
  methods: {
    login() {
      this.$store.commit('showLogin')
    },
    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      this.username = ''
      this.$message({
        type: 'success',
        message: '退出成功!'
      })
    },
    setuser(username) {
      if (!username) {
        let user = JSON.parse(localStorage.getItem('user'))
        console.log('user', user)
        if (user) {
          return (this.username = user.name)
        }
        return
      }
      this.username = username
    }
  },
  computed: {
    isShowLogin() {
      return this.$store.state.isShowLogin
    }
  },
  mounted() {
    this.setuser()
  }
}
</script>
<style lang='less' scoped>
.tip {
  height: 40px;
  color: #666;
  padding: 0 20px;
  line-height: 40px;
  background-color: #fbfbfb;
  display: flex;
  justify-content: space-between;
}
.info {
  i {
    color: #56af45;
  }
}
span.login {
  color: #00a67c;
  cursor: pointer;
  i {
    color: gray;
    font-size: 20px;
    vertical-align: middle;
  }
}
span.logout {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999;
  &:hover {
    overflow: visible;
  }
}
</style>
