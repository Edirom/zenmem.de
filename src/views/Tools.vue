<template>
    <div class="tools">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('tools') }}</h1>
                    <p v-html="$t('tools_text')"></p>

                    <div class="container grid-lg">
                        <div class="columns">
                            <Tool v-for="(tool, index) in orderedTools"
                                :key="`tool${index}`" :tool="tool"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tool from "../components/Tool";
    import toolsData from "../data/tools";

    export default {
        name: "tools",
        components: {Tool},
        computed: {
            orderedTools: function () {
                return toolsData.sort((a, b) => b.hotness - a.hotness );
            }
        }
    }
</script>

<style scoped>
    .tools .mainContent {
        margin-top: 5rem;
    }

    .margin-top {
        margin-top: 5rem;
    }
</style>
