<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { eventCardStoryStore } from "$lib/stores";

  console.log($eventCardStoryStore);

  let currentCardId: string
  let isCurrentCardIdInStory: boolean

  function removeCardFromStory() {
    if (isCurrentCardIdInStory) {
      eventCardStoryStore.set($eventCardStoryStore.filter((cid) => cid !== currentCardId))
    }
    // goto last in array $eventCardStoryStore
    let gotoCardId: string = "P159"
    if ($eventCardStoryStore.length > 0) {
      gotoCardId = $eventCardStoryStore[$eventCardStoryStore.length - 1]
    }
    goto(`/event/${gotoCardId}`)
  }
  
  $: {
    currentCardId = $page.params.eventId,
    isCurrentCardIdInStory = $eventCardStoryStore.find(cid => cid === currentCardId) !== undefined
  }

</script>

<ol class="flex flex-wrap mb-3 w-full space-x-3">
  {#each $eventCardStoryStore as cardId}
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb">
      <a class="anchor" href="/event/{cardId}">{cardId}</a>
    </li>
  {/each}
</ol>

{#if isCurrentCardIdInStory}
  <button
    on:click={removeCardFromStory}
    class="btn variant-outline-warning w-full"
    >Убрать текущую карту из истории</button>
{/if}
