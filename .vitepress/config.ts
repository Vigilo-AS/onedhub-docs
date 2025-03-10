import {withMermaid} from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
    title: "OnEdHub documentation",
    description: "OnEdHub documentation",
    head: [['link', {rel: 'icon', type: 'image/png', href: '/favicon.png'}]],
    ignoreDeadLinks: true,
    markdown: {
        toc: {level: [2, 3, 4, 5]},
    },
    lastUpdated: true,
    themeConfig: {
        outline: 'deep',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Vigilo Core API', link: '/core'},
            {text: 'OneRoster', link: '/oneroster'},
            {text: 'Integrations', link: '/integrations'}
        ],
        footer: {
            message: 'Made with ❤️ by Vigilo AS',
            copyright: 'Copyright © 2024-present Vigilo AS'
        },

        logo: {light: "/vigilo-ikon-blue.svg", dark: "/vigilo-ikon-white.svg", alt: "Vigilo logo"},
        externalLinkIcon: true,
        search: {
            provider: 'local',
        },
        sidebar: [
            {
                text: "OnEdHub",
                link: "/onedhub",
                items: [
                    {text: "What is OnEdHub", link: "/onedhub"},
                    {text: "APIs", link: "/onedhub/apis"},
                    {text: 'Authentication', link: '/onedhub/auth'},
                    {text: "Environments", link: "/onedhub/environments"},
                ]
            },
            {
                text: 'Vigilo Core API',
                link: "/core",
                items: [
                    {text: 'Getting started', link: '/core/getting-started'},
                    {text: 'Base module', link: '/core/base-module'},
                    {text: 'Variable pay receipt module', link: '/core/variable-pay-receipt'},
                    {text: 'Updating data', link: '/core/update'},

                ]
            },
            {
                text: 'OneRoster',
                link: "/oneroster",
                items: [
                    {text: 'Getting started', link: '/oneroster/getting-started'},
                    {text: 'OnEdHub specific metadata', link: '/oneroster/metadata'},
                    {text: 'Environments', link: '/oneroster/environments'},
                    {text: 'Legal guardians', link: '/oneroster/legal-guardians'},
                ]
            },
            {
                text: 'Integrations',
                link: "/integrations",
                items: [
                    {text: 'FINT HR Integration', link: '/integrations/fint-hr'},
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vigilo-as/onedhub-docs'}
        ],
        // lastUpdated: {
        //     text: 'Updated at',
        //     formatOptions: {
        //         dateStyle: 'full',
        //         timeStyle: 'medium'
        //     }
        // },
    },
})


