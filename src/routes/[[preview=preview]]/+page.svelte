<script lang="ts">
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import SquareImage from "$lib/components/FullWidth/SquareImage.svelte";
  import DefaultButton from "$lib/components/Buttons/DefaultButton.svelte";
  import AnimateIn from "$lib/components/AnimateIn.svelte";
  import { onMount } from "svelte";
  import { fade,slide } from "svelte/transition";
  import graph from "$lib/assets/images/reddoorGraph.jpg"
  import wortheImage from "$lib/assets/images/worthe_homepage.png"
  import scfaImage from "$lib/assets/images/SCFA_hompage.png"
  import guildImage from "$lib/assets/images/guild_homepage.png"
  import progressLogo from "$lib/assets/icons/logos/progress.svg"
  import huluLogo from "$lib/assets/icons/logos/hulu.svg"
  import toyotaLogo from "$lib/assets/icons/logos/toyota.svg"
  import innoceanLogo from "$lib/assets/icons/logos/innocean.svg"
  import tosaLogo from "$lib/assets/icons/logos/tosa.svg"
  import worthLogo from "$lib/assets/icons/logos/worthe.svg"
  import compositionTestimonial from "$lib/assets/images/compositionTestimonial.jpg"
  import jeff from "$lib/assets/images/jeff.png"
  import OpeningAnimation from "$lib/components/OpeningAnimation.svelte";
  import megaphone from "$lib/assets/icons/megaphone.png"
  import LogoSoup from "$lib/components/LogoSoup.svelte";
  import type { LogoSoupDocument } from "../../prismicio-types.js";



  let innerWidth:number;  

  
  let projectArray = [
    {
      projectName:"Worthe",
      bodyText:"Burbank's largest collection of commercial real estate with a severe identity crisis. Seven legacy brands that had been developed over the last 30 years needing to come under one cohesive brand.",
      projectLink:"/portfolio/worthe",
      image: wortheImage
    },
    {
      projectName:"SoCal Food Allergy",
      bodyText:"Website/branding with an approachable visual language for a cutting edge allergy clinic providing children with food freedom.",
      projectLink:"/portfolio/scfai",
      image: scfaImage

    },
    {
      projectName: "The Guild Collective",
      bodyText: "The Guild Collective was formed in 2020 with a vision to unite skilled craftsmen to build things that improve the lives of their customers.",
      projectLink: "/portfolio/the-guild-collective",
      image: guildImage
    }
  ]

  let showImage=true;

  const SLIDER_TRANSITION_FUNCTION="cubic-bezier(.5,0,0,1)";
  const SLIDER_TRANSITION_LENGTH_IN_MS=2000;
  const SLIDER_INTERVAL_IN_MS = 5000;




  let sliderIndex = 0;

     
      const slideLeft = () => {

        if(sliderIndex==projectArray.length-1){
        sliderIndex=0;}else{
          sliderIndex++;
        }
          
          clearInterval(sliderInterval);
	    sliderInterval = setInterval(()=>slideLeft(), SLIDER_INTERVAL_IN_MS);
      

         
      }

  
      let sliderInterval:NodeJS.Timeout;
  
 
      let isReadMoreOpen = false;

      let viewportHeight:number;
      let viewportWidth:number;

      export let data;

      console.log(data.logoSoup)
     

        const logoSoup = data.logoSoup;

      onMount(() => {
  sliderInterval = setInterval(() => slideLeft(), SLIDER_INTERVAL_IN_MS);

  return () => {
    clearInterval(sliderInterval);

  }
});
    </script>

<svelte:head>
	<title>Reddoor Creative | Home</title>
</svelte:head>
<svelte:window bind:innerWidth={viewportWidth} bind:innerHeight={viewportHeight} />
<OpeningAnimation />

<div class="relative w-screen bg-paper">
  <div class='w-screen py-32'>
    <ContentWidth class="flex flex-col relative">
      <img src={megaphone} alt="megaphone" class="w-1/5 md:w-1/4 lg:w-1/5 mix-blend-multiply opacity-50" />
      
      <h2 class='-mt-24 w-2/5 text-primary'>Better Design Means Better Business</h2>
      <AnimateIn class='h-[1px] bg-primary w-full my-8'></AnimateIn>
      <div class='w-full flex flex-row justify-end'>
        <AnimateIn class='w-1/3 lg:w-1/5 pr-6'>
          <h5 class='text-primary'>Stand Out</h5>
          <p class='mt-2'>The best brands have a story worth telling. With compelling design, you can stand out and succeed in this noisy world.</p>
        </AnimateIn>
        <AnimateIn class='w-1/3 lg:w-1/5 pr-6'>
          <h5 class='text-primary'>Feel Confident</h5>
          <p class='mt-2'>When you have a brand that is clear and compelling, you can't help but be confident in any situation. Your clients sense this and are attracted to your offering.</p>
        </AnimateIn>
        <AnimateIn class='w-1/3 lg:w-1/5 pr-6'>
          <h5 class='text-primary'>Be Energized</h5>
          <p class='mt-2'>You have something great to offer and when your audience clearly understands how you can solve their problem, it will help you close more deals.</p>
        </AnimateIn>
      </div>
      
      
    </ContentWidth>
  </div>


    <LogoSoup {data} />

 
</div>


<!-- footer -->
<div class="w-screen py-40 md:h-[80vh] bg-paper-red flex flex-col items-center justify-center relative">
  <div class="w-full h-full bg-paper-red absolute top-0 left-0"></div>
  <AnimateIn>
  <ContentWidth class="flex flex-col md:flex-row items-start justify-between">
      <h3 class="text-white md:w-3/5">Isn’t it time to arm your brand with a clear story and compelling design?</h3>
      <AnimateIn transitionDelayMax={1600}>
      <a href="/contact">
      <DefaultButton class="mt-6 text-white border-white border-1 hover:bg-mid hover:bg-opacity-10" text="MEET WITH US" filled={false} />
      </a>
      </AnimateIn>
  </ContentWidth>
  </AnimateIn>
</div>
