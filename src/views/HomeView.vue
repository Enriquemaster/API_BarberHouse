<template>
  <div class=" container mx-auto p-4">
    <h1 class="text-center text-white p-5 font-bold text-2xl">RESERVAS</h1>
    <div class="flex items-center justify-center overflow-x-auto">
      <table class="w-3/4 bg-white border border-gray-200">
        <thead>
        <tr class="text-center bg-zinc-400">
          <th class="py-2 px-4 border-b">Cliente</th>
          <th class="py-2 px-4 border-b">Servicio</th>
          <th class="py-2 px-4 border-b">Barbero</th>
          <th class="py-2 px-4 border-b">Fecha</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="listado === null">
          <td class="py-2 px-4 border-b" colspan="4">Cargando...</td>
        </tr>
        <tr v-else-if="listado.length === 0">
          <td class="py-2 px-4 border-b" colspan="4">No hay datos disponibles</td>
        </tr>
        <tr v-else v-for="citas in listado" :key="citas.id" class="hover:bg-gray-50 bg-zinc-200 text-center">
          <td class="py-2 px-4 border-b">{{ citas.cliente }}</td>
          <td class="py-2 px-4 border-b">{{ citas.servicio }}</td>
          <td class="py-2 px-4 border-b">{{ citas.barbero }}</td>
          <td class="py-2 px-4 border-b">{{ citas.fecha_registro }}</td>
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
      listado: null
    };
  },
  mounted() {
    this.getListado();
  },
  methods: {
    getListado() {
      axios.get('http://127.0.0.1:8000/api/listado')
          .then(response => {
            this.listado = response.data.data;
          })
          .catch(error => {
            console.error('Error al obtener el listado:', error);
          });
    }
  }
};
</script>