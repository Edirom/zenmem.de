<template>
    <div class="services">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('services') }}</h1>

                    <v-select v-model="selectedCluster" :options="clusters"/>

                    <div class="container grid-lg">
                        <div class="columns">
                            <ServiceNamespace v-for="(serviceNS, index) in serviceNamespacesFiltered"
                                     :key="`serviceNS${index}`" :serviceNamespace="serviceNS" :selectedCluster="selectedCluster"/>
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
                serviceNamespaces: serviceNamespaces,
                clusters: ['Detmold 1', 'Detmold 2', 'Paderborn 1', 'Paderborn 2'],
                selectedCluster: null
            };
        },
        computed: {
            serviceNamespacesFiltered: function () {
                if(this.selectedCluster == null)
                    return this.serviceNamespaces;

                var me = this;

                return this.serviceNamespaces.filter(function(serviceNS) {
                    for(var i = 0; i < serviceNS.services.length; i++) {
                        if(serviceNS.services[i].cluster === me.selectedCluster) return true;
                    }

                    return false;
                });
            },
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