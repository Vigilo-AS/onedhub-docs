import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CopyButton from 'vitepress-copy-helper';
import 'vitepress-copy-helper/style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        // register your custom global components
        app.component('C', CopyButton)
    },

} satisfies Theme