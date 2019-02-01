# MyParcel ESlint
This package contains multiple ESlint presets for different types of projects. Additional information, documentation and guides on ESLint can be found on https://eslint.org/ 

## Contents
* [Usage](#usage)
  + [Adding the repository](#adding-the-repository)
  + [Using this module](#using-this-module)
  + [Enabling linting in PhpStorm](#enabling-linting-in-phpstorm)
* [Configs](#configs)
  + [Meteor](#meteor)
  + [Vue](#vue)

## Usage
This module is meant to be used by including this repository as a submodule of the repository you want to use this in. If it's already included you can skip to [Using this module](#using-this-module). 

### Adding the repository
Add the repository to submodules in a different repository and initialize contents:
```bash
git submodule add ssh://git@git.dmp.zone:7999/myp/dmp-standards.git
git submodule update
```

### Using this module
 In your project's `package.json` add `@myparcel/eslint` to the dev dependencies as follows:
 
 ```
"@myparcel/eslint": "file:../dmp-standards/eslint"
```
And run `npm install` to install the module to `node_modules/myparcel/eslint` and install the module's dependencies.

Create a file named `.eslintrc.js` and extend one of the configs in this module.
```js
module.exports = {
  extends: [
    // Base config
    './node_modules/myparcel/eslint/.eslintrc.js',
    // Meteor config
    './node_modules/myparcel/eslint/.eslintrc.meteor.js',
    // Vue config
    './node_modules/myparcel/eslint/.eslintrc.vue.js',
  ]
};
```
[Read more about configs here](#configs)

### Enabling linting in PhpStorm
1. Enable ESlint in `Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint`
2. Set `ESLint package` to the local eslint in your project's `node_modules`
3. Set `Configuration file` to the `.eslintrc.js` in your project

Done!

You can verify it works by opening a file and looking for errors or warnings from ESLint. Press `Option + Enter` (or whatever shortcut you have set for `Intention Actions`) or click the intention actions button that appears. Press `Fix ESLint problems` to attempt to autofix all errors and warnings in the current file. You can alsu use the Intention Actions to only fix the highlighted error/warning.

## Configs
All configs extend the base config `.eslintrc.js`. Try to create a new preset (if possible) for your project instead of using the base so it can be reused. The base config enforces a lot of basic syntax rules like whitespace and punctuation. Please avoid overriding these rules!

If there's anything missing ([globals], [environments], [rules] etc.) please add them in this repository and create a pull request instead of adding them in your project configuration. If it's truly project specific you don't have to do this.

### Meteor 
> `.eslintrc.meteor.js`

This config is made for [Meteor] projects. In addition to the base config it extends `eslint:recommended` and `plugin:meteor/recommended`. The needed [environments] are already set and it adds some more [globals] from Meteor modules. 

### Vue
> `.eslintrc.vue.js`

This config is made for [Vue.js] projects. In addition to the base config it extends `plugin:vue/recommended`. It supports linting `.vue` files by using [eslint-plugin-vue].

[environments]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[globals]: https://eslint.org/docs/user-guide/configuring#specifying-globals
[rules]: https://eslint.org/docs/rules/
[Meteor]: https://www.meteor.com/
[Vue.js]: https://vuejs.org/
[eslint-plugin-vue]: https://github.com/vuejs/eslint-plugin-vue
