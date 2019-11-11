<template>
    <div>
        <HeaderSearch/>
        <IndexBar/>
    </div>
</template>

<script>
    import HeaderSearch from '../components/HeaderSearch.vue';
    import IndexBar from "../components/IndexBar.vue";

    export default {
        components:{
            IndexBar,
            HeaderSearch
        }
    }
</script>
