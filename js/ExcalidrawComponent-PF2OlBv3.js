import{j as e,y as t,o as n,u as a,n as l,p as s,f as i,b as o,C as c,c as r,N as d,r as u}from"./.pnpm-DdfeM1XX.js";import{M as m,B as f,k as v,I as p}from"./index-CbJiYQpo.js";const h=e=>{var t;const n=null==(t=null==e?void 0:e.firstElementChild)?void 0:t.firstElementChild,a=e.getAttribute("viewBox");if(null!==a){const t=a.split(" ");e.setAttribute("width",t[2]),e.setAttribute("height",t[3])}n&&"style"===n.tagName&&n.remove()};function x({elements:n,files:a,imageContainerRef:l,appState:s,rootClassName:i=null}){const[o,c]=React.useState(null);return React.useEffect((()=>{(async()=>{const e=await t.exportToSvg({appState:s,elements:n,files:a});h(e),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e.setAttribute("display","block"),c(e)})()}),[n,a,s]),e.jsx("div",{ref:l,className:i??"",dangerouslySetInnerHTML:{__html:(null==o?void 0:o.outerHTML)??""}})}const g=()=>{const[e,t]=React.useState(null);return[e,React.useCallback((e=>t(e)),[])]};function b({closeOnClickOutside:n=!1,onSave:a,initialElements:l,initialAppState:s,initialFiles:i,isShown:o=!1,onDelete:c,onClose:r}){const d=React.useRef(null),[u,v]=g(),[p,h]=React.useState(!1),[x,b]=React.useState(l),[E,R]=React.useState(i);React.useEffect((()=>{null!==d.current&&d.current.focus()}),[]),React.useEffect((()=>{var e;let t=null;const a=e=>{const t=e.target;null!==d.current&&!d.current.contains(t)&&n&&c()};return null!==d.current&&(t=null==(e=d.current)?void 0:e.parentElement,null!==t&&(null==t||t.addEventListener("click",a))),()=>{null!==t&&(null==t||t.removeEventListener("click",a))}}),[n,c]),React.useLayoutEffect((()=>{const e=d.current,t=e=>{"Escape"===e.key&&c()};return null!==e&&e.addEventListener("keydown",t),()=>{null!==e&&e.removeEventListener("keydown",t)}}),[x,E,c]);function C(){return e.jsxs(m,{title:"Discard",onClose:()=>{h(!1)},closeOnClickOutside:!1,children:["Are you sure you want to discard the changes?",e.jsxs("div",{className:"ExcalidrawModal__discardModal",children:[e.jsx(f,{onClick:()=>{h(!1),r()},children:"Discard"})," ",e.jsx(f,{onClick:()=>{h(!1)},children:"Cancel"})]})]})}if(!1===o)return null;return ReactDOM.createPortal(e.jsx("div",{className:"ExcalidrawModal__overlay",role:"dialog",children:e.jsx("div",{className:"ExcalidrawModal__modal",ref:d,tabIndex:-1,children:e.jsxs("div",{className:"ExcalidrawModal__row",children:[p&&e.jsx(C,{}),e.jsx(t.Excalidraw,{onChange:(e,t,n)=>{b(e),R(n)},excalidrawAPI:v,initialData:{appState:s||{isLoading:!1},elements:l,files:i}}),e.jsxs("div",{className:"ExcalidrawModal__actions",children:[e.jsx("button",{className:"action-button",onClick:()=>{x&&0===x.filter((e=>!e.isDeleted)).length?c():h(!0)},children:"Discard"}),e.jsx("button",{className:"action-button",onClick:()=>{if(x&&x.filter((e=>!e.isDeleted)).length>0){const e=null==u?void 0:u.getAppState(),t={exportBackground:null==e?void 0:e.exportBackground,exportScale:null==e?void 0:e.exportScale,exportWithDarkMode:"dark"===(null==e?void 0:e.theme),isBindingEnabled:null==e?void 0:e.isBindingEnabled,isLoading:null==e?void 0:e.isLoading,name:null==e?void 0:e.name,theme:null==e?void 0:e.theme,viewBackgroundColor:null==e?void 0:e.viewBackgroundColor,viewModeEnabled:null==e?void 0:e.viewModeEnabled,zenModeEnabled:null==e?void 0:e.zenModeEnabled,zoom:null==e?void 0:e.zoom};a(x,t,E)}else c()},children:"Save"})]})]})})}),document.body)}function E({nodeKey:t,data:m}){const[f]=n(),[h,g]=React.useState("[]"===m&&f.isEditable()),E=React.useRef(null),R=React.useRef(null),C=React.useRef(null),[S,k,w]=a(t),[j,y]=React.useState(!1),M=React.useCallback((e=>(S&&l(s())&&(e.preventDefault(),f.update((()=>{const e=i(t);if(v(e))return e.remove(),!0}))),!1)),[f,S,t]);React.useEffect((()=>{h?f.setEditable(!1):f.setEditable(!0)}),[h,f]),React.useEffect((()=>o(f.registerCommand(u,(e=>{const t=R.current,n=e.target;return!!j||!(null===t||!t.contains(n))&&(e.shiftKey||w(),k(!S),e.detail>1&&g(!0),!0)}),r),f.registerCommand(d,M,r),f.registerCommand(c,M,r))),[w,f,S,j,M,k]);const N=React.useCallback((()=>(g(!1),f.update((()=>{const e=i(t);v(e)&&e.remove()})))),[f,t]),D=React.useCallback((()=>{g(!0)}),[]),{elements:_=[],files:A={},appState:L={}}=React.useMemo((()=>JSON.parse(m)),[m]);return e.jsxs(e.Fragment,{children:[e.jsx(b,{initialElements:_,initialFiles:A,initialAppState:L,isShown:h,onDelete:N,onClose:()=>g(!1),onSave:(e,n,a)=>{f.setEditable(!0),((e,n,a)=>{if(f.isEditable())f.update((()=>{const l=i(t);v(l)&&(e&&e.length>0||Object.keys(a).length>0?l.setData(JSON.stringify({appState:n,elements:e,files:a})):l.remove())}))})(e,n,a),g(!1)},closeOnClickOutside:!1}),_.length>0&&e.jsxs("button",{ref:R,className:"excalidraw-button "+(S?"selected":""),children:[e.jsx(x,{imageContainerRef:E,className:"image",elements:_,files:A,appState:L}),S&&e.jsx("div",{className:"image-edit-button",role:"button",tabIndex:0,onMouseDown:e=>e.preventDefault(),onClick:D}),(S||j)&&e.jsx(p,{buttonRef:C,showCaption:!0,setShowCaption:()=>null,imageRef:E,editor:f,onResizeStart:()=>{y(!0)},onResizeEnd:(e,n)=>{setTimeout((()=>{y(!1)}),200),f.update((()=>{const a=i(t);v(a)&&(a.setWidth(e),a.setHeight(n))}))},captionsEnabled:!0})]})]})}export{E as default};
