(this["webpackJsonpmultiplayer-trivia"]=this["webpackJsonpmultiplayer-trivia"]||[]).push([[0],{48:function(e,s,t){},49:function(e,s,t){},50:function(e,s,t){},55:function(e,s,t){},56:function(e,s,t){},64:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),n=t(22),r=t.n(n),o=(t(48),t(15)),c=t(14),l=t(17),d=t(16),u=t.p+"static/media/logo.6ce24c58.svg",h=(t(49),t(34)),p=t(11),j=(t(50),t(87)),m=t(20),b=(t(51),t(55),t(56),t(89)),v=t(85),f=t(3);function g(e){return Object(f.jsxs)("div",{className:"counter",children:[Object(f.jsx)("div",{hidden:!e.isHost,children:Object(f.jsx)("button",{className:"counter-action decrement",onClick:function(){e.onChange(-1)},children:" - "})}),Object(f.jsxs)("div",{className:"counter-score",children:[" ",e.score," "]}),Object(f.jsx)("div",{hidden:!e.isHost,children:Object(f.jsx)("button",{className:"counter-action increment",hidden:!e.isHost,onClick:function(){e.onChange(1)},children:" + "})})]})}var O=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=["primary","default","default"],s=["medium","small","small"];return Object(f.jsxs)("div",{className:"player",children:[Object(f.jsxs)("div",{className:"player-container",children:[Object(f.jsx)("div",{hidden:!this.props.isLeader,className:"leader-icon",children:"\ud83d\udc51"}),Object(f.jsxs)("div",{className:"player-name",children:[Object(f.jsx)("img",{src:this.props.photoURL,className:"player-photo"}),this.props.name,Object(f.jsx)(v.a,{className:"chat-icon"})]}),Object(f.jsx)("div",{className:"message-chips",children:this.props.messages?this.props.messages.messages.map((function(t,a){return Object(f.jsx)(b.a,{label:t,size:s[a],color:e[a],className:"chip-"+a})})):""})]}),Object(f.jsx)("div",{className:"player-score",children:Object(f.jsx)(g,{score:this.props.score,onChange:this.props.onScoreChange,isHost:this.props.isHost})})]})}}]),t}(a.Component),y=4,x=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).componentDidMount=function(){a.interval=setInterval(a.onTick,100)},a.componentWillUnmount=function(){clearInterval(a.interval)},a.state={running:!1,elapsedTime:0,previousTime:0},a.onStart=a.onStart.bind(Object(p.a)(a)),a.onStop=a.onStop.bind(Object(p.a)(a)),a.onReset=a.onReset.bind(Object(p.a)(a)),a.onTick=a.onTick.bind(Object(p.a)(a)),a.props.database.ref("timer").on("value",(function(e){a.props.isHost||a.setState({elapsedTime:e.val().elapsed||0})})),a}return Object(c.a)(t,[{key:"onTick",value:function(){if(this.state.running){var e=Date.now();this.setState({previousTime:e,elapsedTime:this.state.elapsedTime+(e-this.state.previousTime)}),this.props.isHost&&this.props.database.ref("timer").update({elapsed:this.state.elapsedTime})}}},{key:"onStart",value:function(){this.state={running:!0,previousTime:Date.now()},this.setState(this.state)}},{key:"onStop",value:function(){this.state={running:!1},this.setState(this.state)}},{key:"onReset",value:function(){this.state={elapsedTime:0,previousTime:Date.now()},this.setState(this.state),this.props.isHost&&this.props.database.ref("timer").update({elapsed:this.state.elapsedTime})}},{key:"render",value:function(){var e=Math.floor(this.state.elapsedTime/1e3),s=this.state.running?Object(f.jsx)("button",{onClick:this.onStop,children:"Stop"}):Object(f.jsx)("button",{onClick:this.onStart,children:"Start"});return Object(f.jsxs)("div",{className:"stopwatch",children:[Object(f.jsx)("h2",{children:"Stopwatch"}),Object(f.jsxs)("div",{className:"stopwatch-time",children:[" ",e," "]}),Object(f.jsxs)("div",{hidden:!this.props.isHost,children:[s,Object(f.jsx)("button",{onClick:this.onReset,children:"Reset"})]})]})}}]),t}(a.Component);a.Component;function k(e){var s=e.players.length,t=e.players.reduce((function(e,s){return e+s.score}),0);return Object(f.jsx)("table",{className:"stats",children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Players:"}),Object(f.jsx)("td",{children:s})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Total Points:"}),Object(f.jsx)("td",{children:t})]})]})})}function C(e){return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(k,{players:e.players}),Object(f.jsx)("h1",{children:e.title}),Object(f.jsx)(x,{database:e.database,isHost:e.isHost})]})}var S=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={players:a.props.initialPlayers,messages:{}},a.onPlayerAdd=a.onPlayerAdd.bind(Object(p.a)(a)),a.onRemovePlayer=a.onRemovePlayer.bind(Object(p.a)(a)),a}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){}},{key:"onScoreChange",value:function(e,s){this.props.initialPlayers[e].score+=s,this.setState(this.state),this.props.database.ref("username/"+this.props.initialPlayers[e].uid).update({score:this.props.initialPlayers[e].score})}},{key:"onPlayerAdd",value:function(e){console.log("Player added",e),this.props.initialPlayers.push({name:e,score:0,id:y}),this.setState(this.state),y+=1}},{key:"onRemovePlayer",value:function(e){this.props.initialPlayers.splice(e,1),this.setState(this.state)}},{key:"render",value:function(){var e=this.getLeaderIndices();return Object(f.jsxs)("div",{className:"scoreboard",children:[Object(f.jsx)(C,{title:this.props.title,players:this.props.initialPlayers,database:this.props.database,isHost:this.props.isHost}),Object(f.jsx)("div",{className:"players",children:this.props.initialPlayers.map(function(s,t){return Object(f.jsx)(O,{onScoreChange:function(e){this.onScoreChange(t,e)}.bind(this),onRemove:function(){this.onRemovePlayer(t)}.bind(this),name:s.name,score:s.score,messages:this.props.messages[s.uid],isHost:this.props.isHost,photoURL:s.photoUrl,isLeader:e.indexOf(t)>-1},s.id)}.bind(this))})]})}},{key:"getLeaderIndices",value:function(){var e=0;this.props.initialPlayers.forEach((function(s){s.score>e&&(e=s.score)}));var s=[];return 0==e?[]:(this.props.initialPlayers.forEach((function(t,a){t.score==e&&s.push(a)})),s)}}]),t}(a.Component),N=t(86),P=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).database=m.a.database(),a.state={prevMessages:[],users:{},players:[],message:"",playerMessages:{},database:a.database},a.sendMessage=a.sendMessage.bind(Object(p.a)(a)),a.onMessageChange=a.onMessageChange.bind(Object(p.a)(a)),a}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"View",children:[Object(f.jsx)(N.a,{className:"messaging-paper",elevation:3,children:Object(f.jsxs)("div",{className:"Messaging",children:[Object(f.jsxs)("div",{className:"first-row",children:[Object(f.jsx)(j.a,{variant:"outlined",color:"default",onClick:function(){return e.quickAnswer("\ud83e\udd2f")},children:"\ud83e\udd2f"}),Object(f.jsx)(j.a,{variant:"outlined",color:"secondary",onClick:function(){return e.quickAnswer("\ud83e\udd80")},children:"\ud83e\udd80"}),Object(f.jsx)(j.a,{variant:"outlined",color:"secondary",onClick:function(){return e.quickAnswer("\ud83d\udc96")},children:"\ud83d\udc96"})]}),Object(f.jsxs)("div",{className:"second-row",children:[Object(f.jsx)(j.a,{variant:"outlined",color:"secondary",onClick:function(){return e.quickAnswer("\ud83c\udf89")},children:"\ud83c\udf89"}),Object(f.jsx)(j.a,{variant:"outlined",color:"secondary",onClick:function(){return e.quickAnswer("\ud83d\udc4d")},children:"\ud83d\udc4d"})]}),Object(f.jsx)("div",{className:"custom-text-form",children:Object(f.jsxs)("form",{onSubmit:this.sendMessage,children:[Object(f.jsx)("input",{placeholder:"Type your answer",type:"text",value:this.state.message,onChange:this.onMessageChange}),Object(f.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"Enter"})]})})]})}),Object(f.jsxs)("div",{className:"History",children:[Object(f.jsx)(S,{initialPlayers:this.state.players,messages:this.state.playerMessages,database:this.state.database,isHost:this.props.isHost}),Object(f.jsx)("div",{hidden:!this.props.isHost,children:Object(f.jsx)(j.a,{variant:"contained",color:"secondary",onClick:function(){return e.removeAllUsers()},children:"Remove all users (refresh page after)"})})]})]})}},{key:"componentDidUpdate",value:function(e){e&&this.props.user.uid==e.user.uid||(console.log("props.user update"),this.updateUserName(),this.deleteOldMessages(),this.setupPlayerListeners())}},{key:"updateUserName",value:function(){this.database.ref("username/"+this.props.user.uid).update({username:this.props.user.displayName,photoUrl:this.props.user.photoURL})}},{key:"removeAllUsers",value:function(){this.database.ref("username").on("child_added",(function(e){e.ref.remove()}))}},{key:"deleteOldMessages",value:function(){var e=this.database.ref("users/"+this.props.user.uid),s=Date.now()-72e5;e.orderByChild("timestamp").endAt(s).limitToLast(1).on("child_added",(function(e){e.ref.remove()}))}},{key:"quickAnswer",value:function(e){this.state.message=e,this.sendMessage()}},{key:"sendMessage",value:function(e){if(e&&e.preventDefault(),this.state.message){var s=this.state.message;this.setState({message:""}),this.database.ref("users/"+this.props.user.uid).push().set({message:s,timestamp:Date.now()})}}},{key:"setupPlayerListeners",value:function(){var e=this,s=this.database.ref("username");s.on("child_added",(function(s){e.state.users[s.key]={username:s.val().username,score:s.val().score||0,photoUrl:s.val().photoUrl};var t=Object.keys(e.state.users).sort().map((function(s,t){return{name:e.state.users[s].username,id:t,score:e.state.users[s].score,uid:s,photoUrl:e.state.users[s].photoUrl}}));e.setState({players:t}),e.setupChatHistoryListeners(t)})),s.on("child_changed",(function(s){e.state.users[s.key]={username:s.val().username,score:s.val().score||0,photoUrl:s.val().photoUrl};var t=Object.keys(e.state.users).sort().map((function(s,t){return{name:e.state.users[s].username,id:t,score:e.state.users[s].score,uid:s,photoUrl:e.state.users[s].photoUrl}}));e.setState({players:t})}))}},{key:"setupChatHistoryListeners",value:function(e){var s,t=this,a=Object(h.a)(e);try{var i=function(){var e=s.value;t.database.ref("users/"+e.uid).orderByChild("timestamp").limitToLast(3).on("child_added",(function(s){console.log(s.val().message);var a=t.state.playerMessages[e.uid];a||(a=t.state.playerMessages[e.uid]={}),a.lastTimestamp&&a.lastTimestamp===s.val().timestamp||(a.lastTimestamp=s.val().timestamp,a.messages||(a.messages=[]),a.messages.unshift(s.val().message),a.messages.length>3&&a.messages.pop(),t.setState({playerMessages:t.state.playerMessages}))}))};for(a.s();!(s=a.n()).done;)i()}catch(n){a.e(n)}finally{a.f()}}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),t}(a.Component),T=(t(62),t(90)),H=t(88),M=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var a;Object(o.a)(this,t),a=s.call(this,e),console.log("foo");return m.a.apps.length||m.a.initializeApp({apiKey:"AIzaSyB4X2zC7tYE6T5e0rIBlZ8RzbNhnAQ58Ws",authDomain:"multiplayer-trivia-68951.firebaseapp.com",projectId:"multiplayer-trivia-68951",storageBucket:"multiplayer-trivia-68951.appspot.com",messagingSenderId:"1016103210575",appId:"1:1016103210575:web:c997edfe327ca68893e43a",measurementId:"G-7JBQP4CF0Y"}),a.state={signed:!1,user:{},isHost:!1},a.authProvider=new m.a.auth.GoogleAuthProvider,a}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{children:" ML Insights Trivia "}),Object(f.jsx)("img",{src:this.state.user.photoURL,className:"Google-photo",hidden:!this.state.signed}),Object(f.jsx)(T.a,{control:Object(f.jsx)(H.a,{checked:this.state.isHost,onChange:function(s){e.setState({isHost:s.target.checked})},name:"checkedA"}),label:"Act as Host"}),Object(f.jsx)("img",{src:u,className:"App-logo",alt:"logo"})]}),Object(f.jsx)("div",{hidden:!this.state.signed,children:Object(f.jsx)(P,{hidden:!this.state.signed,user:this.state.user,isHost:this.state.isHost})}),Object(f.jsx)("div",{className:"Sign-in-button-div",children:Object(f.jsx)(j.a,{variant:"contained",color:"primary",disabled:this.state.signed,onClick:function(){return e.signIn()},children:"Sign in to Google"})})]})}},{key:"signIn",value:function(){var e=this;m.a.auth().signInWithPopup(this.authProvider).then((function(s){s.credential.accessToken;var t=s.user;e.setState({signed:!0,user:s.user}),console.log(t.displayName)})).catch((function(e){e.code,e.message,e.email,e.credential}))}}]),t}(a.Component),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.a157bb08.chunk.js.map