import { c as create_ssr_component, o as onDestroy, v as validate_component, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { C as ContentWidth, A as AnimateIn } from "../../../../chunks/ContentWidth.js";
import { D as DefaultButton } from "../../../../chunks/DefaultButton.js";
import { S as ScreenWidthImage } from "../../../../chunks/ScreenWidthImage.js";
import { L as LogoSoup } from "../../../../chunks/LogoSoup.js";
const beach = "/_app/immutable/assets/beach.CEAiYLht.jpg";
const hills = "/_app/immutable/assets/hills.DjlN_Yhq.jpg";
const lake = "/_app/immutable/assets/alpineLake.u-Vs_jpN.jpg";
const tim = "/_app/immutable/assets/tim.CIj-WP2d.jpg";
const erik = "/_app/immutable/assets/erik.BUjBmCbD.jpg";
const car = "/_app/immutable/assets/reddoorcar.D1pKrOnI.png";
const monotoneCar = "/_app/immutable/assets/RD_CarOnly.B6nicYeV.png";
const applause = "/_app/immutable/assets/applause.BNNxEnVZ.jpg";
const key = "/_app/immutable/assets/RD_Keys-04.DNldN6Fm.png";
const css = {
  code: "h5.title.svelte-1u6beet{font-family:Pragmatica;font-size:50px;font-style:normal;font-weight:250;line-height:140%}@media only screen and (max-width:768px){h5.title.svelte-1u6beet{font-size:28px\n        }}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import beach from \\"$lib/assets/images/beach.jpg\\";\\nimport hills from \\"$lib/assets/images/hills.jpg\\";\\nimport lake from \\"$lib/assets/images/alpineLake.jpg\\";\\nimport tim from \\"$lib/assets/images/tim.jpg\\";\\nimport erik from \\"$lib/assets/images/erik.jpg\\";\\nimport car from \\"$lib/assets/images/reddoorcar.png\\";\\nimport monotoneCar from \\"$lib/assets/images/RD_CarOnly.png\\";\\nimport applause from \\"$lib/assets/images/applause.jpg\\";\\nimport key from \\"$lib/assets/icons/RD_Keys-04.png\\";\\nimport ContentWidth from \\"$lib/components/ContentWidth/ContentWidth.svelte\\";\\nimport DefaultButton from \\"$lib/components/Buttons/DefaultButton.svelte\\";\\nimport AnimateIn from \\"$lib/components/AnimateIn.svelte\\";\\nimport ScreenWidthImage from \\"$lib/components/ScreenWidth/ScreenWidthImage.svelte\\";\\nimport { onDestroy, onMount } from \\"svelte\\";\\nimport LogoSoup from \\"$lib/components/LogoSoup.svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { browser } from \\"$app/environment\\";\\nlet targetCarTranslation = 0;\\nlet targetMonoCarTranslation = 0;\\nlet carTranslationInVW = 0;\\nlet monoCarTranslationInVW = 0;\\nlet viewportHeight = 1024;\\nlet viewportWidth = 1024;\\nlet carRef;\\nlet monoCarDivRef;\\nlet animationFrameId;\\nlet isMobile = false;\\nconst lerp = (start, end, factor) => {\\n  return start + (end - start) * factor;\\n};\\nconst LERP_FACTOR = 0.02;\\nconst handleScroll = () => {\\n  if (!browser || typeof window === \\"undefined\\") return;\\n  if (!carRef || !monoCarDivRef) return;\\n  const carRect = carRef.getBoundingClientRect();\\n  const monoCarDivRect = monoCarDivRef.getBoundingClientRect();\\n  const y = window.pageYOffset || document.documentElement.scrollTop;\\n  targetMonoCarTranslation = 100 * (y / monoCarDivRect.bottom);\\n  targetCarTranslation = 100 * (carRect.top - carRect.height / 2) / viewportHeight;\\n};\\nconst animate = () => {\\n  carTranslationInVW = lerp(carTranslationInVW, targetCarTranslation, LERP_FACTOR);\\n  monoCarTranslationInVW = lerp(monoCarTranslationInVW, targetMonoCarTranslation, LERP_FACTOR);\\n  animationFrameId = requestAnimationFrame(animate);\\n};\\nlet popupText = \\"\\";\\nlet popupX = 0;\\nlet popupY = 0;\\nlet showMobilePopup = false;\\nlet mobilePopupTarget = null;\\nconst handleMouseMove = (e) => {\\n  if (!browser || typeof window === \\"undefined\\") return;\\n  if (!popupText || isMobile) return;\\n  popupX = e.x;\\n  popupY = e.y;\\n};\\nconst handleMobilePopupOpen = (text, target) => {\\n  if (!isMobile) return;\\n  popupText = text;\\n  showMobilePopup = true;\\n  mobilePopupTarget = target;\\n  setTimeout(() => {\\n    const closeBtn = document.querySelector(\\"[data-popup-close]\\");\\n    closeBtn?.focus();\\n  }, 50);\\n};\\nconst closeMobilePopup = () => {\\n  showMobilePopup = false;\\n  popupText = \\"\\";\\n  if (mobilePopupTarget) {\\n    mobilePopupTarget.focus();\\n    mobilePopupTarget = null;\\n  }\\n};\\nconst handleClickOutside = (e) => {\\n  if (showMobilePopup && mobilePopupTarget && !mobilePopupTarget.contains(e.target)) {\\n    closeMobilePopup();\\n  }\\n};\\nconst handleKeydown = (e) => {\\n  if (e.key === \\"Escape\\" && (showMobilePopup || popupText)) {\\n    e.preventDefault();\\n    if (showMobilePopup) {\\n      closeMobilePopup();\\n    } else {\\n      popupText = \\"\\";\\n    }\\n  }\\n};\\nconst handleTooltipKeydown = (e, text) => {\\n  if (e.key === \\"Enter\\" || e.key === \\" \\") {\\n    e.preventDefault();\\n    if (isMobile) {\\n      handleMobilePopupOpen(text, e.currentTarget);\\n    } else {\\n      const rect = e.currentTarget.getBoundingClientRect();\\n      popupX = rect.left + rect.width / 2;\\n      popupY = rect.top;\\n      popupText = text;\\n    }\\n  }\\n};\\nconst handleTooltipFocus = (text, e) => {\\n  if (!isMobile) {\\n    const rect = e.currentTarget.getBoundingClientRect();\\n    popupX = rect.left + rect.width / 2;\\n    popupY = rect.top;\\n    popupText = text;\\n  }\\n};\\nconst handleTooltipBlur = () => {\\n  if (!isMobile) {\\n    popupText = \\"\\";\\n  }\\n};\\nconst checkIfMobile = () => {\\n  if (!browser) return;\\n  isMobile = window.innerWidth <= 768 || \\"ontouchstart\\" in window;\\n};\\nlet valuesIndex = 1;\\nlet isValuesTransitioning = false;\\nconst incrementValues = () => {\\n  if (isValuesTransitioning) return;\\n  if (valuesIndex < 3) {\\n    valuesIndex++;\\n  } else {\\n    valuesIndex = 1;\\n  }\\n  isValuesTransitioning = true;\\n  setTimeout(() => isValuesTransitioning = false, 1e3);\\n};\\nconst decrementValues = () => {\\n  if (isValuesTransitioning) return;\\n  if (valuesIndex > 1) {\\n    valuesIndex--;\\n  } else {\\n    valuesIndex = 3;\\n  }\\n  isValuesTransitioning = true;\\n  setTimeout(() => isValuesTransitioning = false, 1e3);\\n};\\nonMount(() => {\\n  if (browser && typeof window !== \\"undefined\\") {\\n    checkIfMobile();\\n    window.addEventListener(\\"scroll\\", handleScroll, { passive: true });\\n    window.addEventListener(\\"mousemove\\", handleMouseMove);\\n    window.addEventListener(\\"resize\\", checkIfMobile);\\n    window.addEventListener(\\"click\\", handleClickOutside);\\n    window.addEventListener(\\"keydown\\", handleKeydown);\\n    animate();\\n    handleScroll();\\n  }\\n});\\nonDestroy(() => {\\n  if (browser && typeof window !== \\"undefined\\") {\\n    window.removeEventListener(\\"scroll\\", handleScroll);\\n    window.removeEventListener(\\"mousemove\\", handleMouseMove);\\n    window.removeEventListener(\\"resize\\", checkIfMobile);\\n    window.removeEventListener(\\"click\\", handleClickOutside);\\n    window.removeEventListener(\\"keydown\\", handleKeydown);\\n    if (animationFrameId) {\\n      cancelAnimationFrame(animationFrameId);\\n    }\\n  }\\n});\\nexport let data;\\n<\/script>\\n\\n<style>\\n    h4{\\n        \\nfont-family: Pragmatica;\\nfont-size: 60px;\\nfont-style: normal;\\nfont-weight: 250;\\nline-height: 125%; /* 75px */\\n    }\\n\\n    h5.title{\\n      \\nfont-family: Pragmatica;\\nfont-size: 50px;\\nfont-style: normal;\\nfont-weight: 250;\\nline-height: 140%; /* 70px */\\n    }\\n\\n    .archive-title{\\n\\nfont-size: 60px;\\nfont-style: normal;\\nfont-weight: 700;\\nline-height: 140%; /* 84px */\\n    }\\n\\n    @media only screen and (max-width:768px) {\\n        h4{\\n            font-size: 40px\\n        }\\n        h5.title{\\n            font-size: 28px\\n        }\\n    }\\n</style>\\n\\n\\n<svelte:head>\\n  <title>About | Reddoor Creative</title>\\n</svelte:head>\\n\\n<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />\\n\\n{#if popupText && !isMobile}\\n    <h5 transition:fade  class=\\"pointer-events-none -translate-y-full w-[360px] p-5 fixed z-20 bg-white/80 backdrop-blur text-primary\\" style=\\"top:{popupY}px;left:{popupX}px\\">{popupText}</h5>\\n{/if}\\n\\n<!-- Mobile Popup -->\\n{#if showMobilePopup && isMobile}\\n    <div transition:fade class=\\"fixed inset-0 z-30 flex items-center justify-center p-4\\">\\n        <!-- Backdrop -->\\n        <div class=\\"fixed inset-0 bg-black/20\\" aria-hidden=\\"true\\"></div>\\n        <!-- Popup -->\\n        <div \\n            role=\\"dialog\\"\\n            aria-label=\\"Additional information\\"\\n            aria-modal=\\"true\\"\\n            class=\\"relative bg-white/95 backdrop-blur shadow-xl p-6 max-w-sm w-full border border-primary\\"\\n        >\\n            <button \\n                data-popup-close\\n                on:click={closeMobilePopup}\\n                class=\\"absolute top-3 right-3 text-primary hover:text-primary-dark transition-colors\\"\\n                aria-label=\\"Close popup\\"\\n            >\\n                <i class=\\"fa-solid fa-sharp fa-xmark fa-lg\\"></i>\\n            </button>\\n            <p class=\\"text-primary pr-8\\">{popupText}</p>\\n        </div>\\n    </div>\\n{/if}\\n\\n<div class=\\"w-screen relative bg-paper\\">\\n  <ContentWidth class=\\"h-full flex justify-center items-center py-48\\">\\n    <h5 class=\\"w-full md:w-4/5 max-w-[800px] z-10 title\\">\\n      We save you from drowning in an ocean of noise by arming you with a clear story and compelling design.\\n    </h5>\\n  </ContentWidth>\\n</div>\\n<div class=\\"w-screen bg-paper pb-8 relative overflow-x-clip\\" bind:this={monoCarDivRef}>\\n  <ContentWidth class=\\"flex \\">\\n    <h3 class=\\"text-primary z-10 relative\\">About</h3>\\n  </ContentWidth>\\n  <img src={monotoneCar}  alt=\\"moving car\\" class=\\"absolute -right-48 bottom-0 w-64 will-change-transform\\" style=\\"transform:translate3d({-monoCarTranslationInVW}vw,0,0)\\"/>\\n</div>\\n<ScreenWidthImage src={applause} />\\n<div class=\\"w-screen bg-paper pb-12 md:pb-48\\">\\n  <ContentWidth class=\\"flex relative border-primary border-b-1\\">\\n    <img src={key} alt=\\"keys\\" class=\\"lg:w-1/5 md:w-1/3 w-2/3\\" />\\n    <h2 class=\\"text-primary absolute left-0 bottom-2 md:bottom-8\\">\\n      Our Promises\\n    </h2>\\n  </ContentWidth>\\n  <ContentWidth class=\\"flex flex-row justify-end\\">\\n    <div class=\\" w-full md:w-3/5 h-72 relative\\">\\n\\n    {#if valuesIndex === 1}\\n      <div class=\\"flex flex-col gap-4 absolute\\" in:fade={{duration:400, delay:420}} out:fade={{duration:400}}>\\n        <p class=\\"mt-8\\">01/03</p>\\n        <h5 class=\\"text-primary\\">\\n          We will\\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"act on your behalf - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"by using our creative expertise to serve.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"by using our creative expertise to serve.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"by using our creative expertise to serve.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"by using our creative expertise to serve.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm\\">\\n            act on your behalf\\n        </span>\\n        <br /> by choosing to\\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"work hard and smart - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"in order to efficiently deliver excellence.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"in order to efficiently deliver excellence.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"in order to efficiently deliver excellence.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"in order to efficiently deliver excellence.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n             work hard and smart\\n        </span>\\n        <br /> so you can \\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"feel relief - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"because you have a partner committed to your success.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"because you have a partner committed to your success.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"because you have a partner committed to your success.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"because you have a partner committed to your success.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n                feel relief.\\n            </span>\\n        </h5>\\n      </div>\\n      \\n      {:else if valuesIndex===2}\\n\\n       <div class=\\"flex flex-col gap-4 absolute\\" in:fade={{duration:400, delay:420}} out:fade={{duration:400}}>\\n        <p class=\\"mt-8\\">02/03</p>\\n        <h5 class=\\"text-primary\\">\\n          We will\\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"create compelling design - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"since we define ourselves as enemies of mediocrity.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"since we define ourselves as enemies of mediocrity.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"since we define ourselves as enemies of mediocrity.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"since we define ourselves as enemies of mediocrity.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n            create compelling design\\n        </span>\\n        <br /> by choosing to\\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"take risks - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"because exceptional work requires it.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"because exceptional work requires it.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"because exceptional work requires it.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"because exceptional work requires it.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n             take risks\\n        </span>\\n        <br /> so you can \\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"feel confident - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"in the way you share your story with the world.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"in the way you share your story with the world.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"in the way you share your story with the world.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"in the way you share your story with the world.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n                feel confident.\\n            </span>\\n        </h5>\\n      </div>\\n\\n      {:else if valuesIndex===3}\\n\\n       <div class=\\"flex flex-col gap-4 absolute\\" in:fade={{duration:400, delay:420}} out:fade={{duration:400}}>\\n        <p class=\\"mt-8\\">03/03</p>\\n        <h5 class=\\"text-primary\\">\\n          We will\\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"do meaningful work - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"so we may care deeply about it.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"so we may care deeply about it.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"so we may care deeply about it.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"so we may care deeply about it.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n            do meaningful work\\n        </span>\\n        <br /> by choosing to\\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"seek order - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"because reducing noise and obstacles allows us to connect with purpose.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"because reducing noise and obstacles allows us to connect with purpose.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"because reducing noise and obstacles allows us to connect with purpose.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"because reducing noise and obstacles allows us to connect with purpose.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n             seek order\\n        </span>\\n        <br /> so you can \\n          <span \\n            role=\\"button\\"\\n            tabindex=\\"0\\"\\n            aria-label=\\"feel energized - more information\\"\\n            on:mouseleave={()=> !isMobile && (popupText=\\"\\")} \\n            on:mouseenter={()=> !isMobile && (popupText=\\"by finding clarity and focus in what you do.\\")}\\n            on:click={(e) => handleMobilePopupOpen(\\"by finding clarity and focus in what you do.\\", e.currentTarget)}\\n            on:keydown={(e) => handleTooltipKeydown(e, \\"by finding clarity and focus in what you do.\\")}\\n            on:focus={(e) => handleTooltipFocus(\\"by finding clarity and focus in what you do.\\", e)}\\n            on:blur={handleTooltipBlur}\\n            class=\\"underline underline-offset-[25%] {isMobile ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm\\">\\n                feel energized.\\n            </span>\\n        </h5>\\n      </div>\\n\\n      {/if}\\n      <div class=\\"absolute left-0 bottom-0 flex gap-6 text-primary\\">\\n        <button on:click={decrementValues} class=\\"{isValuesTransitioning?\\"cursor-default\\":\\"\\"}\\"\\n          ><i\\n            class=\\"fa-solid fa-light fa-arrow-left fa-xl hover:text-primary-dark transition-colors duration-300\\"\\n          ></i></button\\n        >\\n        <button\\n            on:click={incrementValues}\\n            class=\\"{isValuesTransitioning?\\"cursor-default\\":\\"\\"}\\"\\n          ><i\\n            class=\\"fa-solid fa-light fa-arrow-right fa-xl hover:text-primary-dark transition-colors duration-300\\"\\n          ></i></button\\n        >\\n      </div>\\n    </div>\\n  </ContentWidth>\\n</div>\\n\\n<!-- Rest of the component remains the same... -->\\n<div class=\\"w-screen flex flex-col lg:flex-row relative bg-paper\\">\\n  <AnimateIn\\n    class=\\"w-full md:w-1/3 aspect-square relative flex items-center justify-center\\"\\n  >\\n    <img\\n      class=\\"w-full h-full absolute z-0 object-cover\\"\\n      src={beach}\\n      alt=\\"beach\\"\\n    />\\n    <h3 class=\\"text-white z-10\\">CA</h3>\\n  </AnimateIn>\\n  <AnimateIn\\n    class=\\"w-full md:w-1/3 aspect-square relative flex items-center justify-center\\"\\n  >\\n    <img\\n      class=\\"w-full h-full absolute z-0 object-cover\\"\\n      src={hills}\\n      alt=\\"hills\\"\\n    />\\n    <h3 class=\\"text-white z-10\\">TX</h3>\\n  </AnimateIn>\\n  <AnimateIn\\n    class=\\"w-full md:w-1/3 aspect-square relative flex items-center justify-center\\"\\n  >\\n    <img\\n      class=\\"w-full h-full absolute z-0 object-cover\\"\\n      src={lake}\\n      alt=\\"lake\\"\\n    />\\n    <h3 class=\\"text-white z-10\\">ID</h3>\\n  </AnimateIn>\\n</div>\\n<div class=\\"w-screen text-center py-20 bg-paper\\">\\n  <ContentWidth class=\\"flex flex-col border-primary border-b-1 pb-8\\" animateIn>\\n    <h2 class=\\"text-primary text-left\\">\\n      Serving our clients,<br /> near and far.\\n    </h2>\\n  </ContentWidth>\\n  <ContentWidth class=\\"flex flex-col items-end\\" animateIn>\\n    <AnimateIn class=\\"md:w-3/5\\">\\n      <p class=\\"text-left md:w-2/3 mt-8\\">\\n        We work with clients across the US and occasionally around the globe. We\\n        have designers sprinkled across California, Texas and Idaho,\\n        conveniently located near the Los Angeles, San Antonio, and Boise metro\\n        areas. Regardless of your location, partnering with Reddoor Creative\\n        will give you the confidence in your brand that you've been needing.\\n      </p>\\n    </AnimateIn>\\n    <div class=\\"md:w-3/5 flex flex-col items-center gap-6 md:gap-0 md:flex-row mt-16\\">\\n      <AnimateIn class=\\"w-4/5 md:w-1/3 md:pr-4 flex flex-col\\">\\n        <img src={tim} alt=\\"tim holmes\\" class=\\"w-full aspect-square\\" />\\n        <div class=\\"text-primary large-body font-thin mt-2\\">Tim Holmes</div>\\n        <p class=\\"text-mid font-thin\\">CA+ID Creative Director</p>\\n      </AnimateIn>\\n      <AnimateIn class=\\"w-4/5 md:w-1/3 md:pl-4 flex flex-col\\">\\n        <img src={erik} alt=\\"Erik Svendsen\\" class=\\"w-full aspect-square\\" />\\n        <p class=\\"text-primary large-body mt-2 large-body\\">Erik Svendsen</p>\\n        <div class=\\"font-thin\\">TX Creative Director</div>\\n      </AnimateIn>\\n    </div>\\n  </ContentWidth>\\n</div>\\n\\n<div class=\\"w-screen pt-16 bg-paper pb-16\\">\\n  <ContentWidth class=\\"flex\\" animateIn>\\n    <h6 class=\\"text-primary text-center\\">The Reddoor Story</h6>\\n  </ContentWidth>\\n\\n  <ContentWidth class=\\"flex flex-col justify-end items-end\\">\\n    <AnimateIn class=\\"md:w-3/5\\">\\n      <h5 class=\\"md:w-2/3\\">\\n        Because of unforeseen circumstances owner, Tim Holmes, found himself\\n        stuck in LA with a white Toyota and a seemingly unfortunate red door.\\n      </h5>\\n    </AnimateIn>\\n  </ContentWidth>\\n  \\n  <!-- Car in separate container outside ContentWidth -->\\n  <div class=\\"w-full mt-8 relative overflow-x-hidden\\">\\n    <div class=\\"will-change-transform\\" style=\\"transform:translateX({carTranslationInVW}vw)\\">\\n      <img\\n        class=\\"w-[150%] md:w-3/5\\"\\n        src={car}\\n        alt=\\"a white car with a red door\\"\\n        bind:this={carRef}\\n      />\\n    </div>\\n  </div>\\n\\n  <ContentWidth class=\\"flex flex-col justify-end items-end\\">\\n    <div class=\\"flex flex-col md:w-3/5 my-8 gap-8\\">\\n      <AnimateIn class=\\"md:w-2/3\\">\\n        <p>\\n          The young designer soon realized that in city where \\"your wheels\\" are\\n          a part of your identity he had two choices: be embarrassed or embrace\\n          the moment. Choosing the latter he quickly told his friend how excited\\n          he was to get a red door since he always wanted a red sports car and\\n          thought he'd start with the driver's side door and just work his way\\n          around replacing one piece at a time.\\n        </p>\\n      </AnimateIn>\\n      <AnimateIn class=\\"md:w-2/3\\">\\n        <p>\\n          The car soon became known as \\"reddoor\\" having its own personality\\n          because of the one thing that most people would see as unfortunate.\\n          With a proud owner it had no other reason than to be proud, too. What\\n          once was headed for the trash heap was now a gem of a story.\\n        </p>\\n      </AnimateIn>\\n\\n      <AnimateIn class=\\"md:w-2/3 border-t-1 border-t-primary pt-6\\">\\n        <h6 class=\\"text-primary\\">\\n          The original \\"reddoor\\" taught us two things at Reddoor Creative:\\n        </h6>\\n      </AnimateIn>\\n\\n      <div class=\\"w-full flex flex-col md:flex-row\\">\\n        <AnimateIn class=\\"flex flex-col w-2/3 md:w-1/3 pr-4\\">\\n          <p class=\\"text-primary\\">01</p>\\n          <p class=\\"mt-2\\">\\n            Find the unique quality within a business and tell that story in a\\n            compelling way.\\n          </p>\\n        </AnimateIn>\\n        <AnimateIn class=\\"flex flex-col w-2/3 md:w-1/3 mt-6 md:mt-0 pr-4\\">\\n          <p class=\\"text-primary\\">02</p>\\n          <p class=\\"mt-2\\">\\n            Champion our clients and remember that we exist to serve them with\\n            our talents.\\n          </p>\\n        </AnimateIn>\\n      </div>\\n    </div>\\n  </ContentWidth>\\n</div>\\n\\n<section class=\\"w-screen py-16 bg-paper-red\\">\\n  <ContentWidth class=\\"flex flex-col md:flex-row\\">\\n    <AnimateIn class=\\"md:w-2/5 mb-6\\">\\n      <h6 class=\\"text-white\\">Perspective</h6>\\n    </AnimateIn>\\n    <AnimateIn class=\\"md:w-3/5 text-white\\">\\n      <h5 class=\\" md:w-2/3\\">\\n        \\"Time has taught me that true north is to not just focus on the work\\n        itself but also the people I'm working with.\\"\\n      </h5>\\n      <div class=\\"flex flex-row gap-5 mt-10\\">\\n        <img src={tim} alt=\\"tim holmes\\" class=\\"w-20\\" />\\n        <div class=\\"flex flex-col\\">\\n          <div class=\\"large-body\\">Tim Holmes</div>\\n          <p>CA+ID Creative Director</p>\\n        </div>\\n      </div>\\n    </AnimateIn>\\n  </ContentWidth>\\n</section>\\n\\n<section class=\\"bg-paper\\">\\n    <LogoSoup {data} />\\n</section>\\n\\n<section class=\\"relative w-screen bg-paper py-16 md:py-32\\">\\n  <ContentWidth class=\\"flex flex-col\\" animateIn>\\n    <h2 class=\\"text-primary md:w-3/5\\">\\n      Isn't it time to arm your brand with a clear story and compelling design?\\n    </h2>\\n    <div class=\\"flex flex-row mt-16 gap-8\\">\\n      <DefaultButton red href=\\"/contact\\">Meet with Us</DefaultButton>\\n      <DefaultButton red href=\\"/portfolio\\">View Our Work</DefaultButton>\\n    </div>\\n  </ContentWidth>\\n</section>"],"names":[],"mappings":"AAkLI,EAAE,qBAAM,CAEZ,WAAW,CAAE,UAAU,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACT,CAUA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,WAAW,KAAK,CAAE,CAIrC,EAAE,qBAAM,CACJ,SAAS,CAAE;AACvB,QAAQ,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let carTranslationInVW = 0;
  let carRef;
  let monoCarDivRef;
  onDestroy(() => {
  });
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-510fcw_START -->${$$result.title = `<title>About | Reddoor Creative</title>`, ""}<!-- HEAD_svelte-510fcw_END -->`, ""}  ${``}  ${``} <div class="w-screen relative bg-paper">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "h-full flex justify-center items-center py-48"
    },
    {},
    {
      default: () => {
        return `<h5 class="w-full md:w-4/5 max-w-[800px] z-10 title svelte-1u6beet" data-svelte-h="svelte-1xbrnvr">We save you from drowning in an ocean of noise by arming you with a clear story and compelling design.</h5>`;
      }
    }
  )}</div> <div class="w-screen bg-paper pb-8 relative overflow-x-clip"${add_attribute("this", monoCarDivRef, 0)}>${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex " }, {}, {
    default: () => {
      return `<h3 class="text-primary z-10 relative" data-svelte-h="svelte-dgpoyy">About</h3>`;
    }
  })} <img${add_attribute("src", monotoneCar, 0)} alt="moving car" class="absolute -right-48 bottom-0 w-64 will-change-transform" style="${"transform:translate3d(" + escape(-0, true) + "vw,0,0)"}"></div> ${validate_component(ScreenWidthImage, "ScreenWidthImage").$$render($$result, { src: applause }, {}, {})} <div class="w-screen bg-paper pb-12 md:pb-48">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex relative border-primary border-b-1"
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", key, 0)} alt="keys" class="lg:w-1/5 md:w-1/3 w-2/3"> <h2 class="text-primary absolute left-0 bottom-2 md:bottom-8" data-svelte-h="svelte-11pau47">Our Promises</h2>`;
      }
    }
  )} ${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-row justify-end" }, {}, {
    default: () => {
      return `<div class="w-full md:w-3/5 h-72 relative">${`<div class="flex flex-col gap-4 absolute"><p class="mt-8" data-svelte-h="svelte-1lcrfru">01/03</p> <h5 class="text-primary">We will
          <span role="button" tabindex="0" aria-label="act on your behalf - more information" class="${"underline underline-offset-[25%] " + escape("cursor-default", true) + " focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"}">act on your behalf</span> <br> by choosing to
          <span role="button" tabindex="0" aria-label="work hard and smart - more information" class="${"underline underline-offset-[25%] " + escape("cursor-default", true) + " focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"}">work hard and smart</span> <br> so you can 
          <span role="button" tabindex="0" aria-label="feel relief - more information" class="${"underline underline-offset-[25%] " + escape("cursor-default", true) + " focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"}">feel relief.</span></h5></div>`} <div class="absolute left-0 bottom-0 flex gap-6 text-primary"><button${add_attribute("class", "", 0)}><i class="fa-solid fa-light fa-arrow-left fa-xl hover:text-primary-dark transition-colors duration-300"></i></button> <button${add_attribute("class", "", 0)}><i class="fa-solid fa-light fa-arrow-right fa-xl hover:text-primary-dark transition-colors duration-300"></i></button></div></div>`;
    }
  })}</div>  <div class="w-screen flex flex-col lg:flex-row relative bg-paper">${validate_component(AnimateIn, "AnimateIn").$$render(
    $$result,
    {
      class: "w-full md:w-1/3 aspect-square relative flex items-center justify-center"
    },
    {},
    {
      default: () => {
        return `<img class="w-full h-full absolute z-0 object-cover"${add_attribute("src", beach, 0)} alt="beach"> <h3 class="text-white z-10" data-svelte-h="svelte-117vyve">CA</h3>`;
      }
    }
  )} ${validate_component(AnimateIn, "AnimateIn").$$render(
    $$result,
    {
      class: "w-full md:w-1/3 aspect-square relative flex items-center justify-center"
    },
    {},
    {
      default: () => {
        return `<img class="w-full h-full absolute z-0 object-cover"${add_attribute("src", hills, 0)} alt="hills"> <h3 class="text-white z-10" data-svelte-h="svelte-evtzum">TX</h3>`;
      }
    }
  )} ${validate_component(AnimateIn, "AnimateIn").$$render(
    $$result,
    {
      class: "w-full md:w-1/3 aspect-square relative flex items-center justify-center"
    },
    {},
    {
      default: () => {
        return `<img class="w-full h-full absolute z-0 object-cover"${add_attribute("src", lake, 0)} alt="lake"> <h3 class="text-white z-10" data-svelte-h="svelte-1tw9nrz">ID</h3>`;
      }
    }
  )}</div> <div class="w-screen text-center py-20 bg-paper">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col border-primary border-b-1 pb-8",
      animateIn: true
    },
    {},
    {
      default: () => {
        return `<h2 class="text-primary text-left" data-svelte-h="svelte-1hsrh37">Serving our clients,<br> near and far.</h2>`;
      }
    }
  )} ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col items-end",
      animateIn: true
    },
    {},
    {
      default: () => {
        return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "md:w-3/5" }, {}, {
          default: () => {
            return `<p class="text-left md:w-2/3 mt-8" data-svelte-h="svelte-1mzpab2">We work with clients across the US and occasionally around the globe. We
        have designers sprinkled across California, Texas and Idaho,
        conveniently located near the Los Angeles, San Antonio, and Boise metro
        areas. Regardless of your location, partnering with Reddoor Creative
        will give you the confidence in your brand that you&#39;ve been needing.</p>`;
          }
        })} <div class="md:w-3/5 flex flex-col items-center gap-6 md:gap-0 md:flex-row mt-16">${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "w-4/5 md:w-1/3 md:pr-4 flex flex-col"
          },
          {},
          {
            default: () => {
              return `<img${add_attribute("src", tim, 0)} alt="tim holmes" class="w-full aspect-square"> <div class="text-primary large-body font-thin mt-2" data-svelte-h="svelte-k6s7we">Tim Holmes</div> <p class="text-mid font-thin" data-svelte-h="svelte-mst2hn">CA+ID Creative Director</p>`;
            }
          }
        )} ${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "w-4/5 md:w-1/3 md:pl-4 flex flex-col"
          },
          {},
          {
            default: () => {
              return `<img${add_attribute("src", erik, 0)} alt="Erik Svendsen" class="w-full aspect-square"> <p class="text-primary large-body mt-2 large-body" data-svelte-h="svelte-1dj9fum">Erik Svendsen</p> <div class="font-thin" data-svelte-h="svelte-l0orfx">TX Creative Director</div>`;
            }
          }
        )}</div>`;
      }
    }
  )}</div> <div class="w-screen pt-16 bg-paper pb-16">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex", animateIn: true }, {}, {
    default: () => {
      return `<h6 class="text-primary text-center" data-svelte-h="svelte-44y3pl">The Reddoor Story</h6>`;
    }
  })} ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col justify-end items-end"
    },
    {},
    {
      default: () => {
        return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "md:w-3/5" }, {}, {
          default: () => {
            return `<h5 class="md:w-2/3" data-svelte-h="svelte-1cu9lcl">Because of unforeseen circumstances owner, Tim Holmes, found himself
        stuck in LA with a white Toyota and a seemingly unfortunate red door.</h5>`;
          }
        })}`;
      }
    }
  )}  <div class="w-full mt-8 relative overflow-x-hidden"><div class="will-change-transform" style="${"transform:translateX(" + escape(carTranslationInVW, true) + "vw)"}"><img class="w-[150%] md:w-3/5"${add_attribute("src", car, 0)} alt="a white car with a red door"${add_attribute("this", carRef, 0)}></div></div> ${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col justify-end items-end"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col md:w-3/5 my-8 gap-8">${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "md:w-2/3" }, {}, {
          default: () => {
            return `<p data-svelte-h="svelte-11isrsf">The young designer soon realized that in city where &quot;your wheels&quot; are
          a part of your identity he had two choices: be embarrassed or embrace
          the moment. Choosing the latter he quickly told his friend how excited
          he was to get a red door since he always wanted a red sports car and
          thought he&#39;d start with the driver&#39;s side door and just work his way
          around replacing one piece at a time.</p>`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "md:w-2/3" }, {}, {
          default: () => {
            return `<p data-svelte-h="svelte-zppdvv">The car soon became known as &quot;reddoor&quot; having its own personality
          because of the one thing that most people would see as unfortunate.
          With a proud owner it had no other reason than to be proud, too. What
          once was headed for the trash heap was now a gem of a story.</p>`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "md:w-2/3 border-t-1 border-t-primary pt-6"
          },
          {},
          {
            default: () => {
              return `<h6 class="text-primary" data-svelte-h="svelte-6idqrd">The original &quot;reddoor&quot; taught us two things at Reddoor Creative:</h6>`;
            }
          }
        )} <div class="w-full flex flex-col md:flex-row">${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "flex flex-col w-2/3 md:w-1/3 pr-4"
          },
          {},
          {
            default: () => {
              return `<p class="text-primary" data-svelte-h="svelte-zmgm5a">01</p> <p class="mt-2" data-svelte-h="svelte-1vxlr12">Find the unique quality within a business and tell that story in a
            compelling way.</p>`;
            }
          }
        )} ${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "flex flex-col w-2/3 md:w-1/3 mt-6 md:mt-0 pr-4"
          },
          {},
          {
            default: () => {
              return `<p class="text-primary" data-svelte-h="svelte-swgrbr">02</p> <p class="mt-2" data-svelte-h="svelte-roq967">Champion our clients and remember that we exist to serve them with
            our talents.</p>`;
            }
          }
        )}</div></div>`;
      }
    }
  )}</div> <section class="w-screen py-16 bg-paper-red">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-col md:flex-row" }, {}, {
    default: () => {
      return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "md:w-2/5 mb-6" }, {}, {
        default: () => {
          return `<h6 class="text-white" data-svelte-h="svelte-m5ivve">Perspective</h6>`;
        }
      })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "md:w-3/5 text-white" }, {}, {
        default: () => {
          return `<h5 class="md:w-2/3" data-svelte-h="svelte-1hzkpre">&quot;Time has taught me that true north is to not just focus on the work
        itself but also the people I&#39;m working with.&quot;</h5> <div class="flex flex-row gap-5 mt-10" data-svelte-h="svelte-11mluh6"><img${add_attribute("src", tim, 0)} alt="tim holmes" class="w-20"> <div class="flex flex-col"><div class="large-body">Tim Holmes</div> <p>CA+ID Creative Director</p></div></div>`;
        }
      })}`;
    }
  })}</section> <section class="bg-paper">${validate_component(LogoSoup, "LogoSoup").$$render($$result, { data }, {}, {})}</section> <section class="relative w-screen bg-paper py-16 md:py-32">${validate_component(ContentWidth, "ContentWidth").$$render($$result, { class: "flex flex-col", animateIn: true }, {}, {
    default: () => {
      return `<h2 class="text-primary md:w-3/5" data-svelte-h="svelte-ugkq0o">Isn&#39;t it time to arm your brand with a clear story and compelling design?</h2> <div class="flex flex-row mt-16 gap-8">${validate_component(DefaultButton, "DefaultButton").$$render($$result, { red: true, href: "/contact" }, {}, {
        default: () => {
          return `Meet with Us`;
        }
      })} ${validate_component(DefaultButton, "DefaultButton").$$render($$result, { red: true, href: "/portfolio" }, {}, {
        default: () => {
          return `View Our Work`;
        }
      })}</div>`;
    }
  })}</section>`;
});
export {
  Page as default
};
