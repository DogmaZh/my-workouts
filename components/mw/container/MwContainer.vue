<template>
  <component :is="tag" :class="['mw-container', { fluid }]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string;
    fluid?: boolean;
  }>(),
  {
    tag: "div",
    fluid: false,
  }
);
</script>

<style lang="scss">
.mw-container {
  @apply w-full px-4;
  @apply lg:mx-auto lg:max-w-5xl lg:px-8;

  &.fluid {
    @apply max-w-none;
  }
}
</style>
