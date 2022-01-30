/** @jsx h */
import { h } from '/web_modules/preact.js';
export function PostAside({ children , spicy =false , ...props }) {
    const icons = {
        spicy: {
            src: 'https://res.cloudinary.com/jlengstorf/image/upload/w_80,f_auto,q_auto/v1609402670/jason.af/fire.png',
            alt: 'fire'
        },
        default: {
            src: 'https://res.cloudinary.com/jlengstorf/image/upload/w_80,f_auto,q_auto/v1593991250/jason.af/light-mode.png',
            alt: 'light bulb'
        }
    };
    const icon = spicy ? icons.spicy : icons.default;
    return h("aside", {
        class: props.class ?? 'post-aside'
    }, h("div", {
        class: "post-aside-icon"
    }, h("img", {
        src: icon.src,
        alt: icon.alt
    })), h("div", {
        class: "post-aside-content"
    }, children));
}
