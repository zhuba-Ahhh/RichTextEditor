import{j as e,o as t,u as n,n as a,p as l,f as i,b as s,C as o,c,N as r,r as d}from"./.pnpm-HDZr3mw8.js";import{M as u,B as m,k as f,I as v}from"./index-B6LWV7O6.js";const p=e=>{var t;const n=null==(t=null==e?void 0:e.firstElementChild)?void 0:t.firstElementChild,a=e.getAttribute("viewBox");if(null!==a){const t=a.split(" ");e.setAttribute("width",t[2]),e.setAttribute("height",t[3])}n&&"style"===n.tagName&&n.remove()};function h({elements:t,files:n,imageContainerRef:a,appState:l,rootClassName:i=null}){const[s,o]=React.useState(null);return React.useEffect((()=>{(async()=>{const e=await ExcalidrawLib.exportToSvg({appState:l,elements:t,files:n});p(e),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e.setAttribute("display","block"),o(e)})()}),[t,n,l]),e.jsx("div",{ref:a,className:i??"",dangerouslySetInnerHTML:{__html:(null==s?void 0:s.outerHTML)??""}})}const x=()=>{const[e,t]=React.useState(null);return[e,React.useCallback((e=>t(e)),[])]};function b({closeOnClickOutside:t=!1,onSave:n,initialElements:a,initialAppState:l,initialFiles:i,isShown:s=!1,onDelete:o,onClose:c}){const r=React.useRef(null),[d,f]=x(),[v,p]=React.useState(!1),[h,b]=React.useState(a),[g,E]=React.useState(i);React.useEffect((()=>{null!==r.current&&r.current.focus()}),[]),React.useEffect((()=>{var e;let n=null;const a=e=>{const n=e.target;null!==r.current&&!r.current.contains(n)&&t&&o()};return null!==r.current&&(n=null==(e=r.current)?void 0:e.parentElement,null!==n&&(null==n||n.addEventListener("click",a))),()=>{null!==n&&(null==n||n.removeEventListener("click",a))}}),[t,o]),React.useLayoutEffect((()=>{const e=r.current,t=e=>{"Escape"===e.key&&o()};return null!==e&&e.addEventListener("keydown",t),()=>{null!==e&&e.removeEventListener("keydown",t)}}),[h,g,o]);function R(){return e.jsxs(u,{title:"Discard",onClose:()=>{p(!1)},closeOnClickOutside:!1,children:["Are you sure you want to discard the changes?",e.jsxs("div",{className:"ExcalidrawModal__discardModal",children:[e.jsx(m,{onClick:()=>{p(!1),c()},children:"Discard"})," ",e.jsx(m,{onClick:()=>{p(!1)},children:"Cancel"})]})]})}if(!1===s)return null;return ReactDOM.createPortal(e.jsx("div",{className:"ExcalidrawModal__overlay",role:"dialog",children:e.jsx("div",{className:"ExcalidrawModal__modal",ref:r,tabIndex:-1,children:e.jsxs("div",{className:"ExcalidrawModal__row",children:[v&&e.jsx(R,{}),e.jsx(ExcalidrawLib.Excalidraw,{onChange:(e,t,n)=>{b(e),E(n)},excalidrawAPI:f,initialData:{appState:l||{isLoading:!1},elements:a,files:i}}),e.jsxs("div",{className:"ExcalidrawModal__actions",children:[e.jsx("button",{className:"action-button",onClick:()=>{h&&0===h.filter((e=>!e.isDeleted)).length?o():p(!0)},children:"Discard"}),e.jsx("button",{className:"action-button",onClick:()=>{if(h&&h.filter((e=>!e.isDeleted)).length>0){const e=null==d?void 0:d.getAppState(),t={exportBackground:null==e?void 0:e.exportBackground,exportScale:null==e?void 0:e.exportScale,exportWithDarkMode:"dark"===(null==e?void 0:e.theme),isBindingEnabled:null==e?void 0:e.isBindingEnabled,isLoading:null==e?void 0:e.isLoading,name:null==e?void 0:e.name,theme:null==e?void 0:e.theme,viewBackgroundColor:null==e?void 0:e.viewBackgroundColor,viewModeEnabled:null==e?void 0:e.viewModeEnabled,zenModeEnabled:null==e?void 0:e.zenModeEnabled,zoom:null==e?void 0:e.zoom};n(h,t,g)}else o()},children:"Save"})]})]})})}),document.body)}function g({nodeKey:u,data:m}){const[p]=t(),[x,g]=React.useState("[]"===m&&p.isEditable()),E=React.useRef(null),R=React.useRef(null),C=React.useRef(null),[S,w,k]=n(u),[j,M]=React.useState(!1),y=React.useCallback((e=>(S&&a(l())&&(e.preventDefault(),p.update((()=>{const e=i(u);if(f(e))return e.remove(),!0}))),!1)),[p,S,u]);React.useEffect((()=>{x?p.setEditable(!1):p.setEditable(!0)}),[x,p]),React.useEffect((()=>s(p.registerCommand(d,(e=>{const t=R.current,n=e.target;return!!j||!(null===t||!t.contains(n))&&(e.shiftKey||k(),w(!S),e.detail>1&&g(!0),!0)}),c),p.registerCommand(r,y,c),p.registerCommand(o,y,c))),[k,p,S,j,y,w]);const N=React.useCallback((()=>(g(!1),p.update((()=>{const e=i(u);f(e)&&e.remove()})))),[p,u]),D=React.useCallback((()=>{g(!0)}),[]),{elements:L=[],files:_={},appState:A={}}=React.useMemo((()=>JSON.parse(m)),[m]);return e.jsxs(e.Fragment,{children:[e.jsx(b,{initialElements:L,initialFiles:_,initialAppState:A,isShown:x,onDelete:N,onClose:()=>g(!1),onSave:(e,t,n)=>{p.setEditable(!0),((e,t,n)=>{if(p.isEditable())p.update((()=>{const a=i(u);f(a)&&(e&&e.length>0||Object.keys(n).length>0?a.setData(JSON.stringify({appState:t,elements:e,files:n})):a.remove())}))})(e,t,n),g(!1)},closeOnClickOutside:!1}),L.length>0&&e.jsxs("button",{ref:R,className:"excalidraw-button "+(S?"selected":""),children:[e.jsx(h,{imageContainerRef:E,className:"image",elements:L,files:_,appState:A}),S&&e.jsx("div",{className:"image-edit-button",role:"button",tabIndex:0,onMouseDown:e=>e.preventDefault(),onClick:D}),(S||j)&&e.jsx(v,{buttonRef:C,showCaption:!0,setShowCaption:()=>null,imageRef:E,editor:p,onResizeStart:()=>{M(!0)},onResizeEnd:(e,t)=>{setTimeout((()=>{M(!1)}),200),p.update((()=>{const n=i(u);f(n)&&(n.setWidth(e),n.setHeight(t))}))},captionsEnabled:!0})]})]})}export{g as default};