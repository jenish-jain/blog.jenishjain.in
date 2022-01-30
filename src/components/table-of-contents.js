import { h } from '/web_modules/preact.js';
import { useEffect, useState } from '/web_modules/preact/hooks.js';
export function TableOfContents() {
    const [headings, setHeadings] = useState([]);
    useEffect(()=>{
        const headingElements = document.querySelectorAll('.post-wrapper h2');
        const callback = ([entry])=>{
            const activeHeading = entry.target;
            const links = Array.from(document.querySelectorAll(`.table-of-contents a`));
            links.forEach((link)=>{
                const [, href] = link.href.split('#');
                if (entry.isIntersecting && href === activeHeading.id) {
                    links.forEach((l)=>l.classList.remove('toc-active')
                    );
                    link.classList.add('toc-active');
                }
            });
        };
        const observer = new IntersectionObserver(callback, {
            threshold: [
                1
            ]
        });
        const headings1 = Array.from(headingElements).filter((h2)=>h2.id !== 'table-of-contents'
        ).map((h2)=>{
            observer.observe(h2);
            return {
                label: h2.innerText,
                href: `#${h2.id}`
            };
        });
        setHeadings(headings1);
        return ()=>{
            Array.from(headingElements).map((h2)=>{
                observer.unobserve(h2);
            });
        };
    }, []);
    return h("aside", {
        class: "table-of-contents"
    }, h("div", {
        class: "toc-sticky-container"
    }, h("h2", {
        id: "table-of-contents"
    }, "Table of Contents"), h("ol", null, headings.map((heading)=>h("li", {
            key: `heading-${heading.href}`
        }, h("a", {
            href: heading.href
        }, heading.label))
    ))));
}
