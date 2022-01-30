import { h } from '/web_modules/preact.js';
import { useState } from '/web_modules/preact/hooks.js';
// import { useSfx } from '../hooks/use-sfx.js';
import { Button } from './button.js';
import { Intro } from './intro.js';
import { Image as Image1 } from './image.js';
export function Form({ title ='Get booped on the brain.' , children  }) {
    const [sending, setSending] = useState(false);
    // const { playPop, playHooray } = useSfx();
    const handleSubmit = (event)=>{
        event.preventDefault();
        setSending(true);
        // playHooray();
        const data = new FormData(event.target);
        // TODO handle form submissions
        fetch('/.netlify/functions/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                firstName: data.get('firstName'),
                email: data.get('email')
            })
        }).then((res)=>{
            if (res.status === 200 && res.redirected === true) window.location.href = res.url;
        });
    };
    return h("section", {
        class: "newsletter-opt-in"
    }, h(Intro, {
        headline: title
    }, children || h("p", null, "Jason believes in lifelong learning and continuous improvement. In his newsletter, he shares his experience — both technical and otherwise — in hopes of connecting with more lifelong learners and building a community of practice.")), h("div", {
        class: "form-wrapper"
    }, h("div", {
        class: "form-image-wrapper"
    }, h(Image1, {
        publicId: "jason.af/opt-in",
        alt: "Illustration of a letter with a heart on the top flap.",
        width: 280,
        height: 296
    })), h("form", {
        action: "/api/subscribe",
        method: "POST",
        class: "opt-in-form",
        onSubmit: handleSubmit
    }, h("label", {
        htmlFor: "firstName",
        class: "opt-in-label"
    }, "First Name", h("input", {
        class: "opt-in-input",
        type: "text",
        name: "firstName",
        id: "firstName",
        required: true,
        disabled: sending
    })), h("label", {
        htmlFor: "email",
        class: "opt-in-label"
    }, "Email", h("input", {
        class: "opt-in-input",
        type: "email",
        name: "email",
        id: "email",
        required: true,
        disabled: sending
    })), h(Button, {
        class: "opt-in-button",
        // hoverSound={playPop}
        handleClick: ()=>{
        },
        disabled: sending
    }, sending ? 'Sending...' : 'Join'))));
}
