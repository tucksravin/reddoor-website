<script lang="ts">
	import { page } from '$app/state';
</script>
<svelte:head>
    <title>{"Reddoor Creative | " + page.error?.message}</title>
</svelte:head>
<section class="h-screen w-screen flex items-center justify-center">
    <h1>{page.error?.message||""}</h1>
</section>