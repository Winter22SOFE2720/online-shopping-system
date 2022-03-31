<script>
	import "fluent-svelte/theme.css";
	import { Button, ComboBox, TextBlock } from "fluent-svelte";
    import { FluentAnchor } from '@fluentui/web-components';
</script>

<div class="cart-item">
    <!-- https://github.com/microsoft/fluentui-system-icons -->
    <div class="image">
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
    </div>
    <div class="content">
        <div class="header flex content-between">
            <div class="flex flex-col">
                <TextBlock variant="bodyStrong">Text</TextBlock>
                <TextBlock variant="body">Text</TextBlock>
            </div>
        </div>
        <ComboBox item={[
            { name: "Item 0", value: 0 },
            { name: "Item 1", value: 1 },
            { name: "Item 2", value: 2 },
        ]} />
    </div>
</div>

<style lang="scss">
    .cart-item {
        @apply flex;
    }

    .image {
        @apply w-32 h-32 rounded-md overflow-hidden;

        img {
            @apply w-full h-full;
            object-fit: cover;
        }
    }

    .content {
        @apply p-2;
    }
</style>