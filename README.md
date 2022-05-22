# danieljimeneznz Eslint Config

This package provides danieljimeneznz's .eslintrc.yaml as an extensible [shared config](https://eslint.org/docs/developer-guide/shareable-configs) :sparkles:

## Install and Setup

Install the library using

```
npm i -D @danieljimeneznz/eslint-config-danieljimeneznz \
eslint-plugin-import eslint-plugin-prefer-arrow
```

## Usage

Create a `.eslintrc.yaml` file in the root of the repo you are working on and extend the preset/config you wish to use

e.g. using the `typescriptService` and `mocha` linting rules

```yaml
extends:
  - "@danieljimeneznz/eslint-config-danieljimeneznz/presets/typescriptService"
  - "@danieljimeneznz/eslint-config-danieljimeneznz/configs/mocha"
```
