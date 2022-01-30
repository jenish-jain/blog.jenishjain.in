/** @jsx h */
import { h } from '/web_modules/preact.js';
import { Helmet } from '/web_modules/react-helmet.js';
import { MDXProvider } from '/web_modules/@mdx-js/preact.js';
import { PostWrapper } from './components/post-wrapper.js';
import { PostAside } from './components/post-aside.js';
import { PostImage } from './components/post-image.js';
import { PostTweetBox } from './components/post-tweet-box.js';
function BaseComponent({ type , children , ...props }) {
    return type === 'post' ? h(PostWrapper, Object.assign({
    }, props), children) : h("div", Object.assign({
    }, props), children);
}
export default (({ children , type ='page' , ...meta })=>{
    return h("div", null, h(Helmet, null, h("html", {
        lang: 'en'
    }), h("meta", {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
    }), h("link", {
        rel: 'stylesheet',
        href: '/styles/index.css'
    }), h("link", {
        rel: 'manifest',
        href: '/site.webmanifest'
    }), h("link", {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#ff87d4'
    }), h("meta", {
        name: 'msapplication-TileColor',
        content: '#ffe742'
    }), h("meta", {
        name: 'theme-color',
        content: '#ffe742'
    })), h(MDXProvider, {
        components: {
            PostAside,
            PostImage,
            PostTweetBox
        }
    }, h(BaseComponent, Object.assign({
        type: type
    }, meta), children)));
});
