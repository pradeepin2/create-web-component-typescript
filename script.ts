class MyFirstWebComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1>Hi Pradeep Kumar Saraswathi</h1>`;
    }
  }
customElements.define('my-first-web-component', MyFirstWebComponent);

var hello = 'Hello TS';
document.body.innerHTML = `<div>${hello}</div>`
