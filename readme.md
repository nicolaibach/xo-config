# @ncl/xo-config

[XO](https://github.com/xojs/xo#config) supports [sharable configs](https://eslint.org/docs/latest/extend/shareable-configs) via eslints `extends` property. But you can't have xo-specific properties in it:

- [XO shareable configs? #352](https://github.com/xojs/xo/issues/352)
- [Allow xo configuration in extends #356](https://github.com/xojs/xo/pull/356)
- ["prettier" in "extend" incompatible #302](https://github.com/xojs/xo/issues/302)
- [Add option to explicitly tell xo to use a config file #448](https://github.com/xojs/xo/issues/448)

## Workaround

1. Install the node module containing the shared configuration as ususal.
2. Create `.xo-config.cjs` in the root directory of your project. Require and export the configuration from that file.

`.xo-config.cjs`:

```js
module.exports = require('@ncl/xo-config');
```

## Prettier and EditorConfig

[Prettier Code Style](https://github.com/xojs/xo#prettier) is enabled in this configuration.

> Prettier options will be based on your Prettier config. XO will then merge your options with its own defaults.

This package provides a [Prettier configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations) that just tells Prettier to use the [`.editorconfig`](https://prettier.io/docs/en/configuration.html#editorconfig) file.

> If `options.editorconfig` is true and an `.editorconfig` file is in your project, Prettier will parse it and convert its properties to the corresponding Prettier configuration.

Simply reference it in the `package.json` of your project:

`package.json`:

```json
{
	"prettier": "@ncl/xo-config/prettier.js"
}
```

Which is the same as doing this:

```json
{
	"prettier": {
		"editorconfig": true
	}
}
```
