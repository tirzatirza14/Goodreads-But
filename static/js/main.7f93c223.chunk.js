(this["webpackJsonpgoodreads-but"]=this["webpackJsonpgoodreads-but"]||[]).push([[0],[,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),i=t.n(r),s=(t(14),t(1)),c=t(2),l=t(4),m=t(3),d=(t(5),t(7),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={backImage:e.backImage},n}return Object(c.a)(t,[{key:"render",value:function(){var e={backgroundImage:"url("+this.state.backImage+")"},a="Book";return"read"==this.props.readOrNot&&(a+=" read"),o.a.createElement("div",{className:"Card"},"reading this"==this.props.readOrNot?o.a.createElement("div",{className:"banner now"},"Now Reading"):o.a.createElement("div",null),"soon"==this.props.readOrNot?o.a.createElement("div",{className:"banner soon"},"Soon"):o.a.createElement("div",null),o.a.createElement("div",{className:a,style:e}," "))}}]),t}(n.Component));var h=function(e){var a=e.filteredCards.map((function(e){return o.a.createElement(d,{key:e.key,name:e.name,backImage:e.backImage,readOrNot:e.readOrNot,chooser:e.chooser})}));return o.a.createElement("div",{className:"CardList"},a)};var u=function(e){return o.a.createElement("div",{className:"Filter"},o.a.createElement("button",{type:"button",onClick:e.onClick},e.filterChooser))},g=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleInputJonathan=function(){n.setState({filterItem:"Jonathan"})},n.handleInputTirza=function(){n.setState({filterItem:"Tirza"})},n.handleInputAll=function(){n.setState({filterItem:""})},n.state={cards:[{name:"Fellowship of The Ring",backImage:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif",readOrNot:"soon",chooser:"Jonathan",key:"0"},{name:"Hyperspace",backImage:"https://bosilawhat.files.wordpress.com/2014/04/44c4aa56cf140f960990af910db2ecd9.jpg?w=285&h=440",readOrNot:"soon",chooser:"Tirza",key:"1"},{name:"The Hobbit",backImage:"https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",readOrNot:"reading this",chooser:"Jonathan",key:"2"},{name:"Catch and Kill",backImage:"https://storage.googleapis.com/afs-prod/media/e5a09f89107544588a7cf5ab9aae9f7a/2850.jpeg",readOrNot:"read",chooser:"Tirza",key:"3"},{name:"Walkaway",backImage:"https://upload.wikimedia.org/wikipedia/en/6/65/Walkaway_%28a_Cory_Doctorow_novel%29_book_cover.jpg",readOrNot:"read",chooser:"Jonathan",key:"4"},{name:"Educated",backImage:"https://images-na.ssl-images-amazon.com/images/I/81XR45UdqkL.jpg",readOrNot:"read",chooser:"Tirza",key:"5"},{name:"High Mountains of Portugal",backImage:"https://images-na.ssl-images-amazon.com/images/I/51vqI45mx-L._SX326_BO1,204,203,200_.jpg",readOrNot:"read",chooser:"Jonathan",key:"6"}],filterItem:""},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.state.cards.filter((function(a){return a.chooser.includes(e.state.filterItem)}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Title"},o.a.createElement("h1",null,"Goodreads, but just us"),o.a.createElement("div",{className:"Filters"},o.a.createElement(u,{filterChooser:"All",onClick:this.handleInputAll}),o.a.createElement(u,{filterChooser:"Jonathan's Choice",onClick:this.handleInputJonathan}),o.a.createElement(u,{filterChooser:"Tirza's Choice",onClick:this.handleInputTirza}))),o.a.createElement(h,{filteredCards:a}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7f93c223.chunk.js.map