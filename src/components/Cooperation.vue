<template>
    <div class=" column col-4 col-md-6 col-sm-12 col-xs-12">
        <div class="cooperation card">
            <div class="card-image">
                <a v-if="cooperation.logo !== ''" :href="cooperation.URL" target="_blank">
                    <img :src="cooperation.logo" :alt="cooperation.title" class="img-responsive">
                </a>
            </div>
            <div class="card-header">
                <div class="card-title h5">{{ cooperation.title }}</div>
                <div v-if="getCooperationByCurrentLang(cooperation).subtitle !== ''" class="card-subtitle text-gray" v-html="getCooperationByCurrentLang(cooperation).subtitle"></div>
            </div>
            <div class="card-body">
                <p v-html="getCooperationByCurrentLang(cooperation).desc"></p>
            </div>
            <div v-if="cooperation.URL !== ''" class="card-footer">
                <font-awesome-icon icon="external-link-alt"/><a :href="cooperation.URL" target="_blank">{{ getShortURL(cooperation.URL) }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import i18n from '@/plugins/i18n';

    export default {
        name: "Project",
        props: {
            cooperation: {
                type: Object,
                title: function() {
                    return this.title
                },
                URL: function() {
                    return this.URL
                },
                logo: function() {
                    return this.logo
                },
                default: function () {
                    return { title: this.title }
                }
            },
        },
        methods: {
            getCooperationByCurrentLang: function(cooperation) {
                return cooperation[i18n.locale];
            },
            getShortURL: function (url) {
                if(url.length > 30)
                    return url.substring(0, 29) + "...";
                return url;
            }
        }
    }
</script>

<style scoped>

    .cooperation {
        margin: 1rem 0;
    }

    .cooperation.card {
        box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
    }

    .card-image {
        margin-top: 1rem;
        padding: 0 1rem 1rem;
        border-bottom: 1px solid #335480;
        height: 100px;
        vertical-align: center;
        text-align: center;
    }

    .card-image img {
        max-height: 80px;
        margin: 0 auto;
    }

    .card-footer {
        padding-top: 0;
    }

    .card-footer a {
        padding-left: 0.4rem;
    }
</style>