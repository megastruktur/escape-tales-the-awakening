<script lang="ts">
	import { goto } from "$app/navigation";
	import { awakenEventCardsStore } from "$lib/stores";
	import { getDrawerStore } from "@skeletonlabs/skeleton";
  
  const drawerStore = getDrawerStore()

  function gotoCard(cardId: string) {
    drawerStore.close()
    goto(`/event/${cardId}`)
  }
</script>


<div class="h-96 w-32">
  
  {#each $awakenEventCardsStore as card}
    <button
      on:click={() => gotoCard(card.id)}
      class="w-full h-14 btn variant-filled-primary rounded-none mb-1"
      >{card.id}</button>
  {/each}
</div>
