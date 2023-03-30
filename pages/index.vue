<template>
  <div
    class="flex h-full w-full items-center justify-center text-4xl font-bold"
  >
    <select v-model="locale">
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
    {{ t("common.hello") }}
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
</script>
