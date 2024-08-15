<script lang="ts">
export let icon="";
export let iconAltText="company logo"
export let testimonialText ="";
export let attribution = "";
export let attributionLabel = "";
export let backgroundColor="transparent"
export let float = "center"
let justify=float;
let horizontalFloatMargin = "mx-auto"

$:{
    justify=float;
if(float==="left")
    justify="start";
if(float==="right")
    justify="end"

horizontalFloatMargin = "mx-auto"
if(float==="left")
    horizontalFloatMargin="ml-0 mr-auto";
if(float==="right")
    horizontalFloatMargin="ml-auto mr-0"
}

</script>

<div class="{$$props.class || ''} w-full flex flex-col justify-{justify} text-{float} pb-8"
     style="background-color: {backgroundColor}"
>
    {#if icon}
        <img src={icon} alt={iconAltText} class="pl-3 mb-12 {horizontalFloatMargin}"/>
    {/if}
  
    {#if testimonialText}
        <p class="mb-7 max-w-full whitespace-pre-wrap">{testimonialText}</p>
    {/if}   

    {#if attribution}
        <p class="text-primary large-body font-thin">{attribution}</p>
    {/if}  

    {#if attributionLabel}
        <p class="text-mid font-thin">{attributionLabel}</p>
    {/if}  



</div>
