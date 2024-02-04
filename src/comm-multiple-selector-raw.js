import { LitElement, css, html } from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ref,createRef} from 'lit/directives/ref.js';
import {when} from 'lit/directives/when.js';
import {guard} from 'lit/directives/guard.js';
import {classMap} from 'lit/directives/class-map.js';

const deleteIcon = unsafeSVG(`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z" fill="currentColor"/></svg>`);

const dragIcon = unsafeSVG(`
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" fill="currentColor"/></svg>`)



const arrayMove = (array, from, to) => {
  const newArr = [...array];
  if(from >= to) {
    newArr.splice(to, 0, newArr.splice(from, 1)[0]);  
  } else {
    newArr.splice(to-1, 0, newArr.splice(from, 1)[0]);
  }
  
  
  return newArr;
};



export class CommMultipleSelectorRaw extends LitElement {
  static formAssociated = true;
  static properties = {
    value: {type: String},
    valueArray: {
      attribute: "selected",
      converter: (value, type) => {      
        return value.split(",");
      }
    },  
    items: {type: Array, attribute: "items"},
    _filteredItems: {state: true},
    _filteredItemsOpened: {state: true},
    _selectedItems: {state: true},
  }

  inputRef = createRef();
  dragSrcEl = null;

  constructor () {
    super()
    this.internals = this.attachInternals();
    this.valueArray = [];
    this.value = "";
    this.items = [];
    this._filteredItems = [];
    this._filteredItemsOpened = false;
    this._selectedItems = [];
  }

  get _slottedChildren() {
    const slot = this.shadowRoot.querySelector('slot');   
    return slot.assignedNodes({flatten: true}).filter((node) => node.nodeName === 'COMM-MULTIPLE-SELECTOR-OPTION');
  }

  firstUpdated() {      
    const selectedNodes = this._slottedChildren.filter(node => {     
      return this.valueArray.includes(node.getAttribute("value"));
    });
    //sets the selected items
    this._selectedItems = selectedNodes.reduce((r,v)=>[...r,{"name":v.getAttribute("label"),"value":v.getAttribute("value")}],[]).sort((a,b) => this.valueArray.indexOf(a.value) - this.valueArray.indexOf(b.value));
    //filter already selected nodes
    selectedNodes.forEach(node => {
      node.style.display = "none";
    })
  }
  
  willUpdate(changedProperties) {
    // only need to check changed properties for an expensive computation.
    if (changedProperties.has('valueArray') ) {
      this.value = this.valueArray.join(",");
    }
  }

  _onSearchInput = (e) => {
    const value = e.currentTarget.value;    
    const selectedNodes = this._slottedChildren.filter(item => item.getAttribute("label").toLowerCase().includes(value.toLowerCase()) && ![...this.valueArray].find(v=> v===item.getAttribute("value")));
    this._slottedChildren.forEach(node => {
      node.style.display = "none";
      node.classList.remove("focused");
    });   
    selectedNodes.forEach(node => {
      node.style.display = "flex";
    });    
  }
  _onFocusInput = e => {    
    const value = e.currentTarget.value;
    let filteredNodes = this._slottedChildren;
    if(value!=="") {
      filteredNodes = this._slottedChildren.filter(item => item.getAttribute("label").toLowerCase().includes(value.toLowerCase()) && ![...this.valueArray].find(v=> v===item.getAttribute("value")) || this.valueArray.includes(item.getAttribute("value")));          
    } else {
      filteredNodes = this._slottedChildren.filter(item => [...this.valueArray].find(v=> v===item.getAttribute("value")));     
    } 
    this._slottedChildren.forEach(node => {
      node.style.display = "flex" ;
      node.classList.remove("focused");
    });   
    filteredNodes.forEach(node => {
      node.style.display = "none"; 
    });
    
    this._filteredItemsOpened = true;
  }
  _onClickOption = e => {
    
    const {value} = e.detail ?? "";  
    const name = this.inputRef.value.value;
    this.valueArray = [...this.valueArray].find(v=>v===value) ? this.valueArray : [...this.valueArray, value];
    
    let filteredNodes = this._slottedChildren;
    if(name!=="") {
      filteredNodes = this._slottedChildren.filter(item => item.getAttribute("label").toLowerCase().includes(name.toLowerCase()) && ![...this.valueArray].find(v=> v===item.getAttribute("value")) || this.valueArray.includes(item.getAttribute("value")));          
    } else {
      filteredNodes = this._slottedChildren.filter(item => [...this.valueArray].find(v=> v===item.getAttribute("value")));     
    } 
    this._slottedChildren.forEach(node => {
      node.style.display = "flex" ;
      node.classList.remove("focused");
    });   
    filteredNodes.forEach(node => {
      node.style.display = "none";
    });


    this._selectedItems = this._slottedChildren.filter(item => this.valueArray.includes(item.getAttribute("value"))).reduce((r,v)=>[...r,{"name":v.getAttribute("label"),"value":v.getAttribute("value")}],[]).sort((a,b) => this.valueArray.indexOf(a.value) - this.valueArray.indexOf(b.value));
    this.inputRef.value.focus();
  }
  
  _deleteSelectedItem = e => {
    const value = e.currentTarget.dataset.value;
    this._filteredItemsOpened = false;
    this.valueArray = [...this.valueArray].filter(v=>v!==value);    
    const filteredNodes = this._slottedChildren.filter(item => [...this.valueArray].find(v=> v===item.getAttribute("value")));      
    console.log({filteredNodes});
    [...this._slottedChildren].forEach(node => {      
      node.style.display = "flex";
      node.classList.remove("focused");
    }); 
    filteredNodes.forEach(node => {
      node.style.display = "none";
    });
    this._selectedItems = filteredNodes.reduce((r,v)=>[...r,{"name":v.getAttribute("label"),"value":v.getAttribute("value")}],[]).sort((a,b) => this.valueArray.indexOf(a.value) - this.valueArray.indexOf(b.value));
  }

  _focusResult({children,key}) {
    const focusedNode= key === "ArrowDown" ? [...children].find(node => node.classList.contains("focused"))?.nextElementSibling || [...children][0] : [...children].find(node => node.classList.contains("focused"))?.previousElementSibling || [...children][children.length - 1];
    [...children].forEach(node => node.classList.remove("focused"));
    focusedNode.classList.add("focused");
    // console.log({focusedNode}) 
  }

  _onKeyUp(e) {
    const key = e.key;
    if (key === "ArrowDown" || key === "ArrowUp") {
      e.preventDefault();     
      this._focusResult({children: this._slottedChildren.filter(item => !this.valueArray.includes(item.getAttribute("value"))), key});
      return;
    }
  }
  
  _onFocusOut() {
    // this._filteredItemsOpened = false;
  }

  _onKeyDown(e) {
    // console.log(e.key);
    if (e.key === "Enter") {
      e.stopImmediatePropagation();
      e.preventDefault();
      
      const focusedNode = this._slottedChildren.find(node => node.classList.contains("focused"));
     
      if(focusedNode) {          
        const value = focusedNode.getAttribute("value");
       
        this.valueArray = [...this.valueArray].find(v=>v===value) ? this.valueArray : [...this.valueArray, value];
        const selectedItems = this._slottedChildren.filter(node => [...this.valueArray].find(v=> v===node.getAttribute("value")));
        this._slottedChildren.forEach(node => {
          node.style.display = "flex" ;
          node.classList.remove("focused");
        });   
        selectedItems.forEach(node => {
          node.style.display = "none";          
        });

        this._selectedItems = selectedItems.reduce((r,v)=>[...r,{"name":v.getAttribute("label"),"value":v.getAttribute("value")}],[]).sort((a,b) => this.valueArray.indexOf(a.value) - this.valueArray.indexOf(b.value));
      }
    } else if (e.key === "Escape") {
      this._filteredItemsOpened = false;
      this.inputRef.value.blur();     
      // this.inputRef.value.dispatchEvent(new Event('blur',{bubbles: true, composed: false}));
      return;
    }
  }

  _handleGeneralClick = (e) => {
    let elements = e.composedPath().filter((el) => {
      return el.tagName !== undefined && el.closest('comm-multiple-selector-raw') !== null;
      //return el.tagName !== undefined && el.tagName.includes("comm-menu-selector")
    });
    // console.log(elements,e.composedPath());
    if (elements.length === 0) {
      [...document.querySelectorAll('comm-multiple-selector-raw')]
      .filter((n) => n !== elements[0])
      .forEach((el) => {
        el._filteredItemsOpened = false;
      });
    }
  }

  _handleDragEnd = (e) => {    
    // this.dragSrcEl.style.removeProperty('opacity');
    this.dragSrcEl.style.removeProperty('font-weight');
    // this.dragSrcEl.style.removeProperty('color');
    
    this.shadowRoot.querySelectorAll('.drag-zone').forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  _handleDragStart = (e) => {
    // console.log("drag start");
    // e.target.style.opacity = '0.4';
    e.target.style.fontWeight = 'bold';
    // e.target.style.color = 'lightblue';

    this.dragSrcEl = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }

  _handleDragEnter = (e) => {
    e.target.classList.add('over');
  }

  _handleDragLeave = (e) =>{
    e.target.classList.remove('over');
  }
  
  _handleDragOver = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    // e.dataTransfer.dropEffect = 'move';
    return false;
  }
  
  _handleDrop = (e) => {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
   
    const itemIndex = [...e.target.closest('.results').querySelectorAll('.drag-zone')].findIndex(item => item === e.target);
   
    const {value} = this.dragSrcEl.querySelector('.item button').dataset;
    console.log({from: this.valueArray.findIndex(v => v === value),to:itemIndex, array: this.valueArray})
    this.valueArray = arrayMove([...this.valueArray], this.valueArray.findIndex(v => v === value), itemIndex).filter(v => v !== undefined);


    const filteredNodes = this._slottedChildren.filter(item => [...this.valueArray].find(v=> v===item.getAttribute("value")));  
    this._selectedItems = filteredNodes.reduce((r,v)=>[...r,{"name":v.getAttribute("label"),"value":v.getAttribute("value")}],[]).sort((a,b) => this.valueArray.indexOf(a.value) - this.valueArray.indexOf(b.value));
    //this._selectedItems = this.items.filter(item => this.valueArray.includes(item.Value)).sort((a, b) => this.valueArray.indexOf(a.Value) - this.valueArray.indexOf(b.Value));



    this.dragSrcEl.style.removeProperty('opacity');
    e.target.classList.remove('over');
    
    return false;
  }
  

  connectedCallback() {
    super.connectedCallback();   
    window.addEventListener('click', this._handleGeneralClick);    
  }

  disconnectedCallback() {    
    window.removeEventListener('click', this._handleGeneralClick);    
    super.disconnectedCallback();
  }
  
  render() {
   const filteredContainer = { display: this._filteredItemsOpened ? 'block' : 'none'};
   return html`
     ${guard([this._selectedItems], () => html`
         ${when(this._selectedItems.length > 0, () => html`
           <div class="results">
               <div class="drag-zone" @dragenter=${e=>this._handleDragEnter(e)} @dragleave=${e=>this._handleDragLeave(e)} @dragover=${e=>this._handleDragOver(e)} @dragend=${e=>this._handleDragEnd(e)} @drop=${e=>this._handleDrop(e)}></div>
               ${repeat(this._selectedItems, item=>item.value, ({name = "noName", value = ""},index) => html`
                <div class="drag-item" @dragstart=${e => this._handleDragStart(e)} draggable="true" @dragend=${e=>this._handleDragEnd(e)}>
                  <div class="item"><span class="drag-icon">${dragIcon}</span><span class="name">${name}</span><button type="button" tabindex="-1" @click=${this._deleteSelectedItem} data-name="${name}" data-value="${value}">${deleteIcon}</button></div>
                </div>
                <div class="drag-zone" @dragenter=${e=>this._handleDragEnter(e)} @dragleave=${e=>this._handleDragLeave(e)} @dragover=${e=>this._handleDragOver(e)} @dragend=${e=>this._handleDragEnd(e)} @drop=${e=>this._handleDrop(e)}></div>
             `)}
           </div>       
        `)}
     `)}
   
   <div class="search-container">
       <input type="text" class="search" placeholder="Search..." ${ref(this.inputRef)} @input=${this._onSearchInput} @focusin=${this._onFocusInput} @keyup=${e=>this._onKeyUp(e)} @keydown=${e=>this._onKeyDown(e)} @focusout=${this._onFocusOut}/>       
   </div>
   <div class="filtered-container" style="${styleMap(filteredContainer)}" @option-selected=${e=>this._onClickOption(e)}>
      <slot></slot>
   </div>
   `  
  }

  static styles= css`
    :host {
      display: inline-block;
      position: relative;
      width: var(--comm-element-width, 32ch);
    }  
    :host * {
       box-sizing: border-box;
    } 
    :host > comm-multiple-selector-option {
      display: none;
    }
    ::slotted(comm-multiple-selector-option.focused), ::slotted(comm-multiple-selector-option:focus), ::slotted(comm-multiple-selector-option:hover) {
      background-color: var(--comm-option-highlight, lavender);       
    }
    ::slotted(comm-multiple-selector-option:focus-visible) {  
      outline: 2px solid var(--comm-option-focus, mediumpurple);
    }
    ::slotted(comm-multiple-selector-option) {
      display: flex;
      align-items: center;
      width: 100%;
      border: none;  
      border-bottom: var(--comm-option-border-size, 1px) solid lavender;
      line-height: 1.1;   
      height: calc(var(--comm-element-lineheight, 2.5rem) - var(--comm-option-border-size, 1px));   
      background-color: #fff;
      cursor: pointer;
      text-align: left; 
    }
    svg {
       display: block;         
    }  
    button, input {
       font-size: var(--comm-element-font-size, 1rem);
    } 
    button {
       cursor: pointer;
    } 
    input {
       padding-inline: 0.5rem;
       line-height: var(--comm-element-lineheight, 1.5rem);
       width: 100%;
       border: var(--comm-element-border, 2px solid #000);
       background-color: var(--comm-element-background, lavender); 
       border-radius: var(--comm-element-border-radius, 0rem); 
        
    } 
    .results {        
        display: grid;
        grid-template-columns: minmax(0,1fr);
        gap: 0.125rem;
        width: var(--comm-element-width, 32ch);
        padding: 0.5rem;
        border: var(--comm-results-border, 2px solid black);
        margin-bottom: 0.5rem;
    }  
    .results .item {
        width: 100%;
        display: grid;
        grid-template-columns: 1.125rem 1fr 2.25rem;       
        align-items: center;
        padding-inline: 0.5rem;
        line-height: 1.1;
       
    }
    .drag-icon {
        margin-right: 0.125rem;        
    }  
    .drag-icon svg {
        width: 18px;
    }  
    .results button {
        border: none;
        outline: none;
        background: transparent;
    }
    .results button:hover {
        color: var(--comm-delete-color, red);
    }  
    
    .filtered-container {
        border: var(--comm-filtered-border, 1px solid lightgray);
        padding: 0.5rem;
        position: absolute;
        left: 0;
        top: 100%;
        min-width: max-content;
        max-width: var(--comm-element-width, 32ch);
        max-height: calc(calc(var(--comm-element-lineheight, 2.5rem) - var(--comm-option-border-size, 1px)) * 10);
        overflow: auto;
        width: 100%;
        background-color: #fff; 
        z-index: 2;
        
    }
    .drag-zone {
        transition: all 0.1s ease-out;
        border: 2px dashed transparent; 
    }
    .drag-zone {
        opacity: 0;
        height: 0.7rem; 
    }
    .drag-zone.over {
        border: 2px dashed mediumpurple; 
        background-color: lavender;
    }
    .drag-zone.over {
        opacity: 1;
        height: 3.4rem; 
    }
  
  `
}

customElements.get('comm-multiple-selector-raw') || customElements.define('comm-multiple-selector-raw', CommMultipleSelectorRaw);