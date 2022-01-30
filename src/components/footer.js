import { h } from '/web_modules/preact.js';
export function Footer() {
    return h("footer", {
        class: "footer"
    }, h("span", null, "powered by thoughts"), h("nav", {
        class: "footer-nav"
    }, h("a", {
        href: "/posts"
    }, "posts"), h("a", {
        href: "https://github.com/jenish-jain/blogpost-starter"
    }, "source code")));
}
