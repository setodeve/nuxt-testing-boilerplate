<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/Button.vue'
import Header from '~/components/Header.vue'
const cnt = ref(0)
const cntUp = () => {
  cnt.value++
}
</script>

<template>
  <Header />
  <Button msg="Hello" :cnt="cnt" @click="cntUp" />
</template>