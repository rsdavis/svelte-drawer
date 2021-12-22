/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

interface DrawerProps {
  /**
   * Controls the open state of the drawer.
   * @default false
   */
  open?: boolean;

  /**
   * Side of the screen to slide out from.
   * @default 'left'
   */
  placement?: 'left' | 'right';

  /**
   * Panel size (e.g.: `100px`, `10em`, `70%`, `null`).
   * A size of `null` stretches the drawer to the size of its parent container.
   * @default null
   */
  size?: string | null;

  /**
   * Transition duration (in seconds).
   * @default 0.2
   */
  duration?: number;
}

export default class extends SvelteComponentTyped<
  DrawerProps,
  { clickAway: CustomEvent<void> },
  { default: {} }
> {}
