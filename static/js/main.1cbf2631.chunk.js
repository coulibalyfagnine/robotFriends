(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(1)),s=n(2),i=n(3),h=n(4),u=n(5),m=(n(14),function(e){var t=e.name,n=e.id,a=e.email;return r.a.createElement("div",{key:n,className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null," ",t," "),r.a.createElement("p",null," ",a)))}),d=function(e){var t=e.robots.map((function(e){return m(e)}));return r.a.createElement("div",null,t)},b=function(e){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"robot name",onChange:e.searchChange}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children)},g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{className:"f1 gold b"}," Oooopps not good  to see!!! "):this.props.children}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={robots:[],searchField:""},a.handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 gold b"}," Robofriends "),r.a.createElement(b,{searchChange:this.handleChange}),r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(d,{robots:a})))):r.a.createElement("h1",{className:"f1 gold b"}," Loading... ")}}]),n}(a.Component);n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.1cbf2631.chunk.js.map