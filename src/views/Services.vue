<template>
    <div class="services">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('services') }}</h1>

                    <div class="container grid-lg">
                        <div class="columns">
                            <ServiceNamespace v-for="(serviceNS, index) in serviceNamespaces"
                                     :key="`serviceNS${index}`" :serviceNamespace="serviceNS"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceNamespace from "../components/ServiceNamespace";
    import serviceNamespaces from "../data/services";

    export default {
        name: "services",
        components: {ServiceNamespace},
        data() {
            return {
                serviceNamespaces: serviceNamespaces
            };
        },
    }
</script>

<style scoped>
    .services .mainContent {
        margin-top: 5rem;
    }

    .margin-top {
        margin-top: 5rem;
    }
</style>