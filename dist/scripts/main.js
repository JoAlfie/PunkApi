"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Accordion=function(){function c(t,e){var n=r.toggleClass;t.querySelector(".".concat(n)).setAttribute("aria-expanded",e)}function a(t){var e=r.panelClass,n=t.querySelector(".".concat(e)),o=n.scrollHeight,a=t.classList.contains("active-panel"),i=!a;t.classList.toggle("active-panel"),a?requestAnimationFrame(function(){n.style.height=0}):requestAnimationFrame(function(){n.style.height="".concat(o,"px")}),c(t,i)}function i(t){for(var e=0;e<s.length;e++)if(e!=t){var n=s[e];n.classList.contains("active-panel")&&n.classList.remove("active-panel"),u(n),c(n,!1)}}function e(t){for(var e=t.target,n=r.toggleClass,o=0;o<s.length;o++)if(s[o].contains(e)){(e.classList.contains(n)||e.parentNode.classList.contains(n))&&(t.preventDefault(),i(o),a(s[o]));break}}var r,n,s,o={elementClass:"accordion__section",toggleClass:"accordion__title",panelClass:"accordion__panel"},l=function(t){var e=r,n=e.toggleClass,o=e.panelClass,a=t.querySelector(".".concat(n)),i=t.querySelector(".".concat(o));a.setAttribute("role","tab"),a.setAttribute("aria-expanded",!1),i.setAttribute("role","tabpanel")},u=function(t){var e=r.panelClass;t.querySelector(".".concat(e)).style.height=0},f=function(t){e(t)},y=function(t){13===t.keyCode&&e(t)},p=function(t,e){for(var n in e)t[n]=e[n];return t};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},{init:function(t,e){r=e&&"object"===_typeof(e)?p(o,e):o,(n=document.querySelector(t)).setAttribute("role","tablist"),n.classList.add("has-js"),(s=n.querySelectorAll(".".concat(r.elementClass))).forEach(function(t){l(t),u(t)}),n.addEventListener("click",f),n.addEventListener("keydown",y)}}};
"use strict";var accordion=Accordion();accordion.init("#accordion");