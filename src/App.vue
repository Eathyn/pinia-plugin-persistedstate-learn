<!--<script setup>-->
<!--import { useCountStore } from './store/module/count.js'-->

<!--const countStore = useCountStore()-->

<!--function increment() {-->
<!--  countStore.increment()-->
<!--  const counter = JSON.stringify({-->
<!--    count1: countStore.count1,-->
<!--    count2: countStore.count2,-->
<!--  })-->
<!--  localStorage.setItem('counter', counter)-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div>count1: {{ countStore.count1 }}</div>-->
<!--  <div>count2: {{ countStore.count2 }}</div>-->
<!--  <button @click="increment">increment</button>-->
<!--</template>-->

<script setup>
import { useCountStore } from './store/module/count.js'

const countStore = useCountStore()
</script>

<template>
  <div>count1: {{ countStore.count1 }}</div>
  <div>count2: {{ countStore.count2 }}</div>
  <button @click="countStore.increment">increment</button>
</template>
