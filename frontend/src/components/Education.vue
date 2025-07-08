<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-14 bg-gradient-to-br from-white to-slate-100">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative mt-8">
        <div class="absolute h-full border-r-2 border-slate-300 left-1/2 transform -translate-x-1/2"></div>

        <div v-if="educationHistory.length === 0" class="text-center py-4 text-slate-500">
          Tidak ada data pendidikan yang tersedia.
        </div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-6 flex justify-between items-center w-full"
        >
          <!-- Kiri -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-6 text-right">
              <div class="bg-white shadow-md p-4 rounded-lg border border-slate-200">
                <p class="text-indigo-600 font-semibold text-xs tracking-wide">{{ edu.period }}</p>
                <h3 class="text-lg font-bold text-slate-800 mt-1">{{ edu.institution }}</h3>
                <p class="text-slate-600 text-sm">{{ edu.major }}</p>
              </div>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow z-10"></div>
            </div>
          </div>

          <!-- Kanan -->
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow z-10"></div>
            </div>
            <div class="w-1/2 pl-6 text-left">
              <div class="bg-white shadow-md p-4 rounded-lg border border-slate-200">
                <p class="text-indigo-600 font-semibold text-xs tracking-wide">{{ edu.period }}</p>
                <h3 class="text-lg font-bold text-slate-800 mt-1">{{ edu.institution }}</h3>
                <p class="text-slate-600 text-sm">{{ edu.major }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
