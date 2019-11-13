<template>
    <div class="vife">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('ViFE') }}</h1>
                    <p v-html="$t('vife_text')"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vife",
    }
</script>

<style scoped>
    .vife .mainContent {
        margin-top: 5rem;
    }
</style>