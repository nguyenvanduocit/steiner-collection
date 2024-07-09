import Theme from 'vitepress/theme'
import ArticleList from './components/ArticleList.vue'
import {App} from "@vue/runtime-core";

export default {
  extends: Theme,
  enhanceApp({ app }: {app: App}) {
    app.component('ArticleList', ArticleList)
  }
}
