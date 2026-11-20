<template>
  <article class="post">
    <div class="post-header">
      <img src="/res/images/me.png" alt="" class="post-icon">
      <span class="author">{{ post.author }}</span>
      <time class="date" :datetime="post.createdAt">
        {{ post.createdAt.split('T')[0] }}
      </time>
    </div>

    <div class="post-body">
      <img
        v-if="post.image"
        :src="post.image"
        alt="Post photo"
        class="post-image"
      >
      <p>{{ post.text }}</p>
    </div>

    <div class="post-actions">
      <button
        type="button"
        class="like-button"
        :aria-label="'Like post by ' + post.author"
        @click="IncrementLike(post.id)"
      >
        <img src="/res/images/likeimage.png" alt="" class="post-like">
      </button>

      <span>{{ post.likes }} {{ post.likes === 1 ? 'like' : 'likes' }}</span>
    </div>
  </article>
</template>

<script>
export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        IncrementLike (postId) {
            this.$store.commit('IncrementLike', postId)
    }
}

}
</script>

<style scoped>
.post {
  padding: 1rem;
  border: 1px solid #cbd5df;
  border-radius: 12px;
  background: white;
  color: #243247;
  text-align: left;
  overflow-wrap: anywhere;
}

.post-header,
.post-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.post-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
}

.author {
  font-weight: 700;
}

.date {
  margin-left: auto;
  color: #526275;
  font-size: 0.875rem;
  white-space: nowrap;
}

.post-body {
  margin: 0.875rem 0;
}

.post-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.post-body p {
  margin: 0;
  line-height: 1.5;
}

.post-image + p {
  margin-top: 0.75rem;
}

.post-actions {
  justify-content: space-between;
  padding-top: 0.625rem;
  border-top: 1px solid #e1e7ef;
  font-size: 0.875rem;
}

.like-button {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid #cbd5df;
  border-radius: 8px;
  background: #f3f6f8;
  cursor: pointer;
}

.like-button:hover {
  background: #e1eafa;
}

.like-button:focus-visible {
  outline: 3px solid #356bb0;
  outline-offset: 2px;
}

.post-like {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}
</style>
