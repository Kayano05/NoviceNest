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

In the root directory of the project, there should be a `node_modules` folder, along with two files named `package-lock.json` and `package.json`, all at the same level as the `nn` folder. Furthermore, within the `nn` folder, there should also be a `node_modules` folder that hasn't been uploaded to the repository.

The nn folder contains the following files and folders: `babel.config.js`, `dist`,`jsconfig.json`,`node_modules`,`package-lock.json`,`package.json`,`public`,`README.md`,`src`, and `vue.config.js`.

There should be a folder named node_modules, and files named package-lock.json and package.json at the same level as the nn folder. Additionally, within the nn folder, there should be a node_modules folder, which is typically not uploaded to the repository.
