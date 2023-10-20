import {DefaultTheme, defineConfig} from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

export default defineConfig({
    title: "Steiner Collection",
    description: "Collection about Steiner",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['meta', {name: 'theme-color', content: '#5f67ee'}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:locale', content: 'en'}],
        ['meta', {name: 'og:site_name', content: 'Steiner Collection'}],
        ['meta', {name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg'}]
    ],
    themeConfig: {
        sidebar: generateSidebar({
             documentRootPath: 'contents',
            useTitleFromFileHeading: true,
        }) as DefaultTheme.SidebarItem[],
        nav: [
            {text: 'Home', link: '/'}
        ],
        socialLinks: [
            {icon: 'github', link: 'https://twitter.com/steiner_collection'},
        ],
        editLink: {
            pattern: 'https://github.com/nguyenvanduocit/steiner-collection/contents/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },

        search: {
            provider: 'algolia',
            options: {
                appId: '8J64VVRP8K',
                apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
                indexName: 'vitepress'
            }
        },
    }
})
