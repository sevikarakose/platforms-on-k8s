(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{4891:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FORMAT_PLAIN=t.FORMAT_HTML=t.FORMATS=void 0;var r="html";t.FORMAT_HTML=r;var n="plain";t.FORMAT_PLAIN=n,t.FORMATS=[r,n]},8328:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LINE_ENDINGS=void 0,t.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},3727:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUPPORTED_PLATFORMS=void 0,t.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},4938:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UNIT_WORDS=t.UNIT_WORD=t.UNIT_SENTENCES=t.UNIT_SENTENCE=t.UNIT_PARAGRAPHS=t.UNIT_PARAGRAPH=t.UNITS=void 0;var r="words";t.UNIT_WORDS=r;var n="word";t.UNIT_WORD=n;var i="sentences";t.UNIT_SENTENCES=i;var o="sentence";t.UNIT_SENTENCE=o;var a="paragraphs";t.UNIT_PARAGRAPHS=a;var u="paragraph";t.UNIT_PARAGRAPH=u,t.UNITS=[r,n,i,o,a,u]},7713:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WORDS=void 0,t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},2506:function(e,t,r){"use strict";Object.defineProperty(t,"Ap",{enumerable:!0,get:function(){return i.default}}),r(4891),r(4938),r(7713);var n,i=(n=r(6813))&&n.__esModule?n:{default:n}},6813:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=r(4891),o=r(8328),a=(n=r(7263))&&n.__esModule?n:{default:n},u=r(6618);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){var e,t;function r(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.FORMAT_PLAIN,u=arguments.length>2?arguments[2]:void 0;if(!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.format=o,this.suffix=u,t=void 0,(e="generator")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t,-1===i.FORMATS.indexOf(o.toLowerCase()))throw Error("".concat(o," is an invalid format. Please use ").concat(i.FORMATS.join(" or "),"."));this.generator=new a.default(n)}return e=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,u.isReactNative)()&&(0,u.isNode)()&&(0,u.isWindows)()?o.LINE_ENDINGS.WIN32:o.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(e){return this.format===i.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{key:"formatStrings",value:function(e){var t=this;return e.map(function(e){return t.formatString(e)})}},{key:"generateWords",value:function(e){return this.formatString(this.generator.generateRandomWords(e))}},{key:"generateSentences",value:function(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{key:"generateParagraphs",value:function(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,u.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}],c(r.prototype,e),t&&c(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}();t.default=s},7263:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(7713),i=r(6618);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(){var e,t;function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sentencesPerParagraph,i=void 0===t?{max:7,min:3}:t,o=e.wordsPerSentence,u=void 0===o?{max:15,min:5}:o,c=e.random,s=(e.seed,e.words),f=void 0===s?n.WORDS:s;if(!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),a(this,"sentencesPerParagraph",void 0),a(this,"wordsPerSentence",void 0),a(this,"random",void 0),a(this,"words",void 0),i.min>i.max)throw Error("Minimum number of sentences per paragraph (".concat(i.min,") cannot exceed maximum (").concat(i.max,")."));if(u.min>u.max)throw Error("Minimum number of words per sentence (".concat(u.min,") cannot exceed maximum (").concat(u.max,")."));this.sentencesPerParagraph=i,this.words=f,this.wordsPerSentence=u,this.random=c||Math.random}return e=[{key:"generateRandomInteger",value:function(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{key:"generateRandomWords",value:function(e){var t=this,r=this.wordsPerSentence,n=r.min,o=r.max,a=e||this.generateRandomInteger(n,o);return(0,i.makeArrayOfLength)(a).reduce(function(e,r){return"".concat(t.pluckRandomWord()," ").concat(e)},"").trim()}},{key:"generateRandomSentence",value:function(e){return"".concat((0,i.capitalize)(this.generateRandomWords(e)),".")}},{key:"generateRandomParagraph",value:function(e){var t=this,r=this.sentencesPerParagraph,n=r.min,o=r.max,a=e||this.generateRandomInteger(n,o);return(0,i.makeArrayOfLength)(a).reduce(function(e,r){return"".concat(t.generateRandomSentence()," ").concat(e)},"").trim()}},{key:"pluckRandomWord",value:function(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}],o(r.prototype,e),t&&o(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}();t.default=u},6966:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)}},6618:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"capitalize",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"isReactNative",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"isWindows",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"makeArrayOfLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"makeArrayOfStrings",{enumerable:!0,get:function(){return c.default}});var n=s(r(6966)),i=s(r(122)),o=s(r(1705)),a=s(r(4330)),u=s(r(5546)),c=s(r(7968));function s(e){return e&&e.__esModule?e:{default:e}}},122:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return!!e.exports}},1705:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e}},4330:function(e,t,r){"use strict";var n=r(2040);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(3727);t.default=function(){var e=!1;try{e=n.platform===i.SUPPORTED_PLATFORMS.WIN32}catch(t){e=!1}return e}},5546:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map(function(e,t){return t})}},7968:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(5546))&&n.__esModule?n:{default:n};t.default=function(e,t){return(0,i.default)(e).map(function(){return t()})}},2040:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(6003)},6003:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c=[],s=!1,f=-1;function l(){s&&n&&(s=!1,n.length?c=n.concat(c):f=-1,c.length&&d())}function d(){if(!s){var e=u(l);s=!0;for(var t=c.length;t;){for(n=c,c=[];++f<t;)n&&n[f].run();f=-1,t=c.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new v(e,t)),1!==c.length||s||u(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,n),a=!1}finally{a&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,o={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:s,ref:f,props:o,_owner:u.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},9268:function(e,t,r){"use strict";e.exports=r(3177)}}]);