<template>
  <main>
    <!-- start hero section -->
    <section class="bg-shape bg-dark">
      <div class="container">
        <div class="row">
          <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-12">
            <div class="pt-lg-4 pb-lg-8 py-12 text-center">
              <img
                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                alt="avatar" class="rounded-circle avatar-xxl mx-auto mb-4">
              <h1 class="display-4 text-white">Pulat Shodmanov</h1>
              <p class="lead text-light mb-0">Backend-Developer</p>
              <div class="mt-3 mb-0">
                <a href="https://t.me/its_pulat" class="me-3 text-white"><i class="fab fa-telegram"></i></a>
                <a href="https://instagram.com/its_pulat" class="me-3 text-white"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com/shodmanovv/" class="me-3 text-white"><i class="fab fa-github"></i></a>
              </div>
              <p class="text-light justify-content-lg-2 mt-3">
                <RouterLink :to="{ name: 'home' }" class="text-light me-4">
                  Back to Menu
                </RouterLink>
                <span>
                  1 Post to read
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of hero section -->
    <!-- start blog author -->
    <div class="py-xxl-16 py-lg-8 py-6">
      <div class="container">
        <div class="row gy-xxl-8 gy-5">
          <article v-for="post in posts" :key="post.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div>
              <!-- post classic block -->
              <div class="mb-4">
                <a href="#">
                  <div class="img-zoom">
                    <img :src="post.img" alt="thumb" class="img-fluid rounded w-100">
                  </div>
                </a>
              </div>
              <div>
                <a href="#" class="text-info mb-3 font-14 d-inline-block fw-semi-bold">{{ post.categorys }}</a>
                <RouterLink :to="{ name: 'detail', params: { id: post.id } }">
                  <h3 class="mb-3">{{ post.name }}</h3>
                </RouterLink>
                <div class="mb-3">
                  <div class="font-14">
                    <span>
                      Posted by
                      <a href="https://t.me/its_pulat">Pulat</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- post classic block -->
          </article>
          <article class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <!-- post classic block -->
          </article>
          <!-- pagination -->
        </div>
      </div>
    </div>
    <!-- end of blog author -->
  </main>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />


</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        posts: [
        ]
      };
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/api/v1/post/')
        .then(response => {
          this.posts = response.data;
          console.log(response.data); // Optional: log response data for debugging
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  };
</script>

