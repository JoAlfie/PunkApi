"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Accordion=function(){function n(t,e){var o=c.toggleClass,n=t.querySelector(".".concat(o));console.log("updateAria",n),n.setAttribute("aria-expanded",e)}function a(t){console.log(t);var e=c.panelClass,o=(t.querySelector(".".concat(e)).scrollHeight,!t.classList.contains("active-panel"));t.classList.toggle("active-panel"),n(t,o)}function i(t){for(var e=0;e<r.length;e++)if(e!=t){var o=r[e];o.classList.contains("active-panel")&&o.classList.remove("active-panel"),n(o,!1)}}function e(t){for(var e=t.target,o=c.toggleClass,n=0;n<r.length;n++)if(r[n].contains(e)){(e.classList.contains(o)||e.parentNode.classList.contains(o))&&(console.log("is toggle"),t.preventDefault(),i(n),a(r[n]));break}}var c,o,r,l={elementClass:"accordion__section",toggleClass:"accordion__title",panelClass:"accordion__panel"},s=function(t){var e=c,o=e.toggleClass,n=e.panelClass,a=t.querySelector(".".concat(o)),i=t.querySelector(".".concat(n));a.setAttribute("role","tab"),a.setAttribute("aria-expanded",!1),i.setAttribute("role","tabpanel")},u=function(t){e(t)},f=function(t){13===t.keyCode&&e(t)},p=function(t,e){for(var o in e)t[o]=e[o];return t};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},{init:function(t,e){c=e&&"object"===_typeof(e)?p(l,e):l,(o=document.querySelector(t)).setAttribute("role","tablist"),(r=o.querySelectorAll(".".concat(c.elementClass))).forEach(function(t){s(t)}),o.addEventListener("click",u),o.addEventListener("keydown",f)}}};
"use strict";var accordion=Accordion();accordion.init("#accordion");