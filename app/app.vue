<script setup lang="ts">
const { locale } = useI18n();
</script>
<template>
  <u-app :locale="locale">
    <nuxt-page />
  </u-app>
</template>
