<script>

    import Drawer from './Drawer.svelte'
    let open = false

</script>

<button on:click={() => open = true}>Open</button>

<Drawer bind:open size='600px'>
    <button on:click={() => open = false}>Close</button>
</Drawer>