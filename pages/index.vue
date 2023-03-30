<template>
  <div
    class="flex h-full w-full items-center justify-center text-4xl font-bold"
  >
    {{ t("common.hello") }}
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
