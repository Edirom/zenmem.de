<template>
    <div class="service container">
        <div class="columns">
            <div class="column col-10">{{ serviceName }}, <a :href="serviceURL" target="_blank">{{ serviceURL }}</a></div>
            <div class="column col-2">
                <span v-if="serviceStatus === -1" class="dot grey" title="not loaded yet"></span>
                <span v-if="serviceStatus === 0" class="dot grey" title="paused"></span>
                <span v-if="serviceStatus === 1" class="dot grey" title="not checked yet"></span>
                <span v-if="serviceStatus === 2" class="dot green" title="up"></span>
                <span v-if="serviceStatus === 8" class="dot red" title="seems down"></span>
                <span v-if="serviceStatus === 9" class="dot red" title="down"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Service",
        props: {
            service: String,
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
            serviceName: function () {
                if(this.serviceData == null) return 'Loading...';

                return this.serviceData.friendly_name;
            },
            serviceURL: function () {
                if(this.serviceData == null) return '';

                return this.serviceData.url;
            },
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
            }
        },
        created () {
            this.fetchData();
            this.intervalId = setTimeout(this.fetchData, 60000, this);
        },
        destroyed() {
            clearInterval(this.intervalId);
        },
        methods: {
            fetchData () {
                this.loading = true;

                axios.post(`https://api.uptimerobot.com/v2/getMonitors`, "api_key=" + this.service + "&format=json")
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