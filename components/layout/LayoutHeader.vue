<template>
  <mw-container class="header" fluid>
    <div class="header__avatar group">
      <div class="header__avatar-image">
        <Icon name="mdi:account" size="16" />
      </div>
      <div class="header__avatar-name group-hover:underline">Dogmevich</div>
    </div>
    <select v-model="locale" class="header__locale">
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
  </mw-container>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style lang="scss" scoped>
.header {
  @apply flex w-full justify-between border-b pb-4 pt-4 shadow;

  &__avatar {
    @apply flex cursor-pointer items-center;
  }

  &__avatar-image {
    @apply mr-2 flex h-6 w-6 items-center justify-center rounded-full border border-black shadow;
  }

  &__avatar-name {
    @apply text-base font-semibold text-black;
    @apply lg:text-xl;
  }
}
</style>
