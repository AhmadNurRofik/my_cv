<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const projects = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

</script>

<template>
  <section id="proyek" class="edu py-20 min-h-screen font-sans overflow-x-hidden">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-52 object-cover"
          />

          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">{{ project.title }}</h3>
            <p class="text-slate-600 text-sm mb-4">{{ project.description }}</p>

            <div class="mb-4 flex flex-wrap">
              <span
                v-for="t in project.tech"
                :key="t"
                class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {{ t }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-indigo-600 font-semibold text-sm hover:underline"
            >
              Lihat Detail
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
