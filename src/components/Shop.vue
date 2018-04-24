<template>
  <div>
      <h1>This is shop page</h1>
      <app-products></app-products>
  </div>
</template>

<script>
import Products from './products/Products.vue';
export default {
    components: {
        'app-products': Products
    }
}

</script>

<style>

</style>
