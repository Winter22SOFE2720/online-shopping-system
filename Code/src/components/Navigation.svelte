<script lang="ts">
	import { onMount } from 'svelte';
    import { TextBlock, ListItem, Checkbox } from "fluent-svelte";
    import { Catagories, filterBy } from "./stores";

	export let data = Object.keys(Catagories);

	/** Specifies a custom class name for the NumberBox. */
	let className = "";
	export { className as class };

    filterBy.set(Object.keys(Catagories));

    let form;
    let reset = () => {
        let boxes = Array.from(form?.querySelectorAll(".checkboxes")) as HTMLInputElement[];
        boxes.forEach(x => (x.checked = false));
        filterBy.set(boxes.map(x => x?.id));
        console.log(boxes.map(x => x?.id))
    };

    onMount(() => {
        form?.addEventListener("change", () => {
            let boxes = Array.from(form?.querySelectorAll(".checkboxes")) as HTMLInputElement[];
            let filter = boxes.filter(x => x?.checked);
            filterBy.set((filter.length ? filter : boxes).map(x => x?.id));
        });
    });
</script>

<nav class="nav {className ?? ''}">
    <div class="px-4 pb-16">
        <TextBlock variant="subtitle">Filter</TextBlock>
    </div>
	<form class="nav-items" bind:this={form}>
		{#each data as name}
            <ListItem>
                <Checkbox class="checkboxes" id={name} slot="icon">
                    {name}
                </Checkbox>
            </ListItem>
		{/each}
        <ListItem on:click={reset}>
            Reset Filter
        </ListItem>
	</form>
</nav>

<style lang="scss">
    nav {
        @apply sticky pt-4 top-0 left-0 w-full;
    }
</style>