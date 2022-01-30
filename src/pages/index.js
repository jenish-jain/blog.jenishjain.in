/** @jsx h */
import { h } from '/web_modules/preact.js';
import { SEO } from '../components/seo.js';
import { Layout } from '../components/layout.js';
import { Block } from '../components/block.js';
import { Intro } from '../components/intro.js';
import { PostPreviews } from '../components/post-previews.js';
export default function Posts({ posts  }) {
    return [
        h(SEO, {
            title: 'An mdx blogsite',
            description: "A blog site build with toast, mdx and lots of chai."
        }),
        h(Layout, null, h(Block, {
            color: "black"
        }, h(Intro, {
            headline: `${posts.length} times I’ve sat down to write something as a blog.`,
            post: true
        }, h("p", null, "I like to share my learnings, process of building something with others. I am not a regular writer but you can expect something rolling every few months ;)"))), h(Block, {
            color: "dirty-white"
        }, h("section", {
            id: "previews"
        }, h(PostPreviews, {
            posts: posts
        })))), 
    ];
};
