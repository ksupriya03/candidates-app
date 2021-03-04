(this["webpackJsonpcandidates-app"]=this["webpackJsonpcandidates-app"]||[]).push([[0],{42:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),r=t(19),i=t.n(r),d=t(15),s=t(6),n=t(21),o=t(3),j="/",b="/details/:id",m=["NSW","ACT","VIC","QLD","WA","NT","SA","TAS"],h=t(30),u=function(e){return e.candidates},O=Object(h.a)(u,(function(e,a){return a}),(function(e,a){return e.find((function(e){return e.id==a}))})),y=(t(42),t(1)),v=function(){var e=Object(d.c)(u);return console.log("candidate list values ",e),Object(y.jsx)("div",{className:"dashboard",children:Object(y.jsxs)("table",{className:"table table-hover",children:[Object(y.jsx)("caption",{className:"caption",children:"List of candidates"}),Object(y.jsx)("thead",{className:"table-header",children:Object(y.jsxs)("tr",{className:"table-header table-heading",children:[Object(y.jsx)("th",{scope:"col",className:"table-heading-space",children:"#"}),Object(y.jsx)("th",{scope:"col",className:"table-heading-space",children:"Candidate Name"}),Object(y.jsx)("th",{scope:"col",className:"table-heading-space",children:"Email Id"}),Object(y.jsx)("th",{scope:"col",className:"table-heading-space",children:"JobID"})]})}),Object(y.jsx)("tbody",{className:"table-header",children:e&&e.map((function(e,a){return Object(y.jsxs)("tr",{className:"table-header-row",children:[Object(y.jsx)("td",{className:"table-heading-space",children:a+1}),Object(y.jsx)("td",{className:"table-heading-space",children:Object(y.jsx)("a",{href:"/details/".concat(e.id),"data-testid":e.name,children:e.name})}),Object(y.jsx)("td",{className:"table-heading-space",children:e.email}),Object(y.jsx)("td",{className:"table-heading-space",children:e.jobId})]},e.id)}))})]})})},x=t(17),p=t(10),f=function(e){if(!e)return"";var a=e.replace(/[^0-9.]/g,"");return a?(new Intl.NumberFormat).format(a):""},S="UPDATE_CANDIDATE_DATA",N="ADD_CANDIDATE_DATA";t(44);var D=function(){var e=Object(o.f)(),a=Object(o.g)().id,t=Object(d.b)(),l=Object(d.c)((function(e){return O(e,a)})),c=function(){e.push(j)};return Object(y.jsx)("div",{children:Object(y.jsx)(p.c,{initialValues:{jobId:l.jobId,name:l.name,email:l.email,availableDate:l.availableDate,state:l.state,currentlyEmployed:l.currentlyEmployed,desiredSalary:l.desiredSalary,currentSalary:l.currentSalary},onSubmit:function(e){t({type:"UPDATE_CANDIDATE_DATA",payload:Object(x.a)(Object(x.a)({},l),e)}),c()},validate:function(e){var a={};return e.name||(a.name="Name is required"),e.availableDate||(a.availableDate="Date is required"),e.state||(a.state="State field is required"),e.currentlyEmployed||(a.currentlyEmployed="Choose Employment Status"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Email is required.",a},children:function(e){return Object(y.jsxs)("div",{className:"details-formik",children:[Object(y.jsxs)("div",{className:"page-header",children:[Object(y.jsx)("h1",{className:"personal-details-header",children:"Candidate details"}),Object(y.jsx)("div",{className:"personal-details-description",children:"The details of candidate"})]}),Object(y.jsxs)(p.b,{className:"customer-layout",noValidate:!0,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"jobId",children:"Job Id"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{id:"jobId",name:"jobId",disabled:!0,className:"form-control"}),e.errors.jobId&&Object(y.jsx)("div",{id:"feedback-jobId",class:"invalid-feedback",children:e.errors.jobId})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"name",children:"Candidate Name"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{id:"name",name:"name",placeholder:"Jane",required:!0,className:"form-control"}),e.errors.name&&Object(y.jsx)("div",{id:"feedback-name",class:"invalid-feedback",children:e.errors.name})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{id:"email",name:"email",placeholder:"Doe@mail.com",type:"email",required:!0,className:"form-control"}),e.errors.email&&Object(y.jsx)("div",{id:"feedback-email",class:"invalid-feedback",children:e.errors.email})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"availableDate",children:"Available after date"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{id:"availableDate",name:"availableDate",placeholder:"10-03-2020",type:"date",required:!0,className:"form-control"}),e.errors.availableDate&&Object(y.jsx)("div",{id:"feedback-availableDate",class:"invalid-feedback",children:e.errors.availableDate})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"state",children:"State"}),Object(y.jsxs)("div",{children:[Object(y.jsxs)(p.a,{as:"select",name:"state",required:!0,className:"form-control",children:[Object(y.jsx)("option",{value:"",children:"Choose..."}),m.map((function(e){return Object(y.jsx)("option",{value:e,children:e},e)}))]}),e.errors.state&&Object(y.jsx)("div",{id:"feedback-state",class:"invalid-feedback",children:e.errors.state})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{id:"my-radio-group",children:"Currently Employed"}),Object(y.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",children:[Object(y.jsxs)("label",{children:[Object(y.jsx)(p.a,{type:"radio",name:"currentlyEmployed",value:"Y"}),"Yes"]}),Object(y.jsxs)("label",{children:[Object(y.jsx)(p.a,{type:"radio",name:"currentlyEmployed",value:"N"}),"No"]}),e.errors.currentlyEmployed&&Object(y.jsx)("div",{id:"feedback-currentlyEmployed",class:"invalid-feedback",children:e.errors.currentlyEmployed})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"desiredSalary",children:"Desired salary"}),Object(y.jsx)("div",{children:Object(y.jsx)(p.a,{id:"desiredSalary",name:"desiredSalary",value:f(e.values.desiredSalary),className:"form-control"})})]}),"Y"===e.values.currentlyEmployed?Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"currentSalary",children:"Current salary"}),Object(y.jsx)("div",{children:Object(y.jsx)(p.a,{id:"currentSalary",name:"currentSalary",value:f(e.values.currentSalary),className:"form-control"})})]}):Object(y.jsx)("div",{}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{type:"submit",disabled:!e.isValid||!e.dirty,className:"btn btn-submit",children:"Submit"}),e.dirty&&e.isValid&&Object(y.jsx)("div",{className:"ready-to-save",children:"Ready to save"})]}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{type:"button",className:"btn",onClick:c,children:"Cancel"})})]})]})}})})},E=function(){return Object(y.jsx)("main",{children:Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{path:j,exact:!0,component:v}),Object(y.jsx)(o.a,{path:b,exact:!0,component:D})]})})},I=t(14),g=t(33),A=t(34),T=function(){return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).JEST_TESTS?"dummy-id":Math.floor(1e5*Math.random()*4.5)},C="DUMMY_SESSION_DATA",_=function(){return window.sessionStorage.getItem(C)&&JSON.parse(window.sessionStorage.getItem(C))||[{id:T(),name:"John",email:"John@gmail.com",availableDate:"2021-03-05",state:"VIC",currentlyEmployed:"Y",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys2231"},{id:T(),name:"mary",email:"mary@mail.com",availableDate:"2021-10-03",state:"VIC",currentlyEmployed:"Y",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys222"},{id:T(),name:"Jane",email:"jane@mail.com",availableDate:"2021-04-14",state:"NSW",currentlyEmployed:"Y",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys123"},{id:T(),name:"Dave",email:"dave@mail.com",availableDate:"2021-10-03",state:"VIC",currentlyEmployed:"N",desiredSalary:"90000",currentSalary:"70000",jobId:"flybuys222"}]},k=function(e){return window.sessionStorage.setItem(C,JSON.stringify(e))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(),a=arguments.length>1?arguments[1]:void 0,t=Object(A.a)(e);switch(a.type){case S:var l=e.findIndex((function(e){return e.id===a.payload.id}));t.splice(l,1,a.payload);break;case N:t.push(Object(x.a)(Object(x.a)({},a.payload),{},{id:T()}))}return k(t),t},w=Object(I.c)({candidates:F}),J=[g.a],V=Object(I.e)(w,Object(I.d)(I.a.apply(void 0,J))),q=Object(s.a)(),P=function(){return Object(y.jsx)(d.a,{store:V,children:Object(y.jsx)(n.a,{history:q,children:Object(y.jsx)(E,{})})})},Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(a){var t=a.getCLS,l=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),l(e),c(e),r(e),i(e)}))};t(46);i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root")),Y()}},[[47,1,2]]]);
//# sourceMappingURL=main.f6e7c7b2.chunk.js.map