import {defineConfig} from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

const themeColor = '#5f67ee'

function getBuildTime() {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const formattedTime = date.toTimeString().split(' ')[0].slice(0, 5); // HH:MM
    return `${formattedDate} ${formattedTime}`;
}

export default withPwa(defineConfig({
    title: "Waldorf Collection",
    description: "Collection about Waldorf Education",
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    lang: 'vi-VN',
    sitemap: {
        hostname: 'https://waldorf.onepercent.plus'
    },
    ignoreDeadLinks: [
        '/parts'
    ],
    srcExclude: ['/parts/**/*.md'],
    head: [
        ['meta', {name: 'theme-color', content: themeColor}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:locale', content: 'vi_VN'}],
        ['meta', {name: 'og:site_name', content: 'Waldorf Collection'}],
        ['meta', {name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg'}],
        ['link', {rel: 'icon', href: '/logo.png', type: 'image/png'}],
    ],
    themeConfig: {
        logo: {src: '/logo.png', width: 24, height: 24},
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: 'Waldorf Education',
                link: '/articles/what-is-waldorf-education'
            },
            {
                text: 'Danh mục',
                link: '/articles/'
            },
            {
                text: 'About',
                items: [
                    {
                        text: 'About me',
                        link: '/pages/about'
                    },
                    {
                        text: 'Contributing',
                        link: '/pages/contributing'
                    },
                    {
                        text: 'License',
                        link: '/pages/license'
                    }
                ]
            },
        ],
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Bài viết',
                link: '/articles/'
            }
        ],
        socialLinks: [
            {icon: 'twitter', link: 'https://twitter.com/steiner_collection'},
        ],
        editLink: {
            pattern: 'https://github.com/nguyenvanduocit/steiner-collection/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'MIT License. ' + getBuildTime(),
            copyright: 'Copyright © 2019-present DuocNV'
        },
    },
    markdown: {
        image: {
            lazyLoading: true
        },
        toc: {
            level: [1, 2]
        },
    },
    vite: {

    },
    pwa: {
        registerType: 'prompt',
        injectRegister: 'auto',
        manifest: {
            theme_color: themeColor,
        }
    }
}))
