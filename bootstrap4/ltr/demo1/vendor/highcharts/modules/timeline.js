/*
 Highcharts JS v10.3.3 (2023-01-20)

 Timeline series

 (c) 2010-2021 Highsoft AS
 Author: Daniel Studencki

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/timeline",["highcharts"],function(c){b(c);b.Highcharts=c;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function c(b,k,n,c){b.hasOwnProperty(k)||(b[k]=c.apply(null,n),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:k,module:b[k]}})))}b=b?b._modules:{};c(b,
"Series/Timeline/TimelinePoint.js",[b["Core/Series/Point.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,k,c){var x=this&&this.__extends||function(){var b=function(d,e){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,e){b.__proto__=e}||function(b,e){for(var d in e)e.hasOwnProperty(d)&&(b[d]=e[d])};return b(d,e)};return function(d,e){function t(){this.constructor=d}b(d,e);d.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}(),n=k.seriesTypes.pie.prototype.pointClass,
f=c.defined,A=c.isNumber,m=c.merge,v=c.objectEach,p=c.pick;return function(c){function d(){var e=null!==c&&c.apply(this,arguments)||this;e.options=void 0;e.series=void 0;return e}x(d,c);d.prototype.alignConnector=function(){var e=this.series,b=this.connector,c=this.dataLabel,d=this.dataLabel.options=m(e.options.dataLabels,this.options.dataLabels),h=this.series.chart,l=b.getBBox(),a=l.x+c.translateX;l=l.y+c.translateY;h.inverted?l-=c.options.connectorWidth/2:a+=c.options.connectorWidth/2;h=h.isInsidePlot(a,
l);b[h?"animate":"attr"]({d:this.getConnectorPath()});e.chart.styledMode||b.attr({stroke:d.connectorColor||this.color,"stroke-width":d.connectorWidth,opacity:c[f(c.newOpacity)?"newOpacity":"opacity"]})};d.prototype.drawConnector=function(){var b=this.series;this.connector||(this.connector=b.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel));this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()};d.prototype.getConnectorPath=function(){var b=
this.series.chart,c=this.series.xAxis.len,d=b.inverted,f=d?"x2":"y2",h=this.dataLabel,l=h.targetPosition,a={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:A(l.y)?l.y:h.y},g=(h.alignAttr||h)[f[0]]<this.series.yAxis.len/2;d&&(a={x1:this.plotY,y1:c-this.plotX,x2:l.x||h.x,y2:c-this.plotX});g&&(a[f]+=h[d?"width":"height"]);v(a,function(g,b){a[b]-=(h.alignAttr||h)[b[0]]});return b.renderer.crispLine([["M",a.x1,a.y1],["L",a.x2,a.y2]],h.options.connectorWidth)};d.prototype.init=function(){var b=c.prototype.init.apply(this,
arguments);b.name=p(b.name,"Event");b.y=1;return b};d.prototype.isValid=function(){return null!==this.options.y};d.prototype.setState=function(){var b=c.prototype.setState;this.isNull||b.apply(this,arguments)};d.prototype.setVisible=function(b,c){var d=this.series;c=p(c,d.options.ignoreHiddenPoint);n.prototype.setVisible.call(this,b,!1);d.processData();c&&d.chart.redraw()};d.prototype.applyOptions=function(d,f){d=b.prototype.optionsToObject.call(this,d);this.userDLOptions=m(this.userDLOptions,d.dataLabels);
return c.prototype.applyOptions.call(this,d,f)};return d}(k.series.prototype.pointClass)});c(b,"Series/Timeline/TimelineSeriesDefaults.js",[],function(){"";return{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",
borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:100,formatter:function(){var b=this.series.chart.styledMode?"<span>\u25cf </span>":'<span style="color:'+this.point.color+'">\u25cf </span>';return b+='<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},
showInLegend:!1,colorKey:"x"}});c(b,"Series/Timeline/TimelineSeries.js",[b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Renderer/SVG/SVGElement.js"],b["Series/Timeline/TimelinePoint.js"],b["Series/Timeline/TimelineSeriesDefaults.js"],b["Core/Utilities.js"]],function(b,c,n,y,z,f){var k=this&&this.__extends||function(){var b=function(c,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&
(a[g]=b[g])};return b(c,a)};return function(c,a){function g(){this.constructor=c}b(c,a);c.prototype=null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),m=c.seriesTypes,v=m.column,p=m.line,r=f.addEvent,d=f.arrayMax,e=f.arrayMin,t=f.defined;m=f.extend;var w=f.merge,u=f.pick;f=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;a.userOptions=void 0;a.visibilityMap=void 0;return a}k(c,b);c.prototype.alignDataLabel=function(a,
c,d,B){var g=this.chart.inverted,q=this.visibilityMap.filter(function(a){return a}),e=this.visiblePointsCount,f=q.indexOf(a);q=this.options.dataLabels;var h=a.userDLOptions||{};f=q.alternate?f&&f!==e-1?2:1.5:1;e=Math.floor(this.xAxis.len/e);var k=c.padding;if(a.visible){var l=Math.abs(h.x||a.options.dataLabels.x);g?(g=2*(l-k)-a.itemHeight/2,g={width:g+"px",textOverflow:c.width/g*c.height/2>e*f?"ellipsis":"none"}):g={width:(h.width||q.width||e*f-2*k)+"px"};c.css(g);this.chart.styledMode||c.shadow(q.shadow)}b.prototype.alignDataLabel.apply(this,
arguments)};c.prototype.bindAxes=function(){var a=this;b.prototype.bindAxes.call(a);["xAxis","yAxis"].forEach(function(b){"xAxis"!==b||a[b].userOptions.type||(a[b].categories=a[b].hasNames=!0)})};c.prototype.distributeDL=function(){var a=this,b=a.options.dataLabels,c=1;if(b){var d=b.distance||0;a.points.forEach(function(g){var e;g.options.dataLabels=w((e={},e[a.chart.inverted?"x":"y"]=b.alternate&&c%2?-d:d,e),g.userDLOptions);c++})}};c.prototype.generatePoints=function(){var a=this;b.prototype.generatePoints.apply(a);
a.points.forEach(function(b,c){b.applyOptions({x:a.xData[c]},a.xData[c])})};c.prototype.getVisibilityMap=function(){return(this.data.length?this.data:this.userOptions.data).map(function(a){return a&&!1!==a.visible&&!a.isNull?a:!1})};c.prototype.getXExtremes=function(a){var b=this;a=a.filter(function(a,c){return b.points[c].isValid()&&b.points[c].visible});return{min:e(a),max:d(a)}};c.prototype.init=function(){var a=this;b.prototype.init.apply(a,arguments);a.eventsToUnbind.push(r(a,"afterTranslate",
function(){var b,c=Number.MAX_VALUE;a.points.forEach(function(a){a.isInside=a.isInside&&a.visible;a.visible&&!a.isNull&&(t(b)&&(c=Math.min(c,Math.abs(a.plotX-b))),b=a.plotX)});a.closestPointRangePx=c}));a.eventsToUnbind.push(r(a,"drawDataLabels",function(){a.distributeDL()}));a.eventsToUnbind.push(r(a,"afterDrawDataLabels",function(){var b;a.points.forEach(function(a){if(b=a.dataLabel)return b.animate=function(a){this.targetPosition&&(this.targetPosition=a);return n.prototype.animate.apply(this,arguments)},
b.targetPosition||(b.targetPosition={}),a.drawConnector()})}));a.eventsToUnbind.push(r(a.chart,"afterHideOverlappingLabel",function(){a.points.forEach(function(a){a.connector&&a.dataLabel&&a.dataLabel.oldOpacity!==a.dataLabel.newOpacity&&a.alignConnector()})}))};c.prototype.markerAttribs=function(a,c){var d=this.options.marker,e=a.marker||{},f=e.symbol||d.symbol,g=u(e.width,d.width,this.closestPointRangePx),h=u(e.height,d.height),k=0;if(this.xAxis.dateTime)return b.prototype.markerAttribs.call(this,
a,c);c&&(d=d.states[c]||{},c=e.states&&e.states[c]||{},k=u(c.radius,d.radius,k+(d.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a={x:Math.floor(a.plotX)-g/2-k/2,y:a.plotY-h/2-k/2,width:g+k,height:h+k};return this.chart.inverted?{y:a.x&&a.width&&this.xAxis.len-a.x-a.width,x:a.y&&a.y,width:a.height,height:a.width}:a};c.prototype.processData=function(){var a=0,c;this.visibilityMap=this.getVisibilityMap();this.visibilityMap.forEach(function(b){b&&a++});this.visiblePointsCount=a;for(c=0;c<this.xData.length;c++)this.yData[c]=
1;b.prototype.processData.call(this,arguments)};c.defaultOptions=w(p.defaultOptions,z);return c}(p);m(f.prototype,{drawLegendSymbol:b.drawRectangle,drawTracker:v.prototype.drawTracker,pointClass:y,trackerGroups:["markerGroup","dataLabelsGroup"]});c.registerSeriesType("timeline",f);"";return f});c(b,"masters/modules/timeline.src.js",[],function(){})});
//# sourceMappingURL=timeline.js.map