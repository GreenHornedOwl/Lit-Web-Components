import { LitElement, css, html } from 'lit'
import {when} from 'lit/directives/when.js';
import {CommQuantity} from "./comm-quantity.js";
import {ifDefined} from "lit/directives/if-defined.js";
export class CommAddToCart extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};
  static properties = {
    value: {type: Number},
    disabled: {type: Boolean,attribute: "disabled"},
    min: {type: Number},
    max: {type: Number},
    step: {type: Number},
    type: {type: String},
    stepper: {type: Boolean, attribute: "stepper"},
    readonly: {type: Boolean},
    quantityEnabled: {type: Boolean, attribute: "quantity-enabled"},
  };
  
  constructor () {
    super()
    this.value = 1;
    this.type = "number";   
    this.stepper = false;
  }

  render() {
    return html`
      ${when(this.quantityEnabled, () => html`
        <comm-quantity value=${this.value} min=${ifDefined(this.min)} max=${ifDefined(this.max)} step=${ifDefined(this.step)} type=${ifDefined(this.type)} stepper=${ifDefined(this.stepper)} ?disabled=${this.disabled} ?readonly=${this.readonly} @change=${this._onChange}></comm-quantity>
      `, ()=> html`
      <button type="button">
        <span>add to cart</span>
      </button>`)}
    `;
  }
}

customElements.define('comm-add-to-cart', CommAddToCart);
