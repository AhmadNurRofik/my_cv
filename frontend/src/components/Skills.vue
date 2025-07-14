<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

const getBgColor = (level) => {
  switch (level.toLowerCase()) {
    case 'mahir':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'menengah':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200'
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
  <section id="skill" class="py-12 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-800 font-sans overflow-x-hidden">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" textColor="text-slate-900" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          :class="['p-5 rounded-xl shadow-md text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border', getBgColor(skill.level)]"
        >
          <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
          <p class="text-sm mt-1 capitalize">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
