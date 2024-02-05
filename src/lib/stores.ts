import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';
import { writable } from "svelte/store";

export const pageTitleStore = writable<string>("");

export const eventCardStoryStore: Writable<string[]> = localStorageStore('EventCardStory', []);
