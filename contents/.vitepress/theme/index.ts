import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import MyLayout from "./MyLayout.vue";

export default {
  extends: Theme,
  Layout: MyLayout
}
