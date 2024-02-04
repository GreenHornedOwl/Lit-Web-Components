var qe=Object.defineProperty;var He=(r,e,t)=>e in r?qe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var $=(r,e,t)=>(He(r,typeof e!="symbol"?e+"":e,t),t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,ie=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),ae=new WeakMap;let ye=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ie&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ae.set(t,e))}return e}toString(){return this.cssText}};const De=r=>new ye(typeof r=="string"?r:r+"",void 0,re),be=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ye(t,r,re)},Re=(r,e)=>{if(ie)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},he=ie?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return De(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ze,defineProperty:Be,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:je,getOwnPropertySymbols:Ze,getPrototypeOf:Ve}=Object,A=globalThis,de=A.trustedTypes,We=de?de.emptyScript:"",W=A.reactiveElementPolyfillSupport,N=(r,e)=>r,X={toAttribute(r,e){switch(e){case Boolean:r=r?We:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ee=(r,e)=>!ze(r,e),ce={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Be(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=Ge(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=Ve(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,s=[...je(t),...Ze(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(he(i))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Re(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:X).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:X;this._$Em=i,this[i]=l.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ee)(this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$E_)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$Ej()}catch(i){throw e=!1,this._$Ej(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[N("elementProperties")]=new Map,x[N("finalized")]=new Map,W==null||W({ReactiveElement:x}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,G=I.trustedTypes,ue=G?G.createPolicy("lit-html",{createHTML:r=>r}):void 0,ne="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,oe="?"+g,Ke=`<${oe}>`,w=document,L=()=>w.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",we=Array.isArray,Ce=r=>we(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",K=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,fe=/>/g,y=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,ve=/"/g,xe=/^(?:script|style|textarea|title)$/i,Fe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),P=Fe(1),m=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),me=new WeakMap,E=w.createTreeWalker(w,129);function Te(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(e):e}const Se=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":"",n=k;for(let l=0;l<t;l++){const a=r[l];let d,f,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,f=n.exec(a),f!==null);)u=n.lastIndex,n===k?f[1]==="!--"?n=pe:f[1]!==void 0?n=fe:f[2]!==void 0?(xe.test(f[2])&&(i=RegExp("</"+f[2],"g")),n=y):f[3]!==void 0&&(n=y):n===y?f[0]===">"?(n=i??k,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,d=f[1],n=f[3]===void 0?y:f[3]==='"'?ve:$e):n===ve||n===$e?n=y:n===pe||n===fe?n=k:(n=y,i=void 0);const c=n===y&&r[l+1].startsWith("/>")?" ":"";o+=n===k?a+Ke:h>=0?(s.push(d),a.slice(0,h)+ne+a.slice(h)+g+c):a+g+(h===-2?l:c)}return[Te(r,o+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class q{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[d,f]=Se(e,t);if(this.el=q.createElement(d,s),E.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=E.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ne)){const u=f[n++],c=i.getAttribute(h).split(g),v=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:v[2],strings:c,ctor:v[1]==="."?Oe:v[1]==="?"?Pe:v[1]==="@"?Ne:H}),i.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(xe.test(i.tagName)){const h=i.textContent.split(g),u=h.length-1;if(u>0){i.textContent=G?G.emptyScript:"";for(let c=0;c<u;c++)i.append(h[c],L()),E.nextNode(),a.push({type:2,index:++o});i.append(h[u],L())}}}else if(i.nodeType===8)if(i.data===oe)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var n,l;if(e===m)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=M(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);E.currentNode=i;let o=E.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new S(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new Ie(o,this,e)),this._$AV.push(d),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=E.nextNode(),n++)}return E.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class S{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),M(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==m&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ce(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&M(this._$AH)?this._$AA.nextSibling.data=e:this.$(w.createTextNode(e)),this._$AH=e}g(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=q.createElement(Te(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const n=new ke(i,this),l=n.u(this.options);n.p(t),this.$(l),this._$AH=n}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new q(e)),t}T(e){we(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new S(this.k(L()),this.k(L()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=C(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==m,n&&(this._$AH=e);else{const l=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=C(this,l[s+a],t,a),d===m&&(d=this._$AH[a]),n||(n=!M(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.O(e)}O(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Oe extends H{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===p?void 0:e}}class Pe extends H{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ne extends H{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??p)===m)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ie{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const Je={j:ne,P:g,A:oe,C:1,M:Se,L:ke,R:Ce,V:C,D:S,I:H,H:Pe,N:Ne,U:Oe,B:Ie},F=I.litHtmlPolyfillSupport;F==null||F(q,S),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.1.1");const Qe=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new S(e.insertBefore(L(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return m}};var Ae;T._$litElement$=!0,T.finalized=!0,(Ae=globalThis.litElementHydrateSupport)==null||Ae.call(globalThis,{LitElement:T});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=r=>r??p;class ee extends T{constructor(){super();$(this,"_onClickOption",t=>{const{value:s=""}=t.currentTarget.dataset;this.dispatchEvent(new CustomEvent("option-selected",{bubbles:!0,composed:!0,detail:{value:s}}))});this.value="",this.label=""}render(){return P`<button type="button" class="item" data-label=${Ye(this.label)} data-value="${this.value}" @click=${t=>this._onClickOption(t)} tabindex="-1"><slot></slot></button>`}}$(ee,"properties",{value:{type:String},label:{type:String}}),$(ee,"styles",be`
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
  `);customElements.define("comm-multiple-selector-option",ee);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D=r=>(...e)=>({_$litDirective$:r,values:e});let R=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Xe}=Je,et=r=>r.strings===void 0,_e=()=>document.createComment(""),O=(r,e,t)=>{var o;const s=r._$AA.parentNode,i=e===void 0?r._$AB:e._$AA;if(t===void 0){const n=s.insertBefore(_e(),i),l=s.insertBefore(_e(),i);t=new Xe(n,l,r,r.options)}else{const n=t._$AB.nextSibling,l=t._$AM,a=l!==r;if(a){let d;(o=t._$AQ)==null||o.call(t,r),t._$AM=r,t._$AP!==void 0&&(d=r._$AU)!==l._$AU&&t._$AP(d)}if(n!==i||a){let d=t._$AA;for(;d!==n;){const f=d.nextSibling;s.insertBefore(d,i),d=f}}}return t},b=(r,e,t=r)=>(r._$AI(e,t),r),tt={},st=(r,e=tt)=>r._$AH=e,it=r=>r._$AH,Q=r=>{var s;(s=r._$AP)==null||s.call(r,!1,!0);let e=r._$AA;const t=r._$AB.nextSibling;for(;e!==t;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=(r,e,t)=>{const s=new Map;for(let i=e;i<=t;i++)s.set(r[i],i);return s},rt=D(class extends R{constructor(r){if(super(r),r.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}ht(r,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const i=[],o=[];let n=0;for(const l of r)i[n]=s?s(l,n):n,o[n]=t(l,n),n++;return{values:o,keys:i}}render(r,e,t){return this.ht(r,e,t).values}update(r,[e,t,s]){const i=it(r),{values:o,keys:n}=this.ht(e,t,s);if(!Array.isArray(i))return this.dt=n,o;const l=this.dt??(this.dt=[]),a=[];let d,f,h=0,u=i.length-1,c=0,v=o.length-1;for(;h<=u&&c<=v;)if(i[h]===null)h++;else if(i[u]===null)u--;else if(l[h]===n[c])a[c]=b(i[h],o[c]),h++,c++;else if(l[u]===n[v])a[v]=b(i[u],o[v]),u--,v--;else if(l[h]===n[v])a[v]=b(i[h],o[v]),O(r,a[v+1],i[h]),h++,v--;else if(l[u]===n[c])a[c]=b(i[u],o[c]),O(r,i[h],i[u]),u--,c++;else if(d===void 0&&(d=ge(n,c,v),f=ge(l,h,u)),d.has(l[h]))if(d.has(l[u])){const _=f.get(n[c]),V=_!==void 0?i[_]:null;if(V===null){const le=O(r,i[h]);b(le,o[c]),a[c]=le}else a[c]=b(V,o[c]),O(r,i[h],V),i[_]=null;c++}else Q(i[u]),u--;else Q(i[h]),h++;for(;c<=v;){const _=O(r,a[v+1]);b(_,o[c]),a[c++]=_}for(;h<=u;){const _=i[h++];_!==null&&Q(_)}return this.dt=n,st(r,a),m}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue="important",nt=" !"+Ue,ot=D(class extends R{constructor(r){var e;if(super(r),r.type!==Z.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const s=r[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(r,[e]){const{style:t}=r.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(e)),this.render(e);for(const s of this.ut)e[s]==null&&(this.ut.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ut.add(s);const o=typeof i=="string"&&i.endsWith(nt);s.includes("-")||o?t.setProperty(s,o?i.slice(0,-11):i,o?Ue:""):t[s]=i}}return m}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let te=class extends R{constructor(e){if(super(e),this.et=p,e.type!==Z.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===p||e==null)return this.vt=void 0,this.et=e;if(e===m)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};te.directiveName="unsafeHTML",te.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class se extends te{}se.directiveName="unsafeSVG",se.resultType=2;const Le=D(se);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=(r,e)=>{var s;const t=r._$AN;if(t===void 0)return!1;for(const i of t)(s=i._$AO)==null||s.call(i,e,!1),U(i,e);return!0},j=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Me=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),ht(e)}};function lt(r){this._$AN!==void 0?(j(this),this._$AM=r,Me(this)):this._$AM=r}function at(r,e=!1,t=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)U(s[o],!1),j(s[o]);else s!=null&&(U(s,!1),j(s));else U(this,r)}const ht=r=>{r.type==Z.CHILD&&(r._$AP??(r._$AP=at),r._$AQ??(r._$AQ=lt))};class dt extends R{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Me(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),t&&(U(this,e),j(this))}setValue(e){if(et(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=()=>new ut;class ut{}const Y=new WeakMap,pt=D(class extends dt{render(r){return p}update(r,[e]){var s;const t=e!==this.G;return t&&this.G!==void 0&&this.ot(void 0),(t||this.rt!==this.lt)&&(this.G=e,this.ct=(s=r.options)==null?void 0:s.host,this.ot(this.lt=r.element)),p}ot(r){if(typeof this.G=="function"){const e=this.ct??globalThis;let t=Y.get(e);t===void 0&&(t=new WeakMap,Y.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ct,void 0),t.set(this.G,r),r!==void 0&&this.G.call(this.ct,r)}else this.G.value=r}get rt(){var r,e;return typeof this.G=="function"?(r=Y.get(this.ct??globalThis))==null?void 0:r.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(r,e,t){return r?e(r):t==null?void 0:t(r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={},vt=D(class extends R{constructor(){super(...arguments),this.nt=$t}render(r,e){return e()}update(r,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every((s,i)=>s===this.nt[i]))return m}else if(this.nt===e)return m;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,t)}}),mt=Le('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z" fill="currentColor"/></svg>'),_t=Le(`
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" fill="currentColor"/></svg>`),gt=(r,e,t)=>{const s=[...r];return e>=t?s.splice(t,0,s.splice(e,1)[0]):s.splice(t-1,0,s.splice(e,1)[0]),s};class B extends T{constructor(){super();$(this,"inputRef",ct());$(this,"dragSrcEl",null);$(this,"_onSearchInput",t=>{const s=t.currentTarget.value,i=this._slottedChildren.filter(o=>o.getAttribute("label").toLowerCase().includes(s.toLowerCase())&&![...this.valueArray].find(n=>n===o.getAttribute("value")));this._slottedChildren.forEach(o=>{o.style.display="none",o.classList.remove("focused")}),i.forEach(o=>{o.style.display="flex"})});$(this,"_onFocusInput",t=>{const s=t.currentTarget.value;let i=this._slottedChildren;s!==""?i=this._slottedChildren.filter(o=>o.getAttribute("label").toLowerCase().includes(s.toLowerCase())&&![...this.valueArray].find(n=>n===o.getAttribute("value"))||this.valueArray.includes(o.getAttribute("value"))):i=this._slottedChildren.filter(o=>[...this.valueArray].find(n=>n===o.getAttribute("value"))),this._slottedChildren.forEach(o=>{o.style.display="flex",o.classList.remove("focused")}),i.forEach(o=>{o.style.display="none"}),this._filteredItemsOpened=!0});$(this,"_onClickOption",t=>{const{value:s}=t.detail??"",i=this.inputRef.value.value;this.valueArray=[...this.valueArray].find(n=>n===s)?this.valueArray:[...this.valueArray,s];let o=this._slottedChildren;i!==""?o=this._slottedChildren.filter(n=>n.getAttribute("label").toLowerCase().includes(i.toLowerCase())&&![...this.valueArray].find(l=>l===n.getAttribute("value"))||this.valueArray.includes(n.getAttribute("value"))):o=this._slottedChildren.filter(n=>[...this.valueArray].find(l=>l===n.getAttribute("value"))),this._slottedChildren.forEach(n=>{n.style.display="flex",n.classList.remove("focused")}),o.forEach(n=>{n.style.display="none"}),this._selectedItems=this._slottedChildren.filter(n=>this.valueArray.includes(n.getAttribute("value"))).reduce((n,l)=>[...n,{name:l.getAttribute("label"),value:l.getAttribute("value")}],[]).sort((n,l)=>this.valueArray.indexOf(n.value)-this.valueArray.indexOf(l.value)),this.inputRef.value.focus()});$(this,"_deleteSelectedItem",t=>{const s=t.currentTarget.dataset.value;this._filteredItemsOpened=!1,this.valueArray=[...this.valueArray].filter(o=>o!==s);const i=this._slottedChildren.filter(o=>[...this.valueArray].find(n=>n===o.getAttribute("value")));console.log({filteredNodes:i}),[...this._slottedChildren].forEach(o=>{o.style.display="flex",o.classList.remove("focused")}),i.forEach(o=>{o.style.display="none"}),this._selectedItems=i.reduce((o,n)=>[...o,{name:n.getAttribute("label"),value:n.getAttribute("value")}],[]).sort((o,n)=>this.valueArray.indexOf(o.value)-this.valueArray.indexOf(n.value))});$(this,"_handleGeneralClick",t=>{let s=t.composedPath().filter(i=>i.tagName!==void 0&&i.closest("comm-multiple-selector-raw")!==null);s.length===0&&[...document.querySelectorAll("comm-multiple-selector-raw")].filter(i=>i!==s[0]).forEach(i=>{i._filteredItemsOpened=!1})});$(this,"_handleDragEnd",t=>{this.dragSrcEl.style.removeProperty("font-weight"),this.shadowRoot.querySelectorAll(".drag-zone").forEach(function(s){s.classList.remove("over")})});$(this,"_handleDragStart",t=>{t.target.style.fontWeight="bold",this.dragSrcEl=t.target,t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.target.innerHTML)});$(this,"_handleDragEnter",t=>{t.target.classList.add("over")});$(this,"_handleDragLeave",t=>{t.target.classList.remove("over")});$(this,"_handleDragOver",t=>(t.preventDefault&&t.preventDefault(),!1));$(this,"_handleDrop",t=>{t.stopPropagation&&t.stopPropagation();const s=[...t.target.closest(".results").querySelectorAll(".drag-zone")].findIndex(n=>n===t.target),{value:i}=this.dragSrcEl.querySelector(".item button").dataset;console.log({from:this.valueArray.findIndex(n=>n===i),to:s,array:this.valueArray}),this.valueArray=gt([...this.valueArray],this.valueArray.findIndex(n=>n===i),s).filter(n=>n!==void 0);const o=this._slottedChildren.filter(n=>[...this.valueArray].find(l=>l===n.getAttribute("value")));return this._selectedItems=o.reduce((n,l)=>[...n,{name:l.getAttribute("label"),value:l.getAttribute("value")}],[]).sort((n,l)=>this.valueArray.indexOf(n.value)-this.valueArray.indexOf(l.value)),this.dragSrcEl.style.removeProperty("opacity"),t.target.classList.remove("over"),!1});this.internals=this.attachInternals(),this.valueArray=[],this.value="",this.items=[],this._filteredItems=[],this._filteredItemsOpened=!1,this._selectedItems=[]}get _slottedChildren(){return this.shadowRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(s=>s.nodeName==="COMM-MULTIPLE-SELECTOR-OPTION")}firstUpdated(){const t=this._slottedChildren.filter(s=>this.valueArray.includes(s.getAttribute("value")));this._selectedItems=t.reduce((s,i)=>[...s,{name:i.getAttribute("label"),value:i.getAttribute("value")}],[]).sort((s,i)=>this.valueArray.indexOf(s.value)-this.valueArray.indexOf(i.value)),t.forEach(s=>{s.style.display="none"})}updated(t){t.has("value")&&this.internals.setFormValue(this.value)}willUpdate(t){t.has("valueArray")&&(this.value=this.valueArray.join(","))}_focusResult({children:t,key:s}){var o,n;const i=s==="ArrowDown"?((o=[...t].find(l=>l.classList.contains("focused")))==null?void 0:o.nextElementSibling)||[...t][0]:((n=[...t].find(l=>l.classList.contains("focused")))==null?void 0:n.previousElementSibling)||[...t][t.length-1];[...t].forEach(l=>l.classList.remove("focused")),i.classList.add("focused")}_onKeyUp(t){const s=t.key;if(s==="ArrowDown"||s==="ArrowUp"){t.preventDefault(),this._focusResult({children:this._slottedChildren.filter(i=>!this.valueArray.includes(i.getAttribute("value"))),key:s});return}}_onFocusOut(){}_onKeyDown(t){if(t.key==="Enter"){t.stopImmediatePropagation(),t.preventDefault();const s=this._slottedChildren.find(i=>i.classList.contains("focused"));if(s){const i=s.getAttribute("value");this.valueArray=[...this.valueArray].find(n=>n===i)?this.valueArray:[...this.valueArray,i];const o=this._slottedChildren.filter(n=>[...this.valueArray].find(l=>l===n.getAttribute("value")));this._slottedChildren.forEach(n=>{n.style.display="flex",n.classList.remove("focused")}),o.forEach(n=>{n.style.display="none"}),this._selectedItems=o.reduce((n,l)=>[...n,{name:l.getAttribute("label"),value:l.getAttribute("value")}],[]).sort((n,l)=>this.valueArray.indexOf(n.value)-this.valueArray.indexOf(l.value))}}else if(t.key==="Escape"){this._filteredItemsOpened=!1,this.inputRef.value.blur();return}}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._handleGeneralClick)}disconnectedCallback(){window.removeEventListener("click",this._handleGeneralClick),super.disconnectedCallback()}render(){const t={display:this._filteredItemsOpened?"block":"none"};return P`
     ${vt([this._selectedItems],()=>P`
         ${ft(this._selectedItems.length>0,()=>P`
           <div class="results">
               <div class="drag-zone" @dragenter=${s=>this._handleDragEnter(s)} @dragleave=${s=>this._handleDragLeave(s)} @dragover=${s=>this._handleDragOver(s)} @dragend=${s=>this._handleDragEnd(s)} @drop=${s=>this._handleDrop(s)}></div>
               ${rt(this._selectedItems,s=>s.value,({name:s="noName",value:i=""},o)=>P`
                <div class="drag-item" @dragstart=${n=>this._handleDragStart(n)} draggable="true" @dragend=${n=>this._handleDragEnd(n)}>
                  <div class="item"><span class="drag-icon">${_t}</span><span class="name">${s}</span><button type="button" tabindex="-1" @click=${this._deleteSelectedItem} data-name="${s}" data-value="${i}">${mt}</button></div>
                </div>
                <div class="drag-zone" @dragenter=${n=>this._handleDragEnter(n)} @dragleave=${n=>this._handleDragLeave(n)} @dragover=${n=>this._handleDragOver(n)} @dragend=${n=>this._handleDragEnd(n)} @drop=${n=>this._handleDrop(n)}></div>
             `)}
           </div>       
        `)}
     `)}
   
   <div class="search-container">
       <input type="text" class="search" placeholder="Search..." ${pt(this.inputRef)} @input=${this._onSearchInput} @focusin=${this._onFocusInput} @keyup=${s=>this._onKeyUp(s)} @keydown=${s=>this._onKeyDown(s)} @focusout=${this._onFocusOut}/>       
   </div>
   <div class="filtered-container" style="${ot(t)}" @option-selected=${s=>this._onClickOption(s)}>
      <slot></slot>
   </div>
   `}}$(B,"formAssociated",!0),$(B,"properties",{value:{type:String},valueArray:{attribute:"selected",converter:(t,s)=>t.split(",")},items:{type:Array,attribute:"items"},_filteredItems:{state:!0},_filteredItemsOpened:{state:!0},_selectedItems:{state:!0}}),$(B,"styles",be`
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
  
  `);customElements.get("comm-multiple-selector-raw")||customElements.define("comm-multiple-selector-raw",B);
