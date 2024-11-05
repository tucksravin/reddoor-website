import { createClient } from '$lib/prismicio';
import { filter } from '@prismicio/client';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	

	const allProjects = await client.getAllByType('project', {
		orderings: {
		  field: 'document.first_publication_date',
		  direction: 'asc'
		},
		filters: [filter.not('document.tags', ['hide'])]
	  });

	  

	return {
		allProjects: allProjects,
		title: "Portfolio | Reddoor Creative",
		
	};
}
