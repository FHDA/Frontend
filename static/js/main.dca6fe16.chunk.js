(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],{116:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(22),n=a.n(r),i=(a(89),a(68),a(24)),l=a.p+"static/media/logo_district.ef704a49.png",o=a(1);function d(){return Object(o.jsx)("div",{className:"home",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("img",{src:l,alt:""})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h1",{children:"FHDA Time"}),Object(o.jsx)("p",{className:"description",children:"Some description here"}),Object(o.jsx)("div",{className:"divider"}),Object(o.jsx)("p",{className:"content",children:"More about this project. asdasdasdsa asdasdasd. skasdkasldasdasdamsdlmas;dmas;dmas;ldm;asmdsa/ askdaksd;asmda;sdm .asdlkasndasd;sa More about this project. asdasdasdsa asdasdasd. skasdkasldasdasdamsdlmas;dmas;dmas;ldm;asmdsa/ askdaksd;asmda;sdm .asdlkasndasd;sa"}),Object(o.jsx)(i.b,{className:"searchbutton",to:"/catalog",children:"Catalog"})]})]})})}var j=a(67),u=a.n(j),h=a(79),b=a(44),m=(a(63),a(42)),O=function(e){return Object(o.jsx)(m.a,{className:"courses-items",align:"center",children:e.children})},x=function(e){return Object(o.jsx)("div",{className:"card h-auto course-item",style:{width:"80%",marginBottom:"5px"},onClick:function(){e.handlerClick(e.uid)},children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:e.courseName}),Object(o.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.courseNum}),Object(o.jsx)("p",{className:"card-text",children:"45% enrolled"}),Object(o.jsx)("p",{className:"card-text",children:"".concat(e.unit," Units")})]})})},p=a(30),g=a.n(p),v=a(126),f=a(81),N=a(80),S=a(31),y=a(32),k=a(23),C=a(40),I=a(39),q=a(127),_=a(124),J=a(125),F=a(84),A=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(e){var s;return Object(S.a)(this,a),(s=t.call(this,e)).state={campus:"DeAnza",quarter:"Summer",year:"2021"},s.handleSelect=s.handleSelect.bind(Object(k.a)(s)),s}return Object(y.a)(a,[{key:"handleSelect",value:function(e){this.props.clearCardsHandler();var t=(e=e.target.id).substring(0,e.indexOf(":")),a=e.substring(e.indexOf(":")+1);this.setState(Object(N.a)({},"".concat(t),a),(function(){var e=localStorage.getItem("cache_list");e?(e=JSON.parse(e)).length>8&&(localStorage.removeItem(e[0]),e=e.shift()):(e=[],localStorage.setItem("cache_list",JSON.stringify(e)));var t=JSON.parse(localStorage.getItem(JSON.stringify(this.state)));t?this.props.filterHandler(this.state,t):g.a.get("https://fhda-api-test.azurewebsites.net/course_list",{params:{year:this.state.year,quarter:this.state.quarter}}).then(function(e){this.props.filterHandler(this.state,e)}.bind(this)).catch((function(e){console.log(e)}))}))}},{key:"render",value:function(){return Object(o.jsxs)(q.a.Dialog,{children:[Object(o.jsx)(q.a.Header,{children:Object(o.jsx)(q.a.Title,{className:"center_title",children:"Course Filter"})}),Object(o.jsxs)(q.a.Body,{children:[Object(o.jsxs)(f.a,{className:"modal_item",children:[Object(o.jsx)(m.a,{children:Object(o.jsx)("h5",{children:"Campus: "})}),Object(o.jsx)(m.a,{children:Object(o.jsxs)(_.a,{as:J.a,title:this.state.campus,children:[Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"campus:DeAnza",children:"DeAnza"}),Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"campus:Foothill",children:"Foothill (Coming Soon)"})]})})]}),Object(o.jsxs)(f.a,{className:"modal_item",children:[Object(o.jsx)(m.a,{children:Object(o.jsx)("h5",{children:"Year: "})}),Object(o.jsx)(m.a,{children:Object(o.jsxs)(_.a,{as:J.a,title:this.state.year,children:[Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"year:2021",children:"2021 (Usable)"}),Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"year:1998",children:"1998 (Not Available)"})]})})]}),Object(o.jsxs)(f.a,{className:"modal_item",children:[Object(o.jsx)(m.a,{children:Object(o.jsx)("h5",{children:"Quarter: "})}),Object(o.jsx)(m.a,{children:Object(o.jsxs)(_.a,{as:J.a,title:this.state.quarter,children:[Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"quarter:Fall",children:"Fall"}),Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"quarter:Winter",children:"Winter"}),Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"quarter:Spring",children:"Spring"}),Object(o.jsx)(F.a.Item,{onClick:this.handleSelect,id:"quarter:Summer",children:"Summer"})]})})]}),Object(o.jsx)(f.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"form-label",htmlFor:"courseSearch",children:Object(o.jsx)("h5",{children:"Search Course"})}),Object(o.jsx)("input",{type:"text",id:"courseSearch",className:"form-control",onChange:this.props.searchCourseHandler})]})})]})]})}}]),a}(c.a.Component),w=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:e.course.courseTitle}),Object(o.jsx)("p",{children:e.course.UID}),Object(o.jsx)("p",{children:e.course.crn}),Object(o.jsx)("p",{children:e.course.courseNum}),Object(o.jsx)("p",{children:e.course.sectionNum}),Object(o.jsx)("p",{children:e.course.campus}),Object(o.jsx)("p",{children:e.course.numCredit}),Object(o.jsx)("p",{children:e.course.days}),Object(o.jsx)("p",{children:e.course.startTime}),Object(o.jsx)("p",{children:e.course.endTime}),Object(o.jsx)("p",{children:e.course.instructorName}),Object(o.jsx)("p",{children:e.course.startDate}),Object(o.jsx)("p",{children:e.course.endDate}),Object(o.jsx)("p",{children:e.course.location}),Object(o.jsx)("p",{children:e.course.attribute}),Object(o.jsx)("p",{children:JSON.stringify(e.course.lab)})]})},D=a(83),T=a.n(D),H=function(e){return Object(o.jsx)(T.a,{type:e.type,color:e.color,height:e.height,width:e.width,className:"loading"})};var z=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)([]),i=Object(b.a)(n,2),l=i[0],d=i[1],j=Object(s.useState)({}),m=Object(b.a)(j,2),p=m[0],N=m[1],S=Object(s.useState)(),y=Object(b.a)(S,2),k=y[0],C=y[1],I=Object(s.useState)(!0),q=Object(b.a)(I,2),_=q[0],J=q[1];String.prototype.splice=function(e,t,a){return this.slice(0,e)+a+this.slice(e+Math.abs(t))};var F=Object(s.useCallback)((function(e,t){for(var a=[],s=0;s<t.length;s++)"+"===t[s]&&a.push(s);for(var c=t.length;c>0;)"+"!==t[c]?c--:t=t.splice(c,0,"\\");for(var r=new RegExp(t,"i"),n=[],i=0;i<e.length;i++)r.test(e[i].courseName)&&n.push(e[i]);return n}),[]);Object(s.useEffect)(Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t=[],g.a.get("https://fhda-api-test.azurewebsites.net/course_list?year=2021&quarter=Summer").then((function(e){for(var a in localStorage.setItem('{"campus":"DeAnza","quarter":"Summer","year":"2021"}',JSON.stringify(e.data)),e.data){var s=e.data[a],c={key:a,courseName:s.courseTitle,courseNum:s.courseNum,unit:+s.numCredit};t.push(c)}localStorage.setItem("cache_list",JSON.stringify([{campus:"DeAnza",quarter:"Summer",year:"2021"}])),localStorage.setItem('{"campus":"DeAnza","quarter":"Summer","year":"2021"}'.concat("cards"),JSON.stringify(t)),r(t),d(t),C({campus:"DeAnza",quarter:"Summer",year:"2021"}),J(!1)}));case 3:case"end":return e.stop()}}),e)}))),[]);var D=function(e){var t=JSON.parse(localStorage.getItem(JSON.stringify(k)));N(t[e])},T=Object(o.jsx)("p",{children:"There are no courses matching your filters."});return _?T=Object(o.jsx)(H,{type:"spinningBubbles",color:"#8f0505",height:"15%",width:"15%",className:"loading"}):0!==l.length&&(T=l.map((function(e){return Object(o.jsx)(x,{uid:e.key,courseName:e.courseName,courseNum:e.courseNum,unit:e.unit,handlerClick:D},e.key)}))),Object(o.jsx)(c.a.Fragment,{children:Object(o.jsx)(v.a,{fluid:!0,children:Object(o.jsxs)(f.a,{children:[Object(o.jsx)(O,{children:Object(o.jsx)(A,{filterHandler:function(e,t){var a=[];if(JSON.parse(localStorage.getItem(JSON.stringify(e))))a=JSON.parse(localStorage.getItem(JSON.stringify(e).concat("cards")));else{for(var s in t.data){var c=t.data[s],n={key:s,courseName:c.courseTitle,courseNum:c.courseNum,unit:+c.numCredit};a.push(n)}var i=JSON.parse(localStorage.getItem("cache_list"));i.length>8&&(localStorage.removeItem(i[0]),localStorage.removeItem(i[0].concat("cards")),i=i.shift()),localStorage.setItem(JSON.stringify(e),JSON.stringify(t.data)),i.push(e),localStorage.setItem("cache_list",JSON.stringify(i)),localStorage.setItem(JSON.stringify(e).concat("cards"),JSON.stringify(a))}C(e),r(a),d(a),J(!1)},searchCourseHandler:function(e){!function(e){N({});var t=e.trim().replace(" ","").replace(/[\\]/g,""),s=F(a,t);d(s)}(e.target.value)},clearCardsHandler:function(){J(!0),N({})}})}),Object(o.jsx)(O,{children:T}),Object(o.jsx)(O,{children:0!==Object.keys(p).length&&Object(o.jsx)(w,{course:p})})]})})})};function P(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Story Discover"})})}a(64),a(116);var E=a(45),M=a(128),B=a(82),L=function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(e){var s;return Object(S.a)(this,a),(s=t.call(this,e)).handleClick=function(){s.props.toggle()},s.state={name:"",email:"",form_body:""},s.handleInputChange=s.handleInputChange.bind(Object(k.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(k.a)(s)),s.handleClick=s.handleClick.bind(Object(k.a)(s)),s}return Object(y.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target;"name"===t.name?this.setState({name:t.value}):"email"===t.name?this.setState({email:t.value}):this.setState({form_body:t.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();JSON.stringify({name:this.state.name,email:this.state.email,form_body:this.state.form_body});g.a.post("https://fhda-api-test.azurewebsites.net/contact",{name:this.state.name,email:this.state.email,form_body:this.state.form_body}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),this.setState({name:"",email:"",form_body:""})}},{key:"render",value:function(){return Object(o.jsxs)(q.a.Dialog,{children:[Object(o.jsx)(q.a.Header,{children:Object(o.jsx)(q.a.Title,{className:"contact_title",children:"Contact Form"})}),Object(o.jsx)(q.a.Body,{children:Object(o.jsxs)(M.a,{children:[Object(o.jsx)(v.a,{children:Object(o.jsxs)(f.a,{className:"modal_item",children:[Object(o.jsxs)(m.a,{children:[Object(o.jsx)(M.a.Label,{children:"Name"}),Object(o.jsx)(M.a.Control,{name:"name",type:"text",value:this.state.name,placeholder:"Name",onChange:this.handleInputChange})]}),Object(o.jsxs)(m.a,{children:[Object(o.jsx)(M.a.Label,{children:"Email Address"}),Object(o.jsx)(M.a.Control,{name:"email",type:"email",value:this.state.email,placeholder:"Email Address",onChange:this.handleInputChange})]})]})}),Object(o.jsxs)(M.a.Group,{className:"form_group modal_item",children:[Object(o.jsx)(M.a.Label,{children:"Message"}),Object(o.jsx)("br",{}),Object(o.jsx)(M.a.Control,{as:"textarea",value:this.state.form_body,onChange:this.handleInputChange,rows:5,className:"contact_textarea"})]})]})}),Object(o.jsx)(q.a.Footer,{children:Object(o.jsx)(B.a,{variant:"primary",onClick:this.handleSubmit,children:"Submit"})})]})}}]),a}(c.a.Component),U=(a(118),function(e){Object(C.a)(a,e);var t=Object(I.a)(a);function a(e){var s;return Object(S.a)(this,a),(s=t.call(this,e)).state={currentPage:"about"},s.handleContactClick=s.handleContactClick.bind(Object(k.a)(s)),s}return Object(y.a)(a,[{key:"handleContactClick",value:function(e){this.setState({currentPage:"contact"})}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"about-project",children:[Object(o.jsx)("h3",{className:"bt-h3 bt-bold mb-2 about-header",children:"About FHDA Times"}),Object(o.jsx)("p",{className:"bt-p mb-3",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa."})]}),Object(o.jsxs)(E.a,{className:"project-carousel",children:[Object(o.jsx)(E.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:"/Frontend/logo-placeholder-png.png",alt:"First slide"})}),Object(o.jsx)(E.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:"/Frontend/logo-placeholder-png.png",alt:"Second slide"})}),Object(o.jsx)(E.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:"/Frontend/logo-placeholder-png.png",alt:"Third slide"})}),Object(o.jsx)(E.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:"/Frontend/logo-placeholder-png.png",alt:"Forth slide"})})]}),Object(o.jsxs)("div",{className:"about-project",children:[Object(o.jsx)("h3",{className:"bt-h3 bt-bold mb-2 about-header",children:"About Us"}),Object(o.jsx)("p",{className:"bt-p mb-3",children:"Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Enim facilisis gravida neque convallis a cras. Nunc eget lorem dolor sed viverra ipsum nunc. Tristique senectus et netus et malesuada fames ac turpis egestas. Risus quis varius quam quisque id diam. "})]}),Object(o.jsxs)("div",{className:"about-value",children:[Object(o.jsx)("h3",{className:"bt-h3 bt-bold mb-2 about-header",children:"Our Values"}),Object(o.jsxs)(f.a,{children:[Object(o.jsx)(m.a,{className:"value-col",children:Object(o.jsx)("div",{className:"value",children:Object(o.jsxs)("div",{className:"value-content",children:[Object(o.jsx)("img",{src:"/Frontend/logo-placeholder-png.png"}),Object(o.jsx)("h6",{children:"test v1"}),Object(o.jsx)("p",{children:"Mauris rhoncus aenean vel elit scelerisque. Consectetur adipiscing elit duis tristique. Enim facilisis gravida neque convallis a cras."})]})})}),Object(o.jsx)(m.a,{className:"value-col",children:Object(o.jsx)("div",{className:"value",children:Object(o.jsxs)("div",{className:"value-content",children:[Object(o.jsx)("img",{src:"/Frontend/logo-placeholder-png.png"}),Object(o.jsx)("h6",{children:"test v2"}),Object(o.jsx)("p",{children:"Aliquam malesuada bibendum arcu vitae elementum. Tortor dignissim convallis aenean et tortor at risus. Nunc aliquet bibendum enim facilisis gravida neque."})]})})}),Object(o.jsx)(m.a,{className:"value-col",children:Object(o.jsx)("div",{className:"value",children:Object(o.jsxs)("div",{className:"value-content",children:[Object(o.jsx)("img",{src:"/Frontend/logo-placeholder-png.png"}),Object(o.jsx)("h6",{children:"test v3"}),Object(o.jsx)("p",{children:"Mauris vitae ultricies leo integer. Pellentesque habitant morbi tristique senectus. Integer quis auctor elit sed vulputate. Nibh tellus molestie nunc non blandit massa enim."})]})})})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)(L,{})})]})}}]),a}(c.a.Component)),R=a(8),W=a(130),G=a(129),Q=a.p+"static/media/fhdalogo.8e3300e8.jpg";function V(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(W.a,{bg:"red",variant:"dark",className:"navbar",children:[Object(o.jsxs)(i.b,{className:"navbar-brand",to:"/",children:[Object(o.jsx)("img",{className:"navbar-img",src:Q,alt:""})," FHDATime"]}),Object(o.jsxs)(G.a,{className:"mr-auto",children:[Object(o.jsx)(i.b,{className:"nav-link",to:"/",children:"Home"}),Object(o.jsx)(i.b,{className:"nav-link",to:"/catalog",children:"Catalog"}),Object(o.jsx)(i.b,{className:"nav-link",to:"/story",children:"Story"}),Object(o.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})]})]}),Object(o.jsx)(R.a,{exact:!0,path:"/",render:function(e){return Object(o.jsx)(d,{routerProps:e})}}),Object(o.jsx)(R.a,{exact:!0,path:"/catalog",render:function(e){return Object(o.jsx)(z,{routerProps:e})}}),Object(o.jsx)(R.a,{exact:!0,path:"/story",render:function(e){return Object(o.jsx)(P,{routerProps:e})}}),Object(o.jsx)(R.a,{exact:!0,path:"/about",render:function(e){return Object(o.jsx)(U,{routerProps:e})}})]})}n.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(V,{})}),document.getElementById("root"))},63:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){},89:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.dca6fe16.chunk.js.map