<template>
    <article class="post">
        <div class="post-header">
            <span class="author">{{post.author}}</span>
            <span class="date">{{post.createdAt.split('T')[0]}}</span>
        </div>

        <div class="post-content">
            <img src="/res/images/me.png" alt="User" class="post-icon">

            <div class="post-body">
                <p>{{post.text}}</p>

                <img :src="post.image"
                    alt="Photo from my post"
                    class="post-image" v-if="post.image != null">
            </div>

            <button class="like-button" v-on:click="IncrementLike(post.id)">
                <img src="/res/images/likeimage.png" class="post-like">
            </button>

            <div class="likes_text">
            {{post.likes}}
            </div>
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
    /*background-color: #d5d5d5;*/
    background-color: rgb(236, 192, 115);
    border-radius: 6px;
    margin-bottom: 15px;
    padding: 8px;
}

/* Child selector */
.post > .post-header {
    text-align: right;
    font-size: 12px;
    color: #333;
    margin-bottom: 5px;
}

/* Adjacent sibling selector */
.post-header + .post-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.post-header > .author{
    font-weight : bold;
    text-align : center;
    padding : 2%;
}

/* General sibling selector */
.post-header ~ .post-content {
    padding-top: 2px;
}

/* Descendant selector */
.post-content p {
    margin: 0;
}

/* Pseudo-element selector */
.post-content p::first-letter {
    font-size: xx-large;
}

.post-icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-top: 0;
    margin-bottom: auto;
}

.post-body {
    flex: 1;
}

.post-image {
    width: 100%;
    max-width: 350px;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
    margin-top: 8px;
}

.like-button {
    background: none;
    margin-left: auto;
    margin-right: 0;
}

.post-like {
    width: 25px;
    height: 25px;
}
</style>
