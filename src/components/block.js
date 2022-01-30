import { h } from '/web_modules/preact.js';
export function Block({ color , children , id , ...props }) {
    const extraClass = props.class ?? '';
    return h("div", Object.assign({
    }, props, {
        id: id,
        class: `block ${color} ${extraClass}`
    }), children);
}
