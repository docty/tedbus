(window.webpackJsonpreactapp=window.webpackJsonpreactapp||[]).push([[0],{133:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),m=t(24),o=(t(80),t(81),t(70)),i=t(25),s=t(11),u=t(12),h=t(15),p=t(13),d=t(7),f=t(14),b=t(4),E=t.n(b),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).checkAvailability=t.checkAvailability.bind(Object(d.a)(t)),t.changeOrigin=t.changeOrigin.bind(Object(d.a)(t)),t.changeDestination=t.changeDestination.bind(Object(d.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"checkAvailability",value:function(){window.location.href="/detail"}},{key:"changeOrigin",value:function(e){var a=["Accra","Kumasi","Sunyani"].filter((function(a){return a!==e.target.value})),t=E()("#destination").val();E()("#destination").empty();for(var n=0;n<a.length;n++)E()("#destination").append(new Option(a[n],a[n]));E()("#destination").val(t)}},{key:"changeDestination",value:function(e){var a=["Accra","Kumasi","Sunyani"].filter((function(a){return a!==e.target.value})),t=E()("#origin").val();E()("#origin").empty();for(var n=0;n<a.length;n++)E()("#origin").append(new Option(a[n],a[n]));E()("#origin").val(t)}},{key:"componentDidMount",value:function(){for(var e=["Accra","Kumasi","Sunyani"],a=0;a<e.length;a++)E()("#origin").append(new Option(e[a],e[a]));for(var t=e.length-1;t>=0;t--)E()("#destination").append(new Option(e[t],e[t]))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-wrapper"},l.a.createElement("h1",null,"Book A Bus"),l.a.createElement("div",{className:"base-form"},l.a.createElement("form",{className:"form-wrapper"},l.a.createElement("div",{className:"item-group"},l.a.createElement("label",null," Origin"),l.a.createElement("select",{id:"origin",onChange:this.changeOrigin,className:"form-control",required:""}," ")),l.a.createElement("div",{className:"item-group"},l.a.createElement("label",null,"Destination"),l.a.createElement("select",{id:"destination",onChange:this.changeDestination,className:"form-control",required:""}," ")),l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.checkAvailability,style:{marginTop:"35px",height:"25%"}},"Check Availability"))))}}]),a}(l.a.Component),g=t(30),y=t(31),N="postPersonal",O="detailsBus";function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(t,!0).forEach((function(a){Object(y.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var j={bus:"VIP"},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return C({},e,{bus:a.payload});default:return e}};function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(t,!0).forEach((function(a){Object(y.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var D={valueChange:{}};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return P({},e,{valueChange:P({},e.valueChange,{},a.payload)});default:return e}},F=Object(g.b)({personal:S,details:w});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(82);var I=t(66),B=t.n(I);var V=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).onNextItem=t.onNextItem.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.changeBus=t.changeBus.bind(Object(d.a)(t)),t.state={startDate:new Date},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){for(var e=["VIP","STC","M3 Express"],a=["Asford","Dalex","Runbat"],t=0;t<e.length;t++)E()("#buses").append(new Option(e[t],e[t]));for(var n=0;n<a.length;n++)E()("#buses_model").append(new Option(a[n],a[n]));E()("#price").val("GHC 55.00")}},{key:"changeBus",value:function(e){var a;switch(this.props.onSetBus(e),e.target.value){case"VIP":a=["Asford","Dalex","Runbat"],E()("#price").val("GHC 55.00");break;case"STC":a=["Flat","Broad","Coach"],E()("#price").val("GHC 50.00");break;case"M3 Express":a=["Opener","Closed","Euro"],E()("#price").val("GHC 45.00");break;default:a=["Asford","Dalex","Runbat"]}E()("#buses_model").empty();for(var t=0;t<a.length;t++)E()("#buses_model").append(new Option(a[t],a[t]))}},{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"handleChange",value:function(e){this.setState({startDate:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Bus"),l.a.createElement("select",{className:"form-control",id:"buses",defaultValue:this.props.bus,onChange:this.changeBus})),l.a.createElement("div",null,l.a.createElement("label",null,"Bus Type"),l.a.createElement("select",{className:"form-control",style:{width:"120px"},id:"buses_model"})),l.a.createElement("div",null,l.a.createElement("label",null,"Price"),l.a.createElement("input",{className:"form-control",type:"text",disabled:!0,id:"price",placeholder:"Default Price"}))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Date"),l.a.createElement(B.a,{className:"form-control",selected:this.state.startDate,onChange:this.handleChange,name:"startDate"})),l.a.createElement("div",null,l.a.createElement("label",null,"Time"),l.a.createElement("input",{className:"form-control",placeholder:"Select time"})),l.a.createElement("div",null,l.a.createElement("label",null,"Pick up point"),l.a.createElement("select",{className:"form-control"},l.a.createElement("option",{value:"am"},"Asafo Market"),l.a.createElement("option",{value:"ts"},"Tech Station")))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",{className:"detail-passengers"},l.a.createElement("label",null,"Number of Passengers"),l.a.createElement("select",{className:"form-control"},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"))),l.a.createElement("div",{className:"detail-luggage"},l.a.createElement("label",null,"Luggage"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"luggage",id:"formCheck-2"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-2"},"Yes")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"luggage",id:"formCheck-3"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-3"},"No")))),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-right",type:"button",onClick:function(){return e.onNextItem("personal")}},"NEXT")))}}]),a}(n.Component),A=Object(m.b)((function(e){return{bus:e.details.bus}}),(function(e){return{onSetBus:function(a){e({type:O,payload:a.target.value})}}}))(V),T=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).onNextItem=t.onNextItem.bind(Object(d.a)(t)),t.onValueChange=t.onValueChange.bind(Object(d.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"onValueChange",value:function(e){this.props.onValueChange(e)}},{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",{style:{paddingBottom:"4%"}},l.a.createElement("div",null,l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"identity",id:"formCheck-2"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-2"},"Use previous details")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"identity",id:"formCheck-3"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-3"},"I am a new User")))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Surname"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.surname,placeholder:"Enter surname",onChange:this.onValueChange,name:"surname"})),l.a.createElement("div",null,l.a.createElement("label",null,"First & Other Name"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.firstname,placeholder:"Enter first & other name",onChange:this.onValueChange,name:"firstname"}))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.phonenumber,placeholder:"Enter phone number",onChange:this.onValueChange,name:"phonenumber"})),l.a.createElement("div",null,l.a.createElement("label",null,"Email Address"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.email,placeholder:"Enter email address",onChange:this.onValueChange,name:"email"}))),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-left",type:"button",onClick:function(){return e.onNextItem("detail")}},"BACK"),l.a.createElement("button",{className:"btn btn-primary float-right",type:"button",onClick:function(){return e.onNextItem("payment")}},"NEXT")))}}]),a}(n.Component),M=Object(m.b)((function(e){return{valueChange:e.personal.valueChange}}),(function(e){return{onValueChange:function(a){var t;e((t=a,{type:N,payload:Object(y.a)({},t.target.name,t.target.value)}))}}}))(T),_=t(69),K=t.n(_),G=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).onNextItem=t.onNextItem.bind(Object(d.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Pay By"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",id:"formCheck-1",name:"cash"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-1"},l.a.createElement("img",{src:K.a,style:{width:"80px"},alt:"mtn mobile money"}))),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",id:"formCheck-1",name:"cash"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-1"},"Vodafone Cash")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",id:"formCheck-1",name:"cash"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-1"},"AirtelTigo Cash")))),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-left",type:"button",onClick:function(){return e.onNextItem("personal")}},"BACK"),l.a.createElement("button",{className:"btn btn-primary float-right",type:"button",onClick:function(){return e.onNextItem("summary")}},"NEXT")))}}]),a}(n.Component),H=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).onNextItem=t.onNextItem.bind(Object(d.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",null,l.a.createElement("label",null,"Full Name : ",this.props.valueChange.surname+" "+this.props.valueChange.firstname),"  ",l.a.createElement("br",null),l.a.createElement("label",null,"Contact : ",this.props.valueChange.phonenumber),l.a.createElement("br",null),l.a.createElement("label",null,"Email : ",this.props.valueChange.email,"  "),l.a.createElement("br",null),l.a.createElement("label",null,"Bus : ",this.props.bus),l.a.createElement("br",null),l.a.createElement("label",null,"Bus Type "),l.a.createElement("br",null),l.a.createElement("label",null,"Number of Passangers "),l.a.createElement("br",null),l.a.createElement("label",null,"Luggage "),l.a.createElement("br",null),l.a.createElement("label",null,"Date / Time "),l.a.createElement("br",null),l.a.createElement("label",null,"Pickup point "),l.a.createElement("br",null),l.a.createElement("label",null,"Price "),l.a.createElement("br",null),l.a.createElement("label",null,"Payment Method "),l.a.createElement("br",null),l.a.createElement("label",null,"Ticket Reference "),l.a.createElement("br",null)),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-left",type:"button",onClick:function(){return e.onNextItem("payment")}},"BACK"),l.a.createElement("button",{className:"btn btn-primary float-right",type:"button"},"SUBMIT")))}}]),a}(n.Component),R=Object(m.b)((function(e){return{valueChange:e.personal.valueChange,bus:e.details.bus}}),null)(H),U=t(37),X=t.n(U),q=t(38),J=t.n(q),L=t(39),W=t.n(L),Y=t(40),$=t.n(Y),z=(t(131),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={property:"detail",buses:"Vip"},t.SwapForm=t.SwapForm.bind(Object(d.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){E()("#image_src_1").attr("data-src","Vip")}},{key:"SwapForm",value:function(e){this.setState({property:e})}},{key:"render",value:function(){switch(this.state.property){case"detail":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left active-item"},"Details"),l.a.createElement("h4",{className:"float-left"},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(A,{changeForm:this.SwapForm}),l.a.createElement($.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":X.a}),l.a.createElement("div",{"data-src":J.a}),l.a.createElement("div",{"data-src":W.a}))));case"personal":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left "},"Details"),l.a.createElement("h4",{className:"float-left active-item"},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(M,{changeForm:this.SwapForm}),l.a.createElement($.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":X.a}),l.a.createElement("div",{"data-src":J.a}),l.a.createElement("div",{"data-src":W.a}))));case"payment":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left "},"Details"),l.a.createElement("h4",{className:"float-left "},"Personal"),l.a.createElement("h4",{className:"float-left active-item"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(G,{changeForm:this.SwapForm}),l.a.createElement($.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":X.a}),l.a.createElement("div",{"data-src":J.a}),l.a.createElement("div",{"data-src":W.a}))));case"summary":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left "},"Details"),l.a.createElement("h4",{className:"float-left "},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",{className:"active-item"},"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(R,{changeForm:this.SwapForm}),l.a.createElement($.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":X.a}),l.a.createElement("div",{"data-src":J.a}),l.a.createElement("div",{"data-src":W.a}))));default:return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left active-item"},"Details"),l.a.createElement("h4",{className:"float-left"},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement(A,{changeForm:this.SwapForm}))}}}]),a}(n.Component)),Q=l.a.createElement(m.a,{store:Object(g.c)(F)},l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:v}),l.a.createElement(i.a,{exact:!0,path:"/detail",component:z}))));c.a.render(Q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,a,t){e.exports=t.p+"static/media/4.7ea17d9b.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/vip.6b1ab87d.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/vip_2.cfbd5195.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/mtn.d37ea352.jpg"},71:function(e,a,t){e.exports=t(133)},80:function(e,a,t){},81:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.7e1fbdd7.chunk.js.map