<template>
    <div class="imprint">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12 margin-bottom">
                    <h1>{{ $t('imprint') }}</h1>
                </div>
                <div class="column col-6 col-md-12">
                    <h2>{{ $t('resp_content') }}</h2>
                    <h4>Prof. Dr. Joachim Veit</h4><p>Universität Paderborn<br/>Musikwissenschaftliches Seminar Detmold/Paderborn</p>
                    <p v-html="$t('coordinator_contact')"></p>
                </div>
                <div class="column col-6 col-md-12">
                    <h2>{{ $t('resp_technical') }}</h2>
                    <h4>Dipl. Wirt.-Inf. Daniel Röwenstrunk</h4><p>Universität Paderborn<br/>Musikwissenschaftliches Seminar Detmold/Paderborn</p>
                    <p v-html="$t('project_manager_contact')"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "cooperation"
    }
</script>

<style scoped>
    .imprint .mainContent {
        margin-top: 5rem;
    }

    .margin-bottom {
        margin-bottom: 3rem;
    }
</style>