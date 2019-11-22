<template>
    <div class=" column col-4 col-md-6 col-sm-12 col-xs-12">
        <div class="tool card">
            <!--<div v-if="tool.logo !== ''" class="card-image">
                <a :href="tool.URL" target="_blank">
                    <img :src="tool.logo" :alt="tool.title" class="img-responsive">
                </a>
            </div>-->
            <div class="card-header">
                <div class="card-title h5">{{ tool.title }}</div>
                <div v-if="getToolByCurrentLang(tool).subtitle !== ''" class="card-subtitle text-gray" v-html="getToolByCurrentLang(tool).subtitle"></div>
            </div>
            <div class="card-body">
                <p v-html="getToolByCurrentLang(tool).desc"></p>
            </div>
            <div v-if="tool.URL !== ''" class="card-footer">
                <font-awesome-icon icon="external-link-alt"/><a :href="tool.URL" target="_blank">{{ getShortURL(tool.URL) }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import i18n from '@/plugins/i18n';

    export default {
        name: "Tool",
        props: {
            tool: {
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
            getToolByCurrentLang: function(tool) {
                return tool[i18n.locale];
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

    .tool {
        margin: 1rem 0;
    }

    .tool.card {
        box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
        background-color: #f3f3f3;
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
