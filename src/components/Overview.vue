<template>
  <div id="overview" class="container grid-lg">
    <div class="columns">
      <div class="column col-2 col-md-4 col-sm-6 col-xs-12" v-for="(topic, index) in getTopics()"
           :key="`topic${index}`">
        <router-link :to="'/' + topic.route">
          <div :class="index % 2 === 0 ? 'card color1':'card color2'">
            <div class="card-image">
              <font-awesome-icon v-if="topic.icon !== ''" :icon="topic.icon" size="4x"/>
              <img v-if="topic.img !== ''" :src="topic.img" :alt="$t(topic.langKey)">
            </div>
            <div class="card-header">
              <div class="card-title h6">{{ $t(topic.langKey) }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  import topics from '@/data/topics.js'

export default {
  name: 'Overview',
  methods: {
    getTopics: function () {
      return topics;
    }
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

  #overview .card .card-image img {
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
