(this["webpackJsonpmultiplayer-trivia"]=this["webpackJsonpmultiplayer-trivia"]||[]).push([[0],{42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},58:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(22),r=s.n(i),c=(s(42),s(15)),o=s(11),l=s(17),u=s(16),d=s.p+"static/media/logo.6ce24c58.svg",h=(s(43),s(32)),p=s(9),m=(s(44),s(77)),j=s(20),b=(s(45),s(49),s(50),s(78)),v=s(76),g=s(4);function y(e){return Object(g.jsxs)("div",{className:"counter",children:[Object(g.jsx)("button",{className:"counter-action decrement",onClick:function(){e.onChange(-1)},children:" - "}),Object(g.jsxs)("div",{className:"counter-score",children:[" ",e.score," "]}),Object(g.jsx)("button",{className:"counter-action increment",onClick:function(){e.onChange(1)},children:" + "})]})}var O=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=["primary","",""],t=["","small","small"];return Object(g.jsxs)("div",{className:"player",children:[Object(g.jsxs)("div",{className:"player-container",children:[Object(g.jsxs)("div",{className:"player-name",children:[Object(g.jsx)("a",{className:"remove-player",onClick:this.props.onRemove,children:" X "}),this.props.name]}),Object(g.jsx)("div",{className:"message-chips",children:this.props.messages?this.props.messages.messages.map((function(s,a){return Object(g.jsx)(b.a,{icon:Object(g.jsx)(v.a,{}),label:s,size:t[a],color:e[a],className:"chip-"+a})})):""})]}),Object(g.jsx)("div",{className:"player-score",children:Object(g.jsx)(y,{score:this.props.score,onChange:this.props.onScoreChange})})]})}}]),s}(a.Component),f=4,x=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){a.interval=setInterval(a.onTick,100)},a.componentWillUnmount=function(){clearInterval(a.interval)},a.state={running:!1,elapsedTime:0,previousTime:0},a.onStart=a.onStart.bind(Object(p.a)(a)),a.onStop=a.onStop.bind(Object(p.a)(a)),a.onReset=a.onReset.bind(Object(p.a)(a)),a.onTick=a.onTick.bind(Object(p.a)(a)),a}return Object(o.a)(s,[{key:"onTick",value:function(){if(this.state.running){var e=Date.now();this.setState({previousTime:e,elapsedTime:this.state.elapsedTime+(e-this.state.previousTime)})}}},{key:"onStart",value:function(){this.state={running:!0,previousTime:Date.now()},this.setState(this.state)}},{key:"onStop",value:function(){this.state={running:!1},this.setState(this.state)}},{key:"onReset",value:function(){this.state={elapsedTime:0,previousTime:Date.now()},this.setState(this.state)}},{key:"render",value:function(){var e=Math.floor(this.state.elapsedTime/1e3),t=this.state.running?Object(g.jsx)("button",{onClick:this.onStop,children:"Stop"}):Object(g.jsx)("button",{onClick:this.onStart,children:"Start"});return Object(g.jsxs)("div",{className:"stopwatch",children:[Object(g.jsx)("h2",{children:"Stopwatch"}),Object(g.jsxs)("div",{className:"stopwatch-time",children:[" ",e," "]}),t,Object(g.jsx)("button",{onClick:this.onReset,children:"Reset"})]})}}]),s}(a.Component),S=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.state={name:""},a.onNameChange=a.onNameChange.bind(Object(p.a)(a)),a}return Object(o.a)(s,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.name),this.setState({name:""})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"add-player-form",children:Object(g.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(g.jsx)("input",{type:"text",value:this.state.name,onChange:this.onNameChange}),Object(g.jsx)("input",{type:"submit",value:"Add Player"})]})})}}]),s}(a.Component);function k(e){var t=e.players.length,s=e.players.reduce((function(e,t){return e+t.score}),0);return Object(g.jsx)("table",{className:"stats",children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Players:"}),Object(g.jsx)("td",{children:t})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Total Points:"}),Object(g.jsx)("td",{children:s})]})]})})}function C(e){return Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)(k,{players:e.players}),Object(g.jsx)("h1",{children:e.title}),Object(g.jsx)(x,{})]})}var N=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={players:a.props.initialPlayers,messages:{}},a.onPlayerAdd=a.onPlayerAdd.bind(Object(p.a)(a)),a.onRemovePlayer=a.onRemovePlayer.bind(Object(p.a)(a)),a}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(e){e&&this.props.initialPlayers.length==e.initialPlayers.length||this.setState({players:this.props.initialPlayers})}},{key:"onScoreChange",value:function(e,t){this.state.players[e].score+=t,this.setState(this.state)}},{key:"onPlayerAdd",value:function(e){console.log("Player added",e),this.state.players.push({name:e,score:0,id:f}),this.setState(this.state),f+=1}},{key:"onRemovePlayer",value:function(e){this.state.players.splice(e,1),this.setState(this.state)}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"scoreboard",children:[Object(g.jsx)(C,{title:this.props.title,players:this.state.players}),Object(g.jsx)("div",{className:"players",children:this.state.players.map(function(e,t){return Object(g.jsx)(O,{onScoreChange:function(e){this.onScoreChange(t,e)}.bind(this),onRemove:function(){this.onRemovePlayer(t)}.bind(this),name:e.name,score:e.score,messages:this.props.messages[e.uid]},e.id)}.bind(this))}),Object(g.jsx)(S,{onAdd:this.onPlayerAdd})]})}}]),s}(a.Component),P=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={prevMessages:[],users:{},players:[],message:"",playerMessages:{}},a.database=j.a.database(),a.sendMessage=a.sendMessage.bind(Object(p.a)(a)),a.onMessageChange=a.onMessageChange.bind(Object(p.a)(a)),a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"View",children:[Object(g.jsxs)("div",{className:"Messaging",children:[Object(g.jsx)("div",{className:"add-player-form",children:Object(g.jsxs)("form",{onSubmit:this.sendMessage,children:[Object(g.jsx)("input",{type:"text",value:this.state.message,onChange:this.onMessageChange}),Object(g.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",children:"Send Message"})]})}),Object(g.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return e.sendMessage()},children:"Send"})]}),Object(g.jsx)("div",{className:"History",children:Object(g.jsx)(N,{initialPlayers:this.state.players,messages:this.state.playerMessages})})]})}},{key:"componentDidUpdate",value:function(e){e&&this.props.user.uid==e.user.uid||(console.log("props.user update"),this.updateUserName(),this.deleteOldMessages(),this.setupPlayerListeners())}},{key:"updateUserName",value:function(){this.database.ref("username/"+this.props.user.uid).set({username:this.props.user.displayName})}},{key:"deleteOldMessages",value:function(){var e=this.database.ref("users/"+this.props.user.uid),t=Date.now()-72e5;e.orderByChild("timestamp").endAt(t).limitToLast(1).on("child_added",(function(e){e.ref.remove()}))}},{key:"sendMessage",value:function(e){if(e&&e.preventDefault(),this.state.message){var t=this.state.message;this.setState({message:""}),this.database.ref("users/"+this.props.user.uid).push().set({message:t,timestamp:Date.now()})}}},{key:"setupPlayerListeners",value:function(){var e=this;this.database.ref("username").on("child_added",(function(t){e.state.users[t.key]=t.val().username;var s=Object.keys(e.state.users).sort().map((function(t,s){return{name:e.state.users[t],id:s,score:0,uid:t}}));e.setState({players:s}),e.setupChatHistoryListeners(s)}))}},{key:"setupChatHistoryListeners",value:function(e){var t,s=this,a=Object(h.a)(e);try{var n=function(){var e=t.value;s.database.ref("users/"+e.uid).orderByChild("timestamp").limitToLast(3).on("child_added",(function(t){console.log(t.val().message);var a=s.state.playerMessages[e.uid];a||(a=s.state.playerMessages[e.uid]={}),a.lastTimestamp&&a.lastTimestamp===t.val().timestamp||(a.lastTimestamp=t.val().timestamp,a.messages||(a.messages=[]),a.messages.unshift(t.val().message),a.messages.length>3&&a.messages.pop(),s.setState({playerMessages:s.state.playerMessages}))}))};for(a.s();!(t=a.n()).done;)n()}catch(i){a.e(i)}finally{a.f()}}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),s}(a.Component),T=(s(56),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(c.a)(this,s),e=t.call(this),console.log("foo");return j.a.apps.length||j.a.initializeApp({apiKey:"AIzaSyB4X2zC7tYE6T5e0rIBlZ8RzbNhnAQ58Ws",authDomain:"multiplayer-trivia-68951.firebaseapp.com",projectId:"multiplayer-trivia-68951",storageBucket:"multiplayer-trivia-68951.appspot.com",messagingSenderId:"1016103210575",appId:"1:1016103210575:web:c997edfe327ca68893e43a",measurementId:"G-7JBQP4CF0Y"}),e.state={signed:!1,user:{}},e.authProvider=new j.a.auth.GoogleAuthProvider,e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("div",{className:"Sign-in-button-div",children:Object(g.jsx)(m.a,{variant:"contained",color:"primary",disabled:this.state.signed,onClick:function(){return e.signIn()},children:"Sign in to Google"})}),Object(g.jsx)("img",{src:this.state.user.photoURL,className:"Google-photo",hidden:!this.state.signed}),Object(g.jsx)("img",{src:d,className:"App-logo",alt:"logo"})]}),Object(g.jsx)("div",{hidden:!this.state.signed,children:Object(g.jsx)(P,{hidden:!this.state.signed,user:this.state.user})})]})}},{key:"signIn",value:function(){var e=this;j.a.auth().signInWithPopup(this.authProvider).then((function(t){t.credential.accessToken;var s=t.user;e.setState({signed:!0,user:t.user}),console.log(s.displayName)})).catch((function(e){e.code,e.message,e.email,e.credential}))}}]),s}(a.Component)),M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,79)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root")),M()}},[[58,1,2]]]);
//# sourceMappingURL=main.2fb26422.chunk.js.map