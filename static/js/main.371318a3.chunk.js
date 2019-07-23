(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(57),a(47)),i=a(29),s=(a(58),a(10)),m=a(117),u=a(51),d=a(11),p=a(12),h=a(14),E=a(13),g=a(15),f=a(22),b=a.n(f),L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={renderMsg:!1},a.onHeaderTyped=function(){a.setState({renderMsg:!0})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement("div",{className:"homepage"},r.a.createElement("div",{className:"homepage-banner"},r.a.createElement("h1",{className:"homepage-title",onClick:function(){}},r.a.createElement(b.a,{avgTypingDelay:150,startDelay:1e3,onTypingDone:this.onHeaderTyped,cursor:{hideWhenDone:!0}},"jodigunawan",r.a.createElement(b.a.Backspace,{count:7,delay:1700}),"go;",r.a.createElement(b.a.Delay,{delay:800}),")",r.a.createElement(b.a.Backspace,{count:1,delay:1700}))))))}}]),t}(n.Component),w=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.descriptions.map(function(e,t){return r.a.createElement("p",null,e)});return r.a.createElement(s.Grid,{className:"about-grid-careers fix-margin"},r.a.createElement(s.Cell,{col:3},r.a.createElement("p",null,this.props.start," - ",this.props.end)),r.a.createElement(s.Cell,{col:9},r.a.createElement("p",null,r.a.createElement("strong",null,this.props.title)," at ",r.a.createElement("a",{href:this.props.link},this.props.location)),r.a.createElement("ul",null,e),r.a.createElement("p",null,"[",this.props.techs,"]")))}}]),t}(n.Component),v=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-container"},r.a.createElement("div",null,r.a.createElement("div",{className:"about-grid-info"},r.a.createElement("img",{className:"pp",alt:"profilepicture"}),r.a.createElement("div",null,r.a.createElement("h1",null,"about;"),r.a.createElement("div",{className:"contact-icons"},r.a.createElement("div",null,r.a.createElement("p",null,"Vancouver, Canada")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:jgunawan.1098@gmail.com"},"jgunawan.1098@gmail.com"))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.instagram.com/jodigunawan/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),"/",r.a.createElement("a",{href:"https://www.linkedin.com/in/jodi-gunawan/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"/",r.a.createElement("a",{href:"https://github.com/jodigo",target:"_blank",rel:"noopener noreferrer"},"Github")))),r.a.createElement("a",{href:"#",className:"download-resume"},"Download")))),r.a.createElement("br",null),r.a.createElement("h5",null,"Experiences"),r.a.createElement("hr",null),r.a.createElement(w,{start:"May 2019",end:"August 2019",title:"Junior Full Stack Developer",location:"UBC (Health Research Pavilion)",descriptions:["Implemented Natural Language Processing model for short text message analytic tools using predefined label and topic modelling with UBC Data Science Research Experts","Developed data visualization features to provide interactive informative display of processed data using D3.js, Plotly and Angular 6","Redesigned the API and application architecture using Python, AWS, MS Azure and Docker, to create partial-serverless microservice architecture which increases modularity and reduces costs"],link:"https://www.msfhr.org/smart-text-analytic-tools-stat-analysis-patient-centred-communications-strengthen-health-systems-bc",techs:"Angular 6, React, Microsoft Azure, Docker, PostgreSQL, Scikit Learn, Tensorflow"}),r.a.createElement(w,{start:"January 2018",end:"August 2018",title:"Software Developer",location:"Glacier Media Inc - Real Estate Wire",descriptions:["Integrated an Event Tracking system to track the user activity using Google Bigquery for data analytics","Migrated database from third party CMS Polopoly to the local PostgreSQL database","Developed real estate news site using Coffeescript and AWS and search results localization which increased page traffic by 20%","Participated in bi-weekly sprints and kanban flow in agile culture with JIRA ticketing system"],link:"https://www.rew.ca/news",techs:"AWS, Coffeescript, Google Bigquery, JIRA, PostgreSQL, Redis, Ruby on Rails 5, Sass"}),r.a.createElement(w,{start:"September 2017",end:"December 2017",title:"Learning Technology Rover",location:"UBC Applied Science",descriptions:["Utilized Blackboard - Connect to managing students\u2019 grades database and ensuring bugless course content by testing","Provided initial face-to-face and remote learning technology support for instructors and faculty members","Teaching assistant for the first year courses: APSC100 and APSC101"],techs:"HTML5, CSS, WordPress, Connect, Python"}),r.a.createElement("div",{className:"about-skills"},r.a.createElement("h5",null,"Skills"),r.a.createElement("hr",null),r.a.createElement("div",{className:"about-skills-container"},r.a.createElement("p",{className:"ul_top_hypers"},"HTML5, Javascript, Python, Ruby on Rails, C/C++, XML, SQL, Git, AWS, Angular, Docker, Microsoft Azure, NoSQL, PostgreSQL, React, Redis, ROS, Sass, Tensorflow, Basketball"))),r.a.createElement("br",null))}}]),t}(n.Component),y=a(37),k=a(49);function S(){var e=Object(n.useState)({latitude:49.21920015,longitude:-123.13836515,zoom:10.5,width:"50vw",height:"100vh"}),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(y.b,Object.assign({},a,{mapboxApiAccessToken:"pk.eyJ1Ijoiam9kaWdvIiwiYSI6ImNqeWZhMXpkczA5Y2ozaG52Z2l0Y29qa3IifQ.zglTcX0xV8BW_o1Umfx6Hg",onViewportChange:function(e){l(e)}}),k.a.map(function(e){return r.a.createElement(y.a,{key:e.properties.PARK_ID,latitude:e.geometry.coordinates[0],longitude:e.geometry.coordinates[1]},r.a.createElement("div",null,"SPOT"))}),";"))}var j=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"feed-container"},r.a.createElement("div",{className:"post-container"},r.a.createElement("h1",null,"feed;"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip"),r.a.createElement("p",null,"wip")),r.a.createElement("div",{className:"map-container"},r.a.createElement(S,null)))}}]),t}(n.Component),C=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-container"},r.a.createElement("h1",null,"contact;"),r.a.createElement("div",{className:"contact-icons"},r.a.createElement("div",null,r.a.createElement("p",null,"Vancouver, Canada")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:jgunawan.1098@gmail.com"},"jgunawan.1098@gmail.com"))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.instagram.com/jodigunawan/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),"/",r.a.createElement("a",{href:"https://www.linkedin.com/in/jodi-gunawan/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"/",r.a.createElement("a",{href:"https://github.com/jodigo",target:"_blank",rel:"noopener noreferrer"},"Github")))))}}]),t}(n.Component),I=function(){return r.a.createElement(m.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:L}),r.a.createElement(u.a,{path:"/about",component:v}),r.a.createElement(u.a,{path:"/feed",component:j}),r.a.createElement(u.a,{path:"/contact",component:C}))},A=a(36),O=a(115);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(116);a(111),a(112);c.a.render(r.a.createElement(D.a,null,r.a.createElement(function(){var e=Object(n.useState)(function(){var e="dark"in localStorage,t=JSON.parse(localStorage.getItem("dark")),a=function(){if(window.matchMedia)return window.matchMedia("(prefers-color-scheme: dark)").matches}();return e?t:!!a}()),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.useEffect(function(){localStorage.setItem("dark",JSON.stringify(a))},[a]),r.a.createElement("div",Object(o.a)({className:"App"},"className",a?"dark-mode":"light-mode"),r.a.createElement(s.Layout,{className:a?"dark-mode":"light-mode"},r.a.createElement(s.Header,{id:"header-bar",className:a?"dark-mode":"light-mode",title:" ",scroll:!0},r.a.createElement(s.Navigation,{className:a?"dark-mode":"light-mode"},r.a.createElement(O.a,{to:"/",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},r.a.createElement("p",null,"Home")),r.a.createElement(O.a,{to:"/about",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},r.a.createElement("p",null,"About")),r.a.createElement(O.a,{to:"/feed",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},r.a.createElement("p",null,"Feed")),r.a.createElement(O.a,{to:"/",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}})),r.a.createElement("button",{id:"toggle-light",className:a?"dark-mode big":"light-mode big",onClick:function(){return l(function(e){return!e})}},r.a.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100"},r.a.createElement("g",{id:"orb"},r.a.createElement("circle",{id:"disc",cx:"20",cy:"20",r:"20"}),r.a.createElement("circle",{id:"cut",cx:"20",cy:"20",r:"20"})),r.a.createElement("path",{d:"M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z",id:"rays",fill:"rgb(var(--fg))"})))),r.a.createElement("button",{id:"toggle-light",className:a?"dark-mode small":"light-mode small",onClick:function(){return l(function(e){return!e})}},r.a.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100"},r.a.createElement("g",{id:"orb"},r.a.createElement("circle",{id:"disc",cx:"20",cy:"20",r:"20"}),r.a.createElement("circle",{id:"cut",cx:"20",cy:"20",r:"20"})),r.a.createElement("path",{d:"M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z",id:"rays",fill:"rgb(var(--fg))"}))),r.a.createElement(s.Drawer,{title:"j o d i g o ;",id:"header-bar"},r.a.createElement(s.Navigation,null,r.a.createElement(A.a,{to:"/"},"Home"),r.a.createElement(A.a,{to:"/about"},"About"),r.a.createElement(A.a,{to:"/feed"},"Feed"))),r.a.createElement(s.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(I,null))))},null)),document.getElementById("root"))},49:function(e){e.exports={a:[{type:"Feature",properties:{PARK_ID:960,FACILITYID:28014,NAME:"UBC",NAME_FR:"UBC",ADDRESS:"8720 Russell Road",ADDRESS_FR:"8720, chemin Russell",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[49.26161773,-123.24955847]}}]}},52:function(e,t,a){e.exports=a(113)},57:function(e,t,a){},58:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.371318a3.chunk.js.map