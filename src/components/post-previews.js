/** @jsx h */
import { h } from '/web_modules/preact.js';
import { useEffect, useState } from '/web_modules/preact/hooks.js';
import { configs } from '../configurations/configs.js';
export function PostPreviews({ posts  }) {
    const [columns, setColumns] = useState(1);
    useEffect(()=>{
        // this is pretty hacky and extremely fragile
        // we’re basically doing CSS calculations that will break if the CSS changes
        setColumns(Math.min(4, Math.floor((window.innerWidth * 0.9 + 48) / 298)));
    }, []);
    return h("div", {
        class: 'post-previews'
    }, posts.map((post, index)=>h("div", {
            class: 'post-preview',
            key: `featured-post-${index}`
        }, post.site && h("p", {
            class: 'post-preview-site'
        }, h("img", {
            src: `https://res.cloudinary.com/${configs.cloudinaryConfigs.cloudName}/image/fetch/w_32,h_32,c_fill,g_face,q_auto,f_auto/${configs.sitesInfo[post.site].icon}`,
            alt: configs.sitesInfo[post.site].name,
            loading: 'lazy',
            height: 16,
            width: 16
        }), configs.sitesInfo[post.site].name), index < columns && h("img", {
            src: post.thumb,
            alt: '',
            class: 'post-preview-image',
            loading: 'lazy',
            width: 250,
            height: 125
        }), h("h3", {
            class: 'post-preview-title'
        }, h("a", {
            href: post.url || `/${post.slug}`,
            class: 'post-preview-title-link'
        }, post.title)), h("p", {
            class: 'post-preview-description'
        }, post.description), h("span", {
            "aria-hidden": 'true',
            class: 'post-preview-link'
        }, "Read this post →"))
    ));
}
