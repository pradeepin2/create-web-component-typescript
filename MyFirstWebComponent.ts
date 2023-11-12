class MyFirstWebComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1>Hi Pradeep Kumar Saraswathi</h1>`;
    }
  }
customElements.define('my-first-web-component', MyFirstWebComponent);
