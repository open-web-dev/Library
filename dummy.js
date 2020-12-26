import { LitElement, html } from "lit-element";
export default class MyElement extends LitElement{
  static get properties(){
    return {
      name: {type:String}
    }
  }
  constructor(){
    super();
    this.name = 'Prem';
  }
  render(){
    return html`Hi ${this.name}`;
  }
}
customElements.define('my-element', MyElement);