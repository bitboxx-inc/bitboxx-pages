<script>
    const debug = import.meta.env.VITE_DEBUG === "true";
    const publishableKey = debug
        ? import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_TEST
        : import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_LIVE;
    const pricingTableId = debug
        ? import.meta.env.VITE_STRIPE_PRICING_TABLE_ID_TEST
        : import.meta.env.VITE_STRIPE_PRICING_TABLE_ID_LIVE;
</script>

{#if debug}
    <stripe-pricing-table
            pricing-table-id={pricingTableId}
            publishable-key={publishableKey}
    ></stripe-pricing-table>
{:else}
    <stripe-pricing-table
            pricing-table-id={pricingTableId}
            publishable-key={publishableKey}
    ></stripe-pricing-table>
{/if}
