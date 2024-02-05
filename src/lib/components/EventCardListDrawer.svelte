<script lang="ts">
	import { goto } from "$app/navigation";
	import { getDrawerStore } from "@skeletonlabs/skeleton";
  import awakenEventCardsJson from "$lib/assets/awakenEventCards.json?raw"
  
  const drawerStore = getDrawerStore()
  const awakenCards = JSON.parse(awakenEventCardsJson)

  function gotoCard(cardId: string) {
    drawerStore.close()
    goto(`/event/${cardId}`)
  }
</script>


<div class="h-96 w-32">
  
  {#each awakenCards as card}
    <button
      on:click={() => gotoCard(card.id)}
      class="w-full h-14 btn variant-filled-primary rounded-none mb-1"
      >{card.id}</button>
  {/each}
</div>
