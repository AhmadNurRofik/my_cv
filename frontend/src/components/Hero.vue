<script setup>
import fotoProfil from '@/assets/images/IMG-20250428-WA0002-01.jpg';
</script>

<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    
    <!-- Bagian Teks -->
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1 
        class="text-5xl font-bold text-gray-800 mb-4 animate-slide-in-left" 
        style="animation-delay: 200ms;"
      >
        Halo, Saya <span class="text-blue-600">Ahmad Nur Rofik</span>
      </h1>

      <p 
        class="text-xl text-gray-600 mb-8 animate-slide-in-left" 
        style="animation-delay: 400ms;"
      >
        Mahasiswa Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
      </p>

      <a 
        href="#kontak" 
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms;"
      >
        Hubungi Saya
      </a>
    </div>

     <!-- Bagian Gambar -->
    <div class="md:w-1/2 flex justify-center animate-slide-in-right relative">
      <div class="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600 hover:scale-105 transition-transform duration-300">
        <img
          :src="fotoProfil"
          alt="Foto Profil"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Efek dekorasi -->
      <div class="absolute w-24 h-24 bg-blue-100 rounded-full -top-6 -left-6 blur-xl"></div>
      <div class="absolute w-16 h-16 bg-blue-300 rounded-full -bottom-6 -right-6 blur-xl opacity-60"></div>
    </div>
    
  </section>
</template>