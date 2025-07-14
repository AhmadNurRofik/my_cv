<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

const getBgColor = (level) => {
  switch (level.toLowerCase()) {
    case 'mahir':
      return 'bg-green-100'
    case 'menengah':
      return 'bg-yellow-100'
    default:
      return 'bg-white'
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data // ✅ PERBAIKAN DI SINI
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="skill" class="edu py-20 min-h-screen font-sans overflow-x-hidden">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-5 rounded-xl shadow-md border border-slate-200 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-lg font-semibold text-slate-800">{{ skill.name }}</h3>
          <p class="text-sm text-slate-500 mt-1">{{ skill.level }}</p>
        </div>
      </div>
      
    </div>
  </section>
</template>
