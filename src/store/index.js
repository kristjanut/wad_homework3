/* eslint-disable indent */
import { createStore } from 'vuex'
import postsData from '@/assets/posts.JSON'

export default createStore({
  state: {
    postsList: postsData
  },
  getters: {
    singlepost: state => {
      var singlepost = state.postsList.map(post => {
        return {
          id: post.id,
          author: post.author,
          text: post.text,
          createdAt: post.createdAt,
          image: post.image,
          likes: post.likes
        }
      })
      return singlepost
    }
  },
  mutations: {
    IncrementLike(state, postId) {
        const post = state.postsList.find(p => p.id === postId);
        if(post)
        {
            post.likes++;
        }
    },
    ResetLikes(state) {
        state.postsList.forEach(post => {
            post.likes = 0;
        })
    },
    ResetLikePost(state, postId) {
        const post = state.postsList.find(p => p.id === postId);
        if(post)
        {
            post.likes = 0;
        }
    }
  },
  actions: {
    IncrementLikeAct(act, postId) {
      setTimeout(function() {
        act.commit("IncrementLike", postId)
      }, 1000)
    },
    ResetLikePostAct(act, postId) {
      setTimeout(function() {
        act.commit("ResetLikePost", postId)
      }, 1000)
    },
    ResetLikesAct(act) {
      setTimeout(function() {
        act.commit("ResetLikes")
      }, 1000)
    }
  },
  modules: {
  }
})
