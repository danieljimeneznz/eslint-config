# danieljimeneznz Eslint Config

This package provides danieljimeneznz's .eslintrc.yaml as an extensible [shared config](https://eslint.org/docs/developer-guide/shareable-configs) :sparkles:

## Install and Setup

Install the library using:

```sh
npm i -D eslint @danieljimeneznz/eslint-config
```

## Usage

Create a `.eslintrc.yaml` file in the root of the repo you are working on and extend the preset/config you wish to use

e.g. using the `typescript` linting rules (additional rules can be added to this `extends` list)

```yaml
extends:
  - "@danieljimeneznz/eslint-config/configs/typescript"
```
