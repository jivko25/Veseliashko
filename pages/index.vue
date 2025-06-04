<template>
    <!-- <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <DotLottieVue style="height: 100px; width: 100px" autoplay loop src="https://lottie.host/6f399c54-77fb-430c-b463-d1fd970a3e3f/IGlDFjD4uF.lottie" />
    </div> -->
    <div class="bg-white body">
        <!-- Navigation -->
        <Navigation />
        <!-- Call to Action Section -->
        <section class="relative h-screen bg-cover bg-center hero">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="relative flex flex-col items-center justify-center h-full text-white text-center p-4">
                <!-- <h1 class="text-6xl font-bold mb-4 z-2">Make Your Child's Party Unforgettable!</h1> -->
                <SparklesText text="Make Your Child's Party Unforgettable!"
                    :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="10" class="my-8" />
                <p class="mb-4 text-lg z-2">We offer a variety of fun and exciting party packages tailored for your
                    child's
                    special
                    day.</p>
                <a href="#contact">
                    <RainbowButton>
                        <p class="text-neutral-950">
                            Contact us
                        </p>
                    </RainbowButton>
                </a>
                <video autoplay muted loop class="video-bg">
                    <source src="/videos/6299128-uhd_3840_2160_25fps.mp4" type="video/mp4" class="video-bg">
                </video>
                
            </div>
        </section>
        <!-- Services Overview Section -->
        <section id="services" class="py-20 px-4 bg-gradient-to-b from-yellow-200 to-pink-200">
            <LetterPullup words="Our Services" :delay="0.1" class="text-black section-header" />
            <p class="text-center mb-8 text-lg">We provide a range of services to make your child's party magical:</p>
            <ul class="list-disc list-inside text-center mb-8 text-lg">
                <li>🎈 Party Planning</li>
                <li>🎨 Themed Decorations</li>
                <li>🎉 Entertainment & Games</li>
                <li>🎂 Custom Cakes</li>
                <li>🎤 DJ Services</li>
            </ul>
            <div class="flex flex-col sm:flex-row justify-around cards-wrapper">
                <SparklesText :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="5"
                    class="my-8 product-card">
                    <div class="bg-yellow-300 p-6 rounded-lg shadow-lg text-center card-content">
                        <h3 class="text-3xl font-bold mb-2 subtitle">Basic Package</h3>
                        <p class="subtitle">1h</p>
                        <RainbowButton>
                            <p class="text-neutral-950 text-xl">
                                Contact us
                            </p>
                        </RainbowButton>
                    </div>
                </SparklesText>
                <SparklesText :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="20"
                    class="my-8 product-card">
                    <div class="bg-pink-300 p-6 rounded-lg shadow-lg text-center card-content">
                        <h3 class="text-3xl font-bold mb-2 subtitle">Standard Package</h3>
                        <p class="subtitle">2h</p>
                        <RainbowButton>
                            <p class="text-neutral-950 text-xl">
                                Contact us
                            </p>
                        </RainbowButton>
                    </div>
                </SparklesText>
                <SparklesText :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="50"
                    class="my-8 product-card">
                    <div class="bg-blue-300 p-6 rounded-lg shadow-lg text-center card-content">
                        <h3 class="text-3xl font-bold mb-2 subtitle">Premium Package</h3>
                        <p class="subtitle">3h</p>
                        <RainbowButton>
                            <p class="text-neutral-950 text-xl">
                                Contact us
                            </p>
                        </RainbowButton>
                    </div>
                </SparklesText>
            </div>
        </section>
        <!-- About Us Section -->
        <section id="about" class="py-20 px-4 bg-white">
            <LetterPullup words="About Us" :delay="0.1" class="text-black mb-12 section-header" />
            <div class="about-us-content">
                <img src="/images/about-us.jpg" alt="">
                <div class="text-content">
                    <SparklesText :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="20"
                        class="w-100 flex flex-row justify-center">
                        <h4 class="text-center w-100 subtitle">Мирела Ганчева</h4>
                    </SparklesText>
                    <h5 class="additional-title w-100 text-center">Собственик на компанията</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <div class="flex flex-row gap-2 mx-auto">
                        <a href="#" class="text-blue-500" aria-label="Learn more from our facebook"><i class="fab fa-facebook-f icon"></i></a>
                        <a href="#" class="text-blue-400" aria-label="Learn more from our twitter"><i class="fab fa-twitter icon"></i></a>
                        <a href="#" class="text-pink-600" aria-label="Learn more from our instagram"><i class="fab fa-instagram icon"></i></a>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center mt-12">
                <ImageGallery :items="galleryItems" />
            </div>
        </section>
        <!-- Contact Section -->
        <section id="contact" class="py-20 px-4 bg-gradient-to-b from-pink-200 to-yellow-200">
            <h2 class="text-5xl font-bold text-center mb-8">Contact Us</h2>
            <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil consectetur odio
                voluptas iure repellendus dolore doloribus nulla ut in ipsum nisi eius accusamus, dolorum, quisquam
                temporibus eos velit, fuga esse.</p>
            <div class="mt-12 flex flex-row content-container justify-between contacts-wrapper">
                <div class="contact-container">
                    <h2>Call us directly</h2>
                    <a href="tel:+6494461709">+359888888888</a>
                </div>
                <div class="contact-container">
                    <h2>Email</h2>
                    <a href="email:test@gmail.com">test@gmail.com</a>
                </div>
                <div class="text-2xl font-bold text-black">Veseliashko</div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const RainbowButton = defineAsyncComponent(() => import('@/components/RainbowButton.vue'))
const ImageGallery = defineAsyncComponent(() => import('~/components/ImageGallery.vue'))
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'


const isLoading = ref(true)

onBeforeMount(() => {
  if (document.readyState === 'complete') {
    // Страницата вече е напълно заредена
    console.log('load (immediate)')
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  } else {
    // Изчакай load събитието
    window.addEventListener('load', () => {
      console.log('load (event)')
      setTimeout(() => {
        isLoading.value = false
      }, 300)
    })
  }
})

const galleryItems = [
    {
        src: "/images/viber_image_2025-05-31_10-02-04-276.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-04-636.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-04-636.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-05-268.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-05-577.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-05-938.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-06-284.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-06-617.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-06-990.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-07-305.jpg",
    },
    {
        src: "/images/viber_image_2025-05-31_10-02-07-614.jpg",
    },
];

</script>

<style lang="scss">
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Baloo 2', cursive;
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #9E7AFF; // Можеш да смениш цвета
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.video-bg {
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 1;
    object-fit: cover;
}

.z-2 {
    z-index: 2;
}

.product-card {
    max-width: 33vw;
    height: 100%;

    .card-content {
        height: 100%;
    }
}

ul {
    list-style-type: none !important;
}

.content-container {
    max-width: 1440px;
    padding: 0 20px;
    margin: auto;
}

.about-us-content {
    @extend .content-container;
    display: flex;
    flex-direction: row;
    gap: 30px;

    img {
        width: 30%;
        object-fit: cover;
    }

    .text-content {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

.section-header {
    font-size: 32px;
}

.subtitle {
    font-size: 26px;
}

.additional-title {
    font-size: 16px;
}

.icon {
    font-size: 30px;
}

.contacts-wrapper {
    margin-top: 20px !important;
}

.contact-container {
    h2 {
        font-size: 20px;
        font-weight: bold;
    }
}

.cards-wrapper {
    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 576px) {
        .product-card {
            max-width: 300px;
            width: 100%;

            span {
                width: 100%;
            }
        }
    }
}

.about-us-content {
    @media (max-width: 576px) {
        flex-direction: column;

        .text-content {
            width: 100%;
        }

        img {
            width: 100%;
        }

        ;
    }
}

#contact {
    @media (max-width: 576px) {
        .content-container {
            flex-direction: column;

            .contact-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-top: 12px;
            }
        }
    }
}

.hero {
    @media (max-width: 576px) {
        span {
            font-size: 42px;
        }
    }
}

// .icon {
//     font-size: 40px;
//     width: 70px;
//     height: 70px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 100px;
//     background-color: white;
// }</style>