<template>
  <div class="p-6">
    <h1 class="text-3xl font-semibold mb-6">Update {{ post.title }}</h1>

    <form @submit.prevent="update">
      <label>Title</label>
      <input v-model="form.title" placeholder="Email" class="form-control" />

      <label>Summary</label>
      <input v-model="form.summary" placeholder="Email" class="form-control" />

      <label>Body</label>
      <input v-model="form.body" placeholder="Email" class="form-control" />

      <button type="submit" class="button--green">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params, req }) {
    const post = await store.dispatch('api/getPost', { id: params.id, req })
    return {
      post,
      form: {
        title: post.title,
        summary: post.summary,
        body: post.body
      }
    }
  },

  data: () => ({
    form: {
      title: '',
      summary: '',
      body: ''
    }
  }),

  methods: {
    async update() {
      try {
        const post = await this.$store.dispatch(
          'api/updatePost',
          this.getPayload()
        )
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    },

    getPayload() {
      return {
        ...this.form,
        id: this.post.id
      }
    }
  }
}
</script>
