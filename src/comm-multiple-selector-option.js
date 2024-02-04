import {html,css, LitElement} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';


export class CommMutlipleSelectorOption extends LitElement {
  static properties = {
    value: {type: String},
    label: {type: String},   
  }

  constructor() {
    super();
    this.value = "";
    this.label = "";   
  }
  _onClickOption = (e) => {    
    const {value = ""} = e.currentTarget.dataset;
    this.dispatchEvent(new CustomEvent('option-selected', {bubbles: true, composed: true,detail: {value: value}}));
  }

  render() {
    return html`<button type="button" class="item" data-label=${ifDefined(this.label)} data-value="${this.value}" @click=${e=>this._onClickOption(e)} tabindex="-1"><slot></slot></button>`;
  }


  static styles = css`
    :host {
      display: block;
      width: 100%;            
    }    
    button {
      display: block;
      width: 100%;      
      border: none;
      background: transparent;
      text-align: left;
      cursor: pointer;
      font-size: inherit;
      color: var(--comm-color-text);
      transition: background-color 0.2s ease-in-out;
    }
  `;  
}
customElements.define('comm-multiple-selector-option', CommMutlipleSelectorOption);