(this.webpackJsonpmaratonadev=this.webpackJsonpmaratonadev||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(13),a(3)),u=a(4),i=a(6),m=a(5),s=a(7);var d=function(){return r.a.createElement("footer",{className:"footerbar"},r.a.createElement("h3",null,"This is a footer."))};var h=function(){var e=new Date,t=e.getHours();return r.a.createElement("header",{className:"Headerbar"},r.a.createElement("h3",null,"Hello! ",t,":",e.getMinutes(),"! "))};var p=function(e){return r.a.createElement("div",{className:"todo-item"},r.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),r.a.createElement("p",null,e.item.text))},f=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Take out the trs",completed:!1},{id:3,text:"Take out the tra",completed:!1},{id:4,text:"Take out the tram",completed:!0}],E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={todos:f},e}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return r.a.createElement(p,{key:t.id,item:t,handleChange:e.handleChange})}));return r.a.createElement("div",null,r.a.createElement(h,null),t,r.a.createElement(d,null))}}]),t}(r.a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c2d4ebf0.chunk.js.map