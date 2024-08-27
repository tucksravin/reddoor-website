
export async function load({ params, fetch, cookies, url }) {
	return {

		title: "Contact | Reddoor Creative",
		submitted: url.searchParams.get('submitted')||false 
	};
}
