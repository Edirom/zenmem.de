<template>
  <div class="about">

    <div class="container grid-lg mainContent">
      <div class="columns">
        <div class="column col-12">
          <h1>{{ $t('about') }}</h1>
          <p v-html="$t('about_text')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about",
  }
</script>

<style scoped>
  .about .mainContent {
    margin-top: 5rem;
  }
</style>
