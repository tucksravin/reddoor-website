<script>
	import { PrismicRichText } from '@prismicio/svelte';

  import ContentWidth from '$lib/components/ContentWidth/ContentWidth.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;

	let backgroundColorString = 'bg-'+slice.primary.backgroundcolor;
	const float = slice.primary.float;
	const width = slice.primary.width;

	
</script>

<section class="w-full py-12 text-{slice.primary.textColor} {backgroundColorString}">
	<ContentWidth class="
		{width==="4/5"&&float==="center"? "md:px-[10%]":""}
		{width==="3/5"&&float==="center"? "md:px-[20%]":""}
		{width==="4/5"&&float==="left"? "md:pr-[20%]":""}
		{width==="4/5"&&float==="right"? "md:pl-[20%]":""}
		{width==="3/5"&&float==="left"? "md:pr-[40%]":""}
		{width==="3/5"&&float==="right"? "md:pl-[40%]":""}
	">
		
			<PrismicRichText
			field={slice.primary.content}
		/>
		
		
	</ContentWidth>
</section>

