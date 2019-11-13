<template>
  <div class="home">

    <Overview/>

    <div class="container grid-lg mainContent">
      <div class="columns">
        <div class="column col-12">
          <h1>{{ $t('ZenMEM') }}</h1>
          <p v-html="$t('home_text')"></p>
        </div>
        <div class="column col-6 col-md-6 col-sm-12 col-xs-12 newsColumn">
          <div class="news">
            <h3>{{ $t('news') }}</h3>
            <div class="tile " v-for="(news, index) in News"
                 :key="`news${index}`">
              <div class="tile-icon">
                <font-awesome-icon :icon="['far', 'check-circle']" size="3x"/>
                <!--<figure class="avatar avatar-lg">
                  <img :src="news.imgURL" alt="Avatar">
                </figure>-->
              </div>
              <div class="tile-content">
                <p class="tile-title">{{ getNewsByCurrentLang(news).title }}</p>
                <p class="tile-subtitle">{{ getNewsByCurrentLang(news).date }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-6 col-md-6 col-sm-12 col-xs-12 twitterColumn">
          <div class="twitter">
            <a class="twitter-timeline" data-height="400" data-dnt="true" data-link-color="#335480" href="https://twitter.com/roewenstrunk/lists/zenmem?ref_src=twsrc%5Etfw">A Twitter List by roewenstrunk</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Overview from "../components/Overview";
import News from "../data/news";
import i18n from '@/plugins/i18n';

export default {
  name: 'home',
  components: {
      Overview
  },
  data() {
    return {
      News: News
    };
  },
  methods: {
    getNewsByCurrentLang: function(news) {
      return news[i18n.locale];
    }
  }
}
</script>

<style scoped>
  .home .mainContent {
    margin-top: 5rem;
  }

  .newsColumn.col-6, .twitterColumn.col-6 {
    padding-top: 3rem;
  }

  .news {
    box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
    padding: 1rem;
  }

  .news p {
    margin-bottom: 0.5rem;
  }

  .news > div {
    margin-top: 1rem;
  }

  .news .tile-icon {
    color: #335480;
  }

  .twitter {
    box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  }
</style>

