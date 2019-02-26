# VueTextTemplate

Replaces the tokens inside a text template with the scoped slots.

## dependencies

- [Vue](https://github.com/vuejs/vue)

## setup

### npm

```shell
npm i vuetexttemplate
```

### ES module

Register the component globally.

```javascript
import Vue from 'vue';
import VueTextTemplate from 'vuetexttemplate';

Vue.component(VueTextTemplate.name, VueTextTemplate);
```

*or*

Register the component in the scope of another component.

```javascript
import VueTextTemplate from 'vuetexttemplate';

export default {
  components: {
    [VueTextTemplate.name]: VueTextTemplate,
  },
  /*...*/
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuetexttemplate"></script>
```

If Vue is detected, the component will be registered automatically.

## usage

```vue
<template>
  <vue-text-template :template="text">
    <my-icon
      v-slot="index"
      :color="items[index].color"
      :type="items[index].icon"
    />
  </vue-text-template>
</template>
<script>
export default {
  data: {
    text: 'Choose between { 0 }, { 1 } and { 2 }.',
    items: [
      {icon: 'train', color: 'red'},
      {icon: 'tram', color: 'green'},
      {icon: 'subway', color: 'blue'},
    ],
  },
};
</script>
```
