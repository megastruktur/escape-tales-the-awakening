<script lang="ts">
	import { goto } from "$app/navigation";
	import { getDrawerStore } from "@skeletonlabs/skeleton";
  
  export let data
  const drawerStore = getDrawerStore()
</script>


<div class="h-96 w-32">
  
  {#each data.cards as card}
    <a
      href="/event/{card.id}"
      on:click={() => drawerStore.close()}
      class="w-full h-14 btn variant-filled-primary rounded-none mb-1"
      >{card.id}</a>
  {/each}
</div>
