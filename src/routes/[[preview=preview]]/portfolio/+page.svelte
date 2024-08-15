<script lang='ts'>
export let data;
</script>

<svelte:head>
    <title>
        Portfolio | Reddoor Creative
    </title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-8 my-24">
    {#each data.allProjects as project}
        <a href={"/portfolio/"+project.uid} class="body-large text-primary hover:text-primary-dark bump">{project.data.title}</a>
    {/each}
</div>