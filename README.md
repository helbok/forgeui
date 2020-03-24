# forgeui

A pragmatic, accessible React component library with first-class theming.

forgeui provides a set of composable, accessible React components — buttons,
inputs, overlays, data display primitives and more — built with TypeScript and
designed to be customized through CSS variables and a pluggable theme system.

## Features

* Written in TypeScript with strict mode
* Accessible by default (WAI-ARIA, keyboard navigation, focus management)
* Theming via CSS custom properties with light and dark modes
* Zero runtime dependencies (peer-depends on React)

## Installation

```sh
npm install forgeui react react-dom
```

## Quick start

```tsx
import { Button, ThemeProvider } from "forgeui";

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <Button variant="primary">Hello world</Button>
    </ThemeProvider>
  );
}
```

## Documentation

See [docs/components.md](docs/components.md) for the component reference and
[HISTORY.md](HISTORY.md) for the simulated timeline.

## Accessibility

All components are built to be operable by keyboard and screen readers:

* Focusable elements expose visible `:focus-visible` outlines.
* Overlays set `role`, `aria-modal` and manage Escape and outside clicks.
* Icons and spinners expose `aria-label` and `role="status"` where needed.

If you find an accessibility gap, please open an issue.
## About this project

This repository is a **synthetic educational example**: the project and its
commit history are fictional, generated to illustrate realistic software
engineering workflows. See [HISTORY.md](HISTORY.md) for the simulated timeline.
