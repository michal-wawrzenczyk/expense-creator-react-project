import React from 'react';
import ReactDOM from 'react-dom';
// imports the ReactDOM object from 'react-dom' third-party library (package.json file).
// thanks to this we can use all the React features.

import './index.css';
// this will not work in a regular JS - that would be an invalid syntax (we cannot import CSS into JS).
// but here in the end it works. We tell the npm start that we want to include this index.css file into our overall app.

import App from './App';
// .js should be intentionally omitted.
// we look at the same folder as index.js file exist, and then we choose the App.js file.
// from that file we import App (App is a component - it will be rendered in the chosen element).

ReactDOM.render(<App />, document.getElementById('root'));
// normally the <App /> also would not work. But here works because it is transformed before it is delivered to the browser.
// "render" method takes two parameters (arguments). The second is a default JS DOM API which we are calling.
// the global document object which is available in JS (in browser site) has a "getElementById" method.
// we are telling the ReactDOM that we want to render something (<App/>) in this place ('root').
// so the content in the root div element should be replaced by <App/>.
// <App/> is a JSX syntax.
