<template>
    <section class="py-lg-14 py-6 bg-dark">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-xxl-5 cpl-md-8">
                    <div class="text-center">
                        <h2 class="text-white mb-3 display-6 fw-semibold">
                            <h1 class="display-1 text-danger mb-0" style="font-weight: 500;">404</h1>
                        </h2>
                        <h4 class="text-white mb-3 display-6 fw-semibold">Oh yo'q, xatolik yuziga keldi!</h4>
                        <RouterLink :to="{name: 'home'}" 
                            class="btn btn-primary rounded-pill">
                            Bosh sahifaga qaytish
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>