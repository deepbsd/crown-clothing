(window["webpackJsonpcrown-clothing"]=window["webpackJsonpcrown-clothing"]||[]).push([[0],{54:function(e,t,n){e.exports=n(91)},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),i=n(20),l=n(8),u=n(44),s=n(11),p=n(31),m=(n(63),n(50)),f=n(45),b=n.n(f),d=n(10),O={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={currentUser:null,error:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SIGN_IN_SUCCESS:return v({},e,{currentUser:t.payload,error:null});case O.SIGN_OUT_SUCCESS:return v({},e,{currentUser:null,error:null});case O.SIGN_IN_FAILURE:case O.SIGN_OUT_FAILURE:case O.SIGN_UP_FAILURE:return v({},e,{error:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},j=n(51);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?w({},e,{quantity:e.quantity+1}):e})):[].concat(Object(j.a)(e),[w({},t,{quantity:1})])},I=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?w({},e,{quantity:e.quantity-1}):e}))};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={hidden:!0,cartItems:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return C({},e,{hidden:!e.hidden});case y.ADD_ITEM:return C({},e,{cartItems:_(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return C({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case y.REMOVE_ITEM:return C({},e,{cartItems:I(e.cartItems,t.payload)});case y.CLEAR_CART:return C({},e,{cartItems:[]});default:return e}},k={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={collections:null,isFetching:!1,errorMessage:void 0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.FETCH_COLLECTIONS_START:return A({},e,{isFetching:!0});case U.FETCH_COLLECTIONS_SUCCESS:return A({},e,{isFetching:!1,collections:t.payload});case U.FETCH_COLLECTIONS_FAILURE:return A({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},D={key:"root",storage:b.a,whitelist:["cart"]},F=Object(s.c)({user:h,cart:T,directory:P,shop:G}),M=Object(p.a)(D,F),H=n(2),q=n.n(H),z=n(4),V=function(e){return{type:O.SIGN_IN_SUCCESS,payload:e}},B=function(e){return{type:O.SIGN_IN_FAILURE,payload:e}},W=function(){return{type:O.SIGN_OUT_SUCCESS}},K=function(e){return{type:O.SIGN_OUT_FAILURE,payload:e}},Q=function(e){var t=e.user,n=e.additionalData;return{type:O.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},$=function(e){return{type:O.SIGN_UP_FAILURE,payload:e}},J=n(28),Y=n(26),X=n.n(Y);n(67),n(70);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}X.a.initializeApp({apiKey:"AIzaSyAMB_2NDVWrARCXg402bhAx0b2ZQm33nck",authDomain:"crownclothingdb-53e09.firebaseapp.com",databaseURL:"https://crownclothingdb-53e09.firebaseio.com",projectId:"crownclothingdb-53e09",storageBucket:"",messagingSenderId:"343856483988",appId:"1:343856483988:web:515ba7454aacbf49cfee81"});var te=function(){var e=Object(J.a)(q.a.mark((function e(t,n){var r,a,c,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=ce.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,o=new Date,e.prev=9,e.next=12,r.set(ee({displayName:a,email:c,createdAt:o},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),ne=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},re=function(){return new Promise((function(e,t){var n=ae.onAuthStateChanged((function(t){n(),e(t)}),t)}))},ae=X.a.auth(),ce=X.a.firestore(),oe=new X.a.auth.GoogleAuthProvider;oe.setCustomParameters({prompt:"select_account"});X.a;var ie=q.a.mark(je),le=q.a.mark(Se),ue=q.a.mark(we),se=q.a.mark(_e),pe=q.a.mark(Ie),me=q.a.mark(Ne),fe=q.a.mark(Ce),be=q.a.mark(xe),de=q.a.mark(Te),Oe=q.a.mark(ke),Ee=q.a.mark(Pe),ve=q.a.mark(Ue),ge=q.a.mark(Re);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e,t){var n,r;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(z.b)(te,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(z.c)(V(ye({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(z.c)(B(a.t0));case 15:case"end":return a.stop()}}),ie,null,[[0,11]])}function Se(){var e,t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ae.signInWithPopup(oe);case 3:return e=n.sent,t=e.user,n.next=7,je(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(z.c)(B(n.t0));case 13:case"end":return n.stop()}}),le,null,[[0,9]])}function we(e){var t,n,r,a,c;return q.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,o.prev=1,o.next=4,ae.signInWithEmailAndPassword(n,r);case 4:return a=o.sent,c=a.user,o.next=8,je(c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(z.c)(B(o.t0));case 14:case"end":return o.stop()}}),ue,null,[[1,10]])}function _e(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,re();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,je(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(z.c)(B(t.t0));case 14:case"end":return t.stop()}}),se,null,[[0,10]])}function Ie(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.signOut();case 3:return e.next=5,Object(z.c)(W());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(z.c)(K(e.t0));case 11:case"end":return e.stop()}}),pe,null,[[0,7]])}function Ne(e){var t,n,r,a,c,o;return q.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,i.prev=1,i.next=4,ae.createUserWithEmailAndPassword(n,r);case 4:return c=i.sent,o=c.user,i.next=8,Object(z.c)(Q({user:o,additionalData:{displayName:a}}));case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(z.c)($(i.t0));case 14:case"end":return i.stop()}}),me,null,[[1,10]])}function Ce(e){var t,n,r;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.next=3,je(n,r);case 3:case"end":return a.stop()}}),fe)}function xe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(O.GOOGLE_SIGN_IN_START,Se);case 2:case"end":return e.stop()}}),be)}function Te(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(O.EMAIL_SIGN_IN_START,we);case 2:case"end":return e.stop()}}),de)}function ke(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(O.SIGN_OUT_START,Ie);case 2:case"end":return e.stop()}}),Oe)}function Pe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(O.SIGN_UP_START,Ne);case 2:case"end":return e.stop()}}),Ee)}function Ue(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(O.SIGN_UP_SUCCESS,Ce);case 2:case"end":return e.stop()}}),ve)}function Re(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.b)(xe),Object(z.b)(Te),Object(z.b)(_e),Object(z.b)(ke),Object(z.b)(Pe),Object(z.b)(Ue)]);case 2:case"end":return e.stop()}}),ge)}var Ae=function(){return{type:y.TOGGLE_CART_HIDDEN}},Le=function(e){return{type:y.ADD_ITEM,payload:e}},Ge=function(){return{type:y.CLEAR_CART}},De=q.a.mark(He),Fe=q.a.mark(qe),Me=q.a.mark(ze);function He(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.c)(Ge());case 2:case"end":return e.stop()}}),De)}function qe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(O.SIGN_OUT_SUCCESS,He);case 2:case"end":return e.stop()}}),Fe)}function ze(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.b)(qe)]);case 2:case"end":return e.stop()}}),Me)}var Ve=function(){return{type:U.FETCH_COLLECTIONS_START}},Be=function(e){return{type:U.FETCH_COLLECTIONS_SUCCESS,payload:e}},We=function(e){return{type:U.FETCH_COLLECTIONS_FAILURE,payload:e}},Ke=q.a.mark(Je),Qe=q.a.mark(Ye),$e=q.a.mark(Xe);function Je(){var e,t,n;return q.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=ce.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(z.b)(ne,t);case 7:return n=r.sent,r.next=10,Object(z.c)(Be(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(z.c)(We(r.t0.message));case 16:case"end":return r.stop()}}),Ke,null,[[0,12]])}function Ye(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(U.FETCH_COLLECTIONS_START,Je);case 2:case"end":return e.stop()}}),Qe)}function Xe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.b)(Ye)]);case 2:case"end":return e.stop()}}),$e)}var Ze=q.a.mark(et);function et(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.b)(Re),Object(z.b)(ze),Object(z.b)(Xe)]);case 2:case"end":return e.stop()}}),Ze)}var tt=Object(m.a)(),nt=[tt];var rt=Object(s.e)(M,s.a.apply(void 0,nt));tt.run(et);var at=Object(p.b)(rt),ct=(n(72),n(22)),ot=n(19),it=n(7),lt=Object(it.a)([function(e){return e.directory}],(function(e){return e.sections})),ut=(n(73),Object(ct.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,o=e.linkUrl,i=e.match;return a.a.createElement("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(o))}},a.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title"},t.toUpperCase()),a.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),st=(n(75),Object(it.b)({sections:lt})),pt=Object(l.b)(st)((function(e){var t=e.sections;return a.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(ot.a)(e,["id"]);return a.a.createElement(ut,Object.assign({key:t},n))})))})),mt=n(13),ft=n(14);function bt(){var e=Object(mt.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n"]);return bt=function(){return e},e}var dt=ft.b.div(bt()),Ot=function(){return a.a.createElement(dt,null,a.a.createElement(pt,null))},Et=function(e){return e.shop},vt=Object(it.a)([Et],(function(e){return e.collections})),gt=Object(it.a)([vt],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),ht=Object(it.a)([Et],(function(e){return e.isFetching})),yt=Object(it.a)([Et],(function(e){return!!e.collections}));function jt(){var e=Object(mt.a)(["\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border: 3px solid rgba(195, 195, 195, 0.6);\n    border-radius: 50%;\n    border-top-color: #636767;\n    animation: spin 1s ease-in-out infinite;\n    -webkit-animation: spin 1s ease-in-out infinite;\n\n    @keyframes spin {\n        to {\n            -webkit-transform: rotate(360deg);\n        }\n    }\n    @-webkit-keyframes spin {\n        to {\n            -webkit-transform: rotate(360deg);\n        }\n}\n"]);return jt=function(){return e},e}function St(){var e=Object(mt.a)(["\n    height: 60vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return St=function(){return e},e}var wt=ft.b.div(St()),_t=ft.b.div(jt()),It=function(e){return function(t){var n=t.isLoading,r=Object(ot.a)(t,["isLoading"]);return n?a.a.createElement(wt,null,a.a.createElement(_t,null)):a.a.createElement(e,r)}};function Nt(){var e=Object(mt.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    background-color: black;\n    color: white;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n"]);return Nt=function(){return e},e}function Ct(){var e=Object(mt.a)(["\n    background-color: #4285f4;\n    color: white;\n\n    &:hover {\n        background-color: #357ae8;\n        border: none;\n    } \n"]);return Ct=function(){return e},e}function xt(){var e=Object(mt.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n        background-color: black;\n        color: white;\n        border: none;\n    }\n"]);return xt=function(){return e},e}function Tt(){var e=Object(mt.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return Tt=function(){return e},e}var kt=Object(ft.a)(Tt()),Pt=Object(ft.a)(xt()),Ut=Object(ft.a)(Ct()),Rt=ft.b.button(Nt(),(function(e){return e.isGoogleSignIn?Ut:e.inverted?Pt:kt})),At=function(e){var t=e.children,n=Object(ot.a)(e,["children"]);return a.a.createElement(Rt,n,t)},Lt=(n(77),Object(l.b)(null,(function(e){return{addItem:function(t){return e(Le(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,o=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(o,")")}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},r),a.a.createElement("span",{className:"price"},c)),a.a.createElement(At,{className:"custom-button",onClick:function(){return n(t)},inverted:!0},"Add to Cart"))}))),Gt=(n(78),function(e){var t=e.title,n=e.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},t.toUpperCase()),a.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return a.a.createElement(Lt,{key:e.id,item:e})}))))}),Dt=(n(79),Object(it.b)({collections:gt})),Ft=Object(l.b)(Dt)((function(e){var t=e.collections;return a.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(ot.a)(e,["id"]);return a.a.createElement(Gt,Object.assign({key:t},n))})))})),Mt=Object(it.b)({isLoading:ht}),Ht=Object(s.d)(Object(l.b)(Mt),It)(Ft),qt=(n(80),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(it.a)([vt],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},n),a.a.createElement("div",{className:"items"},r.map((function(e){return a.a.createElement(Lt,{key:e.id,item:e})}))))}))),zt=Object(it.b)({isLoading:function(e){return!yt(e)}}),Vt=Object(s.d)(Object(l.b)(zt),It)(qt),Bt=Object(l.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(Ve())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",{className:"shop-page"},a.a.createElement(ct.b,{exact:!0,path:"".concat(n.path),component:Ht}),a.a.createElement(ct.b,{path:"".concat(n.path,"/:collectionId"),component:Vt}))})),Wt=n(32),Kt=(n(81),function(e){var t=e.handleChange,n=e.label,r=Object(ot.a)(e,["handleChange","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),n?a.a.createElement("label",{className:"".concat(r.value.length?"shrink":""," form-input-label")},n):null)});n(82);function Qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var $t=Object(l.b)(null,(function(e){return{googleSignInStart:function(){return e({type:O.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e((r={email:t,password:n},{type:O.EMAIL_SIGN_IN_START,payload:r}));var r}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(r.useState)({email:"",password:""}),o=Object(Wt.a)(c,2),i=o[0],l=o[1],u=i.email,s=i.password,p=function(e){var t=e.target,n=t.value,r=t.name;l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qt(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,Object(d.a)({},r,n)))};return a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",null,"I already have an account"),a.a.createElement("span",null,"Sign in with your email and password"),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u,s)}},a.a.createElement(Kt,{name:"email",type:"email",handleChange:p,value:u,label:"email",required:!0}),a.a.createElement(Kt,{name:"password",type:"password",value:s,handleChange:p,label:"password",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(At,{type:"submit"}," Sign in "),a.a.createElement(At,{type:"button",onClick:n,isGoogleSignIn:!0},"Sign in with Google"))))}));n(83);function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Yt=Object(l.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:O.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(Wt.a)(n,2),o=c[0],i=c[1],l=o.displayName,u=o.email,s=o.password,p=o.confirmPassword,m=function(){var e=Object(J.a)(q.a.mark((function e(n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),s===p){e.next=4;break}return alert("passwords don't match!"),e.abrupt("return");case 4:t({displayName:l,email:u,password:s});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.target,n=t.name,r=t.value;i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Jt(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(d.a)({},n,r)))};return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",{className:"title"},"I do not have an account "),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:m},a.a.createElement(Kt,{type:"text",name:"displayName",value:l,onChange:f,label:"Display Name",required:!0}),a.a.createElement(Kt,{type:"email",name:"email",value:u,onChange:f,label:"Email",required:!0}),a.a.createElement(Kt,{type:"password",name:"password",value:s,onChange:f,label:"Password",required:!0}),a.a.createElement(Kt,{type:"password",name:"confirmPassword",value:p,onChange:f,label:"Confirm Password",required:!0}),a.a.createElement(At,{type:"submit"},"SIGN UP")))})),Xt=(n(84),function(){return a.a.createElement("div",{className:"sign-in-and-sign-up"},a.a.createElement($t,null),a.a.createElement(Yt,null))}),Zt=(n(85),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Le(t))},removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,o=t.name,i=t.imageUrl,l=t.price,u=t.quantity;return a.a.createElement("div",{className:"checkout-item"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:i,alt:"item"})),a.a.createElement("span",{className:"name"},o),a.a.createElement("span",{className:"quantity"},a.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),a.a.createElement("span",{className:"value"},u),a.a.createElement("div",{className:"arrow",onClick:function(){return r(t)}},"\u276f")),a.a.createElement("span",{className:"price"},"$",l),a.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),en=n(49),tn=n.n(en),nn=function(e){var t=e.price,n=100*t;return a.a.createElement(tn.a,{label:"Pay Now",name:"Crown Clothing",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log("token: ",e),alert("Payment Successful")},stripeKey:"pk_test_LhVQdHr1BxD1M9fGFAQvjyiC00NpTso2zo"})},rn=function(e){return e.cart},an=Object(it.a)([rn],(function(e){return e.cartItems})),cn=Object(it.a)([rn],(function(e){return e.hidden})),on=Object(it.a)([an],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ln=Object(it.a)([an],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),un=(n(86),Object(it.b)({cartItems:an,total:ln})),sn=Object(l.b)(un)((function(e){var t=e.cartItems,n=e.total;return a.a.createElement("div",{className:"checkout-page"},a.a.createElement("div",{className:"checkout-header"},a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Product")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Description")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Quantity")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Price")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Remove"))),t.map((function(e){return a.a.createElement(Zt,{key:e.id,cartItem:e})})),a.a.createElement("div",{className:"total"},"TOTAL: $",n),a.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",a.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVC: 123"),a.a.createElement(nn,{price:n}))}));function pn(){return(pn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function mn(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var fn=a.a.createElement("title",null,"Group"),bn=a.a.createElement("desc",null,"Created with Sketch."),dn=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),On=function(e){var t=e.svgRef,n=e.title,r=mn(e,["svgRef","title"]);return a.a.createElement("svg",pn({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},r),void 0===n?fn:a.a.createElement("title",null,n),bn,dn)},En=a.a.forwardRef((function(e,t){return a.a.createElement(On,pn({svgRef:t},e))}));n.p;function vn(){return(vn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function gn(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var hn=a.a.createElement("g",null),yn=a.a.createElement("g",null),jn=a.a.createElement("g",null),Sn=a.a.createElement("g",null),wn=a.a.createElement("g",null),_n=a.a.createElement("g",null),In=a.a.createElement("g",null),Nn=a.a.createElement("g",null),Cn=a.a.createElement("g",null),xn=a.a.createElement("g",null),Tn=a.a.createElement("g",null),kn=a.a.createElement("g",null),Pn=a.a.createElement("g",null),Un=a.a.createElement("g",null),Rn=a.a.createElement("g",null),An=function(e){var t=e.svgRef,n=e.title,r=gn(e,["svgRef","title"]);return a.a.createElement("svg",vn({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},r),a.a.createElement("title",null,n),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),hn,yn,jn,Sn,wn,_n,In,Nn,Cn,xn,Tn,kn,Pn,Un,Rn)},Ln=a.a.forwardRef((function(e,t){return a.a.createElement(An,vn({svgRef:t},e))})),Gn=(n.p,n(87),Object(it.b)({itemCount:on})),Dn=Object(l.b)(Gn,(function(e){return{toggleCartHidden:function(){return e(Ae())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(Ln,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))})),Fn=(n(88),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,o=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:"item"}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},o," x $",r)))}),Mn=(n(89),Object(it.b)({cartItems:an})),Hn=Object(ct.g)(Object(l.b)(Mn)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return a.a.createElement(Fn,{key:e.id,item:e})})):a.a.createElement("span",{className:"empty-message"},"Your cart is empty.")),a.a.createElement(At,{onClick:function(){n.push("/checkout"),r(Ae())}},"GO TO CHECKOUT"))}))),qn=Object(it.a)([function(e){return e.user}],(function(e){return e.currentUser}));function zn(){var e=Object(mt.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return zn=function(){return e},e}function Vn(){var e=Object(mt.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return Vn=function(){return e},e}function Bn(){var e=Object(mt.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]);return Bn=function(){return e},e}function Wn(){var e=Object(mt.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]);return Wn=function(){return e},e}var Kn=ft.b.div(Wn()),Qn=Object(ft.b)(i.b)(Bn()),$n=ft.b.div(Vn()),Jn=Object(ft.b)(i.b)(zn()),Yn=Object(it.b)({currentUser:qn,hidden:cn}),Xn=Object(l.b)(Yn,(function(e){return{signOutStart:function(){return e({type:O.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement(Kn,null,a.a.createElement(Qn,{to:"/"},a.a.createElement(En,{className:"logo"})),a.a.createElement($n,null,a.a.createElement(Jn,{to:"/shop"},"SHOP"),a.a.createElement(Jn,{to:"/shop"},"CONTACT"),t?a.a.createElement(Jn,{as:"div",onClick:r},"SIGN OUT"):a.a.createElement(Jn,{to:"/signin"},"SIGN IN"),a.a.createElement(Dn,null)),n?null:a.a.createElement(Hn,null))})),Zn=(n(90),Object(it.b)({currentUser:qn})),er=Object(l.b)(Zn,(function(e){return{checkUserSession:function(){return e({type:O.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",null,a.a.createElement(Xn,null),a.a.createElement(ct.d,null,a.a.createElement(ct.b,{exact:!0,path:"/",component:Ot}),a.a.createElement(ct.b,{path:"/shop",component:Bt}),a.a.createElement(ct.b,{exact:!0,path:"/checkout",component:sn}),a.a.createElement(ct.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(ct.a,{to:"/"}):a.a.createElement(Xt,null)}})))}));o.a.render(a.a.createElement(l.a,{store:rt},a.a.createElement(i.a,null,a.a.createElement(u.a,{persistor:at},a.a.createElement(er,null)))),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.3a81c122.chunk.js.map