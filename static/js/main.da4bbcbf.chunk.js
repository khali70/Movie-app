(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,a){e.exports={APIKEY:"bb5de772"}},38:function(e,a,t){e.exports=t(67)},43:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=(t(43),t(9)),i=t(11),m=t(33),s=t(8),u=t(16),d=t.n(u),E=t(17),b={text:"",movies:[],loading:!1,movie:[]},v=Object(i.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH":return console.log("search key word ".concat(a.payload.text)),Object(s.a)(Object(s.a)({},e),{},{text:a.payload.text,loading:!1});case"SUBMIT":return console.log(a.payload.res),Object(s.a)(Object(s.a)({},e),{},{movies:a.payload.res,loading:!1});case"GETMOVIE":return console.log("get movie"),console.log(a.payload.res),Object(s.a)(Object(s.a)({},e),{},{movie:a.payload.res,loading:!1});case"LOADING":return console.log("loadinf is true"),Object(s.a)(Object(s.a)({},e),{},{loading:!0});default:return Object(s.a)(Object(s.a)({},e),{},{loading:!1})}}}),p=[m.a],g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,f=Object(i.e)(v,g(i.a.apply(void 0,p))),h=t(10);var N=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-dark mb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(h.b,{rel:"noopener noreferrer",className:"navbar-brand text-white text-lg brand-text",to:"/"},"MovieSeriesInfo")),r.a.createElement("ul",{className:"navbar-nav ml-auto text-light d-inline-block"},r.a.createElement("li",{className:"nav-item d-inline-block mr-4"},r.a.createElement("i",{className:"fab fa-imdb fa-5x",id:"imdb-logo"})),r.a.createElement("li",{className:"nav-item d-inline-block mr-4"},r.a.createElement("i",{className:"fab fa-react fa-5x",id:"react-logo"})))))))};var y=function(){return r.a.createElement("i",{className:"fa fa-spinner fa-spin text-dark fa-5x"})};var w=function(e){var a=e.Title,t=e.Year,n=e.Poster,l=e.imdbID;return r.a.createElement("div",{className:"col-md-3 mb-5"},r.a.createElement("div",{className:"card card-body bg-dark text-center h-100"},r.a.createElement("img",{className:"w-100 mb-2",src:n,alt:"Movie Cover"}),r.a.createElement("h5",{className:"text-light card-title"},a," - ",t),r.a.createElement(h.b,{className:"btn btn-primary",to:"/movie/"+l},"Movie Details",r.a.createElement("i",{className:"fas fa-chevron-right"}))))};var x=Object(o.b)((function(e){return{movies:e.movies.movies}}))((function(e){var a=e.movies,t=void 0===a?[]:a;return e.error,r.a.createElement("div",{className:"row"},t.map((function(e,a){return r.a.createElement(w,Object.assign({key:a},e))})))}));var O=Object(o.b)((function(e){return{text:e.movies.text}}),{Search:function(e){return function(a){a({type:"SEARCH",payload:{text:e}})}},Submit:function(e){return function(a){d.a.get("http://www.omdbapi.com/?apikey=".concat(E.APIKEY,"&S=").concat(e)).then((function(e){return a({type:"SUBMIT",payload:{res:e.data.Search}})})).catch((function(e){return console.log(e)}))}},IsLoading:function(){return function(e){e({type:"LOADING"})}}})((function(e){var a=e.Search,t=e.Submit,n=e.text,l=e.IsLoading;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("i",{className:"fa fa-search"})," Search for a movie ,TV series .."),r.a.createElement("form",{id:"searchForm",onSubmit:function(e){return function(e){e.preventDefault(),t(n),l()}(e)}},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:function(e){return function(e){a(e.currentTarget.value)}(e)}}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-bg mt-3"},"Search"))))}));var j=Object(o.b)((function(e){return{loading:e.movies.loading}}))((function(e){var a=e.loading;return r.a.createElement("div",{className:"text-center"},r.a.createElement(O,null),a?r.a.createElement(y,null):r.a.createElement(x,null))}));var k=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"footer p-3 mt-4 text-center bg-dark text-light"},"Developed By:",r.a.createElement("a",{href:"https://github.com/khali70",target:"_blank",rel:"noopener noreferrer",className:"text-warning font-weight-normal"},"Ahmed Khalifa"),", Using ",r.a.createElement("i",{className:"fab fa-react"})," React JS & Redux JS integrated with external movies data API",r.a.createElement("a",{href:"https://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer"},"OMDB")))))},S=t(34),I=t(35),D=t(37),A=t(36),M=function(e){Object(D.a)(t,e);var a=Object(A.a)(t);function t(){return Object(S.a)(this,t),a.apply(this,arguments)}return Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://www.omdbapi.com/?apikey=".concat(E.APIKEY,"&i=").concat(this.props.match.params.id)).then((function(a){return e.props.dispatch({type:"GETMOVIE",payload:{res:a.data}})})).catch((function(e){return console.log(e)})),this.props.dispatch({type:"LOADING"})}},{key:"render",value:function(){var e=this.props.movie,a=e.Title,t=e.Genre,n=e.Released,l=e.imdbRating,c=e.Director,o=e.Writer,i=e.Actors,m=e.Plot,s=e.imdbID,u=e.Poster,d=e.Rated;return r.a.createElement(r.a.Fragment,null,this.props.loading?r.a.createElement(y,null):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 card card-body"},r.a.createElement("img",{src:u,className:"thumbnail",alt:"Poster"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h2",{className:"mb-4"},a),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:")," ",t),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:")," ",n),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Rated:")," ",d),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB Rating:")," ",l),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:")," ",c),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:")," ",o),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:")," ",i)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card card-body bg-dark my-5 text-light"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"About "),m,r.a.createElement("hr",null),r.a.createElement("a",{href:"https://www.imdb.com/title/"+s,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB"),r.a.createElement(h.b,{to:"/",className:"btn btn-default text-light"},"Go Back To Search"))))))}}]),t}(n.Component),T=Object(o.b)((function(e){return{movie:e.movies.movie,loading:e.movies.loading}}))(M),R=t(2);t(66);var _=function(){return r.a.createElement(o.a,{store:f},r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(R.a,{exact:!0,path:"/",component:j}),r.a.createElement(R.a,{exact:!0,path:"/movie/:id",component:T}),r.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.da4bbcbf.chunk.js.map