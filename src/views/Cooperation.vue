<template>
    <div class="cooperation">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('cooperation') }}</h1>
                    <p v-html="$t('cooperation_text')"></p>
                    <div class="container grid-lg">
                        <div class="columns">
                            <Cooperation v-for="(coop, index) in orderedCooperations"
                                     :key="`coop${index}`" :cooperation="coop"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Cooperation from "../components/Cooperation";
    import cooperationsData from "../data/cooperations";

    export default {
        name: "cooperation",
        components: {Cooperation},
        computed: {
            orderedCooperations: function () {
                return cooperationsData.sort(function(a, b) {
                    if (a.title > b.title) return 1;
                    return -1;
                });
            }
        }
    }
</script>

<style scoped>
    .cooperation .mainContent {
        margin-top: 5rem;
    }
</style>