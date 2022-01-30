import { h } from '/web_modules/preact.js';
const Heading = ({ children , post , ...props })=>post ? h("h1", Object.assign({
    }, props), children) : h("h2", Object.assign({
    }, props), children)
;
export function Intro({ headline , children , post =false  }) {
    return [
        h("div", {
            class: "intro"
        }, h(Heading, {
            class: "intro-headline",
            post: post
        }, headline), h("div", {
            class: "intro-lede"
        }, children)), 
    ];
}
