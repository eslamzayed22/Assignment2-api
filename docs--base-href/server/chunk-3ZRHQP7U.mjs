import './polyfills.server.mjs';
import{A as w,B as F,C as H,D as L,G as M,K as T,N as j,O as A,P as D,a as u,b as h,c as m,d as g,e as p,f as x,g as b,h as C,i as y,j as S,k as r,l as n,m as c,n as a,o as k,p as d,q as s,x as E,z as I}from"./chunk-XEYWTY7O.mjs";var R=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-navbar"]],standalone:!0,features:[s],decls:17,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-dark","navbar-dark","fixed-top"],[1,"container"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","mx-auto"],[1,"nav-item"],["routerLink","home","routerLinkActive","fw-bold text-white",1,"nav-link"],["href","#",1,"nav-link"]],template:function(o,f){o&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"CLothing store"),n(),r(4,"button",3),c(5,"span",4),n(),r(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),a(10,"home"),n()(),r(11,"li",7)(12,"a",9),a(13,"product"),n()(),r(14,"li",7)(15,"a",9),a(16,"contact"),n()()()()()())},dependencies:[j,A]});let e=t;return e})();var N=(()=>{let t=class t{constructor(i){this._HttpClient=i}getCLothes(){return this._HttpClient.get("https://fakestoreapi.com/products")}};t.\u0275fac=function(o){return new(o||t)(h(I))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function q(e,t){if(e&1&&(r(0,"div",2)(1,"div",3),c(2,"img",4),r(3,"div",5)(4,"h5",6),a(5),n(),r(6,"p",7),a(7),n()(),r(8,"ul",8)(9,"li",9),a(10),n(),r(11,"li",9),a(12),n(),r(13,"li",9),a(14),n()()()()),e&2){let l=t.$implicit;p(2),b("src",l.image,g),p(3),d("",l.title.split(" ",3).join(" "),"...."),p(2),k(l.description.split(" ",7).join(" ")),p(3),d("Price : ",l.price,""),p(2),d("Category : ",l.category,""),p(2),d("Rate : ",l.rating.rate," ")}}var O=(()=>{let t=class t{constructor(i){this._ClothesService=i,this.clothes=[]}ngOnInit(){this._ClothesService.getCLothes().subscribe({next:i=>{this.clothes=i},error:i=>{console.log(i)}})}};t.\u0275fac=function(o){return new(o||t)(x(N))},t.\u0275cmp=m({type:t,selectors:[["app-home"]],standalone:!0,features:[s],decls:4,vars:0,consts:[[1,"container"],[1,"row","my-5","g-4"],[1,"col-md-3"],[1,"card",2,"width","18rem","height","600px"],["alt","...",1,"card-img-top","h-50",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"]],template:function(o,f){o&1&&(r(0,"div",0)(1,"div",1),y(2,q,15,6,"div",2,C),n()()),o&2&&(p(2),S(f.clothes))}});let e=t;return e})();var z=(()=>{let t=class t{constructor(){this.title="Assignment-api"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:2,vars:0,template:function(o,f){o&1&&c(0,"app-navbar")(1,"router-outlet")},dependencies:[T,R]});let e=t;return e})();var B=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:O,title:"home"}];var P={providers:[D(B),L(),w(F())]};var G={providers:[M()]},U=E(P,G);var J=()=>H(z,U),ut=J;export{ut as a};
