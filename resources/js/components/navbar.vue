<template>
  <section class="">
    <div class="row">
      <div class="col-sm-12 col-sm-2 col-lg-2">
        <ul class="list-group text-center">
          <li class="list-group-item"> <router-link :to="{name: 'home'}">Home</router-link> </li>
          <li class="list-group-item"> <router-link :to="{name: 'category/list'}">Categories</router-link> </li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div class="col-sm-12 col-sm-10 col-lg-10">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
