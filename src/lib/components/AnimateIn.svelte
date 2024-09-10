<script lang="ts">
  import { onMount } from "svelte";

    let isInView = false;
    let el:HTMLElement;

    onMount(()=>{
        let rect = el.getBoundingClientRect();
        isInView = rect.bottom <= window.innerHeight + rect.height

        window.addEventListener('scroll', ()=>{
            let rect = el.getBoundingClientRect();
            isInView = rect.bottom <= window.innerHeight + rect.height
        })
    })
</script>


   

        <div bind:this={el} class="transition duration-[2000ms] ease-fast-slow {isInView ? "opacity-100 translate-y-0":"opacity-0 translate-y-[50%]"} {$$props.class || ''}">
            <slot />
        </div>
