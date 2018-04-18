# Vue Practice


It's not innovative. It's not useful. It's not beautiful. It's just a random project to learn and practice [Vue.js](https://vuejs.org).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Tips & Links

### Syntax

* [ES6 classes VS Vue component](https://github.com/vuejs/vue/issues/2371)

### Router

* [Doc](https://router.vuejs.org/en/)
* [Optional param](https://stackoverflow.com/questions/47824660/optional-param-in-vuejs-router)
* [watch $route VS beforeRouteUpdate](https://stackoverflow.com/questions/47184331/difference-between-beforerouteupdate-and-watching-route-vue-js)

### HTTP

* [Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/)

### Filters

* [Doc](https://vuejs.org/v2/guide/filters.html)
* [How to format date for display](https://forum.vuejs.org/t/how-to-format-date-for-display/3586)

### Proxy

* [CORS issue](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe)

## Visual Studio Code

Finding the right config to setup ESLint/Prettier with .vue files was a bit tricky.

### Extensions

* Auto Close Tag
* Auto Rename Tag
* Color Picker
* Debugger for Chrome
* DotENV
* ESLint
* IntelliSense for CSS class names in HTML
* Material Icon Theme
* Rainbow Brackets
* Sublime Text Keymaps
* Theme - Seti Monokai
* Vetur

### User Settings

```json
{
    "workbench.iconTheme": "material-icon-theme",
    "sublimeTextKeymap.promptV3Features": true,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.snippetSuggestions": "top",
    "editor.tabSize": 2,
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "vetur.format.defaultFormatter.js": "none"
}
```