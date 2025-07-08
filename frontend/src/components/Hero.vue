<script setup>
import fotoProfil from '@/assets/images/IMG-20250428-WA0002-01.jpg';
</script>

<template>
  <section
    id="profil"
    class="w-full bg-gradient-to-b from-gray-900 to-black text-white py-20 shadow-lg"
  >
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      
      <!-- Bagian Teks -->
      <div class="md:w-1/2 mb-10 md:mb-0 animate-slide-in-left space-y-6">
        <h1 
          class="text-4xl md:text-5xl font-extrabold text-white"
          style="animation-delay: 200ms;"
        >
          Halo, Saya <span class="text-blue-400">Ahmad Nur Rofik</span>
        </h1>

        <p 
          class="text-lg md:text-xl text-gray-300"
          style="animation-delay: 400ms;"
        >
          Mahasiswa Informatika yang antusias dalam <span class="text-blue-400 font-semibold">pengembangan web</span> dan <span class="text-blue-400 font-semibold">desain antarmuka</span> modern.
        </p>

        <a 
          href="#kontak" 
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 animate-slide-in-left"
          style="animation-delay: 600ms;"
        >
          ✉️ Hubungi Saya
        </a>
      </div>

      <!-- Bagian Gambar -->
      <div class="md:w-1/2 flex justify-center relative animate-slide-in-right">
        <div class="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 transform hover:scale-105 transition duration-500">
          <img
            :src="fotoProfil"
            alt="Foto Profil"
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

        <!-- Efek dekorasi -->
        <div class="absolute w-24 h-24 bg-blue-500 opacity-30 rounded-full -top-6 -left-6 blur-2xl"></div>
        <div class="absolute w-16 h-16 bg-purple-600 opacity-40 rounded-full -bottom-6 -right-6 blur-xl"></div>
      </div>

    </div>
  </section>
</template>
