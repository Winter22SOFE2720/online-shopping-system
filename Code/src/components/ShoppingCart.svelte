<script>
	import "fluent-svelte/theme.css";
	import { ListItem } from "fluent-svelte";

    import ShoppingCartItem from "./ShoppingCartItem.svelte";
</script>

<ul>
    <ShoppingCartItem />
</ul>

<style>
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
        padding: 1em;
	}
</style>