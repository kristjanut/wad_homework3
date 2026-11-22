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
      <button
        type="button"
        class="reset-button"
        :aria-label="'Like post by ' + post.author"
        @click="ResetLike(post.id)"
      >
        <span>Reset Like</span>
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
    },
      ResetLike(postId){
        this.$store.commit('ResetLikePost', postId)
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

.reset-button {
  display: grid;
  place-items: center;
  width: 4rem;
  height: 2.75rem;
  border: 1px solid #cbd5df;
  border-radius: 8px;
  background: #f3f6f8;
  cursor: pointer;
}
button:hover {
  background: #e1eafa;
}

button:focus-visible {
  outline: 3px solid #356bb0;
  outline-offset: 2px;
}

.post-like {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}
@media (max-width: 599px) {
  .post {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #cbd5df;
    border-radius: 10px;
    background: white;
    color: #243247;
    text-align: left;
    overflow-wrap: anywhere;
    box-sizing: border-box;
  }

  .post-header,
  .post-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .post-header {
    flex-wrap: wrap;
  }

  .post-icon {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .author {
    font-weight: 700;
    font-size: 0.9rem;
  }

  .date {
    margin-left: auto;
    color: #526275;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  .post-body {
    margin: 0.75rem 0;
  }

  .post-image {
    display: block;
    width: 100%;
    max-height: 260px;
    object-fit: cover;
    border-radius: 8px;
  }

  .post-body p {
    margin: 0;
    line-height: 1.45;
    font-size: 0.9rem;
  }

  .post-image + p {
    margin-top: 0.625rem;
  }

  .post-actions {
    justify-content: space-between;
    padding-top: 0.5rem;
    border-top: 1px solid #e1e7ef;
    font-size: 0.8125rem;
  }

  .like-button {
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #cbd5df;
    border-radius: 8px;
    background: #f3f6f8;
    cursor: pointer;
    flex-shrink: 0;
  }

  .like-button:hover {
    background: #e1eafa;
  }

  .like-button:focus-visible {
    outline: 3px solid #356bb0;
    outline-offset: 2px;
  }

  .post-like {
    width: 1.25rem;
    height: 1.25rem;
    object-fit: contain;
  }
}

/* Très petits téléphones (<= 359px) */
@media (max-width: 359px) {
  .post {
    padding: 0.625rem;
  }

  .date {
    margin-left: 0;
    width: 100%;
    margin-top: 0.125rem;
  }
}
</style>
