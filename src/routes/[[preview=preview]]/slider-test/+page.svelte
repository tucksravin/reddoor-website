<script lang="ts">
import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import SquareImage from "$lib/components/FullWidth/SquareImage.svelte";
  import DefaultButton from "$lib/components/Buttons/DefaultButton.svelte";
  import AnimateIn from "$lib/components/AnimateIn.svelte";
  import { onMount } from "svelte";
  import { swipe } from "svelte-gestures";
  import { fade,slide } from "svelte/transition";
  import printedReddoorLogo from "$lib/assets/icons/logos/printedReddoor.png"
  import applause from "$lib/assets/images/applause.jpg"
  import graph from "$lib/assets/images/reddoorGraph.jpg"
  import wortheImage from "$lib/assets/images/worthe_homepage.png"
  import scfaImage from "$lib/assets/images/SCFA_hompage.png"
  import guildImage from "$lib/assets/images/guild_homepage.png"


 

  
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
  const SLIDER_TRANSITION_LENGTH_IN_MS=500;
  const SLIDER_INTERVAL_IN_MS = 1000;

  let scrollPosition:number;



  let sliderIndex = 0;
      
  
      let sliderInterval:NodeJS.Timeout;


      let viewportHeight:number;
      let viewportWidth:number;



      let prevScrollY = 0;
let sliderRect: DOMRect | null = null;

const logScrollPosition = () => {
  const currentScrollY = window.scrollY;
  const sliderElement = document.getElementById('slider-test-container');
  if (sliderElement) {
    sliderRect = sliderElement.getBoundingClientRect();
    //console.log(`Scroll Y: ${currentScrollY}, Change: ${currentScrollY - prevScrollY}`);
    //console.log(`Slider top: ${sliderRect.top}, bottom: ${sliderRect.bottom}`);
  }
  prevScrollY = currentScrollY;
};

let transitionStartTime = 0;

const trackTransition = () => {
  transitionStartTime = performance.now();
  console.log('Transition started');
  requestAnimationFrame(checkTransitionEnd);
};

const checkTransitionEnd = () => {
  const currentTime = performance.now();
  if (currentTime - transitionStartTime < 1000) { // Adjust based on your transition duration
    //console.log(`Transition time: ${currentTime - transitionStartTime}ms`);
    requestAnimationFrame(checkTransitionEnd);
  } else {
    console.log('Transition ended');
    logScrollPosition();
  }
};




const slideLeft = () => {
  trackTransition();

  setTimeout(() => {
    lastScrollPosition = window.scrollY;
    lastScrollTime = Date.now();
  }, 1000);

  if (sliderIndex == projectArray.length - 1) {
    sliderIndex=0;
  } else {
    sliderIndex++;
  }
};

let isJumpProtectionOn = true;
let detectedJumpCounter = 0;


let lastScrollPosition = 0;
let isScrolling = false;
let lastScrollTime = 0;
const scrollThreshold = 400; // Adjust this value as needed
const timeThreshold = 300; // Time in ms to distinguish between jump and user scroll

function handleScroll(): void {
  if (!isScrolling&&isJumpProtectionOn) {
    window.requestAnimationFrame(() => {
      const currentScrollPosition = window.scrollY;
      const currentTime = Date.now();
      const scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition);
      const timeDifference = currentTime - lastScrollTime;

      if (scrollDifference > scrollThreshold && timeDifference < timeThreshold) {
        // This is likely an unintended jump, prevent it
        window.scrollTo(0, lastScrollPosition);
        detectedJumpCounter++;
        console.log(detectedJumpCounter)
        console.log(`Prevented jump of ${scrollDifference}px`);
      } else {
        // This is likely an intentional user scroll, allow it
        lastScrollPosition = currentScrollPosition;
        lastScrollTime = currentTime;
      }

      isScrolling = false;
    });
  }
  isScrolling = true;
}

function initScrollJumpPrevention(): () => void {
  lastScrollPosition = window.scrollY;
  lastScrollTime = Date.now();
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

onMount(() => {
  window.addEventListener('scroll', logScrollPosition);
  sliderInterval = setInterval(() => slideLeft(), SLIDER_INTERVAL_IN_MS);
  const cleanup = initScrollJumpPrevention();

  return () => {
    window.removeEventListener('scroll', logScrollPosition);
    clearInterval(sliderInterval);
    cleanup;
  };
});



</script>

<svelte:head>
	<title>Reddoor Creative | Home</title>
</svelte:head>
<svelte:window bind:innerWidth={viewportWidth} bind:innerHeight={viewportHeight} />
<div class="w-screen h-96 bg-paper">
  
</div>
   

<div id="slider-test-container" class="w-screen h-screen bg-white">

<div class="w-screen relative bg-paper h-[120vh] sm:h-[175vh] lg:h-screen overflow-hidden">
  <div class="w-full h-full absolute">
      
    <ContentWidth class="flex flex-col lg:flex-row h-full">

        <div class="w-full lg:w-1/2 mt-8 lg:left-0 flex justify-center items-center">
          <h6 class="text-primary absolute top-8 left-0 md:left-[20%] ">Featured <br /> Design</h6>
            <div class="w-full h-full relative">
              <div class="absolute w-full h-full">
              {#key sliderIndex}
              <div class="w-full h-full min-h-[640px] absolute" out:fade={{duration:300}} in:fade={{delay:280, duration:400}}>
                {#if viewportWidth<=1024}
                <div out:fade={{duration:300}} in:fade={{delay:280, duration:400}}>
                  <SquareImage  src={projectArray[sliderIndex].image} />
                </div>
                {/if}
                <p  class="md:ml-[20%] lg:ml-[40%] mt-24" out:fade={{duration:300}} in:fade={{delay:280, duration:400}}>{projectArray[sliderIndex].bodyText}</p>
                <h1 out:fade={{duration:300}} in:fade={{delay:280, duration:400}} class="text-primary mt-24">{projectArray[sliderIndex].projectName}</h1>

            
                <div  out:fade={{duration:300}} in:fade={{delay:280, duration:400}} class="flex flex-row gap-3 md:ml-[20%] lg:ml-[40%] mt-24">
                  <a href={projectArray[sliderIndex].projectLink}>
                    <DefaultButton class="text-primary border-primary border-1 transition hover:bg-mid hover:bg-opacity-20" filled={false}  text="OPEN" />
                  </a>
                  <a href="/portfolio">
                    <DefaultButton class="text-mid border-mid border-1 transition hover:bg-mid hover:bg-opacity-20" filled={false} text="VIEW ALL" />
                  </a>
                </div>
              </div>
              {/key}
            </div>

        </div>
        </div>
        <div class="w-0 h-0 lg:w-1/2"></div>
    </ContentWidth>
    {#if viewportWidth>1024}
    <div class="w-2/5 absolute top-0 right-0 min-h-[640px]">
        {#key sliderIndex}
            <div out:fade={{duration:300}} in:fade={{delay:280, duration:300}}>
                {#each projectArray as project, i }
                    {#if i===sliderIndex%projectArray.length}
                        <SquareImage src={project.image} />
                    {/if}     
                {/each}
            </div>
        {/key}
        
    </div>
    {/if}
  </div>  
  </div>


    <!-- Your slider component here -->
</div>
<div class="h-screen flex flex-col gap-16" >
    <DefaultButton text="Turn {isJumpProtectionOn? "Off" : "On"} Jump Protection" click={()=>{isJumpProtectionOn=!isJumpProtectionOn; console.log(isJumpProtectionOn)}} class="m-16 z-20 w-fit"/>

    <h4 class="ml-16">Jumps prevented: {detectedJumpCounter}</h4>
</div>