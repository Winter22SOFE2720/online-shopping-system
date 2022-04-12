<script>
    import { TextBlock, Button, ContentDialog, TextBox, InfoBar } from "fluent-svelte";
	import ShoppingCartItem from "./ShoppingCartItem.svelte";

	import { paymentDetails, productsList, writable } from "./stores";

	let checkout = false;
	let shipping, billing, cardnum, date, cvv, pincode;
	$: paymentInfo = `${cardnum} -- ${cvv} -- ${date} -- ${pincode}`;

	let status = writable([]);
	
	let submit = () => {
		(async () => {
			try {
				paymentDetails.RecieveUserInformation(
					billing, 
					shipping,
					paymentInfo
				);
				
				await paymentDetails.VerifyPaymentInformation();

				if ($status.length) $status[0].open = false;
				$status = [{
					title: "Success!",
					message: "You should recieve your order in a few minutes.",
					severity: "success",
					open: true
				}];

				setTimeout(() => {
					checkout = false;
				}, 2000);
			} catch (e) {}

			if (!$status.length) 
				$status = [{
					title: "Error!",
					message: "An error occured in verifying payment information, please make sure you aren't missing any information.",
					severity: "success",
					open: true
				}];
		})();
	}

	/** Specifies a custom class name for the NumberBox. */
	let className = "";
	export { className as class };
</script>

<div class="shopping-cart {className ?? ''}">
	<TextBlock variant="subtitle">Shopping Cart</TextBlock>
	<ul class="cart-items">
        {#key $productsList}
			{#each $productsList as item, index}
				<ShoppingCartItem 
					item={{
						ref: item,
						title: item.getName(),
						cost: item.getPrice(),
						image: item.getImage(),
						description: item.getDetails(),
						amount: item.getQuantity()
					}}
				/>
			{/each}
		{/key}
	</ul>
	<div>
		<Button class="w-full text-center" variant="accent" on:click={() => (checkout = true)}>Proceed to Checkout</Button>
	</div>
</div>

<ContentDialog bind:open={checkout} title="Checkout" size="max">
	<div class="flex flex-col gap-8 px-2">
		<div class="status-area">
			{#key $status}
				{#each $status as state} 
					<InfoBar title={state.title} message={state.message} severity={state.severity} bind:open={state.open} />
				{/each}
			{/key}
		</div>

		<div class="cols-2">
			<TextBlock class="block" variant="bodyStrong">
				<div class="px-2 pb-2">Shipping</div>
				<TextBox bind:value={shipping} /> 
			</TextBlock>
			<TextBlock class="block" variant="bodyStrong">
				<div class="px-2 pb-2">Billing</div>
				<TextBox bind:value={billing} /> 
			</TextBlock>
		</div>
		<TextBlock class="block" variant="bodyStrong">
			<div class="px-2 pb-2">Card number</div>
			<TextBox bind:value={cardnum} placeholder="1234 5678 9012 3456" type="number" /> 
		</TextBlock>
		<!-- <TextBlock class="block" variant="bodyStrong">
			<div class="px-2 pb-2">Name on card</div>
			<TextBox placeholder="Ex. John Doe" /> 
		</TextBlock> -->
		<div class="cols-3">
			<TextBlock class="block" variant="bodyStrong">
				<div class="px-2 pb-2">Expiry Date</div>
				<TextBox bind:value={date} placeholder="01/19" /> 
			</TextBlock>
			<TextBlock class="block" variant="bodyStrong">
				<div class="px-2 pb-2">CVV</div>
				<TextBox bind:value={cvv} placeholder="123" type="number" /> 
			</TextBlock>
			<TextBlock class="block" variant="bodyStrong">
				<div class="px-2 pb-2">Pin code</div>
				<TextBox bind:value={pincode} placeholder="..." type="password" /> 
			</TextBlock>
		</div>
	</div>
	
	<svelte:fragment slot="footer">
		<Button variant="accent" on:click={submit}>
			Checkout
		</Button>
		<Button on:click={() => (checkout = false)}>
			Close
		</Button>
	</svelte:fragment>
</ContentDialog>


<style lang="scss">
	.shopping-cart {
		@apply sticky py-4 top-0 left-0 w-full max-h-screen;
		@apply flex flex-col gap-4;
	}

	.cart-items {
		@apply flex flex-col flex-nowrap gap-4 pt-2 px-4 overflow-auto;
	}
	:global(.content-dialog-smoke) {
		backdrop-filter: blur(35px);
		@apply backdrop-filter backdrop-blur-lg;
	}
	.cols-2 {
		@apply grid grid-cols-2 gap-6 w-full;
	}
	.cols-3 {
		@apply grid grid-cols-3 gap-4 w-full;
	}
	.status-area {
		// @apply p-6;
	}
</style>