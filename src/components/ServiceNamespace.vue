<template>
    <div class=" column col-12">
        <div class="serviceNamespace">
            <h3>{{ serviceNamespace.namespace }}</h3>
            <Service v-for="(service, index) in serviceNamespace.services"
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
        }
    }
</script>

<style scoped>

    .serviceNamespace {
        margin: 1rem 0;
    }

</style>