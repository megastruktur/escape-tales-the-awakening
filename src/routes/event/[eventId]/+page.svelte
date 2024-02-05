<script lang="ts">
  import { page } from "$app/stores"
	import EventCard from "$lib/components/EventCard.svelte";
	import EventCardStory from "$lib/components/EventCardStory.svelte";
	import EventGoto from "$lib/components/EventGoto.svelte";
	import { eventCardStoryStore, pageTitleStore } from "$lib/stores";

  export let data

  let eventCardId: string

  pageTitleStore.set("Карты событий")

  function addCardToStory() {
    if (data.card !== undefined && $eventCardStoryStore.find(cid => cid === data.card?.id) === undefined) {
      eventCardStoryStore.set([...$eventCardStoryStore, data.card?.id])
    }
  }

  $: {
    eventCardId = $page.params.eventId
    addCardToStory()
  }
  
</script>

<div class="px-3">

  <div class="w-full mb-6">
    <EventCardStory />
  </div>
  
  <EventGoto />
  
  <div class="">
    {#if data.card !== undefined}
      <EventCard eventCard={data.card} />
    {/if}
  </div>
</div>
