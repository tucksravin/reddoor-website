<script lang="ts">
    export let text = "BUTTON";
    export let click = ()=>{};
    export let filled = true;
</script>

<style>
    button{
        padding: 4px 24px;
        font-size: 15px;
        border: 1px solid #fff;
        font-weight: 300;
        color: #fff;
        line-height: 35px;
    }

    


</style>


<button on:click={click} 
        class="{filled ?
         "bg-primary bg-opacity-80 hover:bg-opacity-100 active:bg-black  text-white" 
         : 
         "hover:bg-white text-white hover:text-dark " 
         } border-2 tracking-wider w-auto text-center mb-5 sm:mb-0 uppercase cursor-pointer text-nowrap transition-all duration-300 active:-translate-y-2 {$$props.class || ''}">
        {text}
</button>