<template>
  <section class="intro">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-5 col-lg-push-1" data-aos="slide-down" data-aos-duration="500">
          <div class="inner-header text-start mt-5 d-flex justify-content-center">
            <div class="big-2 line ps-3 pt-5" data-aos="slide-down" data-aos-duration="600"> {{ firstName }} <br /> <span
                class="secondary"> <router-link :to="{ name: 'About' }">{{ lastName }}</router-link></span>
                <p class="job">&#8212; {{ job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const firstName = ref('T E R R A')
const lastName = ref('L A I L A N I')
const job = ref('she/her')
</script>

<style scoped>
.intro {
  width: 100%;
  height: 100%;
  background: #fff url('../assets/img/bg.jpeg') no-repeat center center fixed;
  background-size: cover;
  font-family: 'BigNoddleTitling Regular';
  padding-top: 200px;
  margin: auto;
  overflow-y: auto;
}

@media only screen and (max-device-width: 720px) {
  .intro {
    padding-top: 50px;
  }
}
@media only screen and (max-device-width: 480px) {
  .intro {
    padding-top: 200px;
  }
}

.intro .col-lg-6 {
  color: #fafafa;
}

.intro .col {
  padding-top: 150px;
}

.intro .img {
  width: 150px;
  border: 7px solid rgba(127, 127, 127, 0.5);
  border-radius: 50%;
}

.intro .inner-header .line {
  border-left: 2px solid #fafafa;
}

.intro .inner-header .job {
  font-size: calc(0.8 * 1.2vmax);
  font-family: 'Lato Regular';
}

.pt-5 {
  padding-top: 15vh !important;
}
</style>
