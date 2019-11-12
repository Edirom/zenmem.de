<template>
  <div id="overview" class="container grid-lg">
    <div class="columns">
      <div class="column col-2 col-md-4 col-sm-6 col-xs-12" v-for="(card, index) in cards"
           :key="`card${index}`">
        <div :class="index % 2 === 0 ? 'card color1':'card color2'">
          <div class="card-image">
            <font-awesome-icon :icon="card.icon" size="4x"/>
          </div>
          <div class="card-header">
            <div class="card-title h6">{{ $t(card.langKey) }}</div>
          </div>
        </div>
      </div>
      <div class="column col-2 col-md-4 col-sm-6 col-xs-12">
        <div class="card color2 card-vife">
          <div class="card-image">
            <img src="../assets/pix/vife-logo.png" :alt="$t('ViFE')">
          </div>
          <div class="card-header">
            <div class="card-title h6">{{ $t('ViFE_abbr') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data() {
    return {
      cards: [
        {
          langKey: 'standards',
          icon: 'award',
        },
        {
          langKey: 'tools',
          icon: 'tablet-alt',
        },
        {
          langKey: 'education',
          icon: 'graduation-cap',
        },
        {
          langKey: 'projects',
          icon: 'project-diagram',
        },
        {
          langKey: 'cooperation',
          icon: 'users',
        }
      ]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #overview {
    margin-top: 3rem;
  }

  #overview .card {
    text-align: center;
    padding-top: 1rem;
    margin-top: 1rem;
  }

  #overview .card.card-vife .card-image img {
    max-height: 3.6em;
  }

  .color1 {
    background-color: #335480;
    color: #ffffff;
  }

  .color2 {
    background-color: #B3D4FF;
    color: #335480;
  }


</style>
