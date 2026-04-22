<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { createSwipeAction } from "$lib/utils/swipeAction";
  import type { SlideshowSlice } from "../../../prismicio-types";
  import { PrismicImage, PrismicRichText } from "@prismicio/svelte";
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import AnimateIn from "$lib/components/AnimateIn.svelte";

  export let slice: SlideshowSlice;

  const mediaArray = slice.primary.images;
  const SLIDER_INTERVAL_IN_MS = 5000;
  const TRANSITION_DURATION_MS = 1600;
  
  // State
  let currentIndex = 0;
  let sliderInterval: NodeJS.Timeout | null = null;
  let isPlaying = true;
  let isTransitioning = false;
  
  // Create an array with 3 copies for smooth infinite scroll
  // [original] [clone] [original] [clone] [original]
  const tripledArray = [...mediaArray, ...mediaArray, ...mediaArray];
  const slideWidth = 100 / tripledArray.length;
  
  // Calculate the offset to show the middle set initially
  const getTranslateX = (index: number) => {
    return -(index + mediaArray.length) * slideWidth;
  };

  const startAutoPlay = () => {
    if (!isPlaying) return;
    stopAutoPlay();
    sliderInterval = setInterval(() => moveSlide(1), SLIDER_INTERVAL_IN_MS);
  };

  const stopAutoPlay = () => {
    if (sliderInterval) {
      clearInterval(sliderInterval);
      sliderInterval = null;
    }
  };

  const moveSlide = (direction: number) => {
    if (isTransitioning) return;
    
    isTransitioning = true;
    currentIndex += direction;
    
    // Handle wrapping after transition completes
    setTimeout(() => {
      if (currentIndex >= mediaArray.length) {
        // Jumped to the right clone set, reset to beginning
        currentIndex = currentIndex % mediaArray.length;
      } else if (currentIndex < 0) {
        // Jumped to the left clone set, reset to end
        currentIndex = mediaArray.length + (currentIndex % mediaArray.length);
      }
      isTransitioning = false;
    }, TRANSITION_DURATION_MS);
    
    // Restart autoplay if it was playing
    if (isPlaying) {
      startAutoPlay();
    }
  };

  const slideLeft = () => moveSlide(-1);
  const slideRight = () => moveSlide(1);

  const handleSwipe = (e: CustomEvent<{ direction: "left" | "top" | "right" | "bottom" | null }>) => {
    if (e.detail.direction === "left") {
      slideRight();
    } else if (e.detail.direction === "right") {
      slideLeft();
    }
  };

  const swipe = createSwipeAction(handleSwipe);

  const togglePlayPause = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    currentIndex = index;
    if (isPlaying) {
      startAutoPlay();
    }
  };

  onMount(() => {
    startAutoPlay();
  });

  onDestroy(() => {
    stopAutoPlay();
  });

  $: backgroundColorString = `bg-${slice.primary.backgroundcolor}`;
  $: translateX = getTranslateX(currentIndex);
  $: displayIndex = ((currentIndex % mediaArray.length) + mediaArray.length) % mediaArray.length;
</script>

{#if !slice.primary.hide}
<AnimateIn isOff={!slice.primary.isAnimated} class="w-full py-12 {backgroundColorString}">
  <ContentWidth>
    <div class="w-full flex flex-col md:flex-row md:w-full">
      <!-- Text Content -->
      <div class="{slice.primary.isFullContentWidth ? 'w-0' : 'w-full md:w-1/5'} h-full overflow-hidden">
        <h6 class="text-primary">{slice.primary.label || ''}</h6>
        <PrismicRichText field={slice.primary.body} />
      </div>
      
      <!-- Slideshow -->
      <div class="{slice.primary.isFullContentWidth ? 'w-full' : 'w-full md:w-4/5'} flex flex-row flex-wrap">
        <div use:swipe class="w-full h-full relative overflow-hidden aspect-video">
          <!-- Slides Container -->
          <div 
            class="flex flex-row flex-nowrap transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style="
              width: {tripledArray.length * 100}%;
              transform: translateX({translateX}%);
              transition-duration: {isTransitioning ? TRANSITION_DURATION_MS : 0}ms;
            "
          >
            {#each tripledArray as media}
              <div class="h-full z-0" style="width: {slideWidth}%;">
                <PrismicImage field={media.image} class="h-full w-full object-contain" />
              </div>
            {/each}
          </div>

          <!-- Navigation Controls -->
          <div class="ml-8 h-6 w-[72px] flex justify-between z-10 absolute bottom-2 lg:bottom-6 left-0">
            <button 
              on:click={slideLeft}
              disabled={isTransitioning}
              class="h-6 w-6 rounded-full border-mid border-2 p-1 flex align-middle justify-center cursor-pointer transition-all duration-300 active:-translate-y-1 hover:bg-primary hover:border-primary hover:text-white disabled:opacity-50 disabled:cursor-default"
              aria-label="Previous slide"
            >
              <i class='translate-y-[-1.75px] translate-x-[-0.75px] fa-solid fa-sharp fa-chevron-left scale-90' />
            </button>
            
            <button 
              on:click={slideRight}
              disabled={isTransitioning}
              class="h-6 w-6 rounded-full border-mid border-2 p-1 flex align-middle cursor-pointer transition-all duration-300 active:-translate-y-1 justify-center hover:bg-primary hover:border-primary hover:text-white disabled:opacity-50 disabled:cursor-default"
              aria-label="Next slide"
            >
              <i class='translate-y-[-1.75px] translate-x-[0.75px] fa-solid fa-sharp fa-chevron-right scale-90' />
            </button>
          </div>

          <!-- Play/Pause Button -->
          <button 
            on:click={togglePlayPause}
            class="absolute bottom-2 lg:bottom-6 right-2 lg:right-6 h-6 w-6 rounded-full border-mid border-2 p-1 flex align-middle justify-center cursor-pointer transition-all duration-300 active:-translate-y-1 hover:bg-primary hover:border-primary hover:text-white"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {#if isPlaying}
              <i class="translate-y-[-1.5px] fa-solid fa-sharp fa-pause scale-90"/>
            {:else}
              <i class="translate-y-[-1.5px] translate-x-px fa-solid fa-sharp fa-play scale-75"/>
            {/if}
          </button>

          {#if slice.primary.hasNavDots}
         <div class="absolute bottom-2 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {#each mediaArray as _, i}
              <button
                on:click={() => goToSlide(i)}
                disabled={displayIndex === i}
                class="w-2 h-2 rounded-full transition-all duration-300 opacity-60 hover:opacity-100 {displayIndex === i ? 'bg-primary' : 'bg-mid'}"
                aria-label="Go to slide {i + 1}"
              />
            {/each}
          </div> 
          {/if}
        </div>
        
      </div>
    </div>
  </ContentWidth>
</AnimateIn>
{/if}