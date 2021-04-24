<template>
  <section>
    <section class="d-flex justify-content-between container">
      <h3>Create Subscriber</h3>
      <router-link class="btn btn-info" :to="{ name: 'subscriber/create' }"
        >Create New Subscriber</router-link
      >
    </section>

    <section class="row justify-content-center">
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">indexing</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subscriber in subscribers" :key="subscriber.id">
              <th scope="row">{{subscriber.id}}</th>
              <td>{{ subscriber.email }}</td>
              <td>
                  <router-link class="btn btn-info text-light" :to="{ name: 'subscriber/edit', params: { id: subscriber.id } }">Edit</router-link>
                  <a @click.prevent="deletesubscriber(subscriber.id)"  href="" class="btn btn-sm btn-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      subscribers:[],
    };
  },
  methods: {
    all_subscriber() {
      axios.get("/api/subscriber/index").then((response) => {
        this.subscribers = response.data;
      });
    },

    deletesubscriber(id){
        axios.get(`/api/subscriber/delete/${id}`).then(response => {
            this.all_subscriber();
        })
    }
  },

  mounted() {
    this.all_subscriber();
    console.log("successfully");
  },
};
</script>

<style>
</style>
