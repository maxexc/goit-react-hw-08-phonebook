"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[968],{3968:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,a,o,s,c,l=t(2791),d=t(9434),x=t(3634),p=t(168),m=t(7691),u=m.ZP.li(r||(r=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  min-width: 292px;\n  width: 100%;\n  padding: 8px 0px;\n  transition: border-bottom 250ms linear, background-color 250ms linear, color 250ms linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  :hover {\n    border-bottom: 1px solid #1363df;\n    color: #003380;\n    /* box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15); */\n    text-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);\n    /* :hover > svg {\n      transition: color 250ms linear;\n      color: #1363df;\n    } */\n    :hover > div {\n      transition: background-color 250ms linear, color 250ms linear;\n      background-color: #0f7ec9;\n      color: #fafafa;\n    }\n  }\n"]))),h=m.ZP.button(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  cursor: pointer;  \n  /* :hover {\n    transition: color 150ms linear;\n    color: tomato;\n  } */\n  :hover > svg {\n    transition: color 150ms linear;\n    color: tomato;\n  }\n"]))),f=m.ZP.div(a||(a=(0,p.Z)(["\nmargin-top: 3px;\nwidth: 30px;\nheight: 30px;\nborder-radius: 50%;\nbackground-color: #1cb6cd;\n/* #83cdff; */\n /* rgba(179, 255, 252, 0.952); */\n/* #8cfcd1; */\n /* rgba(136, 252, 248, 0.952); */\n/* rgb(100, 237, 207); */\n /* #E6E6E6; */\njustify-content: center;\nalign-items: center;\ndisplay: flex;\nmargin-right: 10px;\n"]))),g=t(5206),v=(t(5462),t(9201)),b=t(184),Z=(0,v.Z)((0,b.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"}),"DeleteForeverOutlined"),j=function(n){var e=n.id,t=n.number,r=n.name,i=(0,d.I0)();return(0,b.jsxs)(u,{children:[(0,b.jsxs)(f,{children:[r.charAt(0).toUpperCase()," "]}),(0,b.jsxs)("p",{children:[r,": ",(0,b.jsx)("span",{children:t})]}),(0,b.jsxs)(h,{type:"button",onClick:function(){i((0,x.GK)(e)),g.Am.error("Contact is removed from List.",{position:"top-right",theme:"dark"})},children:["Del",(0,b.jsx)(Z,{sx:{fontSize:30}})]})]})},w=m.ZP.ul(o||(o=(0,p.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),y=function(n){return n.contacts.isLoading},z=function(n){return n.filter},C=function(n){return n.contacts.items},P=function(){var n=(0,d.v9)(C),e=(0,d.v9)(z),t=(0,d.I0)(),r=e.toLowerCase(),i=n.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,l.useEffect)((function(){t((0,x.yF)())}),[t]),(0,b.jsx)(w,{children:i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,b.jsx)(j,{id:e,name:t,number:r},e)}))})},k=t(5403),A=t(890),I=t(9784),M=t(4808),S=m.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: flex-end;\n  min-width: 292px;\n  width: 100%;\n  margin-bottom: 20px;\n  transition: border-bottom 250ms linear;\n    :hover > svg {\n      transition: color 250ms linear;\n      color: #005ae0;\n    }  \n"]))),L=function(){var n=(0,d.v9)(z),e=(0,d.I0)();return(0,b.jsxs)("label",{children:[(0,b.jsx)(A.Z,{variant:"h6",gutterBottom:!0,sx:{width:"292px",mb:0,mt:1,fontFamily:"revert"},children:"Filter"}),(0,b.jsxs)(S,{children:[(0,b.jsx)(k.Z,{sx:{color:"#0f7ec9",mr:1,fontSize:30}}),(0,b.jsx)(I.Z,{variant:"standard",id:"standard-search",label:"Enter request",type:"search",name:"filter",value:n,onChange:function(n){e((0,M.x)(n.currentTarget.value))}})]})]})},_=t(9439),E=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},H=m.ZP.h2(c||(c=(0,p.Z)(["\n  font-family: 'Handlee', cursive;\n  text-align: center;\n"]))),D=t(4554),F=t(6151),V=(0,v.Z)([(0,b.jsx)("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),(0,b.jsx)("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),(0,b.jsx)("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt"),N=(0,v.Z)((0,b.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonAddAlt1"),R=t(6057),T=function(){var n=(0,l.useState)(""),e=(0,_.Z)(n,2),t=e[0],r=e[1],i=(0,l.useState)(""),a=(0,_.Z)(i,2),o=a[0],s=a[1],c=(0,d.I0)(),p=(0,d.v9)(C),m=function(n){switch(n.currentTarget.name){case"name":r(n.currentTarget.value);break;case"number":s(n.currentTarget.value);break;default:return}console.log(t,o)};return(0,b.jsxs)(D.Z,{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center",alignItems:"center",component:"form",autoComplete:"off",maxWidth:"420px",onSubmit:function(n){n.preventDefault();var e={name:t,number:o,id:E()};p.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?g.Am.warn("Name  ".concat(e.name,"  is alredy in contacts!")):(c((0,x.uK)(e)),g.Am.success("You have added a new contact ".concat(e.name)),r(""),s(""))},children:[(0,b.jsxs)(D.Z,{sx:{display:"flex",alignItems:"flex-end",gap:"10px"},children:[(0,b.jsx)(H,{children:"Add new contact"}),(0,b.jsx)(V,{})]}),(0,b.jsxs)(D.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,b.jsx)(N,{sx:{color:"#0f7ec9",mr:1,my:.5}}),(0,b.jsx)(I.Z,{sx:{width:"260px"},variant:"standard",onChange:m,type:"text",name:"name",value:t,required:!0,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",size:"small",margin:"none",id:"name",label:"Name",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}})]}),(0,b.jsxs)(D.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,b.jsx)(R.Z,{sx:{color:"#0f7ec9",mr:1,my:.5}}),(0,b.jsx)(I.Z,{sx:{width:"260px"},variant:"standard",onChange:m,type:"tel",name:"number",value:o,required:!0,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",size:"small",margin:"none",fullWidth:!0,id:"number",label:"Number",inputProps:{inputMode:"numeric",pattern:"[0-9]*"}})]}),(0,b.jsx)(F.Z,{type:"submit",variant:"contained",sx:{mr:-1,mt:"18px",width:"200px"},children:"Add contact"}),(0,b.jsx)(g.Ix,{position:"top-center",autoClose:1500})]})},W=t(159),q=t(6101),U=t(6598);function B(){var n=(0,d.I0)(),e=(0,d.v9)(y);return(0,l.useEffect)((function(){n((0,x.yF)())}),[n]),(0,b.jsx)(W.or,{children:(0,b.jsxs)(U.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",pt:2,pb:4},maxWidth:"xl",children:[e&&(0,b.jsx)(q.Z,{}),(0,b.jsx)(T,{}),(0,b.jsx)(L,{}),(0,b.jsx)(P,{})]})})}},159:function(n,e,t){t.d(e,{DH:function(){return f},Dx:function(){return m},E3:function(){return b},Ei:function(){return g},ii:function(){return u},or:function(){return h},wP:function(){return Z},wW:function(){return v}});var r,i,a,o,s,c,l,d,x=t(168),p=t(7691),m=p.ZP.h1(r||(r=(0,x.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 180px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;\n  /* color:  #065b94; */\n"]))),u=p.ZP.h1(i||(i=(0,x.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 80px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;  \n  /* color: #0f7ec9; */\n"]))),h=p.ZP.main(a||(a=(0,x.Z)(["\n  /* height: 100vh; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 54px;  \n"]))),f=p.ZP.section(o||(o=(0,x.Z)(["\n  margin-top: 60px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n  }\n  @media screen and (min-width: 768px) {\n    gap: 50px;\n  }\n"]))),g=p.ZP.img(s||(s=(0,x.Z)(["\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n  object-position: 87% 50%;\n  border-radius: 20px;\n  @media screen and (max-width: 920px) {\n    height: 400px;\n  }\n  @media screen and (max-width: 479px) {\n    height: 300px;\n  }\n"]))),v=p.ZP.h2(c||(c=(0,x.Z)(["\n  font-size: 24px;\n  line-height: 1.4;\n  position: relative;\n  margin-bottom: 20px;\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    display: block;\n    height: 1px;\n    width: 300px;\n    background-color: #000;\n    @media screen and (max-width: 830px) {\n      width: 200px;\n      font-size: 20px;\n    }\n  }\n"]))),b=p.ZP.div(l||(l=(0,x.Z)(["\n  width: calc(100% / 2);\n  flex-shrink: 0;\n  @media screen and (max-width: 767px) {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n"]))),Z=p.ZP.p(d||(d=(0,x.Z)(["\n  font-size: 24px;\n  line-height: 1.7;\n  @media screen and (max-width: 1120px) {\n    font-size: 20px;\n  }\n  @media screen and (max-width: 920px) {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])))},6057:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"}),"PhoneIphone");e.Z=o},5403:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=o}}]);
//# sourceMappingURL=968.b4d21a7c.chunk.js.map