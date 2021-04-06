# Theming

forgeui is themed with CSS custom properties plus a small runtime theme object.

## CSS variables

The stylesheet reads its colors, radii and typography from variables defined
in `src/styles/tokens.css`. Override them in your own stylesheet to rebrand the
library:

```css
:root {
  --fui-color-primary: #7c3aed;
}
```

## ThemeProvider

Wrap your app in `ThemeProvider` to switch between light and dark modes:

```tsx
import { ThemeProvider } from "forgeui";

<ThemeProvider defaultPreference="system">
  <App />
</ThemeProvider>;
```

The provider persists the selected preference to `localStorage` and honours the
operating system preference when set to `"system"`.
