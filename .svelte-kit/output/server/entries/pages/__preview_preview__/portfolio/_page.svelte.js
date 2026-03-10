import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from "../../../../chunks/ssr.js";
import { C as ContentWidth, A as AnimateIn } from "../../../../chunks/ContentWidth.js";
import { S as ScreenWidthImage } from "../../../../chunks/ScreenWidthImage.js";
import { a as arrowButton } from "../../../../chunks/arrowButton.js";
import { D as DefaultButton } from "../../../../chunks/DefaultButton.js";
const placeholder = "data:image/svg+xml,%3csvg%20width='135'%20height='110'%20viewBox='0%200%20135%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon'%3e%3crect%20id='background%20copy'%20x='0.5'%20width='134'%20height='110'%20rx='4'%20fill='transparent'/%3e%3cpath%20id='Border%20Copy'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M126.618%200H8.38235C4.02905%200%200.5%203.51776%200.5%207.85714V102.143C0.5%20106.482%204.02905%20110%208.38235%20110H126.618C130.971%20110%20134.5%20106.482%20134.5%20102.143V7.85714C134.5%203.51776%20130.971%200%20126.618%200ZM8.38235%20102.143V7.85714H126.618V102.143H8.38235Z'%20fill='%23C2D1D9'/%3e%3cpath%20id='Oval%202'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.1763%2032.4107C22.1763%2040.5471%2028.7932%2047.1429%2036.9557%2047.1429C45.1181%2047.1429%2051.7351%2040.5471%2051.7351%2032.4107C51.7351%2024.2744%2045.1181%2017.6786%2036.9557%2017.6786C28.7932%2017.6786%2022.1763%2024.2744%2022.1763%2032.4107ZM43.8527%2032.4107C43.8527%2036.2077%2040.7648%2039.2857%2036.9557%2039.2857C33.1465%2039.2857%2030.0586%2036.2077%2030.0586%2032.4107C30.0586%2028.6138%2033.1465%2025.5357%2036.9557%2025.5357C40.7648%2025.5357%2043.8527%2028.6138%2043.8527%2032.4107Z'%20fill='%23C2D1D9'/%3e%3cpath%20id='Path%204'%20d='M28.8922%2093.1471C27.3464%2094.6747%2024.8511%2094.6639%2023.3186%2093.1231C21.7861%2091.5823%2021.7969%2089.0949%2023.3427%2087.5673L55.7576%2055.5342L74.0275%2071.3746C75.6698%2072.7985%2075.8432%2075.2799%2074.4147%2076.917C72.9862%2078.554%2070.4968%2078.7268%2068.8545%2077.3029L56.1082%2066.2516L28.8922%2093.1471Z'%20fill='%23C2D1D9'/%3e%3cpath%20id='Path%204_2'%20d='M58.4635%2093.1349C56.9244%2094.6692%2054.429%2094.6693%2052.8898%2093.1352C51.3506%2091.6011%2051.3505%2089.1136%2052.8896%2087.5794L104.761%2035.8695L133.158%2060.7067C134.794%2062.1377%20134.957%2064.6199%20133.521%2066.2507C132.086%2067.8816%20129.596%2068.0437%20127.96%2066.6127L105.113%2046.6305L58.4635%2093.1349Z'%20fill='%23C2D1D9'/%3e%3c/g%3e%3c/svg%3e";
let rotationAngle = "36.8";
let crossLength = "125%";
const FourByThreeImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = placeholder } = $$props;
  let { alt = "placeholder" } = $$props;
  let { label = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  return `<div class="${"w-full my-8 relative " + escape($$props.class || "", true)}"><div class="${"w-full aspect-[4/3] " + escape(
    src === placeholder ? "border-light border-2 bg-light bg-opacity-25" : "",
    true
  ) + " rounded-sm flex items-center justify-center relative"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="${"z-10 " + escape(src == placeholder ? "w-16 bg-[#F2F5F7]" : "w-full", true)}"> <div class="${"absolute bg-light h-[2px] " + escape(src === placeholder ? "" : "hidden", true)}" style="${"transform: rotate(" + escape(rotationAngle, true) + "deg); width:" + escape(crossLength, true)}"></div> <div class="${"absolute bg-light h-[2px] " + escape(src === placeholder ? "" : "hidden", true)}" style="${"transform: rotate(-" + escape(rotationAngle, true) + "deg); width:" + escape(crossLength, true)}"></div> <h6 class="absolute bottom-4 z-20">${escape(label)}</h6></div></div>`;
});
const ceoHeroDesktop = "/_app/immutable/assets/CEO_HERO_Badge_Lanyard%201.eN1-e8uB.jpg";
const bed = "/_app/immutable/assets/bed.Cs74XCKy.jpg";
const catalogs = "/_app/immutable/assets/catalogs.CrWt9RxS.jpg";
const longHollow = "/_app/immutable/assets/longHollow.B2gpGuNA.png";
const hq = "/_app/immutable/assets/headquarters.DilHH4Ip.png";
const screamer = "/_app/immutable/assets/screamer.C7lYnnuK.jpg";
const roadmap = "/_app/immutable/assets/roadmap.DYtQIcLR.png";
const stJames = "/_app/immutable/assets/stJames.CXisvIPS.jpg";
const report = "/_app/immutable/assets/annualReport.BX6CC84l.png";
const dentist = "/_app/immutable/assets/1800dentist.CBT3yXhN.png";
const css = {
  code: "h4.svelte-pelcqp{font-family:Pragmatica;font-size:60px;font-style:normal;font-weight:250;line-height:125%}h5.svelte-pelcqp{font-family:Pragmatica;font-size:50px;font-style:normal;font-weight:250;line-height:140%}.archive-title.svelte-pelcqp{font-size:60px;font-style:normal;font-weight:700;line-height:140%}@media only screen and (max-width:768px){h4.svelte-pelcqp{font-size:40px\n        }h5.svelte-pelcqp{font-size:28px\n        }}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>import ContentWidth from \\"$lib/components/ContentWidth/ContentWidth.svelte\\";\\nimport AnimateIn from \\"$lib/components/AnimateIn.svelte\\";\\nimport ScreenWidthImage from \\"$lib/components/ScreenWidth/ScreenWidthImage.svelte\\";\\nimport FourByThreeImage from \\"$lib/components/FullWidth/FourByThreeImage.svelte\\";\\nimport ceoHeroDesktop from \\"$lib/assets/images/CEO_HERO_Badge_Lanyard 1.jpg\\";\\nimport ceoHeroMobile from \\"$lib/assets/images/ceoHeroMobile.jpg\\";\\nimport arrowButton from \\"$lib/assets/icons/arrowButton.svg\\";\\nimport bed from \\"$lib/assets/images/bed.jpg\\";\\nimport catalogs from \\"$lib/assets/images/catalogs.jpg\\";\\nimport longHollow from \\"$lib/assets/images/longHollow.png\\";\\nimport hq from \\"$lib/assets/images/headquarters.png\\";\\nimport screamer from \\"$lib/assets/images/screamer.jpg\\";\\nimport roadmap from \\"$lib/assets/images/roadmap.png\\";\\nimport stJames from \\"$lib/assets/images/stJames.jpg\\";\\nimport report from \\"$lib/assets/images/annualReport.png\\";\\nimport dentist from \\"$lib/assets/images/1800dentist.png\\";\\nimport { flip } from \\"svelte/animate\\";\\nimport { fade, scale, slide } from \\"svelte/transition\\";\\nimport DefaultButton from \\"$lib/components/Buttons/DefaultButton.svelte\\";\\nimport { expoOut } from \\"svelte/easing\\";\\nimport { onMount } from \\"svelte\\";\\nlet ceoHero = ceoHeroDesktop;\\nlet projectsDiv;\\nlet viewportWidth;\\nlet viewportHeight;\\nlet showAllProjectsButton = true;\\n$: {\\n  if (viewportWidth < 768) {\\n    ceoHero = ceoHeroMobile;\\n  } else {\\n    ceoHero = ceoHeroDesktop;\\n  }\\n}\\nlet showBrand = false;\\nlet showDigital = false;\\nlet showEnvironmental = false;\\nlet showProduct = false;\\nlet showPackaging = false;\\nlet showPrint = false;\\nlet showWeb = false;\\nlet showAll = true;\\n$: {\\n  if (showBrand || showDigital || showEnvironmental || showProduct || showPrint || showWeb || showPackaging) {\\n    showAll = false;\\n  } else {\\n    showAll = true;\\n  }\\n  isOrderSelectOpen = false;\\n}\\nonMount(() => {\\n  const handleScroll = () => {\\n    if (projectsDiv) {\\n      const rect = projectsDiv.getBoundingClientRect();\\n      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;\\n      showAllProjectsButton = !isInView;\\n    }\\n  };\\n  window.addEventListener(\\"scroll\\", handleScroll);\\n  handleScroll();\\n  return () => {\\n    window.removeEventListener(\\"scroll\\", handleScroll);\\n  };\\n});\\nfunction mediumString(project) {\\n  let acc = \\"\\";\\n  let servicesArray = [\\n    project.data.branding,\\n    project.data.product,\\n    project.data.print,\\n    project.data.environmental,\\n    project.data.packaging,\\n    project.data.digital\\n  ];\\n  return servicesArray.reduce((acc2, service, index) => {\\n    if (service) {\\n      if (acc2) acc2 += \\", \\";\\n      acc2 += [\\"Brand\\", \\"Product\\", \\"Print\\", \\"Environmental\\", \\"Packaging\\", \\"Digital\\"][index];\\n    }\\n    return acc2;\\n  }, \\"\\");\\n}\\nlet orderString = \\"Latest-Earliest\\";\\nlet isAlphabeticalDescending = false;\\nlet isAlphabeticalAscending = false;\\nlet isChronologicalDescending = true;\\nlet isChronologicalAscending = false;\\n$: {\\n  isAlphabeticalDescending = false;\\n  isAlphabeticalAscending = false;\\n  isChronologicalDescending = false;\\n  isChronologicalAscending = false;\\n  switch (orderString) {\\n    case \\"A-Z\\": {\\n      isAlphabeticalDescending = true;\\n      break;\\n    }\\n    case \\"Z-A\\": {\\n      isAlphabeticalAscending = true;\\n      break;\\n    }\\n    case \\"Latest-Earliest\\": {\\n      isChronologicalDescending = true;\\n      break;\\n    }\\n    case \\"Earliest-Latest\\": {\\n      isChronologicalAscending = true;\\n      break;\\n    }\\n  }\\n}\\nlet isOrderSelectOpen = false;\\n$: {\\n  sortedProjects = [...data.allProjects].sort((a, b) => {\\n    switch (orderString) {\\n      case \\"A-Z\\":\\n        return (a.data.title || \\"\\").localeCompare(b.data.title || \\"\\");\\n      case \\"Z-A\\":\\n        return (b.data.title || \\"\\").localeCompare(a.data.title || \\"\\");\\n      case \\"Latest-Earliest\\":\\n        return new Date(b.first_publication_date).getTime() - new Date(a.first_publication_date).getTime();\\n      case \\"Earliest-Latest\\":\\n        return new Date(a.first_publication_date).getTime() - new Date(b.first_publication_date).getTime();\\n      default:\\n        return 0;\\n    }\\n  });\\n  isOrderSelectOpen = false;\\n}\\nexport let data;\\nlet sortedProjects = data.allProjects;\\n<\/script>\\n\\n<svelte:window bind:innerWidth={viewportWidth} bind:innerHeight={viewportHeight} />\\n\\n<style>\\n    h4{\\n        \\nfont-family: Pragmatica;\\nfont-size: 60px;\\nfont-style: normal;\\nfont-weight: 250;\\nline-height: 125%; /* 75px */\\n    }\\n\\n    h5{\\n      \\nfont-family: Pragmatica;\\nfont-size: 50px;\\nfont-style: normal;\\nfont-weight: 250;\\nline-height: 140%; /* 70px */\\n    }\\n\\n    .archive-title{\\n\\nfont-size: 60px;\\nfont-style: normal;\\nfont-weight: 700;\\nline-height: 140%; /* 84px */\\n    }\\n\\n    @media only screen and (max-width:768px) {\\n        h4{\\n            font-size: 40px\\n        }\\n        h5{\\n            font-size: 28px\\n        }\\n    }\\n</style>\\n\\n<svelte:head>\\n    <title>\\n        Portfolio | Reddoor Creative\\n    </title>\\n</svelte:head>\\n\\n{#if showAllProjectsButton}\\n<a \\n  class=\\"fixed z-20 bottom-12 right-12 flex flex-col items-center justify-center gap-2 border-light hover:border-primary text-light hover:text-primary transition-opacity duration-300\\" \\n  href=\\"#projectsDiv\\"\\n  transition:fade={{ duration: 300 }}\\n>\\n    <div class=\\"text-[8px]\\">All Projects</div>\\n    <div class=\\"w-12 h-12 rounded-full border-2 transition-colors duration-300 flex items-center justify-center\\">\\n        <i class=\\"fa-solid fa-light fa-arrow-down fa-2xl\\" />\\n    </div>\\n</a>\\n{/if}\\n\\n<section class=\\"w-screen max-h-[720px] flex flex-col justify-between lg:aspect-video pt-24 bg-paper\\">\\n    <div/>\\n    <ContentWidth>\\n        <h5 class=\\"w-4/5 max-w-screen-lg mr-0 ml-auto\\">We are honored to work with these amazing clients. Take a look and consider taking your place among them.</h5>\\n   </ContentWidth>\\n   <ContentWidth>\\n    <h1 class=\\"text-primary w-full text-left\\">Portfolio</h1>\\n   </ContentWidth>\\n\\n</section>\\n<section class=\\"max-w-screen overflow-x-clip\\">\\n    <div class=\\"right-0 max-h-screen aspect-video relative {viewportHeight * 16 > viewportWidth * 9 ? 'h-screen min-w-full' : 'w-screen min-h-full'}\\">\\n\\n            <img src={ceoHero} alt=\\"ceo name tag\\" class=\\"absolute h-full w-full max-w-screen object-cover object-left\\" style=\\"object-position:{viewportWidth<1440&&viewportWidth>768? viewportWidth-viewportHeight*16/9 + 240 :0}px center\\"/>\\n    \\n        <div class=\\"w-full max-w-[100vw] h-full max-h-screen relative\\">\\n        <ContentWidth class='{$$props.class || ''} h-full z-10 relative'>\\n            <slot />\\n        \\n    <h4 class=\\"md:w-3/5 absolute left-0 top-20 text-white\\">\\n        The \\"buck stops here\\" with a branding system overhaul of LA County's CEO\\n    </h4>\\n\\n    <div class=\\"absolute bottom-20 flex justify-between w-full md:w-2/5\\">\\n        <div>\\n            <p class=\\"text-white\\">COUNTY OF LOS ANGELES</p>\\n            <p class=\\"text-light\\">brand, digital, print</p>\\n        </div>\\n        <a href=\\"/portfolio/ceo-la\\" class=\\"hover:brightness-200 transition bump\\">\\n            <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n        </a>\\n    </div>\\n</ContentWidth>\\n</div>\\n</div>\\n</section>\\n<section class=\\"my-24\\">\\n    <ContentWidth>\\n        <div class=\\"w-full md:w-4/5 md:ml-[20%] flex flex-col\\">\\n            <AnimateIn>\\n                <img class=\\"w-full aspect-[4/3]\\" src={bed} alt=\\"a beautiful bed\\"/>\\n            </AnimateIn>\\n            <div class=\\"w-full flex flex-col-reverse lg:flex-row\\">\\n                <AnimateIn transitionDelayMax={0} class=\\"bg-paper flex flex-col justify-between p-4 w-full lg:w-1/2  aspect-square\\">\\n                    <h5 class=\\"font-sm text-primary\\" >A mission to create beautiful and affordable lighting for the home.</h5>\\n                    <div class=\\"w-full flex flex-row justify-between\\">\\n                        <div>\\n                            <p class=\\"text-primary\\">PROGRESS LIGHTING</p>\\n                            <p class=\\"text-light\\">brand, environmental, packaging, print</p>\\n                        </div>\\n                        <a href=\\"/portfolio/progress-lighting\\" class=\\"hover:brightness-50 transition bump\\">\\n                            <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n                        </a>\\n                    </div>\\n                </AnimateIn>\\n                <AnimateIn transitionDelayMax={0} class=\\"w-full lg:w-1/2  aspect-square overflow-hidden\\">\\n                    <img class=\\"h-full w-auto top-0 left-0 object-cover object-left\\" src={catalogs} alt=\\"catalogs\\">\\n\\n                </AnimateIn>\\n                \\n\\n            </div>\\n        </div>\\n    </ContentWidth>\\n\\n</section>\\n\\n<ScreenWidthImage src={longHollow} alt=\\"longhollow ranch\\"/>\\n<section class=\\"bg-paper pt-16 pb-60 -mb-56\\">\\n<ContentWidth>\\n    <div class=\\"w-full md:w-4/5 md:ml-[20%]\\">\\n        <AnimateIn>\\n            <h4 class=\\" mb-20\\">An Authentic Texas Ranch <br /> Offering Resort-Quality Retreats.</h4>\\n        </AnimateIn>\\n        \\n        <AnimateIn class=\\"w-full md:w-1/2 flex flex-row justify-between\\">\\n            <div>\\n                <p class=\\"text-primary\\">LONEHOLLOW RANCH</p>\\n                <p class=\\"text-light\\">brand, digital, environmental, print</p>\\n            </div>\\n            <a href=\\"/portfolio/lonehollow-ranch\\" class=\\"hover:brightness-50 transition bump\\">\\n                <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n            </a>\\n        </AnimateIn>\\n    </div>\\n</ContentWidth>\\n</section>\\n<ContentWidth animateIn>\\n    <div class=\\"w-full md:w-4/5 md:ml-[20%]\\">\\n        <FourByThreeImage src={hq} alt=\\"rustic headquarters sign\\"/>\\n    </div>\\n</ContentWidth>\\n<ContentWidth>\\n    <div class=\\"w-full md:w-4/5 md:ml-[20%] flex flex-col-reverse md:flex-row\\">\\n        <AnimateIn transitionDelayMax={0} class=\\"flex flex-col justify-between p-4 w-full lg:w-1/2  aspect-square relative\\" style=\\"background-image: url({screamer}); background-size: 180%; background-position:35% 0\\">\\n            <div class=\\"w-full h-full absolute top-0 left-0\\" style=\\"background: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)\\" />\\n            <div/>\\n            <div class=\\"w-full flex flex-row justify-between z-10\\" >\\n                <div>\\n                    <p class=\\"text-white\\">YOUNGLIFE CONNECT</p>\\n                    <p class=\\"text-white\\">digital</p>\\n                </div>\\n                <a href=\\"/portfolio/young-life-connect\\" class=\\"brightness-200 hover:brightness-50 transition bump\\">\\n                    <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n                </a>\\n            </div>\\n        </AnimateIn>\\n        <AnimateIn transitionDelayMax={0} class=\\"w-full lg:w-1/2  aspect-square overflow-hidden\\">\\n            <img class=\\"h-full object-cover\\" src={roadmap} alt=\\"roadmap mockup on iphone\\">\\n\\n        </AnimateIn>\\n    </div>\\n</ContentWidth>\\n<section class=\\"mt-16\\">\\n<ScreenWidthImage src={stJames} alt=\\"st james' stairwell\\"/>\\n<ContentWidth>\\n    <div class=\\"w-full mt-12 md:w-4/5 md:ml-[20%] flex flex-col\\">\\n        <div class=\\"w-full flex flex-col-reverse lg:flex-row\\">\\n            <AnimateIn transitionDelayMax={0} class=\\"bg-paper flex flex-col justify-between p-4 w-full lg:w-1/2  aspect-square\\">\\n                <h5 class=\\"font-sm text-primary\\" >A diverse, joyful, and inclusive community of young learners.</h5>\\n                <div class=\\"w-full flex flex-row justify-between\\">\\n                    <div>\\n                        <p class=\\"text-primary uppercase\\">St. james' episcopal school</p>\\n                        <p class=\\"text-light\\">brand, digital, environmental, print</p>\\n                    </div>\\n                    <a href=\\"/portfolio/st-james-episcopal-school\\" class=\\"hover:brightness-50 transition bump\\">\\n                        <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n                    </a>\\n                </div>\\n            </AnimateIn>\\n            <AnimateIn transitionDelayMax={0} class=\\"w-full lg:w-1/2  aspect-square overflow-hidden\\">\\n                <img class=\\"h-full object-cover\\" src={report} alt=\\"annual reports\\">\\n\\n            </AnimateIn>\\n            \\n\\n        </div>\\n    </div>\\n</ContentWidth>\\n</section>\\n\\n\\n    <ContentWidth animateIn>\\n        <div class=\\"mt-24 w-full md:w-4/5 md:ml-[20%]\\">\\n            <FourByThreeImage src={dentist} alt=\\"a dentist\\"/>\\n        </div>\\n    </ContentWidth>\\n    <section class=\\"bg-paper pb-16 pt-60 -mt-56\\">\\n        <ContentWidth>\\n            <div class=\\"w-full md:w-4/5 md:ml-[20%]\\">\\n                <AnimateIn>\\n                <h4 class=\\" mb-20\\">A dental referral service bridging the gap between patients and providers.</h4>\\n                </AnimateIn>\\n                <AnimateIn class=\\"w-full md:w-1/2 flex flex-row justify-between\\">\\n                    <div>\\n                        <p class=\\"text-primary\\">1-800-DENTIST</p>\\n                        <p class=\\"text-light\\">digital</p>\\n                    </div>\\n                    <a href=\\"/portfolio/1-800-dentist\\" class=\\"hover:brightness-50 transition bump\\">\\n                        <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n                    </a>\\n                </AnimateIn>\\n            </div>\\n        </ContentWidth>\\n        </section>\\n        <section>\\n            <div class=\\"w-screen py-40 md:h-[80vh] bg-paper-red flex flex-col items-center justify-center\\">\\n                <ContentWidth class=\\"flex flex-col md:flex-row items-start justify-between\\">\\n                    <AnimateIn>\\n                    <h3 class=\\"text-white md:w-3/5\\">Isn't it time to arm your brand with a clear story and compelling design?</h3>\\n                    </AnimateIn>\\n                    <AnimateIn>\\n                    <a href=\\"/contact\\">\\n                        <DefaultButton class=\\"mt-6 text-white border-white border-1 hover:bg-mid hover:bg-opacity-10\\" text=\\"MEET WITH US\\" filled={false} />\\n                    </a>\\n                    </AnimateIn>\\n                </ContentWidth>\\n            </div>\\n           \\n        \\n        </section>\\n\\n<div class=\\"py-24 bg-paper\\" bind:this={projectsDiv} id='projectsDiv'>\\n    <ContentWidth>\\n        <AnimateIn class=\\"w-full\\">\\n            <div class=\\"archive-title text-primary w-full text-left mb-12\\">But wait, there's more!</div>\\n        </AnimateIn>\\n        <div class=\\"flex flex-row justify-between w-full\\">\\n            <AnimateIn class=\\"flex flex-row gap-4 mb-24 flex-wrap max-w-full\\">\\n                <button class=\\"px-5 py-[10px] transition-colors duration-500 border-1  {showBrand ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light hover:border-primary hover:text-primary\\"}\\" on:click={()=>showBrand=!showBrand}>BRAND</button>\\n                <button class=\\"px-5 py-[10px] transition-colors duration-500 border-1  {showPrint ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light hover:border-primary hover:text-primary\\"}\\" on:click={()=>showPrint=!showPrint}>PRINT</button>\\n                <button class=\\"px-5 py-[10px] transition-colors duration-500 border-1  {showEnvironmental ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light hover:border-primary hover:text-primary\\"}\\" on:click={()=>showEnvironmental=!showEnvironmental}>ENVIRONMENTAL</button>\\n                <button class=\\"px-5 py-[10px] transition-colors duration-500 border-1  {showProduct ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light hover:border-primary hover:text-primary\\"}\\" on:click={()=>showProduct=!showProduct}>PRODUCT</button>\\n                <!-- <button class=\\"px-5 py-[10px] transition-colors duration-500 border-1  {showPackaging ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light hover:border-primary hover:text-primary\\"}\\" on:click={()=>showPackaging=!showPackaging}>PACKAGING</button> -->\\n                <button class=\\"px-5 py-[10px] transition-colors duration-500 border-1  {showDigital ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light hover:border-primary hover:text-primary\\"}\\" on:click={()=>showDigital=!showDigital}>DIGITAL</button>\\n            </AnimateIn>\\n            <AnimateIn class=\\"relative z-10\\">\\n                <div class=\\"w-48 h-12 bg-paper absolute z-20\\"></div>\\n                {#if isOrderSelectOpen}\\n                    <button class=\\"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1  border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[100%] {isAlphabeticalDescending ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light  bg-white hover:text-primary\\"}\\" transition:slide on:click={()=>orderString=\\"A-Z\\"}>A-Z</button>\\n                    <button class=\\"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[200%] {isAlphabeticalAscending ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light  bg-white hover:text-primary\\"}\\" transition:slide on:click={()=>orderString=\\"Z-A\\"}>Z-A</button>\\n                    <button class=\\"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[300%] {isChronologicalDescending ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light  bg-white hover:text-primary\\"}\\" transition:slide on:click={()=>orderString=\\"Latest-Earliest\\"}>Latest-Earliest</button>\\n                    <button class=\\"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[400%] {isChronologicalAscending ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light text-light  bg-white hover:text-primary\\"}\\" transition:slide on:click={()=>orderString=\\"Earliest-Latest\\"}>Earliest-Latest</button>\\n                    {/if}\\n                <button class=\\"relative z-20  pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 mb-24 flex flex-row items-center justify-between {isOrderSelectOpen ? \\"border-primary bg-primary  hover:text-light text-white\\":\\"border-light bg-paper text-light hover:border-primary hover:text-primary\\"}\\" on:click={()=>isOrderSelectOpen=!isOrderSelectOpen}>\\n                    <div>{orderString}</div>\\n                    <div class=\\"h-12 w-12 relative\\">\\n                    {#if !isOrderSelectOpen}\\n                        <i class=\\"fa-solid fa-sharp fa-chevron-down absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2\\" transition:scale={{duration:300}}/>\\n                    {/if}\\n                    {#if isOrderSelectOpen}\\n                        <i class=\\"fa-solid fa-sharp fa-dash absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2\\" transition:scale={{duration:300}} />\\n                    {/if}\\n                    </div>\\n                </button>\\n                \\n               \\n            </AnimateIn>\\n        </div>\\n        <div class=\\"w-full md:ml-[20%] md:w-4/5 flex flex-row flex-wrap\\" >\\n        {#each sortedProjects as project, i (project.uid)}\\n        <div animate:flip={{ duration:4500, easing: expoOut}}  class=\\"md:pr-6 pb-6 w-full lg:w-1/2 aspect-[4/3] transition-opacity duration-700 {showAll||(project.data.branding&&showBrand)||(project.data.digital&&showDigital)||(project.data.environmental&&showEnvironmental)||(project.data.print&&showPrint)||(project.data.product&&showProduct)||(project.data.packaging&&showPackaging)? \\"relative\\": \\"absolute top-1/2 left-1/2 opacity-0 pointer-events-none\\"}\\">\\n          \\n                <a href={\\"/portfolio/\\"+project.uid} class=\\"h-full w-full flex flex-col justify-end relative\\">\\n                    <img src={project.data.hero.url||''} alt={project.data.title  + \\" Hero Image\\"} class=\\"absolute w-full h-full object-cover\\"/>\\n                    <div class=\\"w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700\\" style=\\"background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;\\" />\\n                   \\n                    \\n                    <AnimateIn class=\\"w-full flex flex-row justify-between p-6 z-10\\" transitionDelayMax={800}>\\n                        <div>\\n                            <p class=\\"text-white uppercase\\">{project.data.title}</p>\\n                            <p class=\\"text-light\\">{mediumString(project)||''}</p>\\n                        </div>\\n                        <a href={\\"/portfolio/\\"+project.uid} class=\\"brightness-200 hover:brightness-50 transition bump\\">\\n                            <img src={arrowButton} alt=\\"go to page\\" class=\\"h-full\\"/>\\n                        </a>\\n                    </AnimateIn>\\n                    \\n                </a>\\n           \\n        </div>\\n        {/each}\\n    </div>\\n    </ContentWidth>\\n</div>\\n\\n\\n<!-- footer -->\\n<div class=\\"w-screen py-40 md:h-[80vh] bg-paper-red flex flex-col items-center justify-center\\">\\n    <ContentWidth class=\\"flex flex-col md:flex-row items-start justify-between\\">\\n        <AnimateIn>\\n        <h3 class=\\"text-white md:w-3/5\\">It's time to arm your brand with a clear story and compelling design</h3>\\n        </AnimateIn>\\n        <AnimateIn>\\n        <a href=\\"/contact\\">\\n        <DefaultButton class=\\"mt-6 text-white border-white border-1 hover:bg-mid hover:bg-opacity-10\\" text=\\"MEET WITH US\\" filled={false} />\\n        </a>\\n        </AnimateIn>\\n    </ContentWidth>\\n</div>"],"names":[],"mappings":"AAuII,gBAAE,CAEN,WAAW,CAAE,UAAU,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACT,CAEA,gBAAE,CAEN,WAAW,CAAE,UAAU,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACT,CAEA,4BAAc,CAElB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IACT,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,WAAW,KAAK,CAAE,CACrC,gBAAE,CACE,SAAS,CAAE;AACvB,QAAQ,CACA,gBAAE,CACE,SAAS,CAAE;AACvB,QAAQ,CACJ"}`
};
let showPackaging = false;
function mediumString(project) {
  let servicesArray = [
    project.data.branding,
    project.data.product,
    project.data.print,
    project.data.environmental,
    project.data.packaging,
    project.data.digital
  ];
  return servicesArray.reduce(
    (acc2, service, index) => {
      if (service) {
        if (acc2) acc2 += ", ";
        acc2 += ["Brand", "Product", "Print", "Environmental", "Packaging", "Digital"][index];
      }
      return acc2;
    },
    ""
  );
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ceoHero = ceoHeroDesktop;
  let projectsDiv;
  let showBrand = false;
  let showDigital = false;
  let showEnvironmental = false;
  let showProduct = false;
  let showPrint = false;
  let showAll = true;
  let orderString = "Latest-Earliest";
  let isAlphabeticalDescending = false;
  let isAlphabeticalAscending = false;
  let isChronologicalDescending = true;
  let isChronologicalAscending = false;
  let isOrderSelectOpen = false;
  let { data } = $$props;
  let sortedProjects = data.allProjects;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      {
        ceoHero = ceoHeroDesktop;
      }
    }
  }
  {
    {
      {
        showAll = true;
      }
      isOrderSelectOpen = false;
    }
  }
  {
    {
      isAlphabeticalDescending = false;
      isAlphabeticalAscending = false;
      isChronologicalDescending = false;
      isChronologicalAscending = false;
      switch (orderString) {
        case "A-Z": {
          isAlphabeticalDescending = true;
          break;
        }
        case "Z-A": {
          isAlphabeticalAscending = true;
          break;
        }
        case "Latest-Earliest": {
          isChronologicalDescending = true;
          break;
        }
        case "Earliest-Latest": {
          isChronologicalAscending = true;
          break;
        }
      }
    }
  }
  {
    {
      sortedProjects = [...data.allProjects].sort((a, b) => {
        switch (orderString) {
          case "A-Z":
            return (a.data.title || "").localeCompare(b.data.title || "");
          case "Z-A":
            return (b.data.title || "").localeCompare(a.data.title || "");
          case "Latest-Earliest":
            return new Date(b.first_publication_date).getTime() - new Date(a.first_publication_date).getTime();
          case "Earliest-Latest":
            return new Date(a.first_publication_date).getTime() - new Date(b.first_publication_date).getTime();
          default:
            return 0;
        }
      });
      isOrderSelectOpen = false;
    }
  }
  return `  ${$$result.head += `<!-- HEAD_svelte-bb0snp_START -->${$$result.title = `<title>
        Portfolio | Reddoor Creative
    </title>`, ""}<!-- HEAD_svelte-bb0snp_END -->`, ""} ${`<a class="fixed z-20 bottom-12 right-12 flex flex-col items-center justify-center gap-2 border-light hover:border-primary text-light hover:text-primary transition-opacity duration-300" href="#projectsDiv" data-svelte-h="svelte-w20yqm"><div class="text-[8px]">All Projects</div> <div class="w-12 h-12 rounded-full border-2 transition-colors duration-300 flex items-center justify-center"><i class="fa-solid fa-light fa-arrow-down fa-2xl"></i></div></a>`} <section class="w-screen max-h-[720px] flex flex-col justify-between lg:aspect-video pt-24 bg-paper"><div></div> ${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<h5 class="w-4/5 max-w-screen-lg mr-0 ml-auto svelte-pelcqp" data-svelte-h="svelte-pbub79">We are honored to work with these amazing clients. Take a look and consider taking your place among them.</h5>`;
    }
  })} ${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="text-primary w-full text-left" data-svelte-h="svelte-6qtfmz">Portfolio</h1>`;
    }
  })}</section> <section class="max-w-screen overflow-x-clip"><div class="${"right-0 max-h-screen aspect-video relative " + escape(
    "w-screen min-h-full",
    true
  )}"><img${add_attribute("src", ceoHero, 0)} alt="ceo name tag" class="absolute h-full w-full max-w-screen object-cover object-left" style="${"object-position:" + escape(
    0,
    true
  ) + "px center"}"> <div class="w-full max-w-[100vw] h-full max-h-screen relative">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: ($$props.class || "") + " h-full z-10 relative"
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``} <h4 class="md:w-3/5 absolute left-0 top-20 text-white svelte-pelcqp" data-svelte-h="svelte-1pbcj4k">The &quot;buck stops here&quot; with a branding system overhaul of LA County&#39;s CEO</h4> <div class="absolute bottom-20 flex justify-between w-full md:w-2/5" data-svelte-h="svelte-4k7c9f"><div><p class="text-white">COUNTY OF LOS ANGELES</p> <p class="text-light">brand, digital, print</p></div> <a href="/portfolio/ceo-la" class="hover:brightness-200 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a></div>`;
      }
    }
  )}</div></div></section> <section class="my-24">${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full md:w-4/5 md:ml-[20%] flex flex-col">${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
        default: () => {
          return `<img class="w-full aspect-[4/3]"${add_attribute("src", bed, 0)} alt="a beautiful bed">`;
        }
      })} <div class="w-full flex flex-col-reverse lg:flex-row">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          transitionDelayMax: 0,
          class: "bg-paper flex flex-col justify-between p-4 w-full lg:w-1/2  aspect-square"
        },
        {},
        {
          default: () => {
            return `<h5 class="font-sm text-primary svelte-pelcqp" data-svelte-h="svelte-nhg16y">A mission to create beautiful and affordable lighting for the home.</h5> <div class="w-full flex flex-row justify-between" data-svelte-h="svelte-frlfsw"><div><p class="text-primary">PROGRESS LIGHTING</p> <p class="text-light">brand, environmental, packaging, print</p></div> <a href="/portfolio/progress-lighting" class="hover:brightness-50 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a></div>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          transitionDelayMax: 0,
          class: "w-full lg:w-1/2  aspect-square overflow-hidden"
        },
        {},
        {
          default: () => {
            return `<img class="h-full w-auto top-0 left-0 object-cover object-left"${add_attribute("src", catalogs, 0)} alt="catalogs">`;
          }
        }
      )}</div></div>`;
    }
  })}</section> ${validate_component(ScreenWidthImage, "ScreenWidthImage").$$render($$result, { src: longHollow, alt: "longhollow ranch" }, {}, {})} <section class="bg-paper pt-16 pb-60 -mb-56">${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full md:w-4/5 md:ml-[20%]">${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="mb-20 svelte-pelcqp" data-svelte-h="svelte-10rk2bw">An Authentic Texas Ranch <br> Offering Resort-Quality Retreats.</h4>`;
        }
      })} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/2 flex flex-row justify-between"
        },
        {},
        {
          default: () => {
            return `<div data-svelte-h="svelte-8cva3z"><p class="text-primary">LONEHOLLOW RANCH</p> <p class="text-light">brand, digital, environmental, print</p></div> <a href="/portfolio/lonehollow-ranch" class="hover:brightness-50 transition bump" data-svelte-h="svelte-fxnfok"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a>`;
          }
        }
      )}</div>`;
    }
  })}</section> ${validate_component(ContentWidth, "ContentWidth").$$render($$result, { animateIn: true }, {}, {
    default: () => {
      return `<div class="w-full md:w-4/5 md:ml-[20%]">${validate_component(FourByThreeImage, "FourByThreeImage").$$render($$result, { src: hq, alt: "rustic headquarters sign" }, {}, {})}</div>`;
    }
  })} ${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full md:w-4/5 md:ml-[20%] flex flex-col-reverse md:flex-row">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          transitionDelayMax: 0,
          class: "flex flex-col justify-between p-4 w-full lg:w-1/2  aspect-square relative",
          style: "background-image: url(" + screamer + "); background-size: 180%; background-position:35% 0"
        },
        {},
        {
          default: () => {
            return `<div class="w-full h-full absolute top-0 left-0" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)"></div> <div></div> <div class="w-full flex flex-row justify-between z-10" data-svelte-h="svelte-lasfrg"><div><p class="text-white">YOUNGLIFE CONNECT</p> <p class="text-white">digital</p></div> <a href="/portfolio/young-life-connect" class="brightness-200 hover:brightness-50 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a></div>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          transitionDelayMax: 0,
          class: "w-full lg:w-1/2  aspect-square overflow-hidden"
        },
        {},
        {
          default: () => {
            return `<img class="h-full object-cover"${add_attribute("src", roadmap, 0)} alt="roadmap mockup on iphone">`;
          }
        }
      )}</div>`;
    }
  })} <section class="mt-16">${validate_component(ScreenWidthImage, "ScreenWidthImage").$$render($$result, { src: stJames, alt: "st james' stairwell" }, {}, {})} ${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full mt-12 md:w-4/5 md:ml-[20%] flex flex-col"><div class="w-full flex flex-col-reverse lg:flex-row">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          transitionDelayMax: 0,
          class: "bg-paper flex flex-col justify-between p-4 w-full lg:w-1/2  aspect-square"
        },
        {},
        {
          default: () => {
            return `<h5 class="font-sm text-primary svelte-pelcqp" data-svelte-h="svelte-p20cmy">A diverse, joyful, and inclusive community of young learners.</h5> <div class="w-full flex flex-row justify-between" data-svelte-h="svelte-5w27vi"><div><p class="text-primary uppercase">St. james&#39; episcopal school</p> <p class="text-light">brand, digital, environmental, print</p></div> <a href="/portfolio/st-james-episcopal-school" class="hover:brightness-50 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a></div>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          transitionDelayMax: 0,
          class: "w-full lg:w-1/2  aspect-square overflow-hidden"
        },
        {},
        {
          default: () => {
            return `<img class="h-full object-cover"${add_attribute("src", report, 0)} alt="annual reports">`;
          }
        }
      )}</div></div>`;
    }
  })}</section> ${validate_component(ContentWidth, "ContentWidth").$$render($$result, { animateIn: true }, {}, {
    default: () => {
      return `<div class="mt-24 w-full md:w-4/5 md:ml-[20%]">${validate_component(FourByThreeImage, "FourByThreeImage").$$render($$result, { src: dentist, alt: "a dentist" }, {}, {})}</div>`;
    }
  })} <section class="bg-paper pb-16 pt-60 -mt-56">${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full md:w-4/5 md:ml-[20%]">${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="mb-20 svelte-pelcqp" data-svelte-h="svelte-lczjok">A dental referral service bridging the gap between patients and providers.</h4>`;
        }
      })} ${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "w-full md:w-1/2 flex flex-row justify-between"
        },
        {},
        {
          default: () => {
            return `<div data-svelte-h="svelte-wi9iee"><p class="text-primary">1-800-DENTIST</p> <p class="text-light">digital</p></div> <a href="/portfolio/1-800-dentist" class="hover:brightness-50 transition bump" data-svelte-h="svelte-aosoha"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a>`;
          }
        }
      )}</div>`;
    }
  })}</section> <section><div class="w-screen py-40 md:h-[80vh] bg-paper-red flex flex-col items-center justify-center">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col md:flex-row items-start justify-between"
    },
    {},
    {
      default: () => {
        return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
          default: () => {
            return `<h3 class="text-white md:w-3/5" data-svelte-h="svelte-n9vrtf">Isn&#39;t it time to arm your brand with a clear story and compelling design?</h3>`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
          default: () => {
            return `<a href="/contact">${validate_component(DefaultButton, "DefaultButton").$$render(
              $$result,
              {
                class: "mt-6 text-white border-white border-1 hover:bg-mid hover:bg-opacity-10",
                text: "MEET WITH US",
                filled: false
              },
              {},
              {}
            )}</a>`;
          }
        })}`;
      }
    }
  )}</div></section> <div class="py-24 bg-paper" id="projectsDiv"${add_attribute("this", projectsDiv, 0)}>${validate_component(ContentWidth, "ContentWidth").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "w-full" }, {}, {
        default: () => {
          return `<div class="archive-title text-primary w-full text-left mb-12 svelte-pelcqp" data-svelte-h="svelte-ulu4hd">But wait, there&#39;s more!</div>`;
        }
      })} <div class="flex flex-row justify-between w-full">${validate_component(AnimateIn, "AnimateIn").$$render(
        $$result,
        {
          class: "flex flex-row gap-4 mb-24 flex-wrap max-w-full"
        },
        {},
        {
          default: () => {
            return `<button class="${"px-5 py-[10px] transition-colors duration-500 border-1 " + escape(
              "border-light text-light hover:border-primary hover:text-primary",
              true
            )}">BRAND</button> <button class="${"px-5 py-[10px] transition-colors duration-500 border-1 " + escape(
              "border-light text-light hover:border-primary hover:text-primary",
              true
            )}">PRINT</button> <button class="${"px-5 py-[10px] transition-colors duration-500 border-1 " + escape(
              "border-light text-light hover:border-primary hover:text-primary",
              true
            )}">ENVIRONMENTAL</button> <button class="${"px-5 py-[10px] transition-colors duration-500 border-1 " + escape(
              "border-light text-light hover:border-primary hover:text-primary",
              true
            )}">PRODUCT</button>  <button class="${"px-5 py-[10px] transition-colors duration-500 border-1 " + escape(
              "border-light text-light hover:border-primary hover:text-primary",
              true
            )}">DIGITAL</button>`;
          }
        }
      )} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, { class: "relative z-10" }, {}, {
        default: () => {
          return `<div class="w-48 h-12 bg-paper absolute z-20"></div> ${isOrderSelectOpen ? `<button class="${"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[100%] " + escape(
            isAlphabeticalDescending ? "border-primary bg-primary  hover:text-light text-white" : "border-light text-light  bg-white hover:text-primary",
            true
          )}">A-Z</button> <button class="${"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[200%] " + escape(
            isAlphabeticalAscending ? "border-primary bg-primary  hover:text-light text-white" : "border-light text-light  bg-white hover:text-primary",
            true
          )}">Z-A</button> <button class="${"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[300%] " + escape(
            isChronologicalDescending ? "border-primary bg-primary  hover:text-light text-white" : "border-light text-light  bg-white hover:text-primary",
            true
          )}">Latest-Earliest</button> <button class="${"pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 border-t-0 mb-24 flex flex-row items-center justify-between absolute top-0 left-0 translate-y-[400%] " + escape(
            isChronologicalAscending ? "border-primary bg-primary  hover:text-light text-white" : "border-light text-light  bg-white hover:text-primary",
            true
          )}">Earliest-Latest</button>` : ``} <button class="${"relative z-20 pl-5 py-[10px] w-48 h-12 transition-colors duration-500 border-1 mb-24 flex flex-row items-center justify-between " + escape(
            isOrderSelectOpen ? "border-primary bg-primary  hover:text-light text-white" : "border-light bg-paper text-light hover:border-primary hover:text-primary",
            true
          )}"><div>${escape(orderString)}</div> <div class="h-12 w-12 relative">${!isOrderSelectOpen ? `<i class="fa-solid fa-sharp fa-chevron-down absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>` : ``} ${isOrderSelectOpen ? `<i class="fa-solid fa-sharp fa-dash absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>` : ``}</div></button>`;
        }
      })}</div> <div class="w-full md:ml-[20%] md:w-4/5 flex flex-row flex-wrap">${each(sortedProjects, (project, i) => {
        return `<div class="${"md:pr-6 pb-6 w-full lg:w-1/2 aspect-[4/3] transition-opacity duration-700 " + escape(
          showAll || project.data.branding && showBrand || project.data.digital && showDigital || project.data.environmental && showEnvironmental || project.data.print && showPrint || project.data.product && showProduct || project.data.packaging && showPackaging ? "relative" : "absolute top-1/2 left-1/2 opacity-0 pointer-events-none",
          true
        )}"><a${add_attribute("href", "/portfolio/" + project.uid, 0)} class="h-full w-full flex flex-col justify-end relative"><img${add_attribute("src", project.data.hero.url || "", 0)}${add_attribute("alt", project.data.title + " Hero Image", 0)} class="absolute w-full h-full object-cover"> <div class="w-full h-full absolute top-0 left-0 hover:opacity-60 transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(12, 19, 35, 0.15) 0%, rgba(12, 19, 35, 0.80) 81.09%) 50% / cover no-repeat;"></div> ${validate_component(AnimateIn, "AnimateIn").$$render(
          $$result,
          {
            class: "w-full flex flex-row justify-between p-6 z-10",
            transitionDelayMax: 800
          },
          {},
          {
            default: () => {
              return `<div><p class="text-white uppercase">${escape(project.data.title)}</p> <p class="text-light">${escape(mediumString(project) || "")}</p></div> <a${add_attribute("href", "/portfolio/" + project.uid, 0)} class="brightness-200 hover:brightness-50 transition bump"><img${add_attribute("src", arrowButton, 0)} alt="go to page" class="h-full"></a> `;
            }
          }
        )}</a> </div>`;
      })}</div>`;
    }
  })}</div>  <div class="w-screen py-40 md:h-[80vh] bg-paper-red flex flex-col items-center justify-center">${validate_component(ContentWidth, "ContentWidth").$$render(
    $$result,
    {
      class: "flex flex-col md:flex-row items-start justify-between"
    },
    {},
    {
      default: () => {
        return `${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
          default: () => {
            return `<h3 class="text-white md:w-3/5" data-svelte-h="svelte-3658mn">It&#39;s time to arm your brand with a clear story and compelling design</h3>`;
          }
        })} ${validate_component(AnimateIn, "AnimateIn").$$render($$result, {}, {}, {
          default: () => {
            return `<a href="/contact">${validate_component(DefaultButton, "DefaultButton").$$render(
              $$result,
              {
                class: "mt-6 text-white border-white border-1 hover:bg-mid hover:bg-opacity-10",
                text: "MEET WITH US",
                filled: false
              },
              {},
              {}
            )}</a>`;
          }
        })}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
