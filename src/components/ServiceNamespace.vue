<template>
    <div class=" column col-12">
        <div class="serviceNamespace">
            <h3>{{ serviceNamespace.namespace }}</h3>
            <Service v-for="(service, index) in servicesFiltered"
                 :key="`service${index}`" :service="service"/>
        </div>
    </div>
</template>

<script>
    import Service from "../components/Service";

    export default {
        name: "ServiceNamespace",
        components: {Service},
        props: {
            serviceNamespace: {
                type: Object,
                namespace: function() {
                    return this.namespace
                },
                services: function() {
                    return this.services
                }
            },
            selectedCluster: String,
        },
        computed: {
            servicesFiltered: function () {
                if(this.selectedCluster == null)
                    return this.serviceNamespace.services;

                return this.serviceNamespace.services.filter(service => service.cluster === this.selectedCluster);
            },
        },
    }
</script>

<style scoped>

    .serviceNamespace {
        margin: 1rem 0;
    }

</style>