# eslint-config-react-tc

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for React projects

[![license](https://img.shields.io/github/license/tclindner/eslint-config-react-tc.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/eslint-config-react-tc/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-react-tc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/eslint-config-react-tc)
![ci](https://github.com/tclindner/eslint-config-react-tc/workflows/ci/badge.svg?branch=master)

## What is eslint-config-react-tc?

Shared configuration for ESLint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file!

# How do I install it?

First thing first, let's make sure you have the necessary pre-requisites.

### System Dependencies

#### Node

* [Node.js](https://nodejs.org/) - v18.0.0+
* [npm](http://npmjs.com) - v9.0.0+

### Command

```bash
npx install-peerdeps --dev eslint-config-react-tc
```

> eslint, eslint-config-tc eslint-plugin-import, eslint-plugin-prettier, eslint-plugin-react, eslint-plugin-jsx-a11y, and prettier are peer dependencies and must be installed.


**This module works best when paired with [`eslint-config-tc`](https://github.com/tclindner/eslint-config-tc). Please follow it's install instructions.**

## Usage

Add the following to your `.eslintrc.json` file:

```json
{
	"extends": "eslint-config-react-tc"
}
```

If you need to override a rule, your `.eslintrc.json` file should look like the example below. All shared rules will be used, but `eqeqeq` will be turned off.

```json
{
	"extends": "eslint-config-react-tc",
	"rules": {
		"react/display-name": "off"
	}
}
```

## Related

- [eslint-config-tc](https://github.com/tclindner/eslint-config-tc) - ESLint shareable config for JavaScript projects

## Contributing

Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Change Log

Please see the [CHANGELOG.md](CHANGELOG.md) for more information.

## License

Copyright (c) 2018-2023 Thomas Lindner. Licensed under the MIT license.
