import { h } from '/web_modules/preact.js';
import { Header } from './header.js';
import { Main } from './main.js';
import { Footer } from './footer.js';
import { useSettings } from '../context/settings.js';
export function Layout({ children  }) {
    const { darkMode  } = useSettings();
    return h("div", {
        class: `outer ${darkMode ? 'dark' : 'light'}`
    }, h(Header, null), h(Main, null, children), h(Footer, null, "powered by free weekends"));
}
