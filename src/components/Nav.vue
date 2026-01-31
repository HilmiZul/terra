<template>
  <div>
    <nav class="nav justify-content-center p-1">
      <RouterLink :to="{ name: 'Intro' }" class="nav-link">HALO 👋🏻</RouterLink>
      <RouterLink :to="{ name: 'About' }" class="nav-link">SIAPA AKU ☝🏻</RouterLink>
      <!-- <router-link :to="{ name: 'Project' }" class="nav-link">PROJECT</router-link> -->
      <!--<a href="/work" class="nav-link">WORK</a>-->
      <!-- <a href="/videos" class="nav-link">VIDEOS</a> -->
      <!--<a href="#" class="nav-link disabled">E-BOOK</a>-->
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  background: #774a8f;
  font-family: "Fredoka One", cursive;
  box-shadow: 0 5px 0 #cacaca9f;
  transition: all 0.3s ease-in-out;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.nav > a {
  color: #fff;
  transition: all 0.2s all-in-out;
}

.nav > a:hover {
  text-shadow: 0.5px 0.5px 0.5px 1px #fff;
  transform: scale(0.98);
}

.nav .nav-link {
  font-size: calc(0.5 * 4vh);
  font-weight: 700;
}

.nav .nav-link.disabled {
  color: #cacaca;
}
</style>
import { RouterLink } from 'vue-router';

