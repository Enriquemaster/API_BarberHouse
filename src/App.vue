<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="bg-black w-full text-white flex flex-col md:flex-row md:text-center md:px-7 md:py-5 justify-center items-center">
        <div class="flex flex-col md:flex-row md:gap-5 mt-4 text-center ">
          <img alt="Vue logo" class="w-3/4 md:w-1/6" src="@/assets/logo.png"  />
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink to="/citas">Citas</RouterLink>
          <RouterLink to="/productos">Productos</RouterLink>
          <RouterLink to="/servicios">Servicios</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

