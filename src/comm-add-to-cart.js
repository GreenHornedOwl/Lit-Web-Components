import { LitElement, css, html } from 'lit'

export class CommAddToCart extends LitElement {
  
  static properties = {
    value: {type: Number},
    disabled: {type: Boolean,attribute: "disabled"},
    min: {type: Number},
    max: {type: Number},
    step: {type: Number},
    type: {type: String},
    stepper: {type: Boolean, attribute: "stepper"},
    readonly: {type: Boolean}
    render()
  };
}
