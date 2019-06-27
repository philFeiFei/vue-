<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeLeft></HomeLeft>

    <div>
      Home1 <span>{{zfy}}</span>
    </div>
    <home-down :showNames="showName" :ifshow="ifshow" v-on:childSendMsg="transfer" @childSendMsg="transfer" @childCancelMsg="transfer"></home-down>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeLeft from './components/HomeLeft'
import HomeDown from './components/HomeDown'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeLeft,
    HomeDown

  },
  data() {
    return {
      showName: "我是你永远得不到的人",
      ifshow: true,
      zfy: '',
    }
  },
  methods: {
    transfer(msg) {
      this.zfy = msg
    },
  },


}
</script>



