<template>
    <section class="py-xxl-16 py-lg-8 py-6">
        <div class="container">
            <div class="row">
                <div class="offset-xxl-2 col-xxl-8 col-md-12 col-12">
                    <div class="row gy-xxl-8 gy-6">
                        <article class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div>
                                <div class="mb-8">
                                    <a>
                                        <div class="ps-xl-8 ps-0">
                                            <a href="#">
                                                <h2 class="mb-3">{{ post.name }}</h2>
                                            </a>
                                            <p class="mb-5">{{ post.text }}</p>
                                            <div class="mb-3">
                                                <div class="font-14">
                                                    <div class="img-zoom">
                                                        <img :src="post.img2">
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="mb-5">{{ post.text2 }}</p>
                                            <RouterLink :to="{ name: 'blogs' }" class="btn-primary-link">Back Blogs</RouterLink>
                                        </div>
                                    </a>
                                </div>
                            </div>  
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
  
<script>
    import { RouterLink, RouterView } from 'vue-router'
    import axios from "axios"
    
    export default {
    
        components: {
            RouterLink,
        },
    
        data() {
            return {
                post: [],
            };
        },
    
        mounted() {
            this.getpost();
        },
    
        methods: {
            async getpost() {
                await axios.get(`detail/v1/${this.$route.params.id}/`)
                    .then(response => {
                        this.post = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        },
    
    }
    
</script>