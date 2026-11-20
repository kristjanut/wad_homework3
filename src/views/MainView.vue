<template>
  <main class="feed-layout">
    <section class="posts">
      <h1>Posts</h1>

      <Post
        v-for="post in singlepost"
        :key="post.id"
        :post="post"
      />

      <button type="button" class="reset-likes" @click="ResetLikes">
        Reset likes
      </button>
    </section>
  </main>
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
  },
  methods: {
    ResetLikes () {
      this.$store.commit('ResetLikes')
    }
  }
}
</script>

<style scoped>
.feed-layout {
  display: grid;
  grid-template-columns: 1fr minmax(0, 32rem) 1fr;
  gap: 1rem;
}

.feed-layout::before,
.feed-layout::after {
  content: '';
  background: #e1e7ef;
  border-radius: 12px;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
}

.posts h1 {
  margin: 0;
  font-size: 1.5rem;
}

.reset-likes {
  align-self: center;
  padding: 0.6rem 1.2rem;
  border: 0;
  border-radius: 6px;
  background: #28599a;
  color: white;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.reset-likes:hover {
  background: #1d4479;
}

.reset-likes:focus-visible {
  outline: 3px solid #356bb0;
  outline-offset: 2px;
}

@media (max-width: 700px) {
  .feed-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .feed-layout::before,
  .feed-layout::after {
    display: none;
  }
}
</style>
