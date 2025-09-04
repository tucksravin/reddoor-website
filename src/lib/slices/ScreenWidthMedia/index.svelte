<script lang='ts'>
  import { PrismicImage } from "@prismicio/svelte";
  import { onMount } from "svelte";

  /** @type {import("@prismicio/client").Content.ScreenWidthImageSlice} */
  export let slice;
  let viewportHeight:number;
  let viewportWidth:number;

  let backgroundColorString = 'bg-'+slice.primary.background;

  let showVideo = true;
  const handleError = (err:any) => {console.log("error: "+err);showVideo = false;}
  let iframe:HTMLIFrameElement;

  onMount(()=>{


});


</script>
<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />
{#if !slice.primary.hide}
<section class="w-full relative overflow-hidden {slice.primary.hasPadding? "py-12":""} {backgroundColorString}">
{#if slice.primary.vimeoid}
          <PrismicImage class="w-screen h-full object-cover absolute {slice.primary.hasPadding?"top-12": "top-0"} left-0 z-0" field={slice.primary.image} />
       
            <iframe 
	  					title="background video" 
	 					src={`https://player.vimeo.com/video/${slice.primary.vimeoid}?title=0${ slice.primary.loopvideo ? "&background=1&loop=1&autoplay=1&muted=1":""}`}
	  					class="object-cover {slice.primary.aspect ==='square' ? 'aspect-square':
                slice.primary.aspect === '4/3' ? 'aspect-[4/3]': 
                slice.primary.aspect === '3/4' ? 'aspect-[3/4]' :
                slice.primary.aspect === '16/9' ? 'aspect-video' :
                slice.primary.aspect === '9/16' ? 'aspect-[9/16]' : ''}  w-screen mx-auto relative z-10 {showVideo?"opacity-100":"opacity-0"} transition-opacity duration-200"
	  					frameborder="0"
              allow="autoplay; fullscreen;"
              bind:this={iframe}
              on:error={handleError}
					></iframe>
          {:else}
          <PrismicImage class="w-screen object-cover {slice.primary.aspect ==='square' ? 'aspect-square':
                slice.primary.aspect === '4/3' ? 'aspect-[4/3]': 
                slice.primary.aspect === '3/4' ? 'aspect-[3/4]' :
                slice.primary.aspect === '16/9' ? 'aspect-video' :
                slice.primary.aspect === '9/16' ? 'aspect-[9/16]' : ''}" field={slice.primary.image} />
  {/if}
</section>
{/if}
