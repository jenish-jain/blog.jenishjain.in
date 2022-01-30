/** @jsx h */
import { h } from '/web_modules/preact.js';
import { useEffect, useState } from '/web_modules/preact/hooks.js';
import { configs } from '../configurations/configs.js';
export function PostTweetBox({ quote , retweetId =false  }) {
    const [location, setLocation] = useState(configs.websiteUrl);
    useEffect(()=>{
        setLocation(window.location.href);
    }, []);
    const url = new URL('https://twitter.com/');
    if (retweetId) {
        url.pathname = '/intent/retweet';
        url.search = new URLSearchParams({
            tweet_id: retweetId
        });
    } else {
        url.pathname = '/compose/tweet';
        url.search = new URLSearchParams({
            text: `“${quote}” —@${configs.twitterHandel}`,
            url: location,
            related: `${configs.twitterHandel}`
        });
    }
    return h("div", {
        class: "post-tweet-box"
    }, h("p", null, quote), h("p", {
        class: "post-tweet-link"
    }, h("a", {
        href: url
    }, "Tweet this")));
}
