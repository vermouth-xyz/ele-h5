<template>
  <!-- <div class="center">{{ active }}</div> -->
  <RouterView />
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
const router = useRouter()
const route = useRoute()
const active = ref(route.name as string)
console.log(active)
watch(active, (nv) => {
  router.push({ name: nv })
})
</script>
