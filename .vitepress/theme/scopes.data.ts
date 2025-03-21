import {createContentLoader} from 'vitepress'

interface Scope {
    title: string
    url: string
    excerpt: string | undefined
}
export default createContentLoader('scopes/*.md', {
    // excerpt: true,
    // transform(raw): Scope[] {
    //     return raw
    //         .map(({ url, frontmatter, excerpt }) => ({
    //             title: frontmatter.title,
    //             url,
    //             excerpt,
    //         }))
    // }
})