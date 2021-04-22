<template>
  <section class="row justify-content-center">
      <section class=" card-header d-flex justify-content-between">
            <h2>Create Category</h2>
            <router-link class="text-light btn btn-primary" :to="{name: 'category/list'}">
                Category List
            </router-link>
        </section>
      <div class="col-md-8">
          <alert-success :form="form" message="Your changes have been saved!"></alert-success>
        <form @submit.prevent="categoryAdd" class="my-3" action="" method="post">
          <div class="form-gorup">
              <label for="" class="h5">Categroy Name</label>
              <input v-model="form.cat_name" type="text" maxlength="15"  name="cat_name" placeholder="Write here category name" class="form-control" id=""
              :class="{ 'is-invalid': form.errors.has('cat_name') }">
              <has-error :form="form" field="cat_name"></has-error>
          </div>
          <div class="text-center my-4">
              <input type="submit" name="btn" value="Create New Category" class="btn btn-primary" id="">
          </div>
        </form>
      </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
export default {
data () {
    return {
      // Create a new form instance
      form: new Form({
        cat_name: '',
      })
    }
  },
  methods: {
    categoryAdd () {
      this.form.post('/api/category/store')
        .then(({ data }) => {
               axios.get('/api/category/index');
            })
    }//end login
  }
}
</script>

<style>

</style>
