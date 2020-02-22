<template lang="pug">
    #app
        img(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    @import "./scss/main";

    #app {
        font-family: 'Roboto', serif;
        font-weight: bold;
    }
</style>
