<template>
  <div class="container mx-auto p-4">
      <h1 class="text-center text-white p-5 font-bold text-2xl">SERVICIOS</h1>
      <div class="flex items-center justify-center overflow-x-auto">
        <table class="w-3/4 bg-white border border-gray-200">
        <thead>
        <tr class=" text-center bg-zinc-400">
          <th class="py-2 px-4 border-b">Corte</th>
          <th class="py-2 px-4 border-b">Descripción</th>
          <th class="py-2 px-4 border-b">Precio</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="servicios === null">
          <td class="py-2 px-4 border-b" colspan="4">Cargando...</td>
        </tr>
        <tr v-else-if="servicios.length === 0">
          <td class="py-2 px-4 border-b" colspan="4">No hay datos disponibles</td>
        </tr>
        <tr v-else v-for="services in servicios" :key="services.id" class="hover:bg-gray-50 bg-zinc-200 text-center">
          <td class="py-2 px-4 border-b">{{ services.corte }}</td>
          <td class="py-2 px-4 border-b">{{ services.descripccion }}</td>
          <td class="py-2 px-4 border-b">{{ services.precio }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      servicios: null
    };
  },
  mounted() {
    this.getServicios();
  },
  methods: {
    getServicios() {
      axios.get('http://127.0.0.1:8000/api/servicios')
          .then(response => {
            this.servicios = response.data.data;
          })
          .catch(error => {
            console.error('Error al obtener los servicios:', error);
          });
    }
  }
};
</script>