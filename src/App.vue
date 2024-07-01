<template>

  <header>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <RouterLink :to="{ name: 'home' }" class="navbar-brand">
          <div class="logo-wrapper lead mb-0 text-white-50"><a href="/" class="logo">Pulat's Blogs.</a></div></RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-times"></i>
          </button>
          <ul class="navbar-nav ms-auto me-lg-3">
            <li class="nav-item">
              <RouterLink :to="{ name: 'blogs' }" class="nav-link" aria-current="page">Blogs</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pages">Projects</a>
            </li>
          </ul>
          <div class="header-btn">
            <RouterLink :to="{ name: 'about' }" class="btn btn-primary rounded-pill">About Me</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView :key="$route.fullPath" />

  <footer class="bg-dark py-4">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-6">
          <div class="mb-3 mb-md-0">
            <span>© 2024 blog</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
