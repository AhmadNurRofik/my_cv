<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

const getBgColor = (level) => {
  switch (level.toLowerCase()) {
    case 'mahir':
      return 'bg-green-600/20 text-green-300'
    case 'menengah':
      return 'bg-yellow-600/20 text-yellow-300'
    default:
      return 'bg-gray-700 text-gray-300'
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="skill" class="py-20 min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-sans overflow-x-hidden">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" textColor="text-white" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          :class="['p-5 rounded-xl shadow-md border border-gray-700 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg', getBgColor(skill.level)]"
        >
          <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
          <p class="text-sm mt-1">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
