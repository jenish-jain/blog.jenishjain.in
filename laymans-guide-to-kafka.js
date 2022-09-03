/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    date: '2020-09-06',
    title: 'Layman’s guide to Kafka',
    seo_title: 'Laymans huide to Kafka',
    slug: 'laymans-guide-to-kafka',
    description: 'A kickstart guide about one of the best event streaming solution available (Apache Kafka) for a begineer',
    category: 'productivity',
    tags: [
        'guide',
        'learning',
        'productivity',
        'kafka'
    ],
    image: 'https://res.cloudinary.com/jenishjain/image/upload/v1640938669/portfolio/blog-assets/laymans-guide-to-kafka-cover.jpg',
    cta: 'kafka',
    site: 'medium',
    url: 'https://medium.com/@jenishjain6/laymans-guide-to-kafka-203089f1dbd0',
    thumb: 'https://res.cloudinary.com/jenishjain/image/upload/v1640938669/portfolio/blog-assets/laymans-guide-to-kafka-cover.jpg'
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props));
}
MDXContent.isMDXComponent = true;
export default MDXContent;