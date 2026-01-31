<template>
  <div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col text-center mt-5 mb-5">
            <h1 data-aos="fade-down">Siapa aku?</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 mb-5">
            <p class="summary mb-5 text-center" data-aos="slide-up">
              {{  summary }}
            </p>
            <p class="text-center" data-aos="slide-up">
              <a
                href="https://instagram.com"
                target="__blank"
                class="socmed"
                ><i class="fab fa-instagram fa-2x text-pink"></i></a>
							<a
								href="https://linkedin.com/"
								target="__blank"
								class="ms-3"
								><i class="fab fa-linkedin fa-2x text-primary"></i></a>
              <a
                href="https://twitter.com"
                class="ms-3"
                target="__blank"
                ><i class="fab fa-twitter fa-2x text-primary"></i></a>
              <a
                href="https://soundcloud.com"
                class="ms-3"
                target="__blank"
                ><i class="fab fa-soundcloud fa-2x text-orange"></i></a>
              <!-- <a
                href="https://instagram.com/hilmi_zul"
                class="ms-3"
                target="__blank"
                ><i class="fab fa-instagram fa-2x text-pink"></i></a> -->
              <!-- <a
                href="https://youtube.com/hilmizul"
                class="ms-3"
                target="__blank"
                ><i class="fab fa-youtube fa-2x text-danger"></i></a> -->
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const summary = ref(`Siapa yaa...?`)
</script>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  background: #fff;
  background-size: cover;
  padding-top: 30px;
  padding-bottom: 100px;
  color: #525252
}

.about h1 {
  font-family: 'Fredoka One'
}

.about .summary {
  font-family: 'Lato Regular', sans-serif;
  font-size: 1.7vh;
  white-space: pre-wrap;
}

.about .foto {
  width: 100%;
  border-radius: 50%
}

.about .fab {
  color: #525252;
  transition: .2s ease-in-out
}

.about .fab:hover {
  transform: translateY(-2px)
}

.mt-5 {
  margin-top: 10rem !important;
}
</style>
