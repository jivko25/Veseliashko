<template>
    <div class="gallery" :class="cn('mb-[var(--size)] grid grid-cols-6 gap-1', props.containerClass)">
      <NuxtImg
        v-for="(image, index) in props.items"
        :key="index"
        :src="image.src"
        :alt="`image-${index}`"
        width="300"
        height="300"
        format="webp"
        sizes="(max-width: 768px) 100vw, 33vw"
        class="gallery-img"
        :class="cn(
          'size-[calc(var(--size)*2)] rounded object-cover transition-[clip-path,filter] duration-75',
          props.class,
        )"
        @click="showLightbox(index)"
      />
    </div>
  
    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="props.items.map(i => i.src)"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />
  </template>

<script setup lang="ts">
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { cn } from '@/utils/cn'

interface Props {
    containerClass?: string
    class?: string
    items: {
        src: string
    }[]
}
const props = defineProps<Props>()

const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

function showLightbox(index: number) {
    lightboxIndex.value = index
    lightboxVisible.value = true
}
</script>



<style scoped>
.gallery {
    --size: 100px;
    grid-auto-rows: var(--size);

    &:has(:hover) img:not(:hover),
    &:has(:focus) img:not(:focus) {
        filter: brightness(0.5) contrast(0.5);
    }

    img {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        grid-column: auto / span 2;

        &:nth-child(5n-1) {
            grid-column: 2 / span 2;
        }

        &:hover,
        &:focus {
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
            z-index: 1;
            transition:
                clip-path 0.25s,
                filter 0.25s;
            filter: saturate(150%);
        }

        &:focus {
            outline: 10px dashed black;
            outline-offset: -5px;
        }
    }
}
</style>