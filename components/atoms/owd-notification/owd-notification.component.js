const template = document.createElement('template');
template.innerHTML = `
<style>
</style>
<p>{some redux variable}</p>
`;

// will call on subscribe
function renderTemplate(){
  return `
  <style>
  </style>
  <p>{some redux variable}</p>
  `;
}
class Notification extends HTMLElement {
  constructor(args) {
    super();
    console.log(args);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('owd-notification', Notification,{a:1});