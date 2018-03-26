sico-vue-component-template
===
<!-- TOC -->

- [Info](#info)
    - [Global](#global)
    - [Component](#component)
    - [Build](#build)
- [Usage](#usage)

<!-- /TOC -->

## Info

Vue Component + Typescript + RollUp

This is a sample project for building Vue.js Components not a full SPA unlike vue-cli / webpack setups. We use rollup.js for template compiling.

### Global

Edit ```package.json``` and ```rollup.config.js``` for updating names and build pipeline.

### Component

You can create your own components. See [sample](src/components/hello.vue) and export them in one bundled file with all your [components](src/main.ts). This bundle file does not include the Vue base library.

### Build

You should use yarn for building the components.

```shell
# Build in development mode and start a local webserver
yarn dev

# Build for production use
yarn build
```

## Usage

Have look at [sample](index.html) how to use the components in your final application.


```javascript
    var HelloComponent = sico.HelloComponent;
    var model = new Vue({
        el: "#app",
        data: function() {
            return {
                Name: "Sample"
            };
        },
        components: {
            HelloComponent
        }
    });
```