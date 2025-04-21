<template>
  <div>
    <Loader v-if="ui.isLoading" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useUIStore } from '~/stores/ui'
import Loader from '~/components/Loader.vue'

const ui = useUIStore()
</script>
