import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('counter', () => {
  const count1 = ref(0)
  const count2 = ref(0)

  function increment() {
    count1.value++
    count2.value += 10
  }

  return {
    count1,
    count2,
    increment,
  }
}, {
  persist: true,
})