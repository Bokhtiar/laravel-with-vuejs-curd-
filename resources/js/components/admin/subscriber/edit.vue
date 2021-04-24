<template>
  <section>
    <section class="d-flex justify-content-between container bg-light">
      <h3>Create New Subscriber</h3>
      <router-link class="btn btn-info" :to="{ name: 'subscriber/list' }">
        Subscriber List
      </router-link>
    </section>

    <section class="my-4">
      <div class="row justify-content-center">
        <div class="col-md-7">
            <form action="" @submit.prevent="update_subscriber" method="post">
              <div class="form-group">
                <label>Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('email') }"
                />
                <has-error :form="form" field="email"></has-error>
              </div>

              <div class="form-gorup text-center my-2">
                <input
                  type="submit"
                  name="btn"
                  value="Create New Subscriber"
                  class="btn btn-primary"
                  id=""
                />
              </div>
            </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
export default {
  data() {
    return {
      // Create a new form instance
      form: new Form({
        email: "",
      }),
    };
  },

  methods: {
    update_subscriber() {
        let id = this.$route.params.id;
      this.form.post(`/api/subscriber/update/${id}`).then((response) => {
        console.log(response.data);
      });
    },
    edit () {
        let id = this.$route.params.id;
        axios.get(`/api/subscriber/edit/${id}`).then( response => {
            this.form.email = response.data.email;
        })
    }
  },
  mounted(){
      this.edit();
      console.log('successfully');
  }
};
</script>

<style>
</style>
