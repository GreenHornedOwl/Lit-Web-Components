import { LitElement, css, html } from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ref,createRef} from 'lit/directives/ref.js';
import {when} from 'lit/directives/when.js';
import {guard} from 'lit/directives/guard.js';
import {classMap} from 'lit/directives/class-map.js';


const visibilityOffSVG = unsafeSVG(`
<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M768-90 638-220q-38 12-77.5 20t-80.5 8q-143 0-261.5-77.5T48-480q17-52 57-101.5t85-87.5L90-769l51-51 678 679-51 51ZM480-312q14 0 28-3t28-7L322-536q-3 14-6.5 28t-3.5 28q0 70 49 119t119 49Zm290 20L637-425q5-13 8-27t3-28q0-70-49-119t-119-49q-14 0-27.5 2.5T425-638L322-741q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292ZM575-487l-88-89q20-2 36 4.5t30 20.5q12 12 18 29.5t4 34.5Z" fill="currentColor" /></svg>`)
const visibilityOnSVG = unsafeSVG(`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.596 0-259.798-78.5T48-480q55-131 172.202-209.5T480-768q142.596 0 259.798 78.5T912-480q-55 131-172.202 209.5T480-192Z" fill="currentColor" /></svg>`)


class COMMInput extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};
  inputRef = createRef();
  static properties = {   
    value: {type: String},
    disabled: {type: Boolean,attribute: "disabled"},  
    type: {type: String},    
    readonly: {type: Boolean},
    required: {type: Boolean},
    maxlength: {type: Number},
    minlength: {type: Number},
    min: {type: Number},
    step: {type: Number},
    max: {type: Number},
    pattern: {type: String},
    placeholder: {type: String},
    label: {type: String},
    size: {type: Number},
    _focused: {state: true},
    _invalid: {state: true}, 
    _showPassword: {state: true}
  };

  constructor () {
    super()
    this.internals = this.attachInternals();    
    this.value = "";
    this.required = false;
    this._invalid = false;
    this._showPassword = false;
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
    const input = this.inputRef.value
    this._invalid = this.required ? !input.checkValidity() : false;
  }
  onInput = e => {
    this.value = e.currentTarget.value;
    const input = this.inputRef.value
    this._invalid = this.required ? !input.checkValidity() : false;
  }  
  
  showPassword = (value) => {
    this._showPassword = value;
    this.type = value ? "text" : "password";
  }
  
  render() {
    const elementClassMap = {focused: this._focused || this.value !== ""};
    const inputClassMap = {invalid: this._invalid, password: this.type === "password" || this._showPassword === true};
    return html`
        <div class="element ${classMap(elementClassMap)}">
        <input ${ref(this.inputRef)} type="${this.type}" class=${classMap(inputClassMap)} pattern="${ifDefined(this.pattern)}" .value="${this.value}" maxlength="${ifDefined(this.maxlength)}" minlength="${ifDefined(this.minlength)}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}" size="${ifDefined(this.size)}" placeholder="${ifDefined(this.placeholder)}" min="${ifDefined(this.min)}" step="${ifDefined(this.step)}" max="${ifDefined(this.max)}" @focus=${this.onFocusIn} @focusout=${this.onFocusOut} @input=${e=>this.onInput(e)}/>
          ${when(this.label !== undefined && this.placeholder === undefined,()=>html`<label>${this.label}</label>`)}
          ${when(this.type==="password" || this._showPassword === true,()=>html`
              ${when(this._showPassword,()=>html`
                 <button type="button" class="icon" @click=${() => this.showPassword(false)}>${visibilityOnSVG}</button>
              `,()=>html`
                 <button type="button" class="icon" @click=${() => this.showPassword(true)}>${visibilityOffSVG}</div>   
              `)}
          `)}
        </div>
    `;
  } 

  //css
  static styles = css`
      :host {
          display: inline-flex;
          flex-wrap: wrap;
          align-content: center;
          box-sizing: border-box;
      }
      
      :host * {
          box-sizing: border-box;
      }

      .element {
          box-sizing: border-box;
          display: grid;
          grid-template-areas: "element";
          align-items: center;
          width: 100%;
          position: relative;
          text-align: inherit;
      }
      .icon {
          display: flex;
          align-items: center;
          position: absolute;
          right: 0;
          padding-inline: var(--comm-paddinx-x, 0.5rem);
          color: inherit;
          cursor: pointer;
          background: transparent;
          border: none;          
      }
      .icon svg {
          width: var(--icon-size, 1.25rem);
      }
      label {
          text-align: left;
          grid-area: element;
          font-size: var(--comm-placeholder-size, 0.75rem);
          font-family: var(--comm-font-family, inherit);
          line-height: var(--comm-placeholder-size, 0.75rem);
          padding-inline: calc(var(--comm-paddinx-x, 0.5rem) + 1px);
          transition: var(--comm-transition, all 0.15s ease-out);

          .focused & {
              transform: translateY(calc(0rem - var(--comm-placeholder-size, 0.75rem)));              
          }
      }
      
      input {
          text-align: inherit;
          grid-area: element;
          box-sizing: border-box;
          display: flex;
          width: 100%;
          line-height: var(--comm-line-height, 2.5rem);
          margin: 0;
          padding-block: 0;
          padding-inline: var(--comm-paddinx-x, 0.5rem);
          font-family: var(--comm-font-family, inherit);
          border: var(--comm-border-size, 1px) var(--comm-border-type, solid) var(--comm-border-color, oklch(0 0 0 / 0.26));
          outline: none;
          border-radius: var(--comm-border-radius, 0);
          height: calc(var(--comm-line-height, 2.5rem) + 2 * var(--comm-border-size, 1px));
          &.password {
              padding-right: calc(var(--icon-size, 1.25rem) + 2 * var(--comm-paddinx-x, 0.5rem));
          }
          &:focus {
              box-shadow: 0 0 0 0.25rem var(--comm-outline, oklch(0.75 0.1 229.19 / 0.26));
          }
          &.invalid {
              border-color: var(--comm-border-color-error, oklch(0.8 0.15 24.01));
          }
          &.invalid:focus{
              box-shadow: 0 0 0 0.25rem var(--comm-outline-invalid, oklch(0.8 0.15 24.01 / 0.26))
          }
      }

  `;
}

customElements.define('comm-input', COMMInput);