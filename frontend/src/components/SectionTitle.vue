<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    default: 'text-gray-800' // bisa diganti saat dipakai, misal ke 'text-white'
  }
});
</script>

<template>
  <div class="mb-12 text-center">
    <h2 :class="`text-4xl font-bold ${textColor}`">
      {{ title }}
    </h2>
    <div class="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
  </div>
</template>
