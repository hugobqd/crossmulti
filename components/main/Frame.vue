<script setup lang="ts">
const a = ref(0);
const b = ref(0);
const c = ref(0);
const d = ref(0);

const crossMultiIsValid = computed(() => {
  return a.value * d.value === b.value * c.value;
});

watch([a, b, c], () => {
  console.log("a, b, c changed");
  d.value = (b.value * c.value) / a.value;
});
</script>
<template>
  <div class="p-10 min-h-svh bg-cyan-100 place-items-center grid">
    <section class="flex flex-col gap-6">
      <h1 class="text-center">Cross multiplication</h1>
      <div class="grid grid-cols-2 max-w-sm mx-auto">
        <input
          v-model="a"
          type="number"
          class="border border-gray-300 p-2 m-2"
          placeholder="a"
        />
        <input
          v-model="b"
          type="number"
          class="border border-gray-300 p-2 m-2"
          placeholder="b"
        />
        <input
          v-model="c"
          type="number"
          class="border border-gray-300 p-2 m-2"
          placeholder="c"
        />
        <input
          v-model="d"
          type="number"
          class="border border-gray-300 p-2 m-2"
          placeholder="d"
          disabled
        />
      </div>
      <pre v-if="!crossMultiIsValid" class="text-red-500">Ohoh! problem!</pre>
    </section>
  </div>
</template>
