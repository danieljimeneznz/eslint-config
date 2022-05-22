# Change Log

This repository adheres to semantic versioning and follows the conventions of [keepachangelog.com](http://keepachangelog.com)

## [3.0.0](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v2.0.1...v3.0.0) (2022-05-22)


### ⚠ BREAKING CHANGES

* Change config name from eslint-config-spoke to eslint-config-danieljimeneznz (#7)

### Features

* Change config name from eslint-config-spoke to eslint-config-danieljimeneznz ([#7](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/issues/7)) ([06b3675](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/commit/06b3675b8f609cc159966ec6e8035568168d4c7b))

### [2.0.1](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v2.0.0...v2.0.1) (2022-05-22)

### Bug Fixes

- Add release-please for version management, publish to npmjs ([#3](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/issues/3)) ([40fec4e](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/commit/40fec4ef78ef74281f764223de959454f990a5b7))

## [2.0.0] - 2021-10-16

### Changed

- Upgrade deps
  - eslint ^7.32.0 → ^8.0.1
  - @typescript-eslint/parser ^4.31.1 → ^5.0.0
  - @typescript-eslint/eslint-plugin ^4.31.1 → ^5.0.0

## [1.0.1] - 2021-09-18

### Changed

- Move to `main` branch naming
- Upgrade deps
  - eslint ^7.29.0 → ^7.32.0
  - @typescript-eslint/parser ^4.28.1 → ^4.31.1
  - @typescript-eslint/eslint-plugin ^4.28.1 → ^4.31.1

## [1.0.0] - 2021-06-28

### Changed

- Allow "compatible with version" peer dependencies
- Upgrade deps
  - @typescript-eslint/parser 4.27.0 → 4.28.1
  - @typescript-eslint/eslint-plugin 4.27.0 → 4.28.1

### Removed

- `babel` & `flow` configs as these are unused

## [0.5.0] - 2021-06-18

### Changed

- Upgrade deps
  - eslint 6.8.0 → 7.29.0
  - eslint-plugin-flowtype 4.5.3 → 5.7.2
  - @typescript-eslint/parser 2.14.0 → 4.27.0
  - @typescript-eslint/eslint-plugin 2.14.0 → 4.27.0
- Moved package from building using circleci/npmjs to github packages

### Removed

- `@typescript-eslint/class-name-casing` eslint rule

## [0.4.0] - 2020-10-03

### Added

- ESLint rules. These can be automatically fixed.
  - `brace-style` for if-else try-catch etc
  - `array-bracket-spacing`
  - `space-before-blocks`
  - `space-before-function-paren`
  - `comma-dangle` to enforce dangling commas or multi-line items in objects

## [0.3.0] - 2020-07-24

### Removed

- Dependency on tslint
  - Only the tslint `one-line` rule is not covered by configured eslint defaults.

## [0.2.0] - 2020-07-16

### Added

- `node` Preset

## 0.1.0 - 2020-01-06

### Added

- `babel`, `common`, `flow`, `mocha`, `node` and `typecript` Configs
- `common`, `flowService` and `typescriptService` Presets

[unreleased]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.5.0...v1.0.0
[0.5.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.1.0...v0.2.0
