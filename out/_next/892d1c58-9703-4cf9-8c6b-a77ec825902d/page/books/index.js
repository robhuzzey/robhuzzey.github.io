
          window.__NEXT_REGISTER_PAGE('/books', function() {
            var comp = module.exports=webpackJsonp([7],{385:function(e,t,n){e.exports=n(386)},386:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(32),l=o(u),s=n(1),r=o(s),a=n(19),i=o(a),f=n(2),c=o(f),d=n(3),m=o(d),p=n(0),h=o(p),k=n(85),v=o(k),b=n(48),g=n(141),_=o(g),w=function(e){return h.default.createElement(b.Row,null,e.books.map(function(e,t){return h.default.createElement(b.Col,{xs:12,md:6,key:t},h.default.createElement(_.default,{title:e.volumeInfo.title,description:e.volumeInfo.description,img:e.volumeInfo.imageLinks.smallThumbnail}))}))},E=function(e){function t(e){(0,r.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={books:[],fetchNotSupported:!1},n}return(0,m.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;if(!window.fetch)return this.setState({fetchNotSupported:!0});fetch("https://www.googleapis.com/books/v1/users/101891936560271534706/bookshelves/4/volumes?country=GB&maxResults=40").then(function(e){return e.json()}).then(function(t){e.setState({books:t.items})})}},{key:"render",value:function(){return this.state.fetchNotSupported?h.default.createElement("p",null,"Fetch is not supported"):h.default.createElement(v.default,{className:"books",loading:0===this.state.books.length},h.default.createElement(b.Grid,null,this.state.books.filter(function(e){return e.volumeInfo.imageLinks}).reduce(function(e,t,n){return n%2==0&&e.push([]),e[e.length-1].push(t),e},[]).map(function(e,t){return h.default.createElement(w,{key:t,books:e})})))}}]),t}(h.default.Component);t.default=E}},[385]);
            return { page: comp.default }
          })
        