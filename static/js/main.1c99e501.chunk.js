(this["webpackJsonpcandidates-app"]=this["webpackJsonpcandidates-app"]||[]).push([[0],{42:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),r=t(19),i=t.n(r),d=t(15),s=t(6),n=t(21),o=t(3),b="/candidates-app",j="/",m="/details/:id",h=["NSW","ACT","VIC","QLD","WA","NT","SA","TAS"],u=t(30),O=function(e){return e.candidates},y=Object(u.a)(O,(function(e,a){return a}),(function(e,a){return e.find((function(e){return e.id==a}))})),v=(t(42),t(1)),x=function(){var e=Object(d.c)(O);return console.log("candidate list values ",e),Object(v.jsx)("div",{className:"dashboard",children:Object(v.jsxs)("table",{className:"table table-hover",children:[Object(v.jsx)("caption",{className:"caption",children:"List of candidates"}),Object(v.jsx)("thead",{className:"table-header",children:Object(v.jsxs)("tr",{className:"table-header table-heading",children:[Object(v.jsx)("th",{scope:"col",className:"table-heading-space",children:"#"}),Object(v.jsx)("th",{scope:"col",className:"table-heading-space",children:"Candidate Name"}),Object(v.jsx)("th",{scope:"col",className:"table-heading-space",children:"Email Id"}),Object(v.jsx)("th",{scope:"col",className:"table-heading-space",children:"JobID"})]})}),Object(v.jsx)("tbody",{className:"table-header",children:e&&e.map((function(e,a){return Object(v.jsxs)("tr",{className:"table-header-row",children:[Object(v.jsx)("td",{className:"table-heading-space",children:a+1}),Object(v.jsx)("td",{className:"table-heading-space",children:Object(v.jsx)("a",{href:"".concat(b,"/details/").concat(e.id),"data-testid":e.name,children:e.name})}),Object(v.jsx)("td",{className:"table-heading-space",children:e.email}),Object(v.jsx)("td",{className:"table-heading-space",children:e.jobId})]},e.id)}))})]})})},p=t(17),f=t(10),S=function(e){if(!e)return"";var a=e.replace(/[^0-9.]/g,"");return a?(new Intl.NumberFormat).format(a):""},N="UPDATE_CANDIDATE_DATA",D="ADD_CANDIDATE_DATA";t(44);var E=function(){var e=Object(o.f)(),a=Object(o.g)().id,t=Object(d.b)(),c=Object(d.c)((function(e){return y(e,a)})),l=function(){e.push(j)};return Object(v.jsx)("div",{children:Object(v.jsx)(f.c,{initialValues:{jobId:c.jobId,name:c.name,email:c.email,availableDate:c.availableDate,state:c.state,currentlyEmployed:c.currentlyEmployed,desiredSalary:c.desiredSalary,currentSalary:c.currentSalary},onSubmit:function(e){t({type:"UPDATE_CANDIDATE_DATA",payload:Object(p.a)(Object(p.a)({},c),e)}),l()},validate:function(e){var a={};return e.name||(a.name="Name is required"),e.availableDate||(a.availableDate="Date is required"),e.state||(a.state="State field is required"),e.currentlyEmployed||(a.currentlyEmployed="Choose Employment Status"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Email is required.",a},children:function(e){return Object(v.jsxs)("div",{className:"details-formik",children:[Object(v.jsxs)("div",{className:"page-header",children:[Object(v.jsx)("h1",{className:"personal-details-header",children:"Candidate details"}),Object(v.jsx)("div",{className:"personal-details-description",children:"The details of candidate"})]}),Object(v.jsxs)(f.b,{className:"customer-layout",noValidate:!0,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"jobId",children:"Job Id"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(f.a,{id:"jobId",name:"jobId",disabled:!0,className:"form-control"}),e.errors.jobId&&Object(v.jsx)("div",{id:"feedback-jobId",class:"invalid-feedback",children:e.errors.jobId})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"name",children:"Candidate Name"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(f.a,{id:"name",name:"name",placeholder:"Jane",required:!0,className:"form-control"}),e.errors.name&&Object(v.jsx)("div",{id:"feedback-name",class:"invalid-feedback",children:e.errors.name})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(f.a,{id:"email",name:"email",placeholder:"Doe@mail.com",type:"email",required:!0,className:"form-control"}),e.errors.email&&Object(v.jsx)("div",{id:"feedback-email",class:"invalid-feedback",children:e.errors.email})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"availableDate",children:"Available after date"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(f.a,{id:"availableDate",name:"availableDate",placeholder:"10-03-2020",type:"date",required:!0,className:"form-control"}),e.errors.availableDate&&Object(v.jsx)("div",{id:"feedback-availableDate",class:"invalid-feedback",children:e.errors.availableDate})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"state",children:"State"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)(f.a,{as:"select",name:"state",required:!0,className:"form-control",children:[Object(v.jsx)("option",{value:"",children:"Choose..."}),h.map((function(e){return Object(v.jsx)("option",{value:e,children:e},e)}))]}),e.errors.state&&Object(v.jsx)("div",{id:"feedback-state",class:"invalid-feedback",children:e.errors.state})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{id:"my-radio-group",children:"Currently Employed"}),Object(v.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",children:[Object(v.jsxs)("label",{children:[Object(v.jsx)(f.a,{type:"radio",name:"currentlyEmployed",value:"Y"}),"Yes"]}),Object(v.jsxs)("label",{children:[Object(v.jsx)(f.a,{type:"radio",name:"currentlyEmployed",value:"N"}),"No"]}),e.errors.currentlyEmployed&&Object(v.jsx)("div",{id:"feedback-currentlyEmployed",class:"invalid-feedback",children:e.errors.currentlyEmployed})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"desiredSalary",children:"Desired salary"}),Object(v.jsx)("div",{children:Object(v.jsx)(f.a,{id:"desiredSalary",name:"desiredSalary",value:S(e.values.desiredSalary),className:"form-control"})})]}),"Y"===e.values.currentlyEmployed?Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"currentSalary",children:"Current salary"}),Object(v.jsx)("div",{children:Object(v.jsx)(f.a,{id:"currentSalary",name:"currentSalary",value:S(e.values.currentSalary),className:"form-control"})})]}):Object(v.jsx)("div",{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{type:"submit",disabled:!e.isValid||!e.dirty,className:"btn btn-submit",children:"Submit"}),e.dirty&&e.isValid&&Object(v.jsx)("div",{className:"ready-to-save",children:"Ready to save"})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"button",className:"btn",onClick:l,children:"Cancel"})})]})]})}})})},I=function(){return Object(v.jsx)("main",{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:j,exact:!0,component:x}),Object(v.jsx)(o.a,{path:m,exact:!0,component:E})]})})},g=t(14),A=t(33),T=t(34),C=function(){return Object({NODE_ENV:"production",PUBLIC_URL:"/candidates-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).JEST_TESTS?"dummy-id":Math.floor(1e5*Math.random()*4.5)},_="DUMMY_SESSION_DATA",k=function(){return window.sessionStorage.getItem(_)&&JSON.parse(window.sessionStorage.getItem(_))||[{id:C(),name:"John",email:"John@gmail.com",availableDate:"2021-03-05",state:"VIC",currentlyEmployed:"Y",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys2231"},{id:C(),name:"mary",email:"mary@mail.com",availableDate:"2021-10-03",state:"VIC",currentlyEmployed:"Y",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys222"},{id:C(),name:"Jane",email:"jane@mail.com",availableDate:"2021-04-14",state:"NSW",currentlyEmployed:"Y",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys123"},{id:C(),name:"Dave",email:"dave@mail.com",availableDate:"2021-10-03",state:"VIC",currentlyEmployed:"N",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys222"}]},F=function(e){return window.sessionStorage.setItem(_,JSON.stringify(e))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k(),a=arguments.length>1?arguments[1]:void 0,t=Object(T.a)(e);switch(a.type){case N:var c=e.findIndex((function(e){return e.id===a.payload.id}));t.splice(c,1,a.payload);break;case D:t.push(Object(p.a)(Object(p.a)({},a.payload),{},{id:C()}))}return F(t),t},J=Object(g.c)({candidates:w}),V=[A.a],q=Object(g.e)(J,Object(g.d)(g.a.apply(void 0,V))),P=Object(s.a)(),Y=function(){return Object(v.jsx)(d.a,{store:q,children:Object(v.jsx)(n.a,{history:P,basename:b,children:Object(v.jsx)(I,{})})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(a){var t=a.getCLS,c=a.getFID,l=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),c(e),l(e),r(e),i(e)}))};t(46);i.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(Y,{})}),document.getElementById("root")),L()}},[[47,1,2]]]);
//# sourceMappingURL=main.1c99e501.chunk.js.map