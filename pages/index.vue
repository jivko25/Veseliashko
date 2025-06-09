<template>
    <!-- <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <DotLottieVue style="height: 100px; width: 100px" autoplay loop src="https://lottie.host/6f399c54-77fb-430c-b463-d1fd970a3e3f/IGlDFjD4uF.lottie" />
    </div> -->
    <div class="bg-white body">
        <!-- Navigation -->
        <Navigation v-if="!isLoading" />
        <!-- Call to Action Section -->
        <section class="relative h-screen bg-cover bg-center hero">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div v-if="!isLoading" class="relative flex flex-col items-center justify-center h-full text-white text-center p-4">
                <SparklesText text="Незабравимо парти за всяко дете!" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
                    :sparkles-count="10" class="my-8" />
                <p class="mb-4 text-lg z-2">Организираме празненства, пълни с музика, балони, игри и усмивки – всичко,
                    което прави рождения ден специален!</p>
                <a href="#contact">
                    <RainbowButton>
                        <p class="text-neutral-950">
                            Свържи се с нас
                        </p>
                    </RainbowButton>
                </a>
                <!-- <video autoplay muted loop class="video-bg" width="1920" height="1080">
                    <source src="/videos/6299128-uhd_3840_2160_25fps.mp4" type="video/mp4" class="video-bg">
                </video> -->
            </div>
        </section>
        <!-- Services Overview Section -->
        <section id="services" class="py-20 px-4 bg-gradient-to-b from-yellow-200 to-pink-200">
            <LetterPullup words="Нашите услуги" :delay="0.1" class="text-black section-header" />
            <p class="text-center mb-8 text-lg"> Изберете идеалния парти пакет за незабравим рожден ден, пълен с
                усмивки, игри и много забавление!
            </p>
            <div class="flex flex-col sm:flex-row justify-around cards-wrapper">
                <SparklesText v-for="(pack, index) in packages" :key="index"
                    :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="pack.sparkles"
                    class="my-8 product-card w-full sm:w-[30%]">
                    <div :class="`${pack.bgColor} p-6 rounded-lg shadow-lg text-center card-content`">
                        <h3 class="text-3xl font-bold mb-2 subtitle">{{ pack.title }}</h3>
                        <p class="subtitle"><strong>{{ pack.price }}</strong></p>

                        <div class="text-left text-base space-y-2 mt-4 card-inner-content">
                            <p class="font-semibold">Включва:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li v-for="(item, i) in pack.includes" :key="i">{{ item }}</li>
                            </ul>

                            <p class="font-semibold mt-2">Допълнително:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li v-for="(item, i) in pack.extra" :key="i">{{ item }}</li>
                            </ul>
                        </div>

                        <RainbowButton class="mt-6">
                            <p class="text-neutral-950 text-xl">
                                <a href="#contact">Contact us</a>
                            </p>
                        </RainbowButton>
                    </div>
                </SparklesText>
            </div>
        </section>

        <!-- About Us Section -->
        <section id="about" class="py-20 px-4 bg-white">
            <LetterPullup words="За нас" :delay="0.1" class="text-black mb-12 section-header" />
            <div class="about-us-content">
                <div class="img-wrapper">
                    <img src="/images/about-us.jpg" alt="About Us" class="responsive-img">
                </div>
                <div class="text-content">
                    <SparklesText :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="20"
                        class="w-100 flex flex-row justify-center">
                        <h4 class="text-center w-100 subtitle">Добре дошли в Парти агенция „Веселячко“! 🎉</h4>
                    </SparklesText>
                    <h5 class="additional-title w-100 text-center">Тук всяко дете е звездата на своето вълшебно парти!
                        🎈</h5>

                    <p>
                        Здравейте! Казвам се [Твоето име] и вече над 10 години работя с деца – с обич, търпение и много
                        усмивки.
                        Вярвам, че човек трябва да прави това, в което е най-добър – а за мен това е да създавам радост,
                        да развеселявам
                        и да превръщам обикновените дни в незабравими празници.
                    </p>

                    <p>
                        Създадох „Веселячко“ с една цел – да ви помогна да избягате от сивото ежедневие и да превърнете
                        рождения ден
                        или специалния повод на вашето дете в истинско приключение, пълно с музика, игри, смях и магия.
                    </p>

                    <p>
                        Работата ми с децата ме е научила да съхраня детското в себе си – защото когато гледаш света с
                        очите на дете,
                        той е по-цветен, по-истински и много по-весел.
                    </p>

                    <p class="mt-4 font-semibold">👑 Очакват ви:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Детски дискотеки</li>
                        <li>Забавни игри и предизвикателства</li>
                        <li>Рисунки на лице</li>
                        <li>Фигурални балони</li>
                        <li>Много смях, танци и незабравими емоции</li>
                    </ul>

                    <p class="mt-4 font-semibold text-pink-600">💛 Доверете ни се – заедно ще създадем празник, който
                        децата ще помнят дълго.</p>

                    <div class="flex flex-row gap-2 mx-auto mt-6">
                        <a href="#" class="text-blue-500" aria-label="Learn more from our facebook"><i
                                class="fab fa-facebook-f icon"></i></a>
                        <a href="#" class="text-blue-400" aria-label="Learn more from our twitter"><i
                                class="fab fa-twitter icon"></i></a>
                        <a href="#" class="text-pink-600" aria-label="Learn more from our instagram"><i
                                class="fab fa-instagram icon"></i></a>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center mt-12">
                <ImageGallery :items="galleryItems" />
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 px-4 bg-gradient-to-b from-pink-200 to-yellow-200">
            <h2 class="text-5xl font-bold text-center mb-8">Свържете се с нас</h2>
            <p class="text-center max-w-3xl mx-auto">
                Имате въпроси или искате да планираме заедно най-веселото парти? 💌
                Свържете се с нас – с радост ще ви помогнем да организирате незабравимо изживяване за вашето дете!
            </p>

            <div
                class="mt-12 flex flex-col md:flex-row content-container justify-between contacts-wrapper gap-8 md:gap-0">
                <div class="contact-container text-center md:text-left">
                    <h2 class="text-xl font-semibold mb-2">📞 Телефон</h2>
                    <a href="tel:+359876190806" class="text-lg text-blue-700 hover:underline">+359 876 190 806</a>
                </div>

                <div class="contact-container text-center md:text-left">
                    <h2 class="text-xl font-semibold mb-2">📧 Имейл</h2>
                    <a href="mailto:veseliashko@gmail.com"
                        class="text-lg text-blue-700 hover:underline">veseliashko@gmail.com</a>
                </div>

                <div class="text-2xl font-bold text-black text-center md:text-left">
                    🎈 Веселяшко
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const RainbowButton = defineAsyncComponent(() => import('@/components/RainbowButton.vue'))
const ImageGallery = defineAsyncComponent(() => import('~/components/ImageGallery.vue'))

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

const packages = [
    {
        title: 'Пакет 1: “Мини Парти”',
        price: '130 лв / за 10 деца (13 лв на дете)',
        bgColor: 'bg-yellow-300',
        sparkles: 5,
        includes: [
            '🎵 Детска дискотека (1 час) с аниматор',
            '🎈 Фигурални балони за всяко дете',
            '🎨 Рисунки на лице (до 2 модела на дете)',
            '🕹️ Организирани игри',
            '🎁 Малка наградка за всяко дете'
        ],
        extra: [
            '1 аниматор',
            'Времетраене: 1.5 часа'
        ]
    },
    {
        title: 'Пакет 2: “Средно Забавление”',
        price: '160 лв / за 20 деца (8 лв на дете)',
        bgColor: 'bg-pink-300',
        sparkles: 20,
        includes: [
            '🎵 Детска дискотека (1.5 часа) с професионален аниматор',
            '🎈 Фигурални балони (по избор)',
            '🎨 Рисунки на лице с повече модели',
            '🧩 Игри с награди',
            '🥳 Специален “рожденик момент”'
        ],
        extra: [
            '2 аниматори',
            'Времетраене: 2 часа'
        ]
    },
    {
        title: 'Пакет 3: “Голямо Парти”',
        price: '180 лв / за 30 деца (6 лв на дете)',
        bgColor: 'bg-blue-300',
        sparkles: 50,
        includes: [
            '🎵 Детска дискотека с DJ техника (2 часа)',
            '🎈 Фигурални балони – по един за всяко дете',
            '🎨 Персонализирани рисунки на лице',
            '🏆 Мини турнири, танцови битки, награди',
            '🎉 Голяма обща игра + награда',
            '🎂 Специално шоу за рождения ден'
        ],
        extra: [
            '3 аниматори',
            'Времетраене: 2.5 – 3 часа'
        ]
    }
]


const galleryItems = [
    {
        src: "/images/viber_image_2025-05-31_10-02-04-276.jpg",
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
    font-display: swap;
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
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
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
    // max-width: 33vw;
    height: 100%;
    width: fit-content;

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
        max-width: 560px;
        object-fit: cover;
    }

    .text-content {
        width: 60%;
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
    @media (max-width: 1024px) {
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

.video-bg {
    width: 100%;
    aspect-ratio: 16 / 9;
    /* или колкото е реалното съотношение */
    object-fit: cover;
    display: block;
}

.img-wrapper {
  width: 100%;
  max-width: 560px;
  aspect-ratio: 140 / 169;
    overflow: hidden;
}

.responsive-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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