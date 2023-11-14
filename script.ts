import MyFirstWebComponent from "./MyFirstWebComponent"
customElements.define('my-first-web-component', MyFirstWebComponent);
document.body.innerHTML = `<my-first-web-component></my-first-web-component>`
