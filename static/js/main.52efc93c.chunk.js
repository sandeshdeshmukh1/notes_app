(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{100:function(e,t,n){e.exports=n(226)},105:function(e,t,n){},215:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(16),i=n.n(r),c=(n(105),n(13)),s=n.n(c),l=n(95),d=n(28),u=n(17),p=n(18),h=n(20),m=n(19),f=n(5),b=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"},newNoteBtn:{width:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#29487d",color:"white","&:hover":{backgroundColor:"#88a2ce"}},sidebarContainer:{marginTop:"0px",width:"300px",height:"100%",boxSizing:"border-box",float:"left",overflowY:"scroll",overflowX:"hidden"},newNoteInput:{width:"100%",margin:"0px",height:"35px",outline:"none",border:"none",paddingLeft:"5px","&:focus":{outline:"2px solid rgba(81, 203, 238, 1)"}},newNoteSubmitBtn:{width:"100%",backgroundColor:"#28787c",borderRadius:"0px",color:"white"}}},N=n(251),x=n(250),g=n(252),v=function(e){return{listItem:{cursor:"pointer"},textSection:{maxWidth:"85%"},deleteIcon:{position:"absolute",right:"5px",top:"calc(50% - 15px)","&:hover":{color:"red"}}}},w=n(256),k=n(249),E=n(91),y=n.n(E);var I=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).selectNote=function(t,n){return e.props.selectNote(t,n)},e.deleteNote=function(t){window.confirm("Are you sure you want to delete: ".concat(t.title))&&e.props.deleteNote(t)},e}return Object(p.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,o=n._index,r=n._note,i=n.classes,c=n.selectedNoteIndex;return a.a.createElement("div",{key:o},a.a.createElement(w.a,{className:i.listItem,selected:c===o,alignItems:"flex-start"},a.a.createElement("div",{className:i.textSection,onClick:function(){return t.selectNote(r,o)}},a.a.createElement(k.a,{primary:r.title,secondary:(e=r.body.substring(0,30),e.replace(/<[^>]*>?/gm,"")+"...")})),a.a.createElement(y.a,{onClick:function(){return t.deleteNote(r)},className:i.deleteIcon})))}}]),n}(a.a.Component),S=Object(f.a)(v)(I),C=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).newNoteBtnClick=function(){e.setState({title:null,addingNote:!e.state.addingNote})},e.updateTitle=function(t){e.setState({title:t})},e.newNote=function(){e.props.newNote(e.state.title),e.setState({title:null,addingNote:!1})},e.selectNote=function(t,n){return e.props.selectNote(t,n)},e.deleteNote=function(t){return e.props.deleteNote(t)},e.state={addingNote:!1,title:null},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.notes,o=t.classes,r=t.selectedNoteIndex;return n?a.a.createElement("div",{className:o.sidebarContainer},a.a.createElement(x.a,{onClick:this.newNoteBtnClick,className:o.newNoteBtn},this.state.addingNote?"Cancel":"New Note"),this.state.addingNote?a.a.createElement("div",null,a.a.createElement("input",{type:"text",className:o.newNoteInput,placeholder:"Enter note title",onKeyUp:function(t){return e.updateTitle(t.target.value)}}),a.a.createElement(x.a,{className:o.newNoteSubmitBtn,onClick:this.newNote},"Submit Note")):null,a.a.createElement(N.a,null,n.map((function(t,n){return a.a.createElement("div",{key:n},a.a.createElement(S,{_note:t,_index:n,selectedNoteIndex:r,selectNote:e.selectNote,deleteNote:e.deleteNote}),a.a.createElement(g.a,null))})))):a.a.createElement("div",null)}}]),n}(a.a.Component),O=Object(f.a)(b)(C),j=n(92),B=n.n(j),T=n(93),z=n.n(T),U=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},titleInput:{height:"50px",boxSizing:"border-box",border:"none",padding:"5px",fontSize:"24px",width:"calc(100% - 300px)",backgroundColor:"#29487d",color:"white",paddingLeft:"50px"},editIcon:{position:"absolute",left:"310px",top:"12px",color:"white",width:"10",height:"10"},editorContainer:{height:"100%",boxSizing:"border-box"}}},D=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.setState({text:e.props.selectedNote.body,title:e.props.selectedNote.title,id:e.props.selectedNote.id})},e.componentDidUpdate=function(){e.props.selectedNote.id!==e.state.id&&e.setState({text:e.props.selectedNote.body,title:e.props.selectedNote.title,id:e.props.selectedNote.id})},e.updateBody=function(){var t=Object(d.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({text:n});case 2:e.update();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateTitle=function(){var t=Object(d.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({title:n});case 2:e.update();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.update=function(e,t,n){var o,a;return function(){function r(){o=null,n||(a=e.apply(i,c))}var i=this,c=arguments;return clearTimeout(o),o=setTimeout(r,t),n&&!o&&(a=e.apply(i,c)),a}}((function(){e.props.noteUpdate(e.state.id,{title:e.state.title,body:e.state.text})}),1500),e.state={text:"",title:"",id:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement("div",{className:t.editorContainer},a.a.createElement(z.a,{className:t.editIcon}),a.a.createElement("input",{className:t.titleInput,placeholder:"Note title...",value:this.state.title?this.state.title:"",onChange:function(t){return e.updateTitle(t.target.value)}}),a.a.createElement(B.a,{theme:"snow",value:this.state.text,onChange:this.updateBody}))}}]),n}(a.a.Component),A=Object(f.a)(U)(D),F=n(257),R=n(94),W=n.n(R),M=n(254),X=n(255),_=n(53),q=n(253),L=Object(q.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}})),P=function(){var e=L();return a.a.createElement(a.a.Fragment,null,a.a.createElement(M.a,null),a.a.createElement(F.a,{position:"relative"},a.a.createElement(X.a,null,a.a.createElement(W.a,{className:e.icon}),a.a.createElement(_.a,{variant:"h5",color:"inherit",noWrap:!0},"Personal Note App"))))},G=Object(q.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6),position:"absolute",width:"100%",bottom:0}}})),J=function(){var e=G();return a.a.createElement(a.a.Fragment,null,a.a.createElement("footer",{className:e.footer},a.a.createElement(_.a,{variant:"h6",align:"center",gutterBottom:!0},"Created By Sandesh Deshmukh"),a.a.createElement(_.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Github Profile-- ",a.a.createElement("a",{href:"https://github.com/sandeshdeshmukh1"},"https://github.com/sandeshdeshmukh1"))))},K=(n(215),n(84)),V=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).componentDidMount=function(){K.firestore().collection("notes").onSnapshot((function(t){var n=t.docs.map((function(e){var t=e.data();return t.id=e.id,t}));console.log(n),e.setState({notes:n})}))},e.selectNote=function(t,n){return e.setState({selectedNoteIndex:n,selectedNote:t})},e.noteUpdate=function(e,t){K.firestore().collection("notes").doc(e).update({title:t.title,body:t.body,timestamp:K.firestore.FieldValue.serverTimestamp()})},e.newNote=function(){var t=Object(d.a)(s.a.mark((function t(n){var o,a,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={title:n,body:""},t.next=3,K.firestore().collection("notes").add({title:o.title,body:o.body,timestamp:K.firestore.FieldValue.serverTimestamp()});case 3:return a=t.sent,r=a.id,t.next=7,e.setState({notes:[].concat(Object(l.a)(e.state.notes),[o])});case 7:i=e.state.notes.indexOf(e.state.notes.filter((function(e){return e.id===r}))[0]),e.setState({selectedNote:e.state.notes[i],selectedNoteIndex:i});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteNote=function(){var t=Object(d.a)(s.a.mark((function t(n){var o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.state.notes.indexOf(n),t.next=3,e.setState({notes:e.state.notes.filter((function(e){return e!==n}))});case 3:e.state.selectedNoteIndex===o?e.setState({selectedNoteIndex:null,selectedNote:null}):e.state.notes.length>1?e.selectNote(e.state.notes[e.state.selectedNoteIndex-1],e.state.selectedNoteIndex-1):e.setState({selectedNoteIndex:null,selectedNote:null}),K.firestore().collection("notes").doc(n.id).delete();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={selectedNoteIndex:null,selectedNote:null,notes:null},e}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"app-container"},a.a.createElement(P,null),a.a.createElement(O,{selectedNoteIndex:this.state.selectedNoteIndex,notes:this.state.notes,deleteNote:this.deleteNote,selectNote:this.selectNote,newNote:this.newNote}),this.state.selectedNote?a.a.createElement(A,{selectedNote:this.state.selectedNote,selectedNoteIndex:this.state.selectedNoteIndex,notes:this.state.notes,noteUpdate:this.noteUpdate}):null,a.a.createElement(J,null))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(84);n(225);Q.initializeApp({apiKey:"AIzaSyCqkztTvXi32WaxDTkB-tXP1qQqpfXFwE0",authDomain:"noteapp-c1641.firebaseapp.com",databaseURL:"https://noteapp-c1641.firebaseio.com",projectId:"noteapp-c1641",storageBucket:"noteapp-c1641.appspot.com",messagingSenderId:"336672605697",appId:"1:336672605697:web:d74a5bfbf8785aff716200"}),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.52efc93c.chunk.js.map