<template>
  <div class="main-nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Countries' }">Countries</router-link> |
    <router-link :to="{ name: 'Continents' }">Continents</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  text-align: right;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
  text-transform: uppercase;
}
a.router-link-active {
  border-bottom: 2px solid #85a693;
  padding-bottom: 4px;
}
</style>