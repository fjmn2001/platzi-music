<template lang="pug">
    #app
        section.section
            nav.nav.shadow
                .container
                    input.form-control(type="text", placeholder="Buscar canciones", v-model="searchQuery")
                    a.btn.btn-info(@click.prevent="search") Buscar
                    a.btn.btn-danger &times;

            .container
                p
                    small {{searchMessage}}

            .container.results
                .row
                    .col-md-3(v-for="t in tracks") {{t.name}} {{t.artist}}
</template>

<script>
    import trackService from './services/track'

    export default {
        name: 'app',
        data () {
            return {
                searchQuery: '',
                tracks: []
            }
        },
        computed: {
            searchMessage () {
                return `Encontrados: ${this.tracks.length}`
            }
        },
        methods: {
            search () {
                if (!this.searchQuery) {
                    return
                }
                trackService.search(this.searchQuery).then((response) => {
                    this.tracks = response.tracks.items
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "./scss/main";

    .results {
        margin-top: 50px;
    }
</style>
