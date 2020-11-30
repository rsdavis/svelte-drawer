
# Svelte Drawer

[Check out the demo](https://svelte.dev/repl/32443b9fad6447fe899a60596537db31?version=3.24.1)

A Svelte component for a drawer that slides in from the side of the screen.

Features:
* CSS transitions
* SSR Safe
* Top, right, bottom, or left placement
* Lock body scrolling when open

## Usage

```bash
npm install svelte-drawer-component
```

```html
<script>
    import Drawer from 'svelte-drawer-component'
    let open = false
</script>

<button on:click={() => open = true}>Open</button>

<Drawer { open } size='600px'>
    <button on:click={() => open = false}>Close</button>
</Drawer>
```

The open state for the drawer is handled entirely by the user. 
This design gives the most control and flexibility over drawer functionality and styling.
This means that if you want the drawer to close when the user clicks away, you need to listen for that event.

```html
<Drawer { open } on:clickAway={() => open = false}>
</Drawer>
```

## Parameters

| Parameter | Default | Description                                     |
|-----------|---------|-------------------------------------------------|
| open      | false   | Two-way binding for open state of the component |
| placement | left    | Side of screen to slide out from                |
| size      | null    | Panel size (e.g. '100px', '10em', '70%', null)  |
| duration  | 0.2     | Transition duration in seconds                  |

By default, the `size` of the panel is set to null and stretches to the size of its parent container.