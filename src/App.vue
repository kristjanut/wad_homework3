<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <router-view/>
  <Footer/>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f5f7fa;
  color: #243247;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: min(100%, 64rem);
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 12px;
  background: #243247;
  color: white;
}

nav a {
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  text-decoration: none;
}

nav a:hover,
nav a:focus-visible {
  background: #36506d;
}

nav a.router-link-exact-active {
  background: white;
  color: #243247;
}

#app > :last-child {
  margin-top: auto;
}
</style>