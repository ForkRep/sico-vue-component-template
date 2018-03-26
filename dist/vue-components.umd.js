(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global.sico = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  var HelloComponent = Vue.extend({render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"greeting"},[_vm._v("Hello "+_vm._s(_vm.name)+" "+_vm._s(_vm.exclamationMarks))]),_vm._v(" "),_c('button',{on:{"click":_vm.decrement}},[_vm._v("-")]),_vm._v(" "),_c('button',{on:{"click":_vm.increment}},[_vm._v("+")])])},staticRenderFns: [],
      props: {
          name: {
              type: String,
              "default": "default value"
          },
          initialEnthusiasm: {
              type: Number
          }
      },
      data: function () {
          return {
              enthusiasm: this.initialEnthusiasm
          };
      },
      methods: {
          increment: function () {
              this.enthusiasm++;
          },
          decrement: function () {
              if (this.enthusiasm > 1) {
                  this.enthusiasm--;
              }
          }
      },
      computed: {
          exclamationMarks: function () {
              return Array(this.enthusiasm + 1).join("!");
          }
      }
  });

  // import HelloDecoratorComponent from "./components/helloDecorator.vue";

  var main = {
      HelloComponent: HelloComponent,
      // HelloDecoratorComponent: HelloDecoratorComponent
  };

  return main;

})));
