<script>
  import "fluent-svelte/theme.css";
  import { Button, TextBlock } from "fluent-svelte";

  import { shoppingCart, addItem, removeItem, productsList } from "./stores";

  let defaultimg = {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "",
  };

  export let item;
  let { ref, description, title, cost, image: img } = item;

  let image = Object.assign({}, defaultimg, img);
  export { image };

  const { format } = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });
  let buyItem = () => {
      if (!$productsList.includes(ref)) addItem(ref);
      else removeItem(ref);
  }
</script>

<div class="card-item">
  <!-- https://github.com/microsoft/fluentui-system-icons -->
  <div class="image">
    <img {...image} />
  </div>
  <div class="content flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <div class="flex justify-between gap-1">
        <div>
          <TextBlock variant="bodyLarge">{title}</TextBlock>
          <div class="item-cost">
            <TextBlock class="cost" variant="bodyStrong">{format(cost)}</TextBlock>
          </div>
        </div>
        
        <div>
          <Button
            class="buy-btn"
            variant={$productsList.includes(ref) ? "standard" : "accent"}
            aria-label="Remove Item from Shopping Cart"
            on:click={buyItem}>{$productsList.includes(ref) ? "Remove from Cart" : "Add to Cart"}</Button
          >
        </div>
      </div>
      <TextBlock variant="body">{description}</TextBlock>
    </div>

  </div>
</div>

<style lang="scss">
  .card-item {
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
    @apply pl-3 w-full;
  }

  .buy-btn {
  }

  .item-cost {
    @apply tabular-nums;
    @apply w-full;
  }
</style>
