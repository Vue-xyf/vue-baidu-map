webpackJsonp([2],{"8B3Q":function(t,e,n){!function(e,n){t.exports=n()}(0,function(){function t(t,n){try{BMap}catch(t){throw Error("Baidu Map JS API is not ready yet!")}var a=e(t),s=new BMap.Polyline(a,n);return s.addEventListener("lineupdate",function(){this.isEditing&&this.enableEditing()}),s.cornerPoints=t,s.editMarkers=[],s.enableEditing=function(){var t=this;if(t.map){t.disableEditing();for(var n=0;n<t.cornerPoints.length;n++){var a=new BMap.Marker(t.cornerPoints[n],{icon:new BMap.Icon("http://api.map.baidu.com/library/CurveLine/1.5/src/circle.png",new BMap.Size(16,16)),enableDragging:!0,raiseOnDrag:!0});a.addEventListener("dragend",function(){t.cornerPoints.length=0;for(var n=0;n<t.editMarkers.length;n++)t.cornerPoints.push(t.editMarkers[n].getPosition());var a=e(t.cornerPoints);t.setPath(a)}),a.index=n,t.editMarkers.push(a),t.map.addOverlay(a)}}t.isEditing=!0},s.disableEditing=function(){this.isEditing=!1;for(var t=0;t<this.editMarkers.length;t++)this.map.removeOverlay(this.editMarkers[t]),this.editMarkers[t]=null;this.editMarkers.length=0},s.getPath=function(){return a},s}function e(t){for(var e=[],a=0;a<t.length-1;a++){var s=n(t[a],t[a+1]);s&&s.length>0&&(e=e.concat(s))}return e}function n(t,e){var n=[];if(!(t&&e&&t instanceof BMap.Point&&e instanceof BMap.Point))return null;var a,s,i,o,r,l,v=function(t){return 1-2*t+t*t},c=function(t){return 2*t-2*t*t},u=function(t){return t*t},d=0,_=0;if(void 0===e)return void(void 0!==n&&(n=[]));var p=parseFloat(t.lat),h=parseFloat(e.lat),m=parseFloat(t.lng),f=parseFloat(e.lng);for(f>m&&parseFloat(f-m)>180&&m<0&&(m=parseFloat(360+m)),m>f&&parseFloat(m-f)>180&&f<0&&(f=parseFloat(360+f)),0,l=0,h==p?(a=0,s=m-f):f==m?(a=Math.PI/2,s=p-h):(a=Math.atan((h-p)/(f-m)),s=(h-p)/Math.sin(a)),0==l&&(l=a+Math.PI/5),i=s/2,r=i*Math.cos(l)+m,o=i*Math.sin(l)+p,d=0;d<31;d++)n.push(new BMap.Point(m*v(_)+r*c(_)+f*u(_),p*v(_)+o*c(_)+h*u(_))),_+=1/30;return n}return t})},Ddvr:function(t,e,n){var a,s,i;!function(n,o){s=[e],a=o,void 0!==(i="function"==typeof a?a.apply(e,s):a)&&(t.exports=i)}(0,function(t){"use strict";function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.lng,a=e.lat;return new t.Point(n,a)}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.x,a=e.y;return new t.Pixel(n,a)}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.sw,s=n.ne;return new t.Bounds(e(t,a),e(t,s))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,a=e.height;return new t.Size(n,a)}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.url,a=e.size,i=e.opts,o=void 0===i?{}:i;return new t.Icon(n,s(t,a),{anchor:o.anchor&&s(t,o.anchor),imageSize:o.imageSize&&s(t,o.imageSize),imageOffset:o.imageOffset&&s(t,o.imageOffset),infoWindowAnchor:o.infoWindowAnchor&&s(t,o.infoWindowAnchor),printImageUrl:o.printImageUrl})}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.content,i=n.opts;return new t.Label(a,{offset:i.offset&&s(t,i.offset),position:i.position&&e(t,i.position),enableMassClear:i.enableMassClear})}Object.defineProperty(t,"__esModule",{value:!0}),t.createPoint=e,t.createPixel=n,t.createBounds=a,t.createSize=s,t.createIcon=i,t.createLabel=o})},JMrc:function(t,e,n){var a,s,i;!function(o,r){s=[t,e,n("oSuW"),n("bNL4")],a=r,void 0!==(i="function"==typeof a?a.apply(e,s):a)&&(t.exports=i)}(0,function(t,e,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=this,i=e||s.default[(0,a.toKebabCase)(this.$options._componentTag)];i&&i.forEach(function(e){var a="on"===e.slice(0,2),s=a?e.slice(2):e,i=n.$listeners[s];i&&t.addEventListener(e,i.fns)})};var s=function(t){return t&&t.__esModule?t:{default:t}}(n);t.exports=e.default})},LDCi:function(t,e,n){t.exports=n("owJv")},Y63E:function(t,e,n){var a,s,i;!function(o,r){s=[t,e,n("osVk")],a=r,void 0!==(i="function"==typeof a?a.apply(e,s):a)&&(t.exports=i)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{BmlCurveLine:a.default},methods:{addPoint:function(){this.points.push({lng:116.404,lat:39.915})},update:function(t){this.points=t.target.cornerPoints}},data:function(){return{points:[{lng:116.432045,lat:39.910683},{lng:120.129721,lat:30.314429},{lng:121.491121,lat:25.127053}]}}},t.exports=e.default})},bNL4:function(t,e,n){var a,s,i;!function(o,r){s=[e,n("Ddvr")],a=r,void 0!==(i="function"==typeof a?a.apply(e,s):a)&&(t.exports=i)}(0,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPosition=t.toKebabCase=t.checkType=t.isPoint=void 0;var n=t.isPoint=function(t){return t.lng&&t.lat};t.checkType=function(t){return Object.prototype.toString.call(t).slice(8,-1)},t.toKebabCase=function(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).replace(/^-/,"")},t.getPosition=function(t,a){return n(a)?(0,e.createPoint)(t,a):a}})},"hu+X":function(t,e,n){var a,s,i;!function(o,r){s=[t,e,n("8B3Q"),n("j3lb"),n("JMrc"),n("Ddvr")],a=r,void 0!==(i="function"==typeof a?a.apply(e,s):a)&&(t.exports=i)}(0,function(t,e,n,a,s,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(n),l=o(a),v=o(s),c=["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"];e.default={name:"bml-curve-line",render:function(){},mixins:[(0,l.default)("overlay")],props:{points:{type:Array,default:Array},strokeColor:{type:String},strokeWeight:{type:Number},strokeOpacity:{type:Number},strokeStyle:{type:String},massClear:{type:Boolean,default:!0},clicking:{type:Boolean,default:!0},editing:{type:Boolean,default:!1}},watch:{points:{handler:function(t,e){this.originInstance.disableEditing(),this.reload()},deep:!0},strokeColor:function(t){this.originInstance.setStrokeColor(t)},strokeOpacity:function(t){this.originInstance.setStrokeOpacity(t)},strokeWeight:function(t){this.originInstance.setStrokeWeight(t)},strokeStyle:function(t){this.originInstance.setStrokeStyle(t)},editing:function(t){t?this.originInstance.enableEditing():this.originInstance.disableEditing()},massClear:function(t){t?this.originInstance.enableMassClear():this.originInstance.disableMassClear()},clicking:function(t){this.reload()}},methods:{load:function(){var t=this.BMap,e=this.map,n=this.points,a=this.strokeColor,s=this.strokeWeight,o=this.strokeOpacity,l=this.strokeStyle,u=this.editing,d=this.massClear,_=this.clicking,p=new r.default(n.map(function(e){return(0,i.createPoint)(t,e)}),{strokeColor:a,strokeWeight:s,strokeOpacity:o,strokeStyle:l,enableMassClear:d,enableClicking:_});u?p.enableEditing():p.disableEditing(),this.originInstance=p,e.addOverlay(p),v.default.call(this,p,c)}}},t.exports=e.default})},j3lb:function(t,e,n){var a,s,i;!function(n,o){s=[t,e],a=o,void 0!==(i="function"==typeof a?a.apply(e,s):a)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){var t=this.unload,e=this.renderByParent,n=this.$parent;e&&n.reload(),t()}Object.defineProperty(e,"__esModule",{value:!0});var s={control:{unload:"removeControl"},layer:{unload:"removeTileLayer"},overlay:{unload:"removeOverlay"},contextMenu:{unload:"removeContextMenu"}},i=function t(e){return e.abstract||e.$el===e.$children[0].$el?t(e.$parent):e},o=function t(e){n(this,t),this.methods={ready:function(){var t=i(this.$parent),e=this.BMap=t.BMap,n=this.map=t.map;this.load(),this.$emit("ready",{BMap:e,map:n})},transmitEvent:function(t){this.$emit(t.type.replace(/^on/,""),t)},reload:function(){var t=this;this&&this.BMap&&this.$nextTick(function(){t.unload(),t.$nextTick(t.load)})},unload:function(){var t=this.map,n=this.originInstance;try{switch(e.type){case"search":return n.clearResults();case"autoComplete":case"lushu":return n.dispose();case"markerClusterer":return n.clearMarkers();default:t[s[e.type].unload](n)}}catch(t){}}},this.computed={renderByParent:function(){return this.$parent.preventChildrenRender}},this.mounted=function(){var t=i(this.$parent),e=t.map,n=this.ready;e?n():t.$on("ready",n)},this.destroyed=a,this.beforeDestroy=a};e.default=function(t){return new o({type:t})},t.exports=e.default})},oSuW:function(t,e,n){var a,s,i;!function(n,o){s=[t,e],a=o,void 0!==(i="function"==typeof a?a.apply(e,s):a)&&(t.exports=i)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"baidu-map":["click","dblclick","rightclick","rightdblclick","maptypechange","mousemove","mouseover","mouseout","movestart","moving","moveend","zoomstart","zoomend","addoverlay","addcontrol","removecontrol","removeoverlay","clearoverlays","dragstart","dragging","dragend","addtilelayer","removetilelayer","load","resize","hotspotclick","hotspotover","hotspotout","tilesloaded","touchstart","touchmove","touchend","longpress"],"bm-geolocation":["locationSuccess","locationError"],"bm-overview-map":["viewchanged","viewchanging"],"bm-marker":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","infowindowclose","infowindowopen","dragstart","dragging","dragend","rightclick"],"bm-polyline":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-polygon":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-circle":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-label":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","rightclick"],"bm-info-window":["close","open","maximize","restore","clickclose"],"bm-ground":["click","dblclick"],"bm-auto-complete":["onconfirm","onhighlight"],"bm-point-collection":["click","mouseover","mouseout"]},t.exports=e.default})},osVk:function(t,e,n){var a=n("VU/8")(n("hu+X"),null,null,null);t.exports=a.exports},owJv:function(t,e,n){var a=n("VU/8")(n("Y63E"),n("vH27"),null,null);t.exports=a.exports},vH27:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[[n("h1",[t._v("弧线")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),n("h2",[t._v("示例")]),t._v(" "),n("h3",[t._v("在地图中添加可编辑的弧线")]),t._v(" "),n("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),n("h4",[t._v("预览")]),t._v(" "),n("doc-preview",[n("baidu-map",{staticClass:"map",attrs:{center:{lng:118.454,lat:32.955},zoom:5,"scroll-wheel-zoom":!0}},[n("bml-curve-line",{attrs:{points:t.points,editing:!0},on:{lineupdate:t.update}})],1),t._v(" "),n("md-table",[n("md-table-header",[n("md-table-head",[t._v("坐标")]),t._v(" "),n("md-table-head",[t._v("经度")]),t._v(" "),n("md-table-head",[t._v("纬度")])],1),t._v(" "),n("md-table-body",t._l(t.points,function(e,a){return n("md-table-row",{key:a},[n("md-table-cell",[t._v(t._s("坐标-"+(a+1)))]),t._v(" "),n("md-table-cell",[n("md-input-container",[n("md-input",{attrs:{"md-inline":""},model:{value:e.lng,callback:function(n){t.$set(e,"lng",t._n(n))},expression:"point.lng"}})],1)],1),t._v(" "),n("md-table-cell",[n("md-input-container",[n("md-input",{attrs:{"md-inline":""},model:{value:e.lat,callback:function(n){t.$set(e,"lat",t._n(n))},expression:"point.lat"}})],1)],1)],1)}),1)],1),t._v(" "),n("md-button",{staticClass:"md-raised md-primary",on:{click:t.addPoint}},[t._v("\n    添加一个坐标点\n  ")])],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("BmlCurveLine")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("属性名")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("points")]),t._v(" "),n("td",[t._v("Array[Point]")]),t._v(" "),n("td",[t._v("[]")]),t._v(" "),n("td",[t._v("构成弧线的关键点")])]),t._v(" "),n("tr",[n("td",[t._v("strokeColor")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("折线颜色")])]),t._v(" "),n("tr",[n("td",[t._v("strokeWeight")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("折线的宽度，以像素为单位")])]),t._v(" "),n("tr",[n("td",[t._v("strokeOpacity")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("折线的透明度，取值范围0 - 1")])]),t._v(" "),n("tr",[n("td",[t._v("strokeStyle")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'solid'")]),t._v(" "),n("td",[t._v("折线的样式，solid或dashed")])]),t._v(" "),n("tr",[n("td",[t._v("massClear")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("是否在调用map.clearOverlays清除此覆盖物")])]),t._v(" "),n("tr",[n("td",[t._v("editing")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("是否启用线编辑")])]),t._v(" "),n("tr",[n("td",[t._v("clicking")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("是否响应点击事件")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("click")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("点击折线后会触发此事件")])]),t._v(" "),n("tr",[n("td",[t._v("dblclick")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("双击折线后会触发此事件")])]),t._v(" "),n("tr",[n("td",[t._v("mousedown")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("鼠标在折线上按下触发此事件")])]),t._v(" "),n("tr",[n("td",[t._v("mouseup")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("鼠标在折线释放触发此事件")])]),t._v(" "),n("tr",[n("td",[t._v("mouseout")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("鼠标离开折线时触发此事件")])]),t._v(" "),n("tr",[n("td",[t._v("mouseover")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("当鼠标进入折线区域时会触发此事件")])]),t._v(" "),n("tr",[n("td",[t._v("remove")]),t._v(" "),n("td",[t._v("event{type, target}")]),t._v(" "),n("td",[t._v("移除折线时触发")])]),t._v(" "),n("tr",[n("td",[t._v("lineupdate")]),t._v(" "),n("td",[t._v("event{type, target}")]),t._v(" "),n("td",[t._v("覆盖物的属性发生变化时触发")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"{lng: 118.454, lat: 32.955}"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"5"')]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("bml-curve-line")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":points")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"points"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":editing")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("@lineupdate")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"update"')]),t._v(">")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("bml-curve-line")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" {BmlCurveLine} "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'vue-baidu-map'")]),t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    BmlCurveLine\n  },\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    update (e) {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".points = e.target.cornerPoints\n    }\n  },\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("points")]),t._v(": [\n        {"),n("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("116.432045")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("39.910683")]),t._v("},\n        {"),n("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("120.129721")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("30.314429")]),t._v("},\n        {"),n("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("121.491121")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("25.127053")]),t._v("}\n      ]\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}}});