<script>
    import { TextBlock } from "fluent-svelte";
    import { writable } from "svelte/store";
	import ProductCard from "./ProductCard.svelte";

	import { Catagories, filterBy } from "./stores";

    let keys = Object.keys(Catagories);
    let filteredList = writable([...keys]);
    filterBy.subscribe((value) => {
        filteredList.set(keys.filter(x => value.includes(x)));
    });

	/** Specifies a custom class name for the NumberBox. */
	let className = "";
	export { className as class };
</script>

<div class="content {className ?? ''}">
	<TextBlock variant="title">Items</TextBlock>
	<div class="catagories">
        {#key $filteredList}
            {#each $filteredList as key}
                <div class="catagory">
                    <TextBlock variant="subtitle">{key}</TextBlock>
                    {#each Catagories[key] as item}
                        <ProductCard item={{
                            ref: item,
                            title: item.getName(),
                            cost: item.getPrice(),
                            image: item.getImage(),
                            description: item.getDetails(),
                        }} />
                    {/each}
                </div>
            {/each}
        {/key}
    </div>
</div>

<style>
    .catagories, .catagory {
        @apply flex flex-col gap-4;
    }
</style>