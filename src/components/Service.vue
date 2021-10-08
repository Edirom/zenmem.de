<template>
    <div class="service container">
        <div class="columns">
            <div class="column col-10">{{ service.friendly_name }}<span>, <a :href="service.url" target="_blank">{{ service.url }}</a></span></div>
            <div class="column col-2">
                <span v-if="service.status === -1" class="dot grey" title="service monitor not loaded yet"></span>
                <span v-if="service.status === 0" class="dot grey" title="service monitor paused"></span>
                <span v-if="service.status === 1" class="dot grey" title="service not checked yet by monitor"></span>
                <span v-if="service.status === 2" class="dot green" title="service is up"></span>
                <span v-if="service.status === 8" class="dot red" title="service seems down"></span>
                <span v-if="service.status === 9" class="dot red" title="service is down"></span>
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
    export default {
        name: "Service",
        props: {
            service: {
                status: function () {
                    return this.status
                },
                friendly_name: function () {
                    return this.friendly_name
                },
                url: function () {
                    return this.url
                },
                ip: function () {
                    return this.ip
                },
                cluster: function () {
                    return this.cluster
                },
            },
        },
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