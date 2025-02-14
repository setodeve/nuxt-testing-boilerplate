<template>
  <p data-testid="count">{{ cnt }}</p>
  <button @click="emit('click')">{{ props.msg }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
const props = defineProps({
  msg: String,
  cnt: Number as Ref<number>
})
const emit = defineEmits(['click'])
</script>
