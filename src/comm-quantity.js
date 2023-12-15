import { LitElement, css, html } from 'lit'
import {ifDefined} from 'lit/directives/if-defined.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ref,createRef} from 'lit/directives/ref.js';
import {when} from 'lit/directives/when.js';
import {classMap} from 'lit/directives/class-map.js';

const increaseIcon = unsafeSVG(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>`);
const decreaseIcon = unsafeSVG(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`) 

export class CommQuantity extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};
  inputRef = createRef();
  static properties = {
    value: {type: Number},
    disabled: {type: Boolean,attribute: "disabled"},
    min: {type: Number},
    max: {type: Number},
    step: {type: Number},
    type: {type: String},
    stepper: {type: Boolean, attribute: "stepper"},    
    readonly: {type: Boolean}
    
  };
  constructor () {
    super()
    this.value = 1;    
    this.type = "number";
    this.internals = this.attachInternals();  
    this.stepper = false;
    this.addEventListener('focus', (e) => {   
      const input = this.inputRef.value     
      input.focus({ focusVisible: true })
    });
   
  }

  _increaseAmount = () => {    
    const step = this.step ?? 1;
    const value = ifDefined(this.max) ? this.value + step > this.max ? this.max : this.value + step : this.value + step; 
    this.value = parseFloat(value.toFixed(2));
  }
  _decreaseAmount = () => {  
    const step = this.step ?? 1;  
    const value = ifDefined(this.min) ? this.value - step < this.min ? this.min : this.value - step : this.value - step;
    this.value = parseFloat(value.toFixed(2));
  }
  _onKeyDown = (e) => {   
    if(e.key === "ArrowUp") {
      e.preventDefault();
      this._increaseAmount();
    } else if(e.key === "ArrowDown") {
      e.preventDefault();
      this._decreaseAmount();
    }
  }
  
  _onChange = (e) => {
    e.preventDefault();   
    const step = this.step ?? 1;    
    const currentValue = !Number.isNaN(parseFloat(e.currentTarget.value)) ? parseFloat(e.currentTarget.value) : 1; 
    let value = parseFloat(currentValue.toFixed(2)) ?? 1;
    value = ifDefined(this.max) ? value > this.max ? this.max : value : value;    
    value = ifDefined(this.min) ? value < this.min ? this.min : value : value;   
    value = parseFloat((value % step).toFixed(2)) !== 0 ? parseFloat((Math.ceil(value/step)*step).toFixed(2)) : value;  
    this.value = value;
    const input = this.inputRef.value; 
    input.value = value;
  }
  render () {
    const inputmode = parseFloat(((this.step ?? 1) % 1).toFixed(2)) !== 0 ? "decimal" : "numeric";
    const classes = { hidesteps: this.stepper};      
    return html`
      <div class="comm-container">
        ${when(this.stepper, ()=>html`<button type="button" aria-label="decrease quantity" ?disabled=${this.readonly || this.disabled} @click=${this._decreaseAmount}>${decreaseIcon}</button>`)}        
        <input ${ref(this.inputRef)} type=${this.type} min=${ifDefined(this.min)} max=${ifDefined(this.max)} step=${ifDefined(this.step)} ?disabled=${this.disabled} ?readonly=${this.readonly} inputmode="${inputmode}" .value=${this.value} @keydown=${e=>this._onKeyDown(e)} @change=${e=>this._onChange(e)} class=${classMap(classes)} autofocus />
        ${when(this.stepper, ()=>html`<button type="button" aria-label="increase quantity" ?disabled=${this.readonly || this.disabled} @click=${this._increaseAmount}>${increaseIcon}</button>`)}
      </div>
    `
  }

  static styles= css`
      :host {
          display: inline-flex;
          align-items: center;
      }
      :host([disabled]){
          opacity: 0.5;
      }
      .comm-container {
          display: flex;
          align-items: center;
          //border: var(--comm-border, 1px solid #999);
          //border-radius: var(--comm-border-radius, 0.25rem);
      }

      button {
          display: inline-flex;
          border: var(--comm-stepper-border, none);
          background: var(--comm-element-background, transparent);
          align-items: center;
          margin: 0;
          padding: 0 var(--comm-stepper-padding, 0.25rem);
      }

      input {
          margin: 0;
          width: var(--comm-element-width, 5ch);
          text-align: center;
          border: var(--comm-element-border, none);    
          background-color: transparent;
          line-height: var(--comm-line-height, 1.5);
      }     
      input:disabled, input:read-only {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;          
          cursor: not-allowed;
      }
      input:focus {
          outline: none;
      }

      input.hidesteps[type="number"]::-webkit-outer-spin-button,
      input.hidesteps[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }

      input.hidesteps[type="number"] {
          -moz-appearance: textfield;
      }
  `  
}

customElements.define('comm-quantity', CommQuantity);