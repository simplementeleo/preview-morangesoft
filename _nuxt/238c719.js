(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{267:function(t,e,o){var content=o(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("25399662",content,!0,{sourceMap:!1})},268:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},271:function(t,e,o){"use strict";o.r(e);o(286);var n={head:{title:"MorangeSoft | Inicio",meta:[{hid:"description",name:"description",content:"Página de Inicio | MorangeSoft"}]},mounted:function(){new Typed("#home-typed",{strings:["Te damos soluciones ágiles y de gran calidad.","Desarrollo innovador para un mundo moderno.","Creatividad y experiencia para todos tus proyectos."],typeSpeed:47,loop:!1,showCursor:!1,startDelay:1200})},data:function(){return{letters:[{key:"m",delay:"100ms"},{key:"o",delay:"200ms"},{key:"r",delay:"300ms"},{key:"a",delay:"400ms"},{key:"n",delay:"500ms"},{key:"g",delay:"500ms"},{key:"e",delay:"600ms"},{key:"s",delay:"700ms"},{key:"o",delay:"800ms"},{key:"f",delay:"900ms"},{key:"t",delay:"1000ms"}],dataForm:{}}},methods:{form:function(t){Object.values(t).length>2?console.log(t):Swal.fire({icon:"error",title:"Oops...",text:"Se requiere llenar todos los campos"})}}},r=(o(288),o(44)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},[n("b-container",[n("div",[n("span",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"title mt-4"},t._l(t.letters,(function(e,o){return n("span",{key:o,staticClass:"animate__animated animate__bounce letter",style:{"animation-delay":e.delay}},[t._v("\n            "+t._s(e.key)+"\n          ")])})),0),t._v(" "),n("h4",{attrs:{id:"home-typed"}}),t._v(" "),n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn-m mt-4",attrs:{type:"button"}},[t._v("\n          vamos\n        ")])]),t._v(" "),n("b-modal",{attrs:{id:"modal-1","no-header":"","hide-footer":""}},[n("img",{attrs:{src:o(285),width:"100%"}}),t._v(" "),n("form",{staticClass:"px-4",on:{submit:function(e){return e.preventDefault(),t.form(t.dataForm)}}},[n("b-form-input",{staticClass:"mt-4",attrs:{type:"text",required:"",placeholder:"+00 000 000"},model:{value:t.dataForm.phone,callback:function(e){t.$set(t.dataForm,"phone",e)},expression:"dataForm.phone"}}),t._v(" "),n("b-form-input",{staticClass:"mt-4",attrs:{type:"email",required:"",placeholder:"email@email.com"},model:{value:t.dataForm.email,callback:function(e){t.$set(t.dataForm,"email",e)},expression:"dataForm.email"}}),t._v(" "),n("b-form-input",{staticClass:"mt-4",attrs:{type:"text",required:"",placeholder:"Joe Kigman"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}}),t._v(" "),n("button",{staticClass:"btn btn-block btn-m mx-auto my-5",attrs:{type:"submit"}},[t._v("\n            Enviar\n          ")])],1)])],1)],1)])}),[],!1,null,"780a1bc8",null);e.default=component.exports},285:function(t,e,o){t.exports=o.p+"img/contact.2d3b178.jpg"},286:function(t,e,o){var n=o(12),r=o(287).values;n({target:"Object",stat:!0},{values:function(t){return r(t)}})},287:function(t,e,o){var n=o(29),r=o(84),c=o(45),d=o(105).f,l=function(t){return function(e){for(var o,l=c(e),m=r(l),f=m.length,i=0,v=[];f>i;)o=m[i++],n&&!d.call(l,o)||v.push(t?[o,l[o]]:l[o]);return v}};t.exports={entries:l(!0),values:l(!1)}},288:function(t,e,o){"use strict";var n=o(267);o.n(n).a},289:function(t,e,o){var n=o(54),r=o(268),c=o(290);e=n(!1);var d=r(c);e.push([t.i,".main[data-v-780a1bc8]{position:absolute;background:url("+d+') no-repeat;background-size:cover;background-position:100% 100%;top:0;left:0;width:100%;height:100vh;z-index:-1}@media (max-width:767px){.main[data-v-780a1bc8]{background-position:0 100%}}.main .container[data-v-780a1bc8]{position:relative;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.main .container .btn-m[data-v-780a1bc8]{z-index:1}.main .container .bar[data-v-780a1bc8]{position:absolute;width:3.4em;height:5px;border-radius:50px;background:#0b2a48}.main .container .title[data-v-780a1bc8]{font-family:"Passion One",cursive!important;position:relative;color:#2a2ea5;text-transform:uppercase;font-size:4em}@media (max-width:412px){.main .container .title[data-v-780a1bc8]{font-size:2.5em}}.main .container .title span[data-v-780a1bc8]{padding:0;position:relative;display:inline-block;top:0}.main .container .title span.letter[data-v-780a1bc8]{-webkit-animation:zoomColor-data-v-780a1bc8 .7s ease-in-out;animation:zoomColor-data-v-780a1bc8 .7s ease-in-out;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes zoomColor-data-v-780a1bc8{0%{color:#fa4822;transform:scale(1);text-shadow:0 5px 15px rgba(250,74,34,.60392)}to{color:#3144e9;transform:scale(2);text-shadow:0 5px 15px rgba(50,68,233,.67843)}}@keyframes zoomColor-data-v-780a1bc8{0%{color:#fa4822;transform:scale(1);text-shadow:0 5px 15px rgba(250,74,34,.60392)}to{color:#3144e9;transform:scale(2);text-shadow:0 5px 15px rgba(50,68,233,.67843)}}.main .container h4[data-v-780a1bc8]{max-width:30rem;font-family:"Comfortaa",cursive;line-height:1.5}',""]),t.exports=e},290:function(t,e,o){t.exports=o.p+"img/bg.27edb9b.jpg"},291:function(t,e,o){var content=o(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("798f30b4",content,!0,{sourceMap:!1})},292:function(t,e,o){var content=o(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("85b5339a",content,!0,{sourceMap:!1})},293:function(t,e,o){var content=o(373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("845c31f4",content,!0,{sourceMap:!1})},294:function(t,e,o){var content=o(375);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("2f2da52a",content,!0,{sourceMap:!1})},295:function(t,e,o){var content=o(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("75bf260f",content,!0,{sourceMap:!1})},304:function(t,e,o){t.exports=o.p+"img/left0.a78c402.png"},306:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{reg:[{title:"Web Summit",text:"Web Summit es una conferencia anual de tecnología celebrada en Lisboaa, considderada el mayor evento tecnológico del mundo. Fundada en 2009 por Paddy Cosgrave, David Kelly y Daire Hickey.",button:{isActive:!1,url:"#"},image:"1.jpeg"},{title:"Lorem ipsum, dolor.",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum numquam quis odit temporibus, aliquid praesentium fugit, aut dignissimos animi iusto, quae nisi vitae et sequi hic architecto corporis eius.",button:{isActive:!1,url:""},image:"3.jpg"},{title:"Lorem ipsum, dolor.",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum numquam quis odit temporibus, aliquid praesentium fugit, aut dignissimos animi iusto, quae nisi vitae et sequi hic architecto corporis eius.",button:{isActive:!1,url:""},image:"2.jpg"},{title:"Juego Sube Sube PPK",text:"Es un juego muy divertido sobre Pedro Pablo Kuczynski está causando furor y sensación en las redes sociales. Se trata de “Sube sube PPK”.",button:{isActive:!0,url:"https://panamericana.pe/entretenimiento/210605-sube-sube-ppk-videojuego-viene-conquistando-internet"},image:"4.jpg"}]}},mounted:function(){new Swiper(".swiper-container-recognitions",{direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}},r=(o(372),o(44)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-recognitions"},[n("img",{staticClass:"curve img-fluid",attrs:{src:o(366)}}),t._v(" "),n("div",{staticClass:"container-content py-5"},[t._m(0),t._v(" "),n("div",{staticClass:"swiper-container swiper-container-recognitions my-2",attrs:{"data-aos":"fade-up-right","data-aos-once":"true"}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.reg,(function(e){return n("div",{key:e.image,staticClass:"swiper-slide p-4"},[n("b-container",[n("b-row",[n("b-col",{staticClass:"mt-4 d-flex flex-column justify-content-center align-items-center text-center",attrs:{cols:"12",sm:"12",md:"6"}},[n("h3",{staticClass:"mb-4"},[t._v(t._s(e.title)+".")]),t._v(" "),n("p",[t._v(t._s(e.text))]),t._v(" "),e.button.isActive?n("a",{attrs:{href:e.button.url,target:"_blank"}},[t._v("Ver más...")]):t._e()]),t._v(" "),n("b-col",{staticClass:"mt-4 d-flex justify-content-center align-items-center",attrs:{cols:"12",sm:"12",md:"6"}},[n("b-img",{staticClass:"img-fluid rounded",attrs:{src:o(367)("./"+e.image)}})],1)],1)],1)],1)})),0),t._v(" "),n("div",{staticClass:"swiper-pagination"}),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex flex-column align-items-center"},[e("h1",{staticClass:"text-center mt-5",attrs:{"data-aos":"fade-down-right","data-aos-once":"true"}},[this._v("Reconocimientos")]),this._v(" "),e("span",{staticClass:"guion mt-4"})])}],!1,null,"28b33338",null);e.default=component.exports},307:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{testimonials:[{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam esse cupiditate qui accusantium repudiand sed placeat quo nemo suscipit, omnis, porro est voluptatem ad. Nisi ex nesciunt nulla inventore?",image:"1.jpg",name:"Aurora Betancourt"},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam esse cupiditate qui accusantium repudiand sed placeat quo nemo suscipit, omnis, porro est voluptatem ad. Nisi ex nesciunt nulla inventore?",image:"2.jpg",name:"Joe Gona"}]}},mounted:function(){new Swiper(".slides-testimonials",{loop:!0,autoplay:{delay:4e3}})}},r=(o(379),o(44)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-content mt-1"},[t._m(0),t._v(" "),n("div",{staticClass:"swiper-container slides-testimonials"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.testimonials,(function(e){return n("div",{key:e.image,staticClass:"swiper-slide"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content d-flex flex-column justify-content-center align-items-center"},[n("p",{staticClass:"text-center p-5"},[n("span",[t._v('"')]),t._v(t._s(e.text)),n("span",[t._v('"')])]),t._v(" "),n("div",{staticClass:"image d-flex flex-column justify-content-center align-items-center mt-3"},[n("img",{staticClass:"img-fluid rounded-circle",attrs:{src:o(376)("./"+e.image),width:"100"}}),t._v(" "),n("i",{staticClass:"mt-3"},[t._v(t._s(e.name))])])])])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex flex-column align-items-center mt-5"},[e("h1",{staticClass:"text-center mt-5",attrs:{"data-aos":"fade-down-right","data-aos-once":"true"}},[this._v("Testimonios")]),this._v(" "),e("span",{staticClass:"guion mt-4"})])}],!1,null,"2de27838",null);e.default=component.exports},313:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-us",attrs:{id:"somos"}},[e("div",{staticClass:"main-somos pt-5"},[e("img",{staticClass:"left-img",attrs:{src:o(304)}}),this._v(" "),e("img",{staticClass:"right-img",attrs:{src:o(304)}}),this._v(" "),e("div",{staticClass:"d-flex flex-column align-items-center"},[e("h1",{staticClass:"text-center",attrs:{"data-aos":"fade-down-right","data-aos-once":"true"}},[this._v("¿Quienes Somos?")]),this._v(" "),e("span",{staticClass:"guion mt-4"})]),this._v(" "),e("div",{staticClass:"container-content mt-5"},[e("div",{staticClass:"image-border-somos d-flex justify-content-center align-items-center"},[e("img",{attrs:{"data-aos":"flip-down","data-aos-once":"true",src:o(359),width:"78%"}})]),this._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6 col-sm-12 mt-5 text-center",attrs:{"data-aos-once":"true","data-aos":"zoom-in"}},[this._v("\n          Somos un equipo de profesionales altamente capacitados para con diferentes habilidades en programacion y UX Design\n        ")])])])])])}],r=(o(360),o(44)),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,"568cfbdf",null);e.default=component.exports},314:function(t,e,o){"use strict";o.r(e);o(364);var n=o(44),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-manager"},[n("div",{staticClass:"container-content mt-5 py-5"},[n("b-img",{staticClass:"curve img-fluid",attrs:{src:o(362)}}),t._v(" "),n("b-row",{staticClass:"my-5"},[n("b-col",{staticClass:"mt-5 d-flex flex-column justify-content-center align-items-center",attrs:{cols:"12",sm:"12",md:"6"}},[n("div",{staticClass:"img-manager"},[n("b-img",{staticClass:"manager img-fluid",attrs:{"data-aos":"fade-down-right","data-aos-once":"true",src:o(363)}})],1)]),t._v(" "),n("b-col",{staticClass:"mt-5 d-flex flex-column justify-content-center align-items-center text-center",attrs:{cols:"12",sm:"12",md:"6"}},[n("h3",{attrs:{"data-aos":"fade-down-right","data-aos-once":"true","data-aos-delay":"200"}},[t._v("Mijail Quesada")]),t._v(" "),n("div",{staticClass:"name-manager mt-4"},[n("p",[t._v("gerente general")])]),t._v(" "),n("i",{staticClass:"my-1"}),t._v(" "),n("p",{staticClass:"border-right border-bottom p-4",attrs:{"data-aos":"fade-down-right","data-aos-once":"true","data-aos-delay":"400"}},[t._v("Empresario experto\n          en soluciones digitales, Proveedor del estado, Universidad Wiener y Universidad Pucp, Consultor de negocios\n          y emprendimientos.")])])],1)],1)])}),[],!1,null,"df9dafda",null);e.default=component.exports},315:function(t,e,o){"use strict";o.r(e);o(374);var n=o(44),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-content my-5"},[o("div",{staticClass:"video text-center my-5"},[o("span",{staticClass:"box",attrs:{"data-aos":"zoom-in","data-aos-once":"true","data-aos-delay":"300"}}),t._v(" "),o("span",{staticClass:"circle",attrs:{"data-aos":"zoom-in","data-aos-once":"true","data-aos-delay":"200"}}),t._v(" "),o("span",{staticClass:"box-circle",attrs:{"data-aos":"zoom-in","data-aos-once":"true","data-aos-delay":"150"}},t._l(5,(function(e){return o("div",{key:e},t._l(20,(function(i){return o("i",{key:i})})),0)})),0),t._v(" "),o("iframe",{attrs:{"data-aos":"zoom-in","data-aos-once":"true",src:"https://www.youtube.com/embed/IiPaPwcn1CI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),t._v(" "),o("div",{staticClass:"mt-5"})])}),[],!1,null,"3c26d00c",null);e.default=component.exports},359:function(t,e,o){t.exports=o.p+"img/weare.77b3067.jpg"},360:function(t,e,o){"use strict";var n=o(291);o.n(n).a},361:function(t,e,o){(e=o(54)(!1)).push([t.i,'.about-us[data-v-568cfbdf]{font-family:"Comfortaa",cursive;margin-top:100vh}.about-us[data-v-568cfbdf],.about-us .main-somos[data-v-568cfbdf]{position:relative}.about-us .main-somos h1[data-v-568cfbdf]{color:#332a85}.about-us .main-somos .right-img[data-v-568cfbdf]{right:0;top:0;transform:rotate(180deg)}.about-us .main-somos .left-img[data-v-568cfbdf],.about-us .main-somos .right-img[data-v-568cfbdf]{position:absolute;opacity:.7;width:24vw;max-width:300px;margin:auto 0}.about-us .main-somos .left-img[data-v-568cfbdf]{left:0;top:51px}.about-us .main-somos .image-border-somos[data-v-568cfbdf]{position:relative}.about-us .main-somos .image-border-somos img[data-v-568cfbdf]{box-shadow:1px 1px 15px rgba(210,216,223,.3098);z-index:-1;border-radius:50px}.about-us .main-somos .image-border-somos .border[data-v-568cfbdf]{position:absolute;border:8px solid rgba(43,68,233,.52941)!important;z-index:2;width:100%;height:100%;top:15px;left:15px;border-radius:50px}.about-us .main-somos .image-border-somos .circle[data-v-568cfbdf]{position:absolute;border-radius:50%;border:3px dashed rgba(75,73,170,.53);width:20vh;height:20vh;right:0;top:-40%}@media (max-width:480px){.about-us .main-somos .image-border-somos .circle[data-v-568cfbdf]{width:8vh;height:8vh}}.about-us .main-somos .image-border-somos .circle[data-v-568cfbdf]:nth-of-type(2){width:40vh;height:40vh;border:3px dashed rgba(255,0,0,.336);left:-20%;top:70%}@media (max-width:480px){.about-us .main-somos .image-border-somos .circle[data-v-568cfbdf]:nth-of-type(2){width:30vh;height:30vh}}',""]),t.exports=e},362:function(t,e,o){t.exports=o.p+"img/white-curve.cbb2549.png"},363:function(t,e,o){t.exports=o.p+"img/general-manager.0ad5f3d.jpeg"},364:function(t,e,o){"use strict";var n=o(292);o.n(n).a},365:function(t,e,o){(e=o(54)(!1)).push([t.i,'.main-manager[data-v-df9dafda]{background:#2a2ea5}.main-manager .container-content[data-v-df9dafda]{position:relative}.main-manager .container-content .curve[data-v-df9dafda]{position:absolute;left:0;top:0;width:100%}.main-manager .container-content h3[data-v-df9dafda]{font-family:"Comfortaa",cursive;color:#e2e6f3}.main-manager .container-content .name-manager p[data-v-df9dafda]{display:flex;text-transform:uppercase;font-size:14px;position:relative}.main-manager .container-content .name-manager p[data-v-df9dafda]:before{content:"";display:block;width:10vw;max-width:70px;height:1px;background:#dee2e6;position:absolute;right:160px;top:8px}.main-manager .container-content .name-manager p[data-v-df9dafda]:after{content:"";display:block;width:10vw;max-width:70px;height:1px;background:#dee2e6;position:absolute;left:160px;top:8px}.main-manager .container-content p[data-v-df9dafda]{font-family:"Comfortaa",cursive;line-height:1.5;max-width:20em;color:#e2e6f3}.main-manager .container-content i[data-v-df9dafda]{width:75px;height:2px;background:rgba(52,230,230,.81176)}.main-manager .container-content .img-manager[data-v-df9dafda]{position:relative}.main-manager .container-content .img-manager .manager[data-v-df9dafda]{border-radius:50px;z-index:4}.main-manager .container-content .img-manager .icon[data-v-df9dafda]{left:0;z-index:1}',""]),t.exports=e},366:function(t,e,o){t.exports=o.p+"img/blue-curve.f3f80ad.png"},367:function(t,e,o){var map={"./1.jpeg":368,"./2.jpg":369,"./3.jpg":370,"./4.jpg":371};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=367},368:function(t,e,o){t.exports=o.p+"img/1.8ba4a6d.jpeg"},369:function(t,e,o){t.exports=o.p+"img/2.96cbfc8.jpg"},370:function(t,e,o){t.exports=o.p+"img/3.d300a06.jpg"},371:function(t,e,o){t.exports=o.p+"img/4.780ec6d.jpg"},372:function(t,e,o){"use strict";var n=o(293);o.n(n).a},373:function(t,e,o){(e=o(54)(!1)).push([t.i,'.main-recognitions[data-v-28b33338]{position:relative;font-family:"Comfortaa",cursive}.main-recognitions p[data-v-28b33338]{max-width:20em;line-height:1.5}.main-recognitions .curve[data-v-28b33338]{position:absolute;left:0;top:0;width:100%}.main-recognitions .swiper-container img[data-v-28b33338]{border-radius:200px;box-shadow:10px 7px 28px rgba(0,123,255,.25098)}',""]),t.exports=e},374:function(t,e,o){"use strict";var n=o(294);o.n(n).a},375:function(t,e,o){(e=o(54)(!1)).push([t.i,".video[data-v-3c26d00c]{position:relative}.video iframe[data-v-3c26d00c]{width:100%;max-width:560px;height:360px;border-radius:10px;box-shadow:0 6px 51px rgba(0,255,255,.34902)}.video .box[data-v-3c26d00c],.video .box-circle[data-v-3c26d00c],.video .circle[data-v-3c26d00c]{position:absolute}.video .box[data-v-3c26d00c]{border:7px solid #ff360b;right:0;bottom:-13px;transform:rotate(45deg);box-shadow:0 0 33px rgba(255,0,0,.23922),inset 0 0 27px rgba(255,0,0,.23922)}.video .box[data-v-3c26d00c],.video .circle[data-v-3c26d00c]{width:20vw;height:20vw;z-index:-1}.video .circle[data-v-3c26d00c]{border-radius:50%;border:10px solid #2b44e9;left:-66px;top:-94px;box-shadow:0 0 33px rgba(0,90,255,.23922),inset 0 0 27px rgba(0,90,255,.23922)}.video .box-circle[data-v-3c26d00c]{left:-31px;bottom:-31px;z-index:-1}.video .box-circle div[data-v-3c26d00c]{display:flex;justify-content:center;align-items:center;margin-top:6px}.video .box-circle div i[data-v-3c26d00c]{width:1vw;height:1vw;background:#fb28ba;border-radius:50%;margin-right:6px;box-shadow:0 4px 19px rgba(228,40,214,.30196)}",""]),t.exports=e},376:function(t,e,o){var map={"./1.jpg":377,"./2.jpg":378};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=376},377:function(t,e,o){t.exports=o.p+"img/1.01a3a5c.jpg"},378:function(t,e,o){t.exports=o.p+"img/2.e2862a2.jpg"},379:function(t,e,o){"use strict";var n=o(295);o.n(n).a},380:function(t,e,o){(e=o(54)(!1)).push([t.i,'.container-content[data-v-2de27838]{font-family:"Comfortaa",cursive}.container-content .card[data-v-2de27838]{border:none;background:transparent}.container-content .card .card-content p[data-v-2de27838]{position:relative;max-width:560px;line-height:1.8}.container-content .card .card-content p span[data-v-2de27838]{position:absolute;font-size:3em;font-family:"Passion One",cursive;color:hsla(0,0%,50.2%,.21961)}.container-content .card .card-content p span[data-v-2de27838]:first-child{top:0;left:0;transform:rotateY(180deg)}.container-content .card .card-content p span[data-v-2de27838]:nth-child(2){bottom:0;right:0}.container-content .card .card-content .image[data-v-2de27838]{position:relative}.container-content .card .card-content .image[data-v-2de27838]:before{content:"";display:inline-block;width:10vw;height:1px;background:rgba(0,0,0,.14902);transform:translate(-117px,50px)}.container-content .card .card-content .image[data-v-2de27838]:after{content:"";display:inline-block;width:10vw;height:1px;background:rgba(0,0,0,.14902);transform:translate(114px,-91px)}',""]),t.exports=e},383:function(t,e,o){"use strict";o.r(e);var n=o(271),r=o(313),c=o(314),d=o(306),l=o(315),m=o(307),f={components:{Home:n.default,AboutUs:r.default,Manager:c.default,Recognitions:d.default,Video:l.default,Testimonials:m.default}},v=o(44),component=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Home"),this._v(" "),e("AboutUs"),this._v(" "),e("Manager"),this._v(" "),e("Recognitions"),this._v(" "),e("Testimonials"),this._v(" "),e("Video")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Home:o(271).default,AboutUs:o(313).default,Manager:o(314).default,Recognitions:o(306).default,Testimonials:o(307).default,Video:o(315).default})}}]);