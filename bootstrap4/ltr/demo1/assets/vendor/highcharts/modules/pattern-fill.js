/**
 * Highcharts JS v11.2.0 (2023-10-30)
 *
 * Module for adding patterns and assets/images as point fills.
 *
 * (c) 2010-2021 Highsoft AS
 * Author: Torstein Hønsi, Øystein Moseng
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/pattern-fill",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function i(t,e,i,r){t.hasOwnProperty(e)||(t[e]=r.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}i(e,"Extensions/PatternFill.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Defaults.js"],e["Core/Series/Point.js"],e["Core/Series/Series.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],function(t,e,i,r,n,a,o,h){let{animObject:s}=t,{getOptions:l}=r,{addEvent:d,defined:p,erase:c,merge:f,pick:u,removeEvent:g,wrap:m}=h,y=i.patterns=(()=>{let t=[],e=l().colors;return["M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5","M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5","M 2 0 L 2 5 M 4 0 L 4 5","M 0 2 L 5 2 M 0 4 L 5 4","M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"].forEach((i,r)=>{t.push({path:i,color:e[r],width:5,height:5,patternTransform:"scale(1.4 1.4)"})}),["M 0 0 L 5 10 L 10 0","M 3 3 L 8 3 L 8 8 L 3 8 Z","M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0","M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11","M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"].forEach((i,r)=>{t.push({path:i,color:e[r+5],width:10,height:10})}),t})();function x(t,e){let i=JSON.stringify(t),r=i.length||0,n=0,a=0,o;if(e){o=Math.max(Math.floor(r/500),1);for(let t=0;t<r;t+=o)n+=i.charCodeAt(t);n&=n}for(;a<r;++a)n=(n<<5)-n+i.charCodeAt(a),n&=n;return n.toString(16).replace("-","1")}n.prototype.calculatePatternDimensions=function(t){if(t.width&&t.height)return;let e=this.graphic&&(this.graphic.getBBox&&this.graphic.getBBox(!0)||this.graphic.element&&this.graphic.element.getBBox())||{},i=this.shapeArgs;if(i&&(e.width=i.width||e.width,e.height=i.height||e.height,e.x=i.x||e.x,e.y=i.y||e.y),t.image){if(!e.width||!e.height){t._width="defer",t._height="defer";let e=this.series.chart.mapView&&this.series.chart.mapView.getSVGTransform().scaleY;p(e)&&e<0&&(t._inverted=!0);return}t.aspectRatio&&(e.aspectRatio=e.width/e.height,t.aspectRatio>e.aspectRatio?e.aspectWidth=e.height*t.aspectRatio:e.aspectHeight=e.width/t.aspectRatio),t._width=t.width||Math.ceil(e.aspectWidth||e.width),t._height=t.height||Math.ceil(e.aspectHeight||e.height)}t.width||(t._x=t.x||0,t._x+=e.x-Math.round(e.aspectWidth?Math.abs(e.aspectWidth-e.width)/2:0)),t.height||(t._y=t.y||0,t._y+=e.y-Math.round(e.aspectHeight?Math.abs(e.aspectHeight-e.height)/2:0))},o.prototype.addPattern=function(t,e){let i,r=u(e,!0),n=s(r),a,o=t.width||t._width||32,l=t.height||t._height||32,d=t.color||"#343434",p=t.id,c=this,f;if(!p&&(this.idCounter=this.idCounter||0,p="highcharts-pattern-"+this.idCounter+"-"+(this.chartIndex||0),++this.idCounter),this.forExport&&(p+="-export"),this.defIds=this.defIds||[],this.defIds.indexOf(p)>-1)return;this.defIds.push(p);let m={id:p,patternUnits:"userSpaceOnUse",patternContentUnits:t.patternContentUnits||"userSpaceOnUse",width:o,height:l,x:t._x||t.x||0,y:t._y||t.y||0};return t._inverted&&(m.patternTransform="scale(1, -1)",t.patternTransform&&(t.patternTransform+=" scale(1, -1)")),t.patternTransform&&(m.patternTransform=t.patternTransform),(i=this.createElement("pattern").attr(m).add(this.defs)).id=p,t.path?(a=h.isObject(t.path)?t.path:{d:t.path},t.backgroundColor&&function(t){c.rect(0,0,o,l).attr({fill:t}).add(i)}(t.backgroundColor),f={d:a.d},this.styledMode||(f.stroke=a.stroke||d,f["stroke-width"]=u(a.strokeWidth,2),f.fill=a.fill||"none"),a.transform&&(f.transform=a.transform),this.createElement("path").attr(f).add(i),i.color=d):t.image&&(r?this.image(t.image,0,0,o,l,function(){this.animate({opacity:u(t.opacity,1)},n),g(this.element,"load")}).attr({opacity:0}).add(i):this.image(t.image,0,0,o,l).add(i)),t.image&&r||void 0===t.opacity||[].forEach.call(i.element.childNodes,function(e){e.setAttribute("opacity",t.opacity)}),this.patternElements=this.patternElements||{},this.patternElements[p]=i,i},m(a.prototype,"getColor",function(t){let e=this.options.color;e&&e.pattern&&!e.pattern.color?(delete this.options.color,t.apply(this,Array.prototype.slice.call(arguments,1)),e.pattern.color=this.color,this.color=this.options.color=e):t.apply(this,Array.prototype.slice.call(arguments,1))}),d(a,"render",function(){let t=this.chart.isResizing;(this.isDirtyData||t||!this.chart.hasRendered)&&(this.points||[]).forEach(function(e){let i=e.options&&e.options.color;i&&i.pattern&&(t&&!(e.shapeArgs&&e.shapeArgs.width&&e.shapeArgs.height)?(i.pattern._width="defer",i.pattern._height="defer"):e.calculatePatternDimensions(i.pattern))})}),d(n,"afterInit",function(){let t=this.options.color;t&&t.pattern&&("string"==typeof t.pattern.path&&(t.pattern.path={d:t.pattern.path}),this.color=this.options.color=f(this.series.options.color,t))}),d(o,"complexColor",function(t){let e=t.args[0],i=t.args[1],r=t.args[2],a=this.chartIndex||0,o=e.pattern,h="#343434";if(void 0!==e.patternIndex&&y&&(o=y[e.patternIndex]),!o)return!0;if(o.image||"string"==typeof o.path||o.path&&o.path.d){let t=r.parentNode&&r.parentNode.getAttribute("class");t=t&&t.indexOf("highcharts-legend")>-1,("defer"===o._width||"defer"===o._height)&&n.prototype.calculatePatternDimensions.call({graphic:{element:r}},o),(t||!o.id)&&((o=f({},o)).id="highcharts-pattern-"+a+"-"+x(o)+x(o,!0)),this.addPattern(o,!this.forExport&&u(o.animation,this.globalAnimation,{duration:100})),h=`url(${this.url}#${o.id+(this.forExport?"-export":"")})`}else h=o.color||h;return r.setAttribute(i,h),e.toString=function(){return h},!1}),d(e,"endResize",function(){(this.renderer&&this.renderer.defIds||[]).filter(function(t){return t&&t.indexOf&&0===t.indexOf("highcharts-pattern-")}).length&&(this.series.forEach(function(t){t.visible&&t.points.forEach(function(t){let e=t.options&&t.options.color;e&&e.pattern&&(e.pattern._width="defer",e.pattern._height="defer")})}),this.redraw(!1))}),d(e,"redraw",function(){let t={},e=this.renderer,i=(e.defIds||[]).filter(function(t){return t.indexOf&&0===t.indexOf("highcharts-pattern-")});i.length&&([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'),function(i){let r=i.getAttribute("fill")||i.getAttribute("color")||i.getAttribute("stroke");if(r){let i=r.replace(e.url,"").replace("url(#","").replace(")","");t[i]=!0}}),i.forEach(function(i){!t[i]&&(c(e.defIds,i),e.patternElements[i]&&(e.patternElements[i].destroy(),delete e.patternElements[i]))}))})}),i(e,"masters/modules/pattern-fill.src.js",[],function(){})});//# sourceMappingURL=pattern-fill.js.map