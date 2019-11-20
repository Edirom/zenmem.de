<template>
    <div class="standards">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('standards') }}</h1>
                    <p v-html="$t('standards_text')"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "standards",
    }
</script>

<style scoped>
    .standards .mainContent {
        margin-top: 5rem;
    }
</style>
