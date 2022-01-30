import { h } from '/web_modules/preact.js';
import { Helmet } from '/web_modules/react-helmet.js';
import { useSettings } from '../context/settings.js';
import { configs } from '../configurations/configs.js';
export function SEO({ title ='Your own blog site!' , description ='An easy to set up custom blog site, built with MDX and preact' , url =configs.websiteUrl , image ='https://avatars.dicebear.com/api/big-ears-neutral/post.svg' , post =false ,  }) {
    const { darkMode  } = useSettings();
    return h(Helmet, {
        defer: false
    }, h("link", {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'https://avatars.dicebear.com/api/big-ears-neutral/post.svg'
    }), h("title", null, title), h("link", {
        rel: 'canonical',
        href: url
    }), h("meta", {
        name: 'description',
        content: description
    }), h("meta", {
        name: 'image',
        content: image
    }), h("meta", {
        property: 'og:type',
        content: post ? 'article' : 'website'
    }), h("meta", {
        property: 'og:url',
        content: url
    }), h("meta", {
        property: 'og:description',
        content: description
    }), h("meta", {
        property: 'og:image',
        content: image
    }), h("meta", {
        name: 'twitter:widgets:theme',
        content: darkMode ? 'dark' : 'light'
    }), h("meta", {
        name: 'twitter:dnt',
        content: 'on'
    }), h("meta", {
        name: 'twitter:card',
        content: 'summary_large_image'
    }), h("meta", {
        name: 'twitter:creator',
        content: configs.twitterHandel
    }), h("meta", {
        name: 'twitter:title',
        content: title
    }), h("meta", {
        name: 'twitter:description',
        content: description
    }), h("meta", {
        name: 'twitter:image',
        content: image
    }), h("body", {
        class: darkMode ? 'dark' : 'light'
    }));
}
