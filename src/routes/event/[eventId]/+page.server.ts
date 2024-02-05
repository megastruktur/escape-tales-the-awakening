import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import awakenEventCardsJson from "$lib/assets/awakenEventCards.json?raw"

export const load: PageServerLoad = async ({ params }) => {

  const eventId: string = params.eventId
  const cards: AwakenEventCard[] = JSON.parse(awakenEventCardsJson)
  const card: AwakenEventCard | undefined = cards.find(c => c.id === eventId)

  if (card !== undefined) {
    return {
      card
    };
  }

  error(404, 'Not found');
}
