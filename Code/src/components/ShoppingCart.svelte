<script>
    import { TextBlock } from "fluent-svelte";
	import ShoppingCartItem from "./ShoppingCartItem.svelte";

	export let data = Array.from(Array(5), () => ({ title: "Title", cost: 5 }));

	
	/** Specifies a custom class name for the NumberBox. */
	let className = "";
	export { className as class };
</script>

<div class="shopping-cart {className ?? ''}">
	<TextBlock variant="subtitle">Shopping Cart</TextBlock>
	<ul class="cart-items">
		{#each data as item}
			<ShoppingCartItem {...item} />
		{/each}
	</ul>
</div>

<style>
	.shopping-cart {
		@apply h-screen overflow-scroll;

	}
	.cart-items {
		@apply flex flex-col gap-4 pt-2;
	}
</style>