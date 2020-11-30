<script>

    import Drawer from './Drawer.svelte'
    let open = false
    let placement = 'right'

</script>


<div class='app'>

    <button on:click={() => open = true}>Open</button>

    <Drawer { open } { placement } on:clickAway={() => open = false} size='600px'>
        <button on:click={() => open = false}>Close</button>
        hello
    </Drawer>

</div>

<style>

    .app :global(.drawer .panel) {
        background: black;
        color: white;
    }

    .app :global(.drawer .overlay) {
        background: rgba(100,100,100,0.5);
    }

</style>