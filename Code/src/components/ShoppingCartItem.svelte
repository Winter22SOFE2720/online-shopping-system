<script>
	import "fluent-svelte/theme.css";
	import { IconButton, NumberBox, TextBlock } from "fluent-svelte";
    import { getItem, removeItem } from "./stores";

    let defaultimg = { 
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
        alt: "The DEfault Image now has some proper text" 
    };

    export let item;
    let { amount = 1, ref, description, title, cost, image: img } = item;
    $: ref.updateQuantity(amount);

    let image = Object.assign({}, defaultimg, img);
    export { image };

    const { format } = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' });
</script>

<div class="cart-item">
    <!-- https://github.com/microsoft/fluentui-system-icons -->
    <div class="image">
        <img {...image}>
    </div>
    <div class="content flex flex-col justify-between">
        <div class="header flex justify-between">
            <div class="flex flex-col">
                <TextBlock variant="bodyStrong">{title}</TextBlock>
                <TextBlock class="cost" variant="body">{format(cost)}</TextBlock>
            </div>
            <IconButton on:click={() => removeItem(ref)} class="remove-btn" aria-label="Remove Item from Shopping Cart">
                <div class="icon">
                    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z" fill="currentColor"/>
                    </svg>
                </div>
            </IconButton> 
        </div>

        <div class="item-amount">
            <NumberBox 
                min=0
                clearButton={false} 
                bind:value={amount} 
            />
        </div>
    </div>
</div>

<style lang="scss">
    .cart-item {
        @apply flex w-full;
        // background-color: var(--fds-subtle-fill-secondary);
        border-radius: var(--fds-control-corner-radius);
    }

    .image {
        @apply w-32 h-32 rounded-md overflow-hidden;

        img {
            @apply w-full h-full;
            object-fit: cover;
        }
    }

    .content {
        @apply pl-3 py-3 w-full;

        .cost {
            @apply tabular-nums;
        }
    }

    .remove-btn {
        .icon svg {
            width: 1em;
            height: 1em;
            vertical-align: middle;
        }
    }

    .item-amount {
        @apply w-full;
    }
</style>