import metaImage from "$lib/assets/icons/logos/printedReddoor.png"

export async function load({ params, fetch, cookies }) {
	return {

		title: "About | Reddoor Creative",
		meta_description: "We design beautiful marketing materials that help you thrive. Let us tell you how.",
		meta_title: "About | Reddoor Creative",
		meta_image: metaImage
	};
}
