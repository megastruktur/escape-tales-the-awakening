<script lang="ts">

	import { pageTitleStore } from '$lib/stores';
	import { onDestroy } from 'svelte';
	import '../app.postcss';

	let pageTitle = "Awaken"
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, Drawer, getDrawerStore, storePopup, type DrawerSettings, Modal } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import EventCardListDrawer from '$lib/components/EventCardListDrawer.svelte';

	initializeStores();

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const unsubscribePageTitle = pageTitleStore.subscribe(title => {
		pageTitle = title
	})

	onDestroy(() => {
		unsubscribePageTitle()
	})

	const drawerStore = getDrawerStore()
	const eventCardsDrawerSettings: DrawerSettings = {
		id: "event-drawer",
		width: "w-40",
	};

</script>

<svelte:head>
	<title>Клаустрофобия: Пробуждение</title>
</svelte:head>

<Modal />
<Drawer>
	{#if $drawerStore.id === "event-drawer"}
		<EventCardListDrawer />
	{/if}
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button
					on:click={() => drawerStore.open(eventCardsDrawerSettings)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
						<path d="M4 18L20 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
						<path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
						<path d="M4 6L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
						</svg>
				</button>
			</svelte:fragment>
			<svelte:fragment slot="headline">
				<h1 class="h1 text-center">{pageTitle}</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					href="/"
					>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="currentColor">
						<path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
					</svg>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="my-6"><slot /></div>
</AppShell>
