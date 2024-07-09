import {createContentLoader} from 'vitepress'

export default createContentLoader('/articles/!(index).md', {
    includeSrc: true,
    transform(rawData) {
        // map, sort, or filter the raw data as you wish.
        // the final result is what will be shipped to the client.
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map((page) => {


            const title = page.src?.match(/#\s*(.*)/)?.[1]
            return {
                title: title,
                url: page.url,
                date: page.frontmatter.date,
            }
        })
    }
})
