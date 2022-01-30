/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    date: '2022-01-25',
    title: 'Start your blog site in 10 mins',
    seo_title: 'How to start your personal blog site in 10 minutes',
    slug: 'start-your-blog-in-10-mins',
    description: 'Start your ready to deploy blog site in 10 mins, built with MDX and preact. Create your blog by just writing a .md file.',
    category: 'self-growth',
    tags: [
        'self-growth',
        'productivity',
        'blog',
        'website'
    ],
    image: 'https://avatars.dicebear.com/api/micah/blog.svg',
    cta: 'work-happy',
    site: 'blogsite',
    thumb: 'https://avatars.dicebear.com/api/micah/blog.svg'
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("p", null, "I always wanted to start my personal blogging website where I can share my ideas easily. Also it is not that I am a regular blogger and want to earn from the same.\nBut wanted a personal space where I can share my thoughts and learning processes easily with others over internet.\nI have tried other blogging platforms like medium and wordpress thought they are very good and easy to use i always wanted to have something of my own which I can host on my personal web address :)."), mdx("h2", {
        id: "things-i-expect-from-my-blogging-site"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#things-i-expect-from-my-blogging-site",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Things I expect from my blogging site"), mdx("ol", null, mdx("li", {
        parentName: "ol"
    }, "Writing blog should be as simple as wiriting a text document, did not wanted to spend time on formatting and styling it."), mdx("li", {
        parentName: "ol"
    }, "Should be flexible enough which allowed me to add custom components like an animation or a web example if needed."), mdx("li", {
        parentName: "ol"
    }, "Wanted an ", mdx("a", {
        href: "https://www.markdownguide.org/getting-started/",
        parentName: "li"
    }, ".MD"), " based blog format as I find it simple to use.")), mdx("h2", {
        id: "what-does-this-blogging-starter-provide"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#what-does-this-blogging-starter-provide",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "What does this blogging starter provide"), mdx("ul", null, mdx("li", {
        parentName: "ul"
    }, "An markdown based blog writing prestyled site. which can be used as it is or can be curated as per ones need by changing few CSS or components in the post-wrapper component."), mdx("li", {
        parentName: "ul"
    }, "Since it is MD based all the fomatting supported with a .md file are supported."), mdx("li", {
        parentName: "ul"
    }, "This specifically uses ", mdx("a", {
        href: "https://mdxjs.com/",
        parentName: "li"
    }, "MDX"), " which allows you to use JSX in your markdown content.[^JSX] This makes writing long-form content with components a blast. 🚀")), mdx("p", null, "[^JSX]:\nYou can import components, such as interactive charts or alerts, and embed them within your content."));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
