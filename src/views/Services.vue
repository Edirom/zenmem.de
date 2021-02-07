<template>
    <div class="services">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('services') }}</h1>

                    <span class="select-label">Filter by cluster:</span>
                    <v-select v-model="selectedCluster" :options="clusters"/>

                    <span class="select-label">Filter by status:</span>
                    <v-select v-model="selectedStatus" :options="status"/>

                    <span class="select-label">Find by name:</span>
                    <input v-model="findByName" label="Service name" clearable/>

                    <div class="container grid-lg margin-top">
                        <div class="columns">
                            <Service v-for="(service, index) in servicesFiltered"
                                     :key="`service${index}`" :service="service"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from "../components/Service";
    import serviceNamespaces from "../data/services";
    import axios from 'axios';

    export default {
        name: "services",
        components: {Service},
        data() {
            return {
                monitors: null,
                serviceNamespaces: serviceNamespaces,
                clusters: ['Detmold_1', 'Paderborn_1'],
                status: ['Paused', 'Running', 'Down'],
                selectedCluster: null,
                selectedStatus: null,
                findByName: "",
            };
        },
        created () {
            //this.fetchData();
            //this.intervalId = setInterval(this.fetchData, 60000, this);
        },
        destroyed() {
            //clearInterval(this.intervalId);
        },
        computed: {
            servicesFiltered: function () {
                if(this.selectedCluster == null)
                    return this.serviceNamespaces.monitors;

                var me = this;

                return this.serviceNamespaces.monitors.filter(function(service) {
                    if(service.cluster === me.selectedCluster) return true;

                    return false;
                });
            },
        },
        methods: {
            fetchData () {
                axios.post("/monitors.json")
                    .then(response => this.monitors = response.data.monitors)
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>

<style scoped>
    .services .mainContent {
        margin-top: 5rem;
    }

    .margin-top {
        margin-top: 2rem;
    }

    .select-label {
        font-size: 0.6rem;
        color: grey;
    }
</style>