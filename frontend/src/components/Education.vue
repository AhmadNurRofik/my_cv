<template>
  <section
    id="pendidikan"
    class="py-20 bg-gradient-to-br from-gray-900 to-black text-gray-100"
  >
    <div class="container mx-auto px-6">
      <SectionTitle title="PENDIDIKAN" />

      <div class="relative">
        <!-- Vertical timeline line -->
        <div
          class="absolute hidden md:block top-0 bottom-0 left-1/2 border-l-2 border-gray-700"
        ></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 md:mb-12 w-full relative"
        >
          <div
            :class="[ 
              'flex flex-col md:flex-row w-full items-center',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse' 
            ]"
          >
            <!-- Card box -->
            <div class="w-full md:w-1/2 md:px-8 flex justify-center md:justify-end relative">
              <!-- DOT timeline (absolute center) -->
              <div
                class="hidden md:block absolute top-1/2 w-4 h-4 bg-blue-500 rounded-full z-10 shadow-md"
                :class="index % 2 === 0
                  ? '-right-8 translate-y-[-50%]'
                  : '-left-8 translate-y-[-50%]'"
              ></div>

              <div
                class="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition duration-300 flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:max-w-md"
              >
                <img
                  :src="edu.logo"
                  class="w-16 h-16 object-contain rounded-lg bg-gray-700 p-2"
                  alt="Logo Institusi"
                />
                <div
                  :class="index % 2 === 0
                    ? 'text-center md:text-right'
                    : 'text-center md:text-left'
                  "
                  class="w-full"
                >
                  <p class="text-xs md:text-sm font-semibold text-blue-400 mb-1">
                    {{ edu.period }}
                  </p>
                  <h3 class="text-lg md:text-2xl font-bold text-white mb-1">
                    {{ edu.institution }}
                  </h3>
                  <p class="text-gray-300 text-xs md:text-base">
                    {{ edu.major }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Spacer div supaya flex di opposite side -->
            <div class="hidden md:block w-1/2"></div>
          </div>
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
