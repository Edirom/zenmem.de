<template>
    <div class="service container">
        <div class="columns">
            <div class="column col-10">{{ service.label }}<span v-if="service.url.length > 0">, <a :href="service.url" target="_blank">{{ service.url }}</a></span></div>
            <div class="column col-2">
                <span v-if="serviceStatus === -1" class="dot grey" title="service monitor not loaded yet"></span>
                <span v-if="serviceStatus === 0" class="dot grey" title="service monitor paused"></span>
                <span v-if="serviceStatus === 1" class="dot grey" title="service not checked yet by monitor"></span>
                <span v-if="serviceStatus === 2" class="dot green" title="service is up"></span>
                <span v-if="serviceStatus === 8" class="dot red" title="service seems down"></span>
                <span v-if="serviceStatus === 9" class="dot red" title="service is down"></span>
            </div>
        </div>
        <div class="columns">
            <div class="column col-12 info">
                {{ service.ip }}, {{ service.cluster }}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Service",
        props: {
            service: {
                type: Object,
                key: function() {
                    return this.key
                },
                label: function() {
                    return this.label
                },
                url: function() {
                    return this.url
                },
                ip: function() {
                    return this.ip
                },
                cluster: function() {
                    return this.cluster
                },
            },
        },
        data () {
            return {
                loading: false,
                serviceData: null,
                error: null,
                intervalId: null
            }
        },
        computed: {
            serviceStatus: function () {
                if(this.serviceData == null) return -1;

                return this.serviceData.status;
                /*
                0 - paused
                1 - not checked yet
                2 - up
                8 - seems down
                9 - down
                */
            },
        },
        created () {
            this.fetchData();
            this.intervalId = setInterval(this.fetchData, 60000, this);
        },
        destroyed() {
            clearInterval(this.intervalId);
        },
        methods: {
            fetchData () {
                this.loading = true;

                axios.post(`https://api.uptimerobot.com/v2/getMonitors`, "api_key=" + this.service.key + "&format=json")
                .then(response => response.data.monitors[0])
                .then(service => this.serviceData = service)
                .catch(e => {
                    this.errors.push(e)
                })
            }
        }
    }
</script>

<style scoped>
    .service {
        margin-top: 0.5rem;
    }

    .info {
        font-size: 0.8em;
        color: #999;
        padding-left: 1rem;
    }

    .dot {
        height: 17px;
        width: 17px;
        border-radius: 50%;
        display: inline-block;
    }

    .dot.grey {
        background-color: grey;
    }
    .dot.green {
        background-color: green;
    }
    .dot.red {
        background-color: red;
    }

</style>