# danieljimeneznz Eslint Config

This package provides danieljimeneznz's .eslintrc.yaml as an extensible [shared config](https://eslint.org/docs/developer-guide/shareable-configs) :sparkles:

## Install and Setup

Install the library using:

```sh
npm i -D @danieljimeneznz/eslint-config \
eslint eslint-plugin-import eslint-plugin-prefer-arrow
```

If you are making use of typescript install the additional dependencies:

```sh
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

Create a `.eslintrc.yaml` file in the root of the repo you are working on and extend the preset/config you wish to use

e.g. using the `typescript` linting rules (additional rules can be added to this `extends` list)

```yaml
extends:
  - "@danieljimeneznz/eslint-config/configs/typescript"
```
