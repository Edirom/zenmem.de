<template>
    <div class="projects">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('projects') }}</h1>
                    <p v-html="$t('projects_text')"></p>

                    <div class="container grid-lg">
                        <div class="columns">
                            <Project v-for="(project, index) in orderedProjects"
                                :key="`project${index}`" :project="project"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Project from "../components/Project";
    import projectsData from "../data/projects";

    export default {
        name: "projects",
        components: {Project},
        computed: {
            orderedProjects: function () {
                return projectsData.sort((a, b) => b.ends - a.ends );
            }
        }
    }
</script>

<style scoped>
    .projects .mainContent {
        margin-top: 5rem;
    }
</style>