<template>
  <div>
    <van-sticky>
      <Search />
    </van-sticky>
    <Tab />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
// import Swipe from "../components/Swipe.vue";
// import Grid from "../components/Grid.vue";
// import HomeGrid from "../components/HomeGrid.vue";
import Tab from "../components/Tab.vue";

export default {
  components: {
    Search,
    Tab
    // Swipe,
    // Grid,
    // HomeGrid
  }
};
</script>