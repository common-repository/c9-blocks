/*! For license information please see blocks.frontend.build.js.LICENSE.txt */
!function(){var e={1198:function(){function e(e,t,o){var a=o("#".concat(e)),r=a.attr("style"),n=o('<iframe id="'.concat(e,'" class="c9-video" video-id="').concat(t,'" style="').concat(r,'" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/').concat(t,"?autoplay=1&controls=0&disablekb=0&autohide=1&wmode=opaque&hd=1&loop=1&showinfo=0&iv_load_policy=3&rel=0&modestbranding=1&playlist=").concat(t,'&widgetid=1&mute=1"></iframe>'));n.on("load",(function(){this.parentNode.parentNode.style.opacity=1})),a.replaceWith(n)}function t(e,r){if(YT&&YT.Player)new YT.Player(e,{playerVars:{autoplay:1,controls:0,disablekb:0,autohide:1,wmode:"opaque",hd:1,enablejsapi:1,loop:1,showinfo:0,iv_load_policy:3,rel:0,modestbranding:1,playlist:r},videoId:r,events:{onReady:o,onError:a}});else setTimeout((function(){t(e,r)}),100)}function o(e){e.target.mute(),e.target.playVideo(),e.target.getIframe().parentNode.parentNode.style.opacity=1}function a(e){console.log("The YouTube IFrame Player API fired an onError event with error code: "+e.data);var t=e.target.getIframe();t.parentNode.parentNode.style.opacity=0,t.parentNode.parentNode.style.transition="300ms",t.parentNode.parentNode.dataset.c9VideoContainerError=e.data}document.addEventListener("DOMContentLoaded",(function(){for(var o="true"===c9_blocks_params.disable_youtube_api,a=window.jQuery,r=document.getElementsByClassName("c9-video"),n=0;n<r.length;n++){var i=r[n].getAttribute("id"),c=r[n].getAttribute("video-id");o?e(i,c,a):t(i,c)}a(".c9-video-container").each((function(){var e=this;0<a(".c9-video-custom",this).length&&a(".c9-video-custom",this).on("canplay",(function(){a(e).css({opacity:1})}))}))}))}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";o(1198)}()}();