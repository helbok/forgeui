# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2025-10-07

### Added

- Button icon slots and `fullWidth` prop, ESM-first package.
### Changed

- **Breaking:** React 18+ required; Node 18+ required.

## [2.1.0] - 2025-06-13

### Changed

- Table sorting and spinner animation performance improvements.

## [2.0.0] - 2024-10-28

### Added

- `ThemeProvider` system preference and Vitest-based testing.
- tsup-based ESM/CJS builds.
### Changed

- **Breaking:** React 16 support dropped; React 17+ required.

## [1.2.0] - 2024-06-24

### Added

- Controlled `Tabs` and sortable `Table` columns.

## [1.1.0] - 2024-03-18

### Added

- Git hooks via husky and lint-staged, subtle badge variant.
### Fixed

- Modal width and disabled-button interaction fixes.

## [1.0.0] - 2023-06-19

### Added

- Toast variant styling and CI typecheck/lint steps.
- Architecture documentation.
### Changed

- Node 16 added to the CI matrix.

## [0.8.0] - 2022-12-12

### Added

- Dark-mode card styling and focus-visible input outlines.
- FAQ documentation.
### Changed

- Minimum Node.js version raised to 14.

## [0.7.0] - 2022-06-27

### Added

- `primaryActive` theme token and full-width button modifier.
- Expanded test coverage for loading, icons, errors and keyboard use.
### Fixed

- Modal scrolling and tooltip stacking fixes.

## [0.6.0] - 2021-09-08

### Changed

- Broaden CI to Node 14 and enable npm caching.
### Fixed

- Minor utility and styling cleanups.

## [0.5.0] - 2021-04-14

### Added

- GitHub Actions CI pipeline.
- Contributing guide and code of conduct.
- Theming and changelog documentation.

## [0.4.0] - 2020-09-04

### Added

- Initial test suite for the core component set.

## [0.3.0] - 2020-01-20

### Added

- Overlay components: Tooltip, Modal, Toast, Tabs.
- Data and layout components: Table, Form, FormField.
- Input `errorMessage` and Select `options`/`label` props.

## [0.2.0] - 2019-10-16

### Added

- Hook primitives: useDisclosure, useClickOutside, useDebounce,
  useMediaQuery, useLocalStorage, useControllableState.

## [0.1.0] - 2019-08-01

### Added

- Initial component set: Button, Input, Select, Card, Badge, Spinner.
- Theming tokens and base stylesheet.
