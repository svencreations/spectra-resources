if (typeof yallJs === 'undefined' || typeof yallJs.yall !== 'function') {!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e||self).yallJs={})}(this,function(e){function o(e,o){for(const t in o){const n=o[t];e.addEventListener(t,n.listener||n,n.options||void 0)}}const t="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,n=/baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent),s=["src","poster"];function r(e,o){for(const t of s)t in e.dataset&&(e.setAttribute(t,e.dataset[t]),e.classList.contains(o)&&e.classList.remove(o))}function i(e,o,t,n){if("VIDEO"==e.nodeName){const t=Array.from(e.querySelectorAll("source"));for(const e of t)r(e,o);e.load()}r(e,o);const s=e.classList;s.contains(t)&&(s.remove(t),s.add(n))}e.yall=function(e){const s=e?.lazyClass||"lazy",r=e?.lazyBackgroundClass||"lazy-bg",c=e?.lazyBackgroundLoaded||"lazy-bg-loaded",a=e?.threshold||200,l=e?.events||{},d=e?.observeChanges||!1,f=e?.observeRootSelector||"body",u=e?.mutationObserverOptions||{childList:!0,subtree:!0},b=`video.${s},.${r}`;let y=Array.from(document.querySelectorAll(b));for(const e of y)o(e,l);if(!0===t&&!1===n){var v=new IntersectionObserver(e=>{for(const o of e)if(o.isIntersecting||o.intersectionRatio){const{target:e}=o;i(e,s,r,c),v.unobserve(e),y=y.filter(o=>o!=e),0===y.length&&!1===d&&v.disconnect()}},{rootMargin:`${a}px 0%`});for(const e of y)v.observe(e);d&&new MutationObserver(()=>{const e=document.querySelectorAll(b);for(const s of e)!1===y.includes(s)&&(y.push(s),o(s,l),!0===t&&!1===n&&v.observe(s))}).observe(document.querySelector(f),u)}else if(n)for(const e of y)i(e,s,r,c)}});
}if(typeof window.Marquee3k === "undefined") {!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Marquee3k=e()}(this,function(){"use strict";let t=0;class e{constructor(t,e){this.element=t,this.selector=e.selector,this.speed=t.dataset.speed||.25,this.pausable=t.dataset.pausable,this.reverse=t.dataset.reverse,this.paused=!1,this.parent=t.parentElement,this.parentProps=this.parent.getBoundingClientRect(),this.content=t.children[0],this.innerContent=this.content.innerHTML,this.wrapStyles="",this.offset=0,this._setupWrapper(),this._setupContent(),this._setupEvents(),this.wrapper.appendChild(this.content),this.element.appendChild(this.wrapper)}_setupWrapper(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("cismarquee__wrapper"),this.wrapper.style.whiteSpace="nowrap"}_setupContent(){this.content.classList.add(`${this.selector}__copy`),this.content.style.display="inline-block",this.contentWidth=this.content.offsetWidth,this.requiredReps=this.contentWidth>this.parentProps.width?2:Math.ceil((this.parentProps.width-this.contentWidth)/this.contentWidth)+1;for(let t=0;t<this.requiredReps;t++)this._createClone();this.reverse&&(this.offset=-1*this.contentWidth),this.element.classList.add("is-init")}_setupEvents(){this.element.addEventListener("mouseenter",()=>{this.pausable&&(this.paused=!0)}),this.element.addEventListener("mouseleave",()=>{this.pausable&&(this.paused=!1)})}_createClone(){const t=this.content.cloneNode(!0);t.style.display="inline-block",t.classList.add(`${this.selector}__copy`),this.wrapper.appendChild(t)}animate(){if(!this.paused){const t=this.reverse?this.offset<0:this.offset>-1*this.contentWidth,e=this.reverse?-1:1,s=this.reverse?-1*this.contentWidth:0;t?this.offset-=this.speed*e:this.offset=s,this.wrapper.style.whiteSpace="nowrap",this.wrapper.style.transform=`translate(${this.offset}px, 0) translateZ(0)`}}_refresh(){this.contentWidth=this.content.offsetWidth}repopulate(t,e){if(this.contentWidth=this.content.offsetWidth,e){const e=Math.ceil(t/this.contentWidth)+1;for(let t=0;t<e;t++)this._createClone()}}static refresh(t){MARQUEES[t]._refresh()}static pause(t){MARQUEES[t].paused=!0}static play(t){MARQUEES[t].paused=!1}static toggle(t){MARQUEES[t].paused=!MARQUEES[t].paused}static refreshAll(){for(let t=0;t<MARQUEES.length;t++)MARQUEES[t]._refresh()}static pauseAll(){for(let t=0;t<MARQUEES.length;t++)MARQUEES[t].paused=!0}static playAll(){for(let t=0;t<MARQUEES.length;t++)MARQUEES[t].paused=!1}static toggleAll(){for(let t=0;t<MARQUEES.length;t++)MARQUEES[t].paused=!MARQUEES[t].paused}static init(s={selector:"cismarquee"}){t&&window.cancelAnimationFrame(t),window.MARQUEES=[];const i=Array.from(document.querySelectorAll(`.${s.selector}`));let n,r=window.innerWidth;for(let t=0;t<i.length;t++){const n=i[t],r=new e(n,s);MARQUEES.push(r)}!function e(){for(let t=0;t<MARQUEES.length;t++)MARQUEES[t].animate();t=window.requestAnimationFrame(e)}(),window.addEventListener("resize",()=>{if(!Shopify.designMode){clearTimeout(n),n=setTimeout(()=>{const t=r<window.innerWidth,e=window.innerWidth-r;for(let s=0;s<MARQUEES.length;s++)MARQUEES[s].repopulate(e,t);r=this.innerWidth},250)}})}}return e});
}document.addEventListener("triggerMarquee",(function(){yallJs.yall({lazyClass:"cis-lazy"})}));for(var marquees=document.querySelectorAll(".cismarquee"),i=0;i<marquees.length;i++)marquees[i].setAttribute("data-marquee-index",i);function pauseChangeoverTickers(e){e.forEach((e=>{Marquee3k.pause(e)}))}function playChangeoverTickers(e){e.forEach((e=>{Marquee3k.play(e)}))}Marquee3k.init();const pausableChangeoverTickers=document.querySelectorAll('.cis-widget__ticker__wrapper[data-pausable="true"]');function pauseAllMarquees(){var e=document.querySelectorAll(".cismarquee");pauseChangeoverTickers(Array.from(e).map((e=>{const r=e.getAttribute("data-marquee-index");return parseInt(r,10)})))}function playAllMarquees(){var e=document.querySelectorAll(".cismarquee");playChangeoverTickers(Array.from(e).map((e=>{const r=e.getAttribute("data-marquee-index");return parseInt(r,10)})))}function cisDebounce(e,r){let a;return function(){const t=this,n=arguments;clearTimeout(a),a=setTimeout((()=>e.apply(t,n)),r)}}function refreshMarquee(){Marquee3k.length>0&&Marquee3k.refreshAll()}pausableChangeoverTickers.length>0&&pausableChangeoverTickers.forEach((e=>{const r=e.querySelectorAll(".cismarquee"),a=Array.from(r).map((e=>{const r=e.getAttribute("data-marquee-index");return parseInt(r,10)})).filter((e=>!isNaN(e)));e.addEventListener("mouseenter",(e=>{pauseChangeoverTickers(a)})),e.addEventListener("mouseleave",(e=>{playChangeoverTickers(a)}))}));document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".cis-dragging__enabled"),t=e.closest(".cis-widget__ticker__wrapper");let n,o;e.addEventListener("pointerdown",(function(e){e.preventDefault(),n=e.clientX;const i=t.getBoundingClientRect();function d(e){const d=e.clientX;let c=(o+(d-n))/i.width*100;c=Math.max(0,Math.min(100,c)),t.style.setProperty("--handle-position",`${c}%`)}o=e.clientX-i.left,document.addEventListener("pointermove",d),document.addEventListener("pointerup",(()=>{document.removeEventListener("pointermove",d)}),{once:!0})}))}));
