# Migration guides

## v1 to v2

* `ThemeProvider` now accepts `defaultPreference` (including `"system"`)
  instead of `defaultMode`.
* `Input` gained an `errorMessage` prop; the `invalid` prop remains.
* `Select` can now be driven by an `options` array.

## v2 to v3

* The library is now ESM-first with `"type": "module"`.
* `Button` gained `leftIcon` / `rightIcon` / `fullWidth` props.
* React 16 is no longer supported; React 18+ is required.

## v3 notes

The `exports` map now exposes `./styles.css` so styles can be imported
directly without a bundler plugin.
