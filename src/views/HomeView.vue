<template>

  <main>
    <!-- start hero section -->
    <section class="py-6 py-xxl-10 bg-dark">
      <div class="container">
        <div class="row align-items-center gy-lg-6 gy-3">
          <div class="col-lg-5 col-12">
            <div class="d-flex flex-column gap-5 text-center text-md-start">
              <div>
                <h1 class="text-white mb-3 display-5 fw-bold">
                  Pulat Shodmanov
                  <span class="text-danger">.</span>
                </h1>
                <p class="mb-0 lead">
                  Backend-Developer
                </p>
              </div>
              <div>
                <RouterLink :to="{ name: 'about' }" class="btn btn-primary rounded-pill" target="_blank">About Me</RouterLink>
              </div>
              <div class="d-flex justify-content-md-start justify-content-lg-2 mt-0">
                <a class="nav-link me-3" href="https://t.me/its_pulat">
                  <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" width="27" height="27" />
                </a>  
                <a class="nav-link me-3" href="https://instagram.com/its_pulat">
                  <img src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png" width="27" height="27" />
                </a>
                <a class="nav-link me-3" href="https://github.com/shodmanovv/">
                  <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" width="27" height="27" />
                </a> 
              </div>
            </div>
          </div>
          <div class="offset-lg-1 col-lg-6 col-12 d-md-block d-none">
            <div class="row">
                <div class="col-md-12">
                    <img src="https://static.tildacdn.com/tild3437-3235-4266-a137-323935653033/marisabel8095_man_at.png" alt="img" class="rounded-4 img-fluid" />
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
    <!-- end of hero section -->

    <!--start responsive website-->
    <section class="py-6 py-lg-14 bg-light" id="pages">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-12">
            <div class="text-center mb-8">
              <h2 class="mb-0 mt-4">My Projects</h2>
            </div>
          </div>
        </div>
        <div class="row gy-lg-6 gy-5">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="d-flex flex-column gap-5">
              <a href="https://project-1-pied-zeta.vercel.app/" target="_blank">
                <img src="https://themes.getbootstrap.com/wp-content/uploads/2021/06/preview-screenshot-v-1.0.2.jpg" alt="img" class="img-hover rounded-4 img-fluid" />
              </a>
              <h3 class="h4 mb-0">Blogzine</h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="d-flex flex-column gap-5">
              <a href="https://notes-frontend-pearl.vercel.app/signup" target="_blank">
                <img src="file:///C:/Users/User/Downloads/2024-06-19_17-22-36.png" alt="img" class="img-hover rounded-4 img-fluid" />
              </a>
              <h3 class="h4 mb-0">Notes</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

</template>
