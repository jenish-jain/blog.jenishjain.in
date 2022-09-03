/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    date: '2020-04-12',
    title: 'Intro to system design',
    seo_title: 'Introduction to system design',
    slug: 'intro-to-system-design',
    description: 'A blog post to help you get started with system design.',
    category: 'productivity',
    tags: [
        'system-design',
        'experience',
        'productivity'
    ],
    image: 'https://res.cloudinary.com/jenishjain/image/upload/v1643539902/portfolio/blog-assets/system-design-cover.png',
    cta: 'system-deisgn',
    site: 'medium',
    url: 'https://medium.com/@jenishjain6/intro-to-system-design-9287b989f206',
    thumb: 'https://res.cloudinary.com/jenishjain/image/upload/v1643539902/portfolio/blog-assets/system-design-cover.png'
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
