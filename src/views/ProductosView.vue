<template>
  <div class="container mx-auto p-4">
    <h1 class="text-center text-white p-5 font-bold text-2xl">PRODUCTOS</h1>
    <div class="flex items-center justify-center overflow-x-auto ">
      <table class="w-3/4 bg-white border border-gray-200">
        <thead>
        <tr class=" text-center bg-zinc-400">
          <th class="py-2 px-4 border-b">Nombre</th>
          <th class="py-2 px-4 border-b">Descripcion</th>
          <th class="py-2 px-4 border-b">Marca</th>
          <th class="py-2 px-4 border-b">Modelo</th>
          <th class="py-2 px-4 border-b">Precio</th>
          <th class="py-2 px-4 border-b">Referencia</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="productos === null">
          <td class="py-2 px-4 border-b" colspan="4">Cargando...</td>
        </tr>
        <tr v-else-if="productos.length === 0">
          <td class="py-2 px-4 border-b" colspan="4">No hay datos disponibles</td>
        </tr>
        <tr v-else v-for="produc in productos" :key="produc.id" class="hover:bg-gray-50 bg-zinc-200 text-center">
          <td class="py-2 px-4 border-b">{{ produc.nombre }}</td>
          <td class="py-2 px-4 border-b">{{ produc.descripccion }}</td>
          <td class="py-2 px-4 border-b">{{ produc.marca }}</td>
          <td class="py-2 px-4 border-b">{{ produc.modelo }}</td>
          <td class="py-2 px-4 border-b">{{ produc.precio }}</td>
          <td class="py-2 px-4 border-b">
            <img :src="getImageSrc(produc.foto)" alt="Producto" class="mx-auto w-1/4" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import { Base64 } from 'js-base64';

export default {
  data() {
    return {
      productos: null
    };
  },
  computed: {
    getImageSrc() {
      return (base64String) => {
        return `data:image/png;base64,${base64String}`;
      };
    },
  },
  mounted() {
    this.getProductos();
  },
  methods: {
    getProductos() {
      axios.get('http://127.0.0.1:8000/api/productos')
          .then(response => {
            this.productos = response.data.data;
          })
          .catch(error => {
            console.error('Error al obtener los productos:', error);
          });
    }
  }
};
</script>