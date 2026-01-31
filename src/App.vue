<template>
  <div id="app">
    <Nav v-if="$route.name !== 'Intro'" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
</script>

<style>
@font-face {
  font-family: 'Fredoka One';
  src: url('./assets/font/fredoka.one.ttf');
}
@font-face {
  font-family: 'BigNoddleTitling Regular';
  src: url('./assets/font/Bignoodletitling.ttf');
}
@font-face {
  font-family: 'Lato Regular';
  src: url('./assets/font/Lato-Regular.ttf');
}

html, body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}

a {
  color: #525252;
  text-decoration: none !important;
}

a:hover {
  color: #525252;
  text-decoration: none !important
}

.btn-more {
  padding: 20px
}

.btn-dark {
  background: #525252;
  border: none;
  box-shadow: 3px 3px 0 #cacaca;
  transition: .2s ease-in-out;
  font-family: 'Fredoka One'
}

.btn-dark:hover {
  background: #525252;
  transform: scale(.98);
  box-shadow: none
}

.btn-purple {
  background: rgba(119, 74, 143, .904);
  border: none;
  box-shadow: 3px 3px 0 #cacaca;
  transition: .2s ease-in-out;
  font-family: 'Fredoka One';
  color: #fff
}

.btn-purple:hover {
  background: rgba(119, 74, 143, .904);
  transform: scale(.98);
  box-shadow: none;
  color: #fff
}

.btn-red {
  background: rgba(233, 13, 50, .8);
  border: none;
  box-shadow: 3px 3px 0 #cacaca;
  transition: .2s ease-in-out;
  font-family: 'Fredoka One';
  color: #fff
}

.btn-red:hover {
  transform: scale(.98);
  box-shadow: none;
  color: #fff
}

.btn-green {
  background: rgba(74, 143, 95, .904);
  border: none;
  box-shadow: 3px 3px 0 #cacaca;
  transition: .2s ease-in-out;
  font-family: 'Fredoka One';
  color: #fff
}

.btn-green:hover {
  background: rgba(74, 143, 95, .904);
  transform: scale(.98);
  box-shadow: none;
  color: #fff
}

.btn-blue {
  background: rgba(74, 104, 143, .904);
  border: none;
  box-shadow: 3px 3px 0 #cacaca;
  transition: .2s ease-in-out;
  font-family: 'Fredoka One';
  color: #fff
}

.btn-blue:hover {
  background: rgba(74, 104, 143, .904);
  transform: scale(.98);
  box-shadow: none;
  color: #fff
}

.btn-outline-dark {
  background: #fff;
  color: #525252;
  border-color: #525252;
  box-shadow: 0 3px 3px #cacaca;
  transition: .2s ease-in-out
}

.btn-outline-dark:hover {
  background: #525252;
  color: #fff;
  border-color: #525252;
  transform: translateY(3px);
  box-shadow: none
}

.primary {
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  border-bottom: 2px dashed
}

.secondary {
  color: #fff;
  background-color: #6f3c8a
}

.secondary>a {
  color: #fff;
  transition: .3s all ease-in-out
}

.secondary>a:hover {
  color: #fff;
  background: #774a8f;
  text-decoration: none;
}

.text-grey {
  color: rgba(255, 255, 255, .5);
  font-size: 20px
}

.text-orange {
  color: rgba(233, 94, 13, .918)!important
}

.text-pink {
  color: #e0268c!important
}

.btn {
  margin-bottom: 7px
}

.e404 {
  width: 100%;
  height: 100%;
  background: #cacaca url('./assets/img/kota2.png') no-repeat center center fixed;
  background-size: cover;
  color: #525252
}

.e404 h1 {
  font-family: 'Fredoka One'
}

.big-1 {
  font-size: 7vw
}

.big-2 {
  font-size: 5vmax
}
</style>
