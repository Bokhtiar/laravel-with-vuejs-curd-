<template>
  <section>
    <section class="d-flex justify-content-between">
      <h3>Blog List</h3>
      <a class="btn btn-primary" href="">Create New blog</a>
    </section>

    <section class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form action="">
            <div class="form-group">
                <label for="">Select Category</label>
              <select class="form-control" name="" id="">
                <option
                  v-for="category in categories"
                  :key="category.id"
                  v-bind:value="category.id"
                >
                  {{ category.cat_name }}
                </option>
              </select>
            </div>

            <div class="form-gorup">
              <label for="">Title</label>
              <input type="test" name="title" class="form-control" id="" />
            </div>

            <div class="text-center my-3">
                <input type="submit" class="btn btn-primary" name="" value="Create New Blog" id="">
            </div>
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },

  methods: {
    all_category() {
      axios.get("/api/category/index").then((response) => {
        this.categories = response.data;
      });
    },
  },

  mounted() {
    this.all_category();
  },
};
</script>

<style>
</style>
