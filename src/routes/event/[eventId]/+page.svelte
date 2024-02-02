<script lang="ts">
  import { page } from "$app/stores"
	import EventCard from "$lib/components/EventCard.svelte";
	import EventCardStory from "$lib/components/EventCardStory.svelte";
	import EventGoto from "$lib/components/EventGoto.svelte";
	import { awakenEventCardsStore, eventCardStoryStore, pageTitleStore } from "$lib/stores";

  let eventCardId: string
  let awakenEventCard: AwakenEventCard | undefined

  pageTitleStore.set("Карты событий")

  function addCardToStory(cardId: string) {
    if ($eventCardStoryStore.find(cid => cid === cardId) === undefined) {
      eventCardStoryStore.set([...$eventCardStoryStore, cardId])
    }
  }

  $: {
    eventCardId = $page.params.eventId
    awakenEventCard =
      $awakenEventCardsStore.find((card: AwakenEventCard) => card.id === eventCardId)
      addCardToStory(eventCardId)
  }
  
</script>

<div class="px-3">

  <div class="w-full mb-6">
    <EventCardStory />
  </div>
  
  <EventGoto />
  
  <div class="">
    {#if awakenEventCard !== undefined}
      <EventCard eventCard={awakenEventCard} />
    {/if}
  </div>
</div>
