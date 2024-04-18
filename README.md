# NoviceNest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Install Element UI
```
npm i element-ui -S
```

### Introduce Element UI into the project, and write the following content in main.js
```
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

This project is a front-end project that utilizes npm (Node Package Manager) Vue CLI (Vue.js Command Line Interface) scaffolding and Element UI. The “dist” folder contains the packaged output of the front-end project. To integrate this front-end project into a Spring Boot Web project, you need to copy all the contents from the “dist” folder into the “static” folder within the back-end project.
