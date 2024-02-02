<script lang="ts">
	import { goto } from "$app/navigation";

  let gotoCardId: string

  function gotoCard() {
    if (gotoCardId !== undefined) {
      
      // if gotoCardId is less than 3 characters add 0 before it for each missing one
      while (gotoCardId.length < 3) {
        gotoCardId = `0${gotoCardId}`
      }
      goto(`/event/P${gotoCardId}`)
    }
  }
</script>

<form class="max-w-96 mx-auto mb-6">
  <input
    class="input w-full mb-3"
    placeholder="Номер карточки"
    bind:value={gotoCardId} />
  <button
    class="btn variant-outline-primary w-full"
    on:click={gotoCard}>Перейти</button>
</form>
