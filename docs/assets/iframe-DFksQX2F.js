function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-D8PdvdeS.js","./index-BASH1HpE.js","./Button-Cp5kmPgr.js","./jsx-runtime-BnIj46N_.js","./index-CsdIBAqE.js","./Button-BfyGbg8N.css","./Configure-uK1h-GTO.js","./index-DLsXyOuj.js","./index-DcJEHcYX.js","./index-5f0m1pej.js","./index-B_J8iUie.js","./index-B04q1QvB.js","./index-DrFu-skq.js","./Header.stories-Cka1x9op.js","./Header-C3yGVj0X.js","./Header-BjLH3naM.css","./MyLabel.stories-B52mNKnp.js","./MyLabel-y1YDYk2q.css","./Page.stories-BVdgt9e1.js","./Page-B9ntr4df.css","./entry-preview-D_EtyHKR.js","./react-18-Te5-Jngr.js","./entry-preview-docs-2OJQ6g8x.js","./preview-DzbRFJg_.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-Bi_jGxxs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(n,s){return new URL(n,s).href},O={},r=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in O)return;O[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let m=t.length-1;m>=0;m--){const a=t[m];if(a.href===i&&(!u||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":f,u||(_.as="script",_.crossOrigin=""),_.href=i,d&&_.setAttribute("nonce",d),document.head.appendChild(_),u)return new Promise((m,a)=>{_.addEventListener("load",m),_.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,E=P({page:"preview"});L.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const T={"./src/stories/Button.stories.ts":async()=>r(()=>import("./Button.stories-D8PdvdeS.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>r(()=>import("./Configure-uK1h-GTO.js"),__vite__mapDeps([6,3,4,7,8,9,10,11,12]),import.meta.url),"./src/stories/Header.stories.ts":async()=>r(()=>import("./Header.stories-Cka1x9op.js"),__vite__mapDeps([13,1,14,3,4,2,5,15]),import.meta.url),"./src/stories/MyLabel.stories.ts":async()=>r(()=>import("./MyLabel.stories-B52mNKnp.js"),__vite__mapDeps([16,3,4,17]),import.meta.url),"./src/stories/Page.stories.ts":async()=>r(()=>import("./Page.stories-BVdgt9e1.js"),__vite__mapDeps([18,1,3,4,14,2,5,15,19]),import.meta.url)};async function v(n){return T[n]()}const{composeConfigs:w,PreviewWeb:A,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const n=await Promise.all([r(()=>import("./entry-preview-D_EtyHKR.js"),__vite__mapDeps([20,4,21,9]),import.meta.url),r(()=>import("./entry-preview-docs-2OJQ6g8x.js"),__vite__mapDeps([22,11,4,12]),import.meta.url),r(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([23,10]),import.meta.url),r(()=>import("./preview-CgxtwbAQ.js"),[],import.meta.url),r(()=>import("./preview-DbT1mggi.js"),[],import.meta.url),r(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([24,12]),import.meta.url),r(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),r(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),r(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([25,12]),import.meta.url),r(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),r(()=>import("./preview-Bi_jGxxs.js"),__vite__mapDeps([26,1]),import.meta.url),r(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return w(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new A(v,y);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};
