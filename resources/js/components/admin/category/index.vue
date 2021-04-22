<template>
  <section class="container">
      <div class="card-header d-flex justify-content-between ">
            <h4 class="mb-0">Category List</h4>
            <router-link class="text-light btn btn-icon btn-primary" :to="{name: 'category/create'}">
                <span class="btn-inner--text">Expenses Create</span>
            </router-link>

        </div>


      <table class="table text-center">
  <thead>
    <tr>
      <th scope="col">Indexing</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category in categories" :key="category.id">
      <th scope="row">{{ category.id }}</th>
      <td>{{ category.cat_name }}</td>

      <td><a class="btn btn-info text-light btn-sm" href="">Active</a></td>
      <td>
          <a href="" class="btn btn-sm btn-primary">Edit</a>
          <a href="" class="btn btn-sm btn-danger">Delete</a>
      </td>
    </tr>
  </tbody>
</table>
  </section>
</template>

<script>
export default {
data(){
    return{
        categories:[],
    }
},
methods: {
    all_category(){
    axios.get('/api/category/index')
        .then( response =>{
            this.categories = response.data;
        })
    }

},
mounted(){
    this.all_category();
    console.log('successfully')
}
}
</script>

<style>

</style>
