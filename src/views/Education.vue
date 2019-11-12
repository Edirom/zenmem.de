<template>
    <div class="education">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('education') }}</h1>
                    <p v-html="$t('education_text')"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "education",
    }
</script>

<style scoped>
    .education .mainContent {
        margin-top: 5rem;
    }
</style>