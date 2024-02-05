import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import awakenEventCardsJson from "$lib/assets/awakenEventCards.json?raw"

export const load: PageServerLoad = async ({ params }) => {

  const cards: AwakenEventCard[] = JSON.parse(awakenEventCardsJson)

  if (cards !== undefined) {
    return {
      cards
    };
  }

  error(404, 'Not found');
}
