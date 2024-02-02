<script lang="ts">
	import { newGame } from "$lib/game";
	import { eventCardStoryStore, pageTitleStore } from "$lib/stores";
	import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";

  pageTitleStore.set("Домашняя страница")

	const modalStore = getModalStore()

	let hasSavedGame: boolean = $eventCardStoryStore.length > 1

	function startNewGame() {

		if (hasSavedGame) {
			const newGameModal: ModalSettings = {
				type: 'confirm',
				// Data
				title: 'Начать новую игру?',
				buttonTextCancel: "Отмена",
				buttonTextConfirm: "Продолжить",
				body: 'Внимание. Если вы начнёте новую игру, ваш текущий игровой прогресс будет утерян.<br/>Желаете продолжить?',
				response: (r: boolean) => {
					if (r === true) {
            newGame()
          }
				},
			};

			modalStore.trigger(newGameModal);
		}
		else {
			newGame()
		}
	}

</script>

<div class="flex flex-col items-center space-y-3 text-center">
	{#if hasSavedGame}
		<a
			href="/event/{$eventCardStoryStore[$eventCardStoryStore.length - 1]}"
			class="btn variant-filled-success w-72 h-72 h2">Продолжить</a>
	{/if}

	<button
		on:click={startNewGame}
		class="btn variant-filled-error w-72 h-72 h2">Новая игра</button>
</div>
