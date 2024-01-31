var ze=Object.defineProperty;var Be=(r,e,t)=>e in r?ze(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>(Be(r,typeof e!="symbol"?e+"":e,t),t);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,oe=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),de=new WeakMap;let Ee=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(oe&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&de.set(t,e))}return e}toString(){return this.cssText}};const Fe=r=>new Ee(typeof r=="string"?r:r+"",void 0,ae),Te=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new Ee(t,r,ae)},je=(r,e)=>{if(oe)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=F.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},ue=oe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Fe(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ge,defineProperty:Ze,getOwnPropertyDescriptor:We,getOwnPropertyNames:Ke,getOwnPropertySymbols:Je,getPrototypeOf:Ye}=Object,A=globalThis,pe=A.trustedTypes,Xe=pe?pe.emptyScript:"",Y=A.reactiveElementPolyfillSupport,D=(r,e)=>r,ie={toAttribute(r,e){switch(e){case Boolean:r=r?Xe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Se=(r,e)=>!Ge(r,e),me={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:Se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ze(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=We(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??me}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const e=Ye(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const t=this.properties,s=[...Ke(t),...Je(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(ue(i))}else e!==void 0&&t.push(ue(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return je(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:ie).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ie;this._$Em=i,this[i]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Se)(this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$E_)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$Ej()}catch(i){throw e=!1,this._$Ej(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[D("elementProperties")]=new Map,k[D("finalized")]=new Map,Y==null||Y({ReactiveElement:k}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,G=q.trustedTypes,fe=G?G.createPolicy("lit-html",{createHTML:r=>r}):void 0,le="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,he="?"+y,Qe=`<${he}>`,S=document,L=()=>S.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",Ce=Array.isArray,ke=r=>Ce(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",X=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,ve=/>/g,b=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,_e=/"/g,Ie=/^(?:script|style|textarea|title)$/i,et=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=et(1),v=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ye=new WeakMap,E=S.createTreeWalker(S,129);function Ne(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(e):e}const Oe=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":"",o=P;for(let l=0;l<t;l++){const a=r[l];let c,f,h=-1,p=0;for(;p<a.length&&(o.lastIndex=p,f=o.exec(a),f!==null);)p=o.lastIndex,o===P?f[1]==="!--"?o=$e:f[1]!==void 0?o=ve:f[2]!==void 0?(Ie.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=b):f[3]!==void 0&&(o=b):o===b?f[0]===">"?(o=i??P,h=-1):f[1]===void 0?h=-2:(h=o.lastIndex-f[2].length,c=f[1],o=f[3]===void 0?b:f[3]==='"'?_e:ge):o===_e||o===ge?o=b:o===$e||o===ve?o=P:(o=b,i=void 0);const d=o===b&&r[l+1].startsWith("/>")?" ":"";n+=o===P?a+Qe:h>=0?(s.push(c),a.slice(0,h)+le+a.slice(h)+y+d):a+y+(h===-2?l:d)}return[Ne(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class V{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,f]=Oe(e,t);if(this.el=V.createElement(c,s),E.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=E.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(le)){const p=f[o++],d=i.getAttribute(h).split(y),$=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:$[2],strings:d,ctor:$[1]==="."?Ue:$[1]==="?"?Re:$[1]==="@"?De:z}),i.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(Ie.test(i.tagName)){const h=i.textContent.split(y),p=h.length-1;if(p>0){i.textContent=G?G.emptyScript:"";for(let d=0;d<p;d++)i.append(h[d],L()),E.nextNode(),a.push({type:2,index:++n});i.append(h[p],L())}}}else if(i.nodeType===8)if(i.data===he)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:n}),h+=y.length-1}n++}}static createElement(e,t){const s=S.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var o,l;if(e===v)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=H(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class Pe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??S).importNode(t,!0);E.currentNode=i;let n=E.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new I(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new qe(n,this,e)),this._$AV.push(c),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=E.nextNode(),o++)}return E.currentNode=S,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class I{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),H(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==v&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ke(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&H(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=V.createElement(Ne(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Pe(i,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new V(e)),t}T(e){Ce(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new I(this.k(L()),this.k(L()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=C(this,e,t,0),o=!H(e)||e!==this._$AH&&e!==v,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=C(this,l[s+a],t,a),c===v&&(c=this._$AH[a]),o||(o=!H(c)||c!==this._$AH[a]),c===m?e=m:e!==m&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.O(e)}O(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends z{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===m?void 0:e}}class Re extends z{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class De extends z{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??m)===v)return;const s=this._$AH,i=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const tt={j:le,P:y,A:he,C:1,M:Oe,L:Pe,R:ke,V:C,D:I,I:z,H:Re,N:De,U:Ue,B:qe},Q=q.litHtmlPolyfillSupport;Q==null||Q(V,I),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.1.1");const st=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new I(e.insertBefore(L(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return v}};var xe;T._$litElement$=!0,T.finalized=!0,(xe=globalThis.litElementHydrateSupport)==null||xe.call(globalThis,{LitElement:T});const ee=globalThis.litElementPolyfillSupport;ee==null||ee({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},N=r=>(...e)=>({_$litDirective$:r,values:e});let O=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:it}=tt,rt=r=>r.strings===void 0,Ae=()=>document.createComment(""),U=(r,e,t)=>{var n;const s=r._$AA.parentNode,i=e===void 0?r._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(Ae(),i),l=s.insertBefore(Ae(),i);t=new it(o,l,r,r.options)}else{const o=t._$AB.nextSibling,l=t._$AM,a=l!==r;if(a){let c;(n=t._$AQ)==null||n.call(t,r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==l._$AU&&t._$AP(c)}if(o!==i||a){let c=t._$AA;for(;c!==o;){const f=c.nextSibling;s.insertBefore(c,i),c=f}}}return t},w=(r,e,t=r)=>(r._$AI(e,t),r),nt={},ot=(r,e=nt)=>r._$AH=e,at=r=>r._$AH,te=r=>{var s;(s=r._$AP)==null||s.call(r,!1,!0);let e=r._$AA;const t=r._$AB.nextSibling;for(;e!==t;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=(r,e,t)=>{const s=new Map;for(let i=e;i<=t;i++)s.set(r[i],i);return s},we=N(class extends O{constructor(r){if(super(r),r.type!==B.CHILD)throw Error("repeat() can only be used in text expressions")}ht(r,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const i=[],n=[];let o=0;for(const l of r)i[o]=s?s(l,o):o,n[o]=t(l,o),o++;return{values:n,keys:i}}render(r,e,t){return this.ht(r,e,t).values}update(r,[e,t,s]){const i=at(r),{values:n,keys:o}=this.ht(e,t,s);if(!Array.isArray(i))return this.dt=o,n;const l=this.dt??(this.dt=[]),a=[];let c,f,h=0,p=i.length-1,d=0,$=n.length-1;for(;h<=p&&d<=$;)if(i[h]===null)h++;else if(i[p]===null)p--;else if(l[h]===o[d])a[d]=w(i[h],n[d]),h++,d++;else if(l[p]===o[$])a[$]=w(i[p],n[$]),p--,$--;else if(l[h]===o[$])a[$]=w(i[h],n[$]),U(r,a[$+1],i[h]),h++,$--;else if(l[p]===o[d])a[d]=w(i[p],n[d]),U(r,i[h],i[p]),p--,d++;else if(c===void 0&&(c=be(o,d,$),f=be(l,h,p)),c.has(l[h]))if(c.has(l[p])){const _=f.get(o[d]),J=_!==void 0?i[_]:null;if(J===null){const ce=U(r,i[h]);w(ce,n[d]),a[d]=ce}else a[d]=w(J,n[d]),U(r,i[h],J),i[_]=null;d++}else te(i[p]),p--;else te(i[h]),h++;for(;d<=$;){const _=U(r,a[$+1]);w(_,n[d]),a[d++]=_}for(;h<=p;){const _=i[h++];_!==null&&te(_)}return this.dt=o,ot(r,a),v}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me="important",lt=" !"+Me,ht=N(class extends O{constructor(r){var e;if(super(r),r.type!==B.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const s=r[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(r,[e]){const{style:t}=r.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(e)),this.render(e);for(const s of this.ut)e[s]==null&&(this.ut.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ut.add(s);const n=typeof i=="string"&&i.endsWith(lt);s.includes("-")||n?t.setProperty(s,n?i.slice(0,-11):i,n?Me:""):t[s]=i}}return v}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=r=>r??m;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let re=class extends O{constructor(e){if(super(e),this.et=m,e.type!==B.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this.vt=void 0,this.et=e;if(e===v)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};re.directiveName="unsafeHTML",re.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ne extends re{}ne.directiveName="unsafeSVG",ne.resultType=2;const K=N(ne);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(r,e)=>{var s;const t=r._$AN;if(t===void 0)return!1;for(const i of t)(s=i._$AO)==null||s.call(i,e,!1),M(i,e);return!0},Z=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Le=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),ut(e)}};function ct(r){this._$AN!==void 0?(Z(this),this._$AM=r,Le(this)):this._$AM=r}function dt(r,e=!1,t=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let n=t;n<s.length;n++)M(s[n],!1),Z(s[n]);else s!=null&&(M(s,!1),Z(s));else M(this,r)}const ut=r=>{r.type==B.CHILD&&(r._$AP??(r._$AP=dt),r._$AQ??(r._$AQ=ct))};class pt extends O{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Le(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),t&&(M(this,e),Z(this))}setValue(e){if(rt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=()=>new mt;class mt{}const se=new WeakMap,Ve=N(class extends pt{render(r){return m}update(r,[e]){var s;const t=e!==this.G;return t&&this.G!==void 0&&this.ot(void 0),(t||this.rt!==this.lt)&&(this.G=e,this.ct=(s=r.options)==null?void 0:s.host,this.ot(this.lt=r.element)),m}ot(r){if(typeof this.G=="function"){const e=this.ct??globalThis;let t=se.get(e);t===void 0&&(t=new WeakMap,se.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ct,void 0),t.set(this.G,r),r!==void 0&&this.G.call(this.ct,r)}else this.G.value=r}get rt(){var r,e;return typeof this.G=="function"?(r=se.get(this.ct??globalThis))==null?void 0:r.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(r,e,t){return r?e(r):t==null?void 0:t(r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft={},$t=N(class extends O{constructor(){super(...arguments),this.nt=ft}render(r,e){return e()}update(r,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every((s,i)=>s===this.nt[i]))return v}else if(this.nt===e)return v;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=N(class extends O{constructor(r){var e;if(super(r),r.type!==B.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var s,i;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((s=this.st)!=null&&s.has(n))&&this.it.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.it)n in e||(t.remove(n),this.it.delete(n));for(const n in e){const o=!!e[n];o===this.it.has(n)||(i=this.st)!=null&&i.has(n)||(o?(t.add(n),this.it.add(n)):(t.remove(n),this.it.delete(n)))}return v}}),gt=K(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>`),_t=K(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`);class R extends T{constructor(){super();u(this,"inputRef",He());u(this,"_increaseAmount",()=>{const t=this.step??1,s=x(this.max)?this.value+t>this.max?this.max:this.value+t:this.value+t;this.value=parseFloat(s.toFixed(2))});u(this,"_decreaseAmount",()=>{const t=this.step??1,s=x(this.min)?this.value-t<this.min?this.min:this.value-t:this.value-t;this.value=parseFloat(s.toFixed(2))});u(this,"_onKeyDown",t=>{t.key==="ArrowUp"?(t.preventDefault(),this._increaseAmount()):t.key==="ArrowDown"&&(t.preventDefault(),this._decreaseAmount())});u(this,"_onChange",t=>{t.preventDefault();const s=this.step??1,i=Number.isNaN(parseFloat(t.currentTarget.value))?1:parseFloat(t.currentTarget.value);let n=parseFloat(i.toFixed(2))??1;n=x(this.max)&&n>this.max?this.max:n,n=x(this.min)&&n<this.min?this.min:n,n=parseFloat((n%s).toFixed(2))!==0?parseFloat((Math.ceil(n/s)*s).toFixed(2)):n,this.value=n;const o=this.inputRef.value;o.value=n});this.value=1,this.type="number",this.internals=this.attachInternals(),this.stepper=!1,this.addEventListener("focus",t=>{this.inputRef.value.focus({focusVisible:!0})})}render(){const t=parseFloat(((this.step??1)%1).toFixed(2))!==0?"decimal":"numeric",s={hidesteps:this.stepper};return g`
      <div class="comm-container">
        ${W(this.stepper,()=>g`<button type="button" aria-label="decrease quantity" ?disabled=${this.readonly||this.disabled} @click=${this._decreaseAmount}>${_t}</button>`)}        
        <input ${Ve(this.inputRef)} type=${this.type} min=${x(this.min)} max=${x(this.max)} step=${x(this.step)} ?disabled=${this.disabled} ?readonly=${this.readonly} inputmode="${t}" .value=${this.value} @keydown=${i=>this._onKeyDown(i)} @change=${i=>this._onChange(i)} class=${vt(s)} autofocus />
        ${W(this.stepper,()=>g`<button type="button" aria-label="increase quantity" ?disabled=${this.readonly||this.disabled} @click=${this._increaseAmount}>${gt}</button>`)}
      </div>
    `}}u(R,"formAssociated",!0),u(R,"shadowRootOptions",{...T.shadowRootOptions,delegatesFocus:!0}),u(R,"properties",{value:{type:Number},disabled:{type:Boolean,attribute:"disabled"},min:{type:Number},max:{type:Number},step:{type:Number},type:{type:String},stepper:{type:Boolean,attribute:"stepper"},readonly:{type:Boolean}}),u(R,"styles",Te`
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
  `);customElements.define("comm-quantity",R);const yt=K('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z" fill="currentColor"/></svg>'),At=K(`
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z" fill="currentColor"/></svg>`),bt=(r,e,t)=>{if(t===e)return r;for(var s=r[e],i=t<e?-1:1,n=e;n!=t;n+=i)r[n]=r[n+i];return r[t]=s,r};class j extends T{constructor(){super();u(this,"inputRef",He());u(this,"dragSrcEl",null);u(this,"_onSearchInput",t=>{const s=t.currentTarget.value;this._filteredItems=this.items.filter(i=>i.Name.toLowerCase().includes(s.toLowerCase())&&![...this.valueArray].find(n=>n===i.Value))});u(this,"_onFocusInput",t=>{const s=t.currentTarget.value;this._filteredItems=s!==""?this.items.filter(i=>i.Name.toLowerCase().includes(s.toLowerCase())&&![...this.valueArray].find(n=>n===i.Value)):this.items.filter(i=>![...this.valueArray].find(n=>n===i.Value)),this._filteredItemsOpened=!0});u(this,"_onClickOption",t=>{const{value:s}=t.currentTarget.dataset,i=this.inputRef.value.value;this.valueArray=[...this.valueArray].find(n=>n===s)?this.valueArray:[...this.valueArray,s],this._filteredItems=i!==""?this.items.filter(n=>n.Name.toLowerCase().includes(i.toLowerCase())&&![...this.valueArray].find(o=>o===n.Value)):this.items.filter(n=>![...this.valueArray].find(o=>o===n.Value)),this._selectedItems=this.items.filter(n=>this.valueArray.includes(n.Value)).sort((n,o)=>this.valueArray.indexOf(n.Value)-this.valueArray.indexOf(o.Value)),this.inputRef.value.focus()});u(this,"_deleteSelectedItem",t=>{const s=t.currentTarget.dataset.value;this._filteredItemsOpened=!1,this.valueArray=[...this.valueArray].filter(i=>i!==s),this._selectedItems=this.items.filter(i=>this.valueArray.includes(i.Value)).sort((i,n)=>this.valueArray.indexOf(i.Value)-this.valueArray.indexOf(n.Value))});u(this,"_handleGeneralClick",t=>{let s=t.composedPath().filter(i=>i.tagName!==void 0&&i.closest("comm-multiple-selector")!==null);s.length===0&&[...document.querySelectorAll("comm-multiple-selector")].filter(i=>i!==s[0]).forEach(i=>{i._filteredItemsOpened=!1})});u(this,"_handleDragEnd",t=>{this.dragSrcEl.style.removeProperty("font-weight"),this.shadowRoot.querySelectorAll(".drag-zone").forEach(function(s){s.classList.remove("over")})});u(this,"_handleDragStart",t=>{t.target.style.fontWeight="bold",this.dragSrcEl=t.target,t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.target.innerHTML)});u(this,"_handleDragEnter",t=>{t.target.classList.add("over")});u(this,"_handleDragLeave",t=>{t.target.classList.remove("over")});u(this,"_handleDragOver",t=>(t.preventDefault&&t.preventDefault(),!1));u(this,"_handleDrop",t=>{t.stopPropagation&&t.stopPropagation();const s=[...t.target.closest(".results").querySelectorAll(".drag-zone")].findIndex(n=>n===t.target),{value:i}=this.dragSrcEl.querySelector(".item button").dataset;return this.valueArray=bt([...this.valueArray],this.valueArray.findIndex(n=>n===i),s>1?s-1:s).filter(n=>n!==void 0),this._selectedItems=this.items.filter(n=>this.valueArray.includes(n.Value)).sort((n,o)=>this.valueArray.indexOf(n.Value)-this.valueArray.indexOf(o.Value)),this.dragSrcEl.style.removeProperty("opacity"),t.target.classList.remove("over"),!1});this.internals=this.attachInternals(),this.valueArray=[],this.value="",this.items=[],this._filteredItems=[],this._filteredItemsOpened=!1,this._selectedItems=[]}firstUpdated(){this._filteredItems=this.items,this._selectedItems=this.items.filter(t=>this.valueArray.includes(t.Value)).sort((t,s)=>this.valueArray.indexOf(t.Value)-this.valueArray.indexOf(s.Value))}willUpdate(t){t.has("valueArray")&&(this.value=this.valueArray.join(","))}_focusResult({children:t,key:s}){var n,o;const i=s==="ArrowDown"?((n=[...t].find(l=>l.classList.contains("focused")))==null?void 0:n.nextElementSibling)||[...t][0]:((o=[...t].find(l=>l.classList.contains("focused")))==null?void 0:o.previousElementSibling)||[...t][t.length-1];[...t].forEach(l=>l.classList.remove("focused")),i.classList.add("focused")}_onKeyUp(t){const s=t.key,i=this.shadowRoot.querySelectorAll(".filtered-container .item");if(s==="ArrowDown"||s==="ArrowUp"){t.preventDefault(),this._focusResult({children:i,key:s});return}}_onFocusOut(){}_onKeyDown(t){if(t.key==="Enter"){t.stopImmediatePropagation(),t.preventDefault();const s=[...this.shadowRoot.querySelectorAll(".filtered-container .item")].find(i=>i.classList.contains("focused"));if(s){const i=s.dataset.value,n=t.currentTarget.value;this.valueArray=[...this.valueArray].find(o=>o===i)?this.valueArray:[...this.valueArray,i],this._filteredItems=n!==""?this.items.filter(o=>o.Name.toLowerCase().includes(n.toLowerCase())&&![...this.valueArray].find(l=>l===o.Value)):this.items.filter(o=>![...this.valueArray].find(l=>l===o.Value)),this._selectedItems=this.items.filter(o=>this.valueArray.includes(o.Value)).sort((o,l)=>this.valueArray.indexOf(o.Value)-this.valueArray.indexOf(l.Value))}}else if(t.key==="Escape"){this._filteredItemsOpened=!1,this.inputRef.value.blur();return}}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._handleGeneralClick)}disconnectedCallback(){window.removeEventListener("click",this._handleGeneralClick),super.disconnectedCallback()}render(){const t={display:this._filteredItemsOpened?"block":"none"};return g`
     ${$t([this._selectedItems],()=>g`
         ${W(this._selectedItems.length>0,()=>g`
           <div class="results">
               <div class="drag-zone" @dragenter=${s=>this._handleDragEnter(s)} @dragleave=${s=>this._handleDragLeave(s)} @dragover=${s=>this._handleDragOver(s)} @dragend=${s=>this._handleDragEnd(s)} @drop=${s=>this._handleDrop(s)}></div>
               ${we(this._selectedItems,s=>s.Value,({Name:s="noName",Value:i=""},n)=>g`
                <div class="drag-item" @dragstart=${o=>this._handleDragStart(o)} draggable="true" @dragend=${o=>this._handleDragEnd(o)}>
                  <div class="item"><span class="drag-icon">${At}</span><span class="name">${s}</span><button type="button" tabindex="-1" @click=${this._deleteSelectedItem} data-name="${s}" data-value="${i}">${yt}</button></div>
                </div>
                <div class="drag-zone" @dragenter=${o=>this._handleDragEnter(o)} @dragleave=${o=>this._handleDragLeave(o)} @dragover=${o=>this._handleDragOver(o)} @dragend=${o=>this._handleDragEnd(o)} @drop=${o=>this._handleDrop(o)}></div>
             `)}
           </div>       
        `)}
     `)}
   
   <div class="search-container">
       <input type="text" class="search" placeholder="Search..." ${Ve(this.inputRef)} @input=${this._onSearchInput} @focusin=${this._onFocusInput} @keyup=${s=>this._onKeyUp(s)} @keydown=${s=>this._onKeyDown(s)} @focusout=${this._onFocusOut}/>       
   </div>
   <div class="filtered-container" style="${ht(t)}">
   ${W(this._filteredItems.length>0,()=>g`
       ${we(this._filteredItems,({Name:s="noName",Value:i=""})=>g`
       <button type="button" class="item" data-value="${i}" @click=${this._onClickOption} tabindex="-1">${s}</button>
       `)}   
   `,()=>g`<span>No results</span>`)}        
   </div>
   `}}u(j,"formAssociated",!0),u(j,"properties",{value:{type:String},valueArray:{attribute:"selected",converter:(t,s)=>t.split(",")},items:{type:Array},_filteredItems:{state:!0},_filteredItemsOpened:{state:!0},_selectedItems:{state:!0}}),u(j,"styles",Te`
    :host {
      display: inline-block;
      position: relative;
      width: var(--comm-element-width, 32ch);
    }  
    :host * {
       box-sizing: border-box;
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
    .filtered-container .item {
      display: block;
      width: 100%;
      border: none;  
      border-bottom: var(--comm-option-border-size, 1px) solid lavender;
      line-height: 1.1;   
      height: calc(var(--comm-element-lineheight, 2.5rem) - var(--comm-option-border-size, 1px));   
      background-color: #fff;
      cursor: pointer;
      text-align: left;        
    }
    .filtered-container .item:hover {
      background-color: var(--comm-option-highlight, lavender);   
    }
    .filtered-container .item:focus,  .filtered-container .item.focused{
        background-color: var(--comm-option-highlight, lavender);       
    }
    .filtered-container .item:focus-visible {
        outline: 2px solid var(--comm-option-focus, mediumpurple);
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
  
  `);customElements.define("comm-multiple-selector",j);
