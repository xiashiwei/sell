webpackJsonp([2],{"0KrC":function(s,t){},FeBl:function(s,t){var e=s.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},N0EE:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("GQaK"),l=e("mvHQ"),r=e.n(l);var a=e("NVrd"),c=e("fJdx"),n={props:{seller:{type:Object}},data:function(){var s,t,e,i;return{favorite:(s=this.seller.id,t="favorite",e=!1,(i=window.localStorage.__seller__)&&(i=JSON.parse(i)[s])&&i[t]||e)}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},watch:{seller:function(){var s=this;this.$nextTick(function(){s._initScroll(),s._initPics()})}},mounted:function(){var s=this;this.$nextTick(function(){s._initScroll(),s._initPics()})},methods:{toggleFavorite:function(s){var t,e,i,l;s._constructed&&(this.favorite=!this.favorite,t=this.seller.id,e="favorite",i=this.favorite,(l=window.localStorage.__seller__)?(l=JSON.parse(l))[t]||(l[t]={}):(l={})[t]={},l[t][e]=i,window.localStorage.__seller__=r()(l))},_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new i.a(this.$refs.seller,{click:!0})},_initPics:function(){var s=this;if(this.seller.pics){var t=126*this.seller.pics.length-6;this.$refs.picList.style.width=t+"px",this.$nextTick(function(){s.picScroll?s.picScroll.refresh():s.picScroll=new i.a(s.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}},components:{star:a.a,split:c.a}},o={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[s._v(s._s(s.seller.name))]),s._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:s.seller.score}}),s._v(" "),e("span",{staticClass:"text"},[s._v("("+s._s(s.seller.ratingCount)+")")]),s._v(" "),e("span",{staticClass:"text"},[s._v("月售"+s._s(s.seller.sellCount)+"单")])],1),s._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[s._v("起送价")]),s._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[s._v(s._s(s.seller.minPrice))]),s._v("元\n          ")])]),s._v(" "),e("li",{staticClass:"block"},[e("h2",[s._v("商家配送")]),s._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[s._v(s._s(s.seller.deliveryPrice))]),s._v("元\n          ")])]),s._v(" "),e("li",{staticClass:"block"},[e("h2",[s._v("平均配送时间")]),s._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[s._v(s._s(s.seller.deliveryTime))]),s._v("分钟\n          ")])])]),s._v(" "),e("div",{staticClass:"favorite",on:{click:s.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:s.favorite}}),s._v(" "),e("span",{staticClass:"text"},[s._v(s._s(s.favoriteText))])])]),s._v(" "),e("split"),s._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[s._v("公告与活动")]),s._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[s._v(s._s(s.seller.bulletin))])]),s._v(" "),s.seller.supports?e("ul",{staticClass:"supports"},s._l(s.seller.supports,function(t,i){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:s.classMap[s.seller.supports[i].type]}),s._v(" "),e("span",{staticClass:"text"},[s._v(s._s(s.seller.supports[i].description))])])})):s._e()]),s._v(" "),e("split"),s._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[s._v("商家实景")]),s._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},s._l(s.seller.pics,function(s){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:s,width:"120",height:"90"}})])}))])]),s._v(" "),e("split"),s._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[s._v("商家信息")]),s._v(" "),e("ul",s._l(s.seller.infos,function(t){return e("li",{staticClass:"info-item"},[s._v(s._s(t))])}))])],1)])},staticRenderFns:[]};var v=e("VU/8")(n,o,!1,function(s){e("0KrC")},null,null);t.default=v.exports},mvHQ:function(s,t,e){s.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(s,t,e){var i=e("FeBl"),l=i.JSON||(i.JSON={stringify:JSON.stringify});s.exports=function(s){return l.stringify.apply(l,arguments)}}});