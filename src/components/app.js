import { h } from '/web_modules/preact.js';
import { Router } from 'preact-router';
// Code-splitting is automated for `routes` directory
import Posts from '../routes/home';
const App = ()=>h("div", {
        id: "app"
    }, h(Router, null, h(Posts, {
        path: "/"
    })))
;
export default App;
