import {DefaultTheme, defineConfig} from 'vitepress'
import {generateSidebar} from 'vitepress-sidebar';

export default defineConfig({
    title: "Waldorf Collection",
    description: "Collection about Waldorf Education",
    lastUpdated: true,
    cleanUrls: true,
    lang: 'vi-VN',
    sitemap: {
        hostname: 'https://waldorf.onepercent.plus'
    },
    head: [
        ['meta', {name: 'theme-color', content: '#5f67ee'}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:locale', content: 'vi_VN'}],
        ['meta', {name: 'og:site_name', content: 'Waldorf Collection'}],
        ['meta', {name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg'}]
    ],
    themeConfig: {
        logo: {src: '/logo.png', width: 24, height: 24},
        search: {
            provider: 'local'
        },
        sidebar: generateSidebar({
            useTitleFromFileHeading: true,
            hyphenToSpace: true,
            capitalizeFirst: true,
            collapsed: true,
        }) as DefaultTheme.SidebarItem[],
        nav: [
            {text: 'Home', link: '/'}
        ],
        socialLinks: [
            {icon: 'twitter', link: 'https://twitter.com/steiner_collection'},
        ],
        editLink: {
            pattern: 'https://github.com/nguyenvanduocit/steiner-collection/contents/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present DuocNV'
        },
    },
    markdown: {
        image: {
            lazyLoading: true
        },
        toc: {
            level: [1, 2]
        }
    }
})
