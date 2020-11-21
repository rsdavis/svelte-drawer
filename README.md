
# Svelte Drawer

[Check out the demo](https://svelte.dev/repl/32443b9fad6447fe899a60596537db31?version=3.24.1)

A Svelte component for a drawer that slides in from the side of the screen.

Features:
* css transitions
* slide in from any side
* scroll lock when open
* darkened overlay

## Usage

```html
<script>
    import Drawer from 'svelte-drawer'
    let open = false
</script>

<button on:click={() => open = true}>Open</button>

<Drawer bind:open size='600px'>
    <button on:click={() => open = false}>Close</button>
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