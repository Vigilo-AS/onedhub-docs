import {withMermaid} from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
    title: "VAIS documentation",
    description: "VAIS documentation",
    head: [['link', {rel: 'icon', type: 'image/png', href: '/favicon.png'}]],
    ignoreDeadLinks: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'OneRoster', link: '/oneroster'}
        ],
        footer: {
            message: 'Made with ❤️ by Vigilo AS',
            copyright: 'Copyright © 2024-present Vigilo AS'
        },

        logo: {light: "/vigilo-ikon-blue.svg", dark: "/vigilo-ikon-white.svg", alt: "Vigilo logo"},
        externalLinkIcon: true,

        sidebar: [
            {
                text: 'Explanations',
                items: [
                    {text: 'OnEdHub specific metadata', link: '/oneroster/metadata'},
                    {text: 'Authentication', link: '/oneroster/auth'},
                    {text: 'Environments', link: '/oneroster/environments'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vigilo-as/onedhub-docs'}
        ]
    },
    // mermaid: {
    //     // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    // },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    // mermaidPlugin: {
    //     class: "mermaid my-class", // set additional css classes for parent container
    // },
})


