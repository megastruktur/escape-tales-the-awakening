import { goto } from "$app/navigation";
import { eventCardStoryStore } from "./stores";

export function newGame() {
  eventCardStoryStore.set(["P159"]);
  goto(`/event/P159`);
}
