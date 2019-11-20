<template>
    <div class="tools">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('tools') }}</h1>
                    <p v-html="$t('tools_text')"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tools",
    }
</script>

<style scoped>
    .tools .mainContent {
        margin-top: 5rem;
    }
</style>
