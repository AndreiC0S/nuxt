<template >
  <NuxtLayout>
    

      <NuxtPage />
    
  </NuxtLayout>
</template>
<script setup>
const config = useRuntimeConfig()
const productStore = useProductStore()

await productStore.fetchAll(config)
</script>