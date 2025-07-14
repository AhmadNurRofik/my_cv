<template>
  <section
    id="pendidikan"
    class="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 text-slate-800 font-sans"
  >
    <div class="container mx-auto px-4 md:px-6">
      <SectionTitle title="PENDIDIKAN" textColor="text-slate-900" />

      <div class="relative mt-12">
        <!-- Garis tengah timeline -->
        <div class="absolute top-0 bottom-0 left-1/2 hidden md:block w-0.5 bg-blue-300"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 flex flex-col md:flex-row items-center w-full"
        >
          <div
            :class="[
              'md:w-1/2 px-4',
              index % 2 === 0 ? 'md:pr-10 md:order-1' : 'md:pl-10 md:order-2'
            ]"
            class="w-full"
          >
            <div
              class="bg-white border border-blue-100 rounded-xl shadow-lg p-5 hover:shadow-xl transition duration-300 flex items-center gap-4"
            >
              <img
                :src="edu.logo"
                class="w-16 h-16 object-contain rounded-md bg-blue-50 p-2"
                alt="Logo Institusi"
              />
              <div :class="index % 2 === 0 ? 'text-right' : 'text-left'" class="w-full">
                <p class="text-sm font-semibold text-blue-600 mb-1">{{ edu.period }}</p>
                <h3 class="text-xl font-bold text-slate-800">{{ edu.institution }}</h3>
                <p class="text-slate-600 text-sm">{{ edu.major }}</p>
              </div>
            </div>
          </div>

          <!-- DOT timeline -->
          <div class="hidden md:flex w-0 md:w-10 justify-center relative z-10">
            <div class="w-4 h-4 bg-blue-500 rounded-full shadow-md translate-y-2"></div>
          </div>

          <!-- Spacer sisi sebaliknya untuk menjaga keseimbangan -->
          <div class="hidden md:block md:w-1/2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
