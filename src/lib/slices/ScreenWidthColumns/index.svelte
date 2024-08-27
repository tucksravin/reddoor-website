<script>
  /** @type {import("@prismicio/client").Content.ScreenWidthColumnsSlice} */
  import { PrismicEmbed, PrismicImage, PrismicRichText } from "@prismicio/svelte";
  export let slice;
  let backgroundColorString = 'bg-'+slice.primary.background;
</script>



<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  class="w-screen flex flex-row justify-center flex-wrap {slice.primary.hasPadding? "py-12" : ""} {backgroundColorString}"
>

      
        {#each slice.primary.media as item}
        
        <div class="{slice.primary.hasGap ? "pr-6 pb-6" : ""} relative w-full flex flex-col items-center justify-start {slice.primary.desktopcolumns==="2" ? "md:w-1/2":""} {slice.primary.desktopcolumns==="3" ? "md:w-1/3":""}">
          {#if item.label}
            <div class="w-full border-b-1 border-dark label mb-8">{item.label}</div>
          {/if}
          {#if item.vimeoid}
       
            <iframe 
	  					title="background video" 
	 					src={`https://player.vimeo.com/video/${item.vimeoid}?title=0${item.loopvideo? "&background=1&loop=1&autoplay=1&muted=1":""}`}
	  					class="object-cover aspect-video w-full mx-auto z-10"
	  					frameborder="0"
              allow="autoplay"
					></iframe>
          {:else}
          <PrismicImage class="w-full object-cover" field={item.image} />
  
          {/if}
          </div>
        {/each}
      
 

  
</section>
