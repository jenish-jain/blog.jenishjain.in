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
    }, props), mdx("p", null, "After starting my journey as a developer I always wanted to have a personal bloging site where I can share my ideas and projects with the world.\nAlso I wanted an easy to write blog setup that does not takes up half of my time setting up and styling my blog.\nAfter having tried other blogging platforms like medium and wordpress I was quite sure of how I wanted my blog site to look and feel like."), mdx("h2", {
        id: "things-i-expected-from-my-blogging-site"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#things-i-expected-from-my-blogging-site",
        parentName: "h2"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Things I expected from my blogging site"), mdx("ol", null, mdx("li", {
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
    }, "An markdown based prestyled blog writing site which can be used as it is or can be curated as per ones need by changing few CSS or components in the post-wrapper component."), mdx("li", {
        parentName: "ul"
    }, "Since it is MD based you can do anything supported in the markdown syntax."), mdx("li", {
        parentName: "ul"
    }, "This specifically uses ", mdx("a", {
        href: "https://mdxjs.com/",
        parentName: "li"
    }, "MDX"), " which allows you to use JSX in your markdown content.You can import components, such as interactive charts or alerts,\nand embed them within your content. This makes writing long-form content with components a blast. 🚀")), mdx("h3", {
        id: "how-does-this-blog-look-in-its-raw-format"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#how-does-this-blog-look-in-its-raw-format",
        parentName: "h3"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "How does this blog look in its raw format?"), mdx("p", null, mdx("a", {
        href: "https://github.com/jenish-jain/blog.jenishjain.in/blob/master/content/posts/1-start-your-blog-site-in-10-mins/start-your-blog-site-in-10-mins.mdx",
        parentName: "p"
    }, "https://github.com/jenish-jain/blog.jenishjain.in/blob/master/content/posts/1-start-your-blog-site-in-10-mins/start-your-blog-site-in-10-mins.mdx")));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
