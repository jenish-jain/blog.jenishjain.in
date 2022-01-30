/** @jsx h */
import { h } from '/web_modules/preact.js';
export function PostImage({ align ='center' , border =true , caption , children , creditType ='Credit' , creditLink =null , credit , ...props }) {
    return h("figure", {
        class: props.class || `post-figure post-figure-align-${align} ${border ? '' : 'post-figure-no-border'}`
    }, children, (caption || credit) && h("figcaption", {
        class: "post-figure-caption"
    }, caption && h("span", {
        dangerouslySetInnerHTML: {
            __html: caption
        }
    }), credit && h("small", {
        class: "post-figure-attribution"
    }, creditType, ":", creditLink ? h("a", {
        class: "post-figure-attribution-link",
        href: creditLink
    }, credit) : h("span", {
        class: "post-figure-attribution-link"
    }, credit))));
}
