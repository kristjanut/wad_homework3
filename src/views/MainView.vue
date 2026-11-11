<template>
  <div class="main">
    <h1>This is a main page</h1>

    <main class="posts">
      <Post v-for="post in singlepost" :key="post.id" :post="post"/>
    </main>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'MainPage',
  components: {
    Post
  },
  computed: {
    singlepost () {
      return this.$store.getters.singlepost
    }
  }
}
</script>

<style scoped>
.posts {
    width: 500px;
    margin: 30px auto;
}
</style>
