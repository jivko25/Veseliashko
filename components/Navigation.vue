<template>
    <nav id="navbar" :class="[
        'fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300',
        (isScrolled || isOpen) ? 'bg-pink-200/60' : ''
    ]">
        <div class="text-2xl font-bold text-white">🎈 Веселячко</div>

        <!-- Hamburger Button (visible on mobile only) -->
        <button @click="isOpen = !isOpen" class="sm:hidden flex flex-col justify-center items-center space-y-1">
            <span class="w-6 h-0.5 bg-white"></span>
            <span class="w-6 h-0.5 bg-white"></span>
            <span class="w-6 h-0.5 bg-white"></span>
        </button>

        <!-- Menu (desktop) -->
        <ul class="hidden sm:flex space-x-6 font-medium text-white min-h-[48px] min-w-[200px]">
            <li><a href="#services">
                    <RainbowButton>
                        <p class="text-neutral-950">Услуги</p>
                    </RainbowButton>
                </a></li>
            <li><a href="#about">
                    <RainbowButton>
                        <p class="text-neutral-950">За нас</p>
                    </RainbowButton>
                </a></li>
            <li><a href="#contact">
                    <RainbowButton>
                        <p class="text-neutral-950">Свържете се с нас</p>
                    </RainbowButton>
                </a></li>
        </ul>

        <!-- Menu (mobile dropdown) -->
        <transition name="fade">
            <ul v-if="isOpen"
                class="absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4 sm:hidden text-white font-medium mobile-menu-wrapper">
                <li><a href="#services" @click="isOpen = false">
                        <RainbowButton>
                            <p class="text-neutral-950">Услуги</p>
                        </RainbowButton>
                    </a></li>
                <li><a href="#about" @click="isOpen = false">
                        <RainbowButton>
                            <p class="text-neutral-950">За нас</p>
                        </RainbowButton>
                    </a></li>
                <li><a href="#contact" @click="isOpen = false">
                        <RainbowButton>
                            <p class="text-neutral-950">Свържете се с нас</p>
                        </RainbowButton>
                    </a></li>
            </ul>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.mobile-menu-wrapper {
    background-color: rgb(251 207 232 / 0.6) !important;
}
</style>