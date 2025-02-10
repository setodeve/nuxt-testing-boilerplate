<script setup lang="ts">
import { ref } from 'vue'
const cnt = ref(0)
</script>

<template>
  <p data-testid="count">{{ cnt }}</p>
  <button @click="cnt++">Increment</button>
</template>