import { LitElement, css, html } from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ref,createRef} from 'lit/directives/ref.js';
import {when} from 'lit/directives/when.js';
import {classMap} from 'lit/directives/class-map.js';

class COMMSelect extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};
  selectRef = createRef();
  static properties = {
    value: {type: String},
    disabled: {type: Boolean,attribute: "disabled"},
    required: {type: Boolean},
    readonly: {type: Boolean},
    size: {type: Number},
    label: {type: String},
    _focused: {state: true},
    _invalid: {state: true}
  };
  constructor () {
    super()
    this.value = "";    
    this.internals = this.attachInternals();  
    this.required = false;
    this._invalid = false;
  }

  updated(changedProperties) {
    if(changedProperties.has('value')){
      this.internals.setFormValue(this.value);
    }
  }

  onFocusIn = () =>{
    this._focused = true;    
  }
  onFocusOut = () =>{
    this._focused = false;   
    const select = this.selectRef.value
    this._invalid = this.required ? !select.checkValidity() : false;
  }

  render() {
    return html`
      <label>
        ${this.label}
        <select 
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          size=${ifDefined(this.size)}
          @change=${this._onChange}
          ${ref(this.selectRef)}
        >
          <slot></slot>
        </select>
      </label>
    `;
  }
  _onChange = (e) => {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('change', {detail: {value: this.value}, bubbles: true, composed: true}));
  }
}

customElements.define('comm-select', COMMSelect);