/** @jsx h */
import { h } from '/web_modules/preact.js';
import { useRef, useEffect } from '/web_modules/preact/hooks.js';
import { SEO } from '../components/seo.js';
import { Layout } from '../components/layout.js';
import { Block } from '../components/block.js';
import { TableOfContents } from '../components/table-of-contents.js';
import { configs } from '../configurations/configs.js';
export function PostWrapper({ children , title , seo_title , description , image , slug  }) {
    const ref = useRef();
    const url = new URL(configs.websiteUrl);
    url.pathname = `/${slug}`;
    const postTitle = seo_title || title;
    const ogImage = image;
    useEffect(()=>{
        if (!ref.current) return;
        const footnotes = ref.current.querySelector('.footnotes');
        if (footnotes) footnotes.querySelectorAll('a[href^="#fnref"]').forEach((node)=>{
            node.innerText = 'back';
        });
    }, [
        ref
    ]);
    return [
        h(SEO, {
            title: postTitle,
            description: description,
            image: ogImage,
            url: url,
            post: true
        }),
        h(Layout, null, h("header", {
            class: 'post-header'
        }, h("h1", null, title), h("p", null, description), h("img", {
            src: image,
            alt: title
        })), h(Block, {
            color: 'white',
            class: 'post-block'
        }, h(TableOfContents, null), h("div", {
            class: 'post-wrapper',
            ref: ref
        }, children))), 
    ];
}
