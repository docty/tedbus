(window.webpackJsonpreactapp=window.webpackJsonpreactapp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),o=a(19),i=(a(80),a(81),a(70)),s=a(26),m=a(11),u=a(12),p=a(15),d=a(13),h=a(4),f=a(14),b=a(7),g=a.n(b),E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).checkAvailability=a.checkAvailability.bind(Object(h.a)(a)),a.changeOrigin=a.changeOrigin.bind(Object(h.a)(a)),a.changeDestination=a.changeDestination.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"checkAvailability",value:function(){window.location.href="/detail"}},{key:"changeOrigin",value:function(e){var t=["Accra","Kumasi","Sunyani"].filter((function(t){return t!==e.target.value})),a=g()("#destination").val();g()("#destination").empty();for(var n=0;n<t.length;n++)g()("#destination").append(new Option(t[n],t[n]));g()("#destination").val(a)}},{key:"changeDestination",value:function(e){var t=["Accra","Kumasi","Sunyani"].filter((function(t){return t!==e.target.value})),a=g()("#origin").val();g()("#origin").empty();for(var n=0;n<t.length;n++)g()("#origin").append(new Option(t[n],t[n]));g()("#origin").val(a)}},{key:"componentDidMount",value:function(){for(var e=["Accra","Kumasi","Sunyani"],t=0;t<e.length;t++)g()("#origin").append(new Option(e[t],e[t]));for(var a=e.length-1;a>=0;a--)g()("#destination").append(new Option(e[a],e[a]))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-wrapper"},l.a.createElement("h1",null,"Book A Bus"),l.a.createElement("div",{className:"base-form"},l.a.createElement("form",{className:"form-wrapper"},l.a.createElement("div",{className:"item-group"},l.a.createElement("label",null," Origin"),l.a.createElement("select",{id:"origin",onChange:this.changeOrigin,className:"form-control",required:""}," ")),l.a.createElement("div",{className:"item-group"},l.a.createElement("label",null,"Destination"),l.a.createElement("select",{id:"destination",onChange:this.changeDestination,className:"form-control",required:""}," ")),l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.checkAvailability,style:{marginTop:"35px",height:"25%"}},"Check Availability"))))}}]),t}(l.a.Component),v=a(31),y=a(25),N="postPersonal",O="detailsBus",k="detailsPassengers",C="detailsBusType",j="detailsTime",w="detailsLuggage",P="detailsPickup",x="detailsPrice",S="paymentMethod";function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T={bus:"",bustype:"",passengers:"1",date:{year:(new Date).getUTCFullYear(),month:(new Date).getUTCMonth()+1,day:(new Date).getUTCDate()},time:"",luggage:!0,pickup:"",price:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return F({},e,{bus:t.payload});case k:return F({},e,{passengers:t.payload});case C:return F({},e,{bustype:t.payload});case"detailsDate":return F({},e,{date:t.payload});case j:return F({},e,{time:t.payload});case w:return F({},e,{luggage:!e.luggage});case P:return F({},e,{pickup:t.payload});case x:return F({},e,{price:t.payload});default:return e}};function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A={valueChange:{}};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return V({},e,{valueChange:V({},e.valueChange,{},t.payload)});default:return e}};function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L={payby:"MTN"},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return K({},e,{payby:t.payload});default:return e}},Y=Object(v.b)({personal:M,details:B,payment:U});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);var R=a(66),X=a.n(R);var q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onNextItem=a.onNextItem.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.changeBus=a.changeBus.bind(Object(h.a)(a)),a.state={startDate:new Date},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"changeBus",value:function(e){var t;this.props.onSetBus(e);var a="0";switch(e.target.value){case"VIP":t=["Asford","Dalex","Runbat"],a="55.00";break;case"STC":t=["Flat","Broad","Coach"],a="50.00";break;case"2M Express":a="45.00",t=["Opener","Closed","Euro"];break;default:a="55.00",t=["Asford","Dalex","Runbat"]}this.props.onSetPrice(a),g()("#buses_model").empty(),this.props.onSetBusType(t[0]);for(var n=0;n<t.length;n++)g()("#buses_model").append(new Option(t[n],t[n]))}},{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"handleChange",value:function(e){this.setState({startDate:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Bus"),l.a.createElement("select",{className:"form-control",id:"buses",defaultValue:this.props.bus,onChange:function(t){return e.changeBus(t)}},l.a.createElement("option",{disabled:!0,selected:!0},"Select A Bus"),l.a.createElement("option",{value:"VIP"},"VIP"),l.a.createElement("option",{value:"STC"},"STC"),l.a.createElement("option",{value:"2M Express"},"2M Express"))),l.a.createElement("div",null,l.a.createElement("label",null,"Bus Type"),l.a.createElement("select",{className:"form-control",defaultValue:this.props.bustype,disabled:""===this.props.bus,style:{width:"120px"},id:"buses_model",onChange:function(t){return e.props.onSetBusType(t.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Price"),l.a.createElement("input",{className:"form-control",type:"text",disabled:!0,id:"price",placeholder:"Default Price",value:"GHC "+this.props.price}))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Date"),l.a.createElement(X.a,{className:"form-control",selected:this.state.startDate,onChange:this.handleChange,name:"startDate"})),l.a.createElement("div",null,l.a.createElement("label",null,"Time"),l.a.createElement("select",{className:"form-control",defaultValue:this.props.bustime,onChange:function(t){return e.props.onSetBusTime(t)}},l.a.createElement("option",{value:"null"},"Select Your Time"),l.a.createElement("option",{value:"04 : 00"},"04 : 00"),l.a.createElement("option",{value:"06 : 00"},"06 : 00"),l.a.createElement("option",{value:"09 : 00"},"09 : 00"),l.a.createElement("option",{value:"12 : 00"},"12 : 00"),l.a.createElement("option",{value:"14 : 00"},"14 : 00"),l.a.createElement("option",{value:"16 : 00"},"16 : 00"),l.a.createElement("option",{value:"19 : 00"},"19 : 00"),l.a.createElement("option",{value:"21 : 00"},"21 : 00"))),l.a.createElement("div",null,l.a.createElement("label",null,"Pick up point"),l.a.createElement("select",{className:"form-control",defaultValue:this.props.pickup,onChange:function(t){return e.props.onChangePickup(t)}},l.a.createElement("option",{value:"null"},"Select Your Pickup Point"),l.a.createElement("option",{value:"Asafo Market"},"Asafo Market"),l.a.createElement("option",{value:"Tech Station"},"Tech Station")))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",{className:"detail-passengers"},l.a.createElement("label",null,"Number of Passengers"),l.a.createElement("select",{className:"form-control",defaultValue:this.props.passengers,id:"passengers_no",onChange:function(t){return e.props.onChangePassenger(t)}},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"))),l.a.createElement("div",{className:"detail-luggage"},l.a.createElement("label",null,"Luggage"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(){return e.props.onChangeLuggage()},name:"luggage",id:"formCheck-2",checked:!this.props.luggage}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-2"},"Yes")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",onChange:function(){return e.props.onChangeLuggage()},name:"luggage",id:"formCheck-3",checked:this.props.luggage}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-3"},"No")))),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-right",type:"button",onClick:function(){return e.onNextItem("personal")}},"NEXT")))}}]),t}(n.Component),G=Object(o.b)((function(e){return{bus:e.details.bus,bustype:e.details.bustype,passengers:e.details.passengers,bustime:e.details.time,luggage:e.details.luggage,pickup:e.details.pickup,price:e.details.price}}),(function(e){return{onSetBus:function(t){e({type:O,payload:t.target.value})},onChangePassenger:function(t){e({type:k,payload:t.target.value})},onSetBusType:function(t){e({type:C,payload:t})},onSetBusTime:function(t){e({type:j,payload:t.target.value})},onChangeLuggage:function(){e({type:w})},onChangePickup:function(t){e({type:P,payload:t.target.value})},onSetPrice:function(t){e({type:x,payload:t})}}}))(q),H=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onNextItem=a.onNextItem.bind(Object(h.a)(a)),a.onValueChange=a.onValueChange.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"onValueChange",value:function(e){this.props.onValueChange(e)}},{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",{style:{paddingBottom:"4%"}},l.a.createElement("div",null,l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"identity",id:"formCheck-2"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-2"},"Use previous details")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",checked:!0,name:"identity",id:"formCheck-3"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-3"},"I am a new User")))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Surname"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.surname,placeholder:"Enter surname",onChange:this.onValueChange,name:"surname"})),l.a.createElement("div",null,l.a.createElement("label",null,"First & Other Name"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.firstname,placeholder:"Enter first & other name",onChange:this.onValueChange,name:"firstname"}))),l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.phonenumber,placeholder:"Enter phone number",onChange:this.onValueChange,name:"phonenumber"})),l.a.createElement("div",null,l.a.createElement("label",null,"Email Address"),l.a.createElement("input",{className:"form-control",type:"text",defaultValue:this.props.valueChange.email,placeholder:"Enter email address",onChange:this.onValueChange,name:"email"}))),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-left",type:"button",onClick:function(){return e.onNextItem("detail")}},"BACK"),l.a.createElement("button",{className:"btn btn-primary float-right",type:"button",onClick:function(){return e.onNextItem("payment")}},"NEXT")))}}]),t}(n.Component),J=Object(o.b)((function(e){return{valueChange:e.personal.valueChange}}),(function(e){return{onValueChange:function(t){var a;e((a=t,{type:N,payload:Object(y.a)({},a.target.name,a.target.value)}))}}}))(H),W=a(69),$=a.n(W),z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onNextItem=a.onNextItem.bind(Object(h.a)(a)),a.pay=a.pay.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"pay",value:function(e){alert(e.target.value)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",{className:"detail-form-item"},l.a.createElement("div",null,l.a.createElement("label",null,"Pay By"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",checked:!0,onChange:this.pay,type:"radio",id:"formCheck-1",name:"cash"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-1"},l.a.createElement("img",{src:$.a,style:{width:"80px"},alt:"mtn mobile money"}))),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",onChange:this.pay,id:"formCheck-1",name:"cash"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-1"},"Vodafone Cash")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",id:"formCheck-1",name:"cash"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"formCheck-1"},"AirtelTigo Cash")))),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-left",type:"button",onClick:function(){return e.onNextItem("personal")}},"BACK"),l.a.createElement("button",{className:"btn btn-primary float-right",type:"button",onClick:function(){return e.onNextItem("summary")}},"NEXT")))}}]),t}(n.Component),Q=Object(o.b)(null,(function(e){return{onPaymentChange:function(t){e({type:S,payload:t.target.value})}}}))(z),Z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onNextItem=a.onNextItem.bind(Object(h.a)(a)),a.onFormSubmit=a.onFormSubmit.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"onNextItem",value:function(e){this.props.changeForm(e)}},{key:"onFormSubmit",value:function(){var e="Thank you \n "+this.props.valueChange.firstname+"\n for booking from Tedbus. \n Reference Id is 035c";alert(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"detail-form"},l.a.createElement("div",null,l.a.createElement("label",null,"Full Name : ",this.props.valueChange.surname+" "+this.props.valueChange.firstname),"  ",l.a.createElement("br",null),l.a.createElement("label",null,"Contact : ",this.props.valueChange.phonenumber),l.a.createElement("br",null),l.a.createElement("label",null,"Email : ",this.props.valueChange.email,"  "),l.a.createElement("br",null),l.a.createElement("label",null,"Bus : ",this.props.bus),l.a.createElement("br",null),l.a.createElement("label",null,"Bus Type : ",this.props.bustype," "),l.a.createElement("br",null),l.a.createElement("label",null,"Number of Passangers :  ",this.props.passengers),l.a.createElement("br",null),l.a.createElement("label",null,"Luggage : ",!0===!this.props.luggage?"Yes":"No"," "),l.a.createElement("br",null),l.a.createElement("label",null,"Date / Time :   ",this.props.year," - ",this.props.month," - ",this.props.day," / ",this.props.bustime),l.a.createElement("br",null),l.a.createElement("label",null,"Pickup point : ",this.props.pickup," "),l.a.createElement("br",null),l.a.createElement("label",null,"Price : GHC ",this.props.price," "),l.a.createElement("br",null),l.a.createElement("label",null,"Payment Method  : ",this.props.payby),l.a.createElement("br",null),l.a.createElement("label",null,"Ticket Reference "),l.a.createElement("br",null)),l.a.createElement("div",{className:"btn-controllers"},l.a.createElement("button",{className:"btn btn-primary float-left",type:"button",onClick:function(){return e.onNextItem("payment")}},"BACK"),l.a.createElement("button",{className:"btn btn-primary float-right",type:"button",onClick:function(){return e.onFormSubmit()}},"SUBMIT")))}}]),t}(n.Component),ee=Object(o.b)((function(e){return{valueChange:e.personal.valueChange,bus:e.details.bus,passengers:e.details.passengers,bustype:e.details.bustype,year:e.details.date.year,month:e.details.date.month,day:e.details.date.day,bustime:e.details.time,luggage:e.details.luggage,pickup:e.details.pickup,price:e.details.price,payby:e.payment.payby}}),null)(Z),te=a(37),ae=a.n(te),ne=a(38),le=a.n(ne),re=a(39),ce=a.n(re),oe=a(40),ie=a.n(oe),se=(a(131),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={property:"detail",buses:"Vip"},a.SwapForm=a.SwapForm.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){g()("#image_src_1").attr("data-src","Vip")}},{key:"SwapForm",value:function(e){this.setState({property:e})}},{key:"render",value:function(){switch(this.state.property){case"detail":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left active-item"},"Details"),l.a.createElement("h4",{className:"float-left"},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(G,{changeForm:this.SwapForm}),l.a.createElement(ie.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":ae.a}),l.a.createElement("div",{"data-src":le.a}),l.a.createElement("div",{"data-src":ce.a}))));case"personal":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left "},"Details"),l.a.createElement("h4",{className:"float-left active-item"},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(J,{changeForm:this.SwapForm}),l.a.createElement(ie.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":ae.a}),l.a.createElement("div",{"data-src":le.a}),l.a.createElement("div",{"data-src":ce.a}))));case"payment":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left "},"Details"),l.a.createElement("h4",{className:"float-left "},"Personal"),l.a.createElement("h4",{className:"float-left active-item"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(Q,{changeForm:this.SwapForm}),l.a.createElement(ie.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":ae.a}),l.a.createElement("div",{"data-src":le.a}),l.a.createElement("div",{"data-src":ce.a}))));case"summary":return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left "},"Details"),l.a.createElement("h4",{className:"float-left "},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",{className:"active-item"},"Summary")),l.a.createElement("div",{className:"detail-wrapper"},l.a.createElement(ee,{changeForm:this.SwapForm}),l.a.createElement(ie.a,{className:"detail-image-holder"},l.a.createElement("div",{"data-src":ae.a}),l.a.createElement("div",{"data-src":le.a}),l.a.createElement("div",{"data-src":ce.a}))));default:return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row justify-content-between detail-header"},l.a.createElement("h4",{className:"float-left active-item"},"Details"),l.a.createElement("h4",{className:"float-left"},"Personal"),l.a.createElement("h4",{className:"float-left"},"Payment"),l.a.createElement("h4",null,"Summary")),l.a.createElement(G,{changeForm:this.SwapForm}))}}}]),t}(n.Component)),me=l.a.createElement(o.a,{store:Object(v.c)(Y)},l.a.createElement(i.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:E}),l.a.createElement(s.a,{exact:!0,path:"/detail",component:se}))));c.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,a){e.exports=a.p+"static/media/4.7ea17d9b.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/vip.6b1ab87d.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/vip_2.cfbd5195.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/mtn.d37ea352.jpg"},71:function(e,t,a){e.exports=a(133)},80:function(e,t,a){},81:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.6eef3488.chunk.js.map