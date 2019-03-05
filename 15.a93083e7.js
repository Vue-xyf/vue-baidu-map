webpackJsonp([15],{SD3E:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Polyline Overlay")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Add an editable polyline on the map")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("Example")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-polyline",{attrs:{path:t.polylinePath,"stroke-color":"blue","stroke-opacity":.5,"stroke-weight":2,editing:!0},on:{lineupdate:t.updatePolylinePath}})],1),t._v(" "),a("md-table",[a("md-table-header",[a("md-table-head",[t._v("Points")]),t._v(" "),a("md-table-head",[t._v("Longitude")]),t._v(" "),a("md-table-head",[t._v("Latitude")])],1),t._v(" "),a("md-table-body",t._l(t.polylinePath,function(s,e){return a("md-table-row",{key:e},[a("md-table-cell",[t._v(t._s("Point-"+(e+1)))]),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:s.lng,callback:function(a){t.$set(s,"lng",t._n(a))},expression:"point.lng"}})],1)],1),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:s.lat,callback:function(a){t.$set(s,"lat",t._n(a))},expression:"point.lat"}})],1)],1)],1)}),1)],1),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.addPolylinePoint}},[t._v("\n    Add Point\n  ")])],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmPolyline")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("Array[Point]")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("The points that makes the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polyline stroke color.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeWeight")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polyline stroke width.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeOpacity")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Polyline stroke opacity.")])]),t._v(" "),a("tr",[a("td",[t._v("strokeStyle")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'solid'")]),t._v(" "),a("td",[t._v("Polyline stroke style. "),a("code",[t._v("'solid'")]),t._v(" or "),a("code",[t._v("'dashed'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("massClear")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether remove this overlay or not when "),a("code",[t._v("map.clearOverlays")]),t._v(" is called.")])]),t._v(" "),a("tr",[a("td",[t._v("editing")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Enable editing the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("clicking")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether to respond to a click event.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when click on the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when double click on the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("mousedown")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is pressed down on the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseup")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse is released on the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse leaves the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("Triggers when the mouse enters the polyline.")])]),t._v(" "),a("tr",[a("td",[t._v("remove")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the polyline is removed.")])]),t._v(" "),a("tr",[a("td",[t._v("lineupdate")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("Triggers when the polyline is updated.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-polyline")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":path")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"polylinePath"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("stroke-color")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-opacity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"0.5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-weight")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":editing")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@lineupdate")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"updatePolylinePath"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-polyline")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("polylinePath")]),t._v(": [\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("},\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.405")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.920")]),t._v("},\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.423493")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.907445")]),t._v("}\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    updatePolylinePath (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".polylinePath = e.target.getPath()\n    },\n    addPolylinePoint () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".polylinePath.push({"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("})\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},Umzt:function(t,s,a){t.exports=a("sOJi")},gPSf:function(t,s,a){var e,l,n;!function(a,v){l=[t,s],e=v,void 0!==(n="function"==typeof e?e.apply(s,l):e)&&(t.exports=n)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{polylinePath:[{lng:116.404,lat:39.915},{lng:116.405,lat:39.92},{lng:116.423493,lat:39.907445}]}},methods:{updatePolylinePath:function(t){this.polylinePath=t.target.getPath()},addPolylinePoint:function(){this.polylinePath.push({lng:116.404,lat:39.915})}}},t.exports=s.default})},sOJi:function(t,s,a){var e=a("VU/8")(a("gPSf"),a("SD3E"),null,null);t.exports=e.exports}});