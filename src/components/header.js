import { h } from '/web_modules/preact.js';
import { useState, useEffect } from '/web_modules/preact/hooks.js';
import { configs } from '../configurations/configs.js';
export function Header() {
    const [isHome, setIsHome] = useState(false);
    useEffect(()=>{
        setIsHome(window.location.pathname === '/');
    }, []);
    return h("header", {
        class: 'site-header'
    }, h("a", {
        href: '/',
        rel: 'home',
        class: 'home'
    }, configs.blogName));
}
