<script lang="ts">

  export let eventCard: AwakenEventCard

</script>
<div class="card max-w-96 mx-auto">
  <header class="card-header text-center h1 bg-primary-900 py-3">{eventCard.id}</header>
  <section class="p-4 blockquote">{@html eventCard.description}</section>
  {#if (eventCard.options.length > 0)}
  <hr />
  <footer class="card-footer mt-3">
    <ol class="list">
      {#each eventCard.options as option}
        {@const eventId = (option.match(/P[0-9]{3}/))?.[0]}
        <li class="list-option mx-1">
          <span>•</span>
          {#if eventId !== undefined}
            <a class="flex-auto" href="/event/{eventId}">
              <span>{@html option}</span>
            </a>
          {:else}
            <span class="flex-auto">{@html option}</span>
          {/if}
        </li>
      {/each}
    </ol>
  </footer>
  {/if}
</div>
