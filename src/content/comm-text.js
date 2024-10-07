import { LitElement, css, } from 'lit';
import {html, literal,unsafeStatic} from 'lit/static-html.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ref,createRef} from 'lit/directives/ref.js';
import {when} from 'lit/directives/when.js';
import {classMap} from 'lit/directives/class-map.js';


class COMMText extends LitElement {
  static properties = {
    value: {type:String},
    _config: {state: true},
    selectedTag: { type: String},
  }
  constructor () {
    super()
    this.value = "";    
    this._config = false;
    this.selectedTag = 'h1'; // Set default selected tag
  }

  tag = this.selectedTag == undefined ? literal`span` : literal`${this.selectedTag}`;
  handleSelectChange(event) {
    this.selectedTag = event.target.value;
  }
  render() {   
    return html`
        <select @change=${this.handleSelectChange} .value="${this.selectedTag}">
            <option value="h1">H1 Heading</option>
            <option value="h2">H2 Heading</option>
            <option value="h3">H3 Heading</option>
        </select>
        <${unsafeStatic(this.selectedTag)}>This is the content</${unsafeStatic(this.selectedTag)}>
    `;
  }
}

customElements.define('comm-text', COMMText);