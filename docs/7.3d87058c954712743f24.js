(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ry1Y:function(t,n,e){"use strict";e.r(n),e.d(n,"HomePageModule",function(){return W});var o=e("ofXK"),i=e("tyNb"),r=e("fXoL"),c=e("/IUn"),a=e("UYTu");let b=(()=>{class t{constructor(){}getRates(){return a.a`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }`}getUsers(){return a.a`
    {
      users {
        id
        isActive
        kind
        name
        picture
        publishedAt
        stage
      }
    }`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=r.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=e("XRsc"),s=e("P7dH");let g=(()=>{class t{transform(t){return t.replace("_"," ")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=r.Bb({name:"beautifyText",type:t,pure:!0}),t})(),d=(()=>{class t{transform(t,n){const e=n.length>0?parseInt(n[0],10):20,o=n.length>1?n[1]:"...";return t.length>e?t.substring(0,e)+o:t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=r.Bb({name:"truncateText",type:t,pure:!0}),t})();function u(t,n){if(1&t&&(r.Hb(0,"option",11),r.ec(1),r.Qb(2,"beautifyText"),r.Gb()),2&t){const t=n.$implicit;r.Tb("value",t),r.tb(1),r.fc(r.Rb(2,2,t))}}function p(t,n){if(1&t&&(r.Hb(0,"div",24),r.Db(1,"img",25),r.Gb()),2&t){const t=r.Pb().$implicit;r.tb(1),r.Tb("src",null==t.coverImage?null:t.coverImage.url,r.bc)}}const f=function(){return[226]};function C(t,n){if(1&t&&(r.Db(0,"p",26),r.Qb(1,"truncateText")),2&t){const t=r.Pb().$implicit;r.Tb("innerHTML",r.Sb(1,1,t.description,r.Vb(4,f)),r.Zb)}}const O=function(t){return[t]};function P(t,n){if(1&t&&(r.Hb(0,"a",27),r.ec(1,"Read article"),r.Gb()),2&t){const t=r.Pb().$implicit;r.Tb("routerLink",r.Wb(1,O,"/articles/view-article/"+t.id))}}function h(t,n){if(1&t&&(r.Fb(0),r.Hb(1,"div",16),r.Hb(2,"div",17),r.dc(3,p,2,1,"div",18),r.Hb(4,"div",19),r.Hb(5,"h2"),r.ec(6),r.Gb(),r.dc(7,C,2,5,"p",20),r.Gb(),r.Hb(8,"div",21),r.Hb(9,"div",22),r.Hb(10,"ul"),r.Hb(11,"li"),r.ec(12),r.Qb(13,"beautifyText"),r.Gb(),r.Hb(14,"li"),r.ec(15),r.Gb(),r.Gb(),r.dc(16,P,2,3,"a",23),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Eb()),2&t){const t=n.$implicit,e=n.index;r.tb(3),r.Tb("ngIf",e<2),r.tb(3),r.fc(t.title),r.tb(1),r.Tb("ngIf",e<1),r.tb(5),r.fc(r.Rb(13,6,t.topics[0])),r.tb(3),r.fc(null==t.authorS[0]?null:t.authorS[0].name),r.tb(1),r.Tb("ngIf",0==e)}}function M(t,n){if(1&t&&(r.Hb(0,"div",14),r.dc(1,h,17,8,"ng-container",15),r.Gb()),2&t){const t=r.Pb(2);r.tb(1),r.Tb("ngForOf",t.articles.left)}}function _(t,n){if(1&t&&(r.Hb(0,"div",24),r.Db(1,"img",25),r.Gb()),2&t){const t=r.Pb(2).$implicit;r.tb(1),r.Tb("src",null==t.coverImage?null:t.coverImage.url,r.bc)}}function m(t,n){if(1&t&&r.Db(0,"p",26),2&t){const t=r.Pb(2).$implicit;r.Tb("innerHTML",t.description,r.Zb)}}function x(t,n){if(1&t&&(r.Fb(0),r.Hb(1,"div",16),r.Hb(2,"div",17),r.Hb(3,"div",19),r.Hb(4,"div",31),r.Hb(5,"div",22),r.Hb(6,"ul"),r.Hb(7,"li"),r.ec(8),r.Qb(9,"beautifyText"),r.Gb(),r.Hb(10,"li"),r.ec(11),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.dc(12,_,2,1,"div",18),r.Hb(13,"div",19),r.Hb(14,"h3"),r.ec(15),r.Gb(),r.dc(16,m,1,1,"p",20),r.Gb(),r.Hb(17,"div",21),r.Hb(18,"div",32),r.Hb(19,"a",33),r.ec(20,"Read article"),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Eb()),2&t){const t=r.Pb(),n=t.$implicit,e=t.index;r.tb(8),r.fc(r.Rb(9,6,n.topics[0])),r.tb(3),r.fc(null==n.authorS[0]?null:n.authorS[0].name),r.tb(1),r.Tb("ngIf",e<1),r.tb(3),r.fc(n.title),r.tb(1),r.Tb("ngIf",e<0),r.tb(3),r.Tb("routerLink",r.Wb(8,O,"/articles/view-article/"+n.id))}}function y(t,n){if(1&t&&(r.Fb(0),r.dc(1,x,21,10,"ng-container",10),r.Eb()),2&t){const t=n.index;r.tb(1),r.Tb("ngIf",t<2)}}function v(t,n){if(1&t&&(r.Fb(0),r.Hb(1,"div",16),r.Hb(2,"div",17),r.Hb(3,"div",19),r.Hb(4,"div",31),r.Hb(5,"div",22),r.Hb(6,"ul"),r.Hb(7,"li"),r.ec(8),r.Qb(9,"beautifyText"),r.Gb(),r.Hb(10,"li"),r.ec(11),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Hb(12,"div",19),r.Hb(13,"h3"),r.ec(14),r.Gb(),r.Gb(),r.Hb(15,"div",21),r.Hb(16,"div",32),r.Hb(17,"a",33),r.ec(18,"Read article"),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Eb()),2&t){const t=r.Pb().$implicit;r.tb(8),r.fc(r.Rb(9,4,t.topics[0])),r.tb(3),r.fc(null==t.authorS[0]?null:t.authorS[0].name),r.tb(3),r.fc(t.title),r.tb(3),r.Tb("routerLink",r.Wb(6,O,"/articles/view-article/"+t.id))}}function H(t,n){if(1&t&&(r.Fb(0),r.dc(1,v,19,8,"ng-container",10),r.Eb()),2&t){const t=n.index;r.tb(1),r.Tb("ngIf",t>1)}}function G(t,n){if(1&t&&(r.Hb(0,"div",28),r.Hb(1,"div",29),r.dc(2,y,2,1,"ng-container",15),r.Gb(),r.Hb(3,"div",30),r.dc(4,H,2,1,"ng-container",15),r.Gb(),r.Gb()),2&t){const t=r.Pb(2);r.tb(2),r.Tb("ngForOf",t.articles.right),r.tb(2),r.Tb("ngForOf",t.articles.right)}}function w(t,n){if(1&t&&(r.Fb(0),r.dc(1,M,2,1,"div",12),r.dc(2,G,5,2,"div",13),r.Eb()),2&t){const t=r.Pb();r.tb(1),r.Tb("ngIf",t.articles.left.length>0),r.tb(1),r.Tb("ngIf",t.articles.right.length>0)}}function T(t,n){1&t&&(r.Fb(0),r.Hb(1,"h4"),r.ec(2,"No results found."),r.Gb(),r.Eb())}let j=(()=>{class t{constructor(t,n){this.apollo=t,this.article=n,this.articles=[],this.topics=[]}ngOnInit(){window.scroll(0,0),this.getArticles(),this.getTopicsList()}getArticles(t=!1,n=""){let e={};e=t?{first:10,where:"{topics_contains_all: "+n+" }"}:{first:10,where:"{}"},this.apollo.watchQuery({query:this.article.getArticles(e)}).valueChanges.subscribe(t=>{this.articles=t.data.articles;let n={left:[],right:[],length:0};t.data.articles.filter((t,e)=>0==e?n.left.push(t):n.right.push(t)),n.length=t.data.articles.length,this.articles=n})}getTopicsList(){this.apollo.watchQuery({query:this.article.getTopicsList()}).valueChanges.subscribe(t=>{this.topics=t.data.topics[0].topics})}cleanTopicTitles(t){return t.replace("_"," ")}onChangeTopics(t){""!=t?this.getArticles(!0,t):this.getArticles()}}return t.\u0275fac=function(n){return new(n||t)(r.Cb(c.b),r.Cb(s.a))},t.\u0275cmp=r.wb({type:t,selectors:[["app-articles"]],decls:17,vars:3,consts:[[1,"row","articles-header","header-title"],[1,"col-lg-10"],[1,"left-title","header"],[1,"header-body"],[1,"col-lg-2"],[1,"sort-list"],["name","topic",1,"topic",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","articles-wrapper"],[4,"ngIf"],[3,"value"],["class","col-lg-5 main-article",4,"ngIf"],["class","col-lg-7 other-articles",4,"ngIf"],[1,"col-lg-5","main-article"],[4,"ngFor","ngForOf"],[1,"article-box"],[1,"article-box-inner"],["class","image-area",4,"ngIf"],[1,"title-n-description-area"],[3,"innerHTML",4,"ngIf"],[1,"footer-area"],[1,"topics"],["class","read-article-button v",3,"routerLink",4,"ngIf"],[1,"image-area"],["alt","",3,"src"],[3,"innerHTML"],[1,"read-article-button","v",3,"routerLink"],[1,"col-lg-7","other-articles"],[1,"latest-posts"],[1,"old-posts"],[1,"header-area"],[1,"sub-read-article-link"],[1,"read-article-link","button",3,"routerLink"]],template:function(t,n){1&t&&(r.Hb(0,"section"),r.Hb(1,"div",0),r.Hb(2,"div",1),r.Hb(3,"div",2),r.Hb(4,"h2"),r.ec(5,"Latest articles"),r.Gb(),r.Hb(6,"p",3),r.ec(7,"The latest hints and tips carefully handpicked to grow your business."),r.Gb(),r.Gb(),r.Gb(),r.Hb(8,"div",4),r.Hb(9,"div",5),r.Hb(10,"select",6),r.Nb("change",function(t){return n.onChangeTopics(t.target.value)}),r.Hb(11,"option",7),r.ec(12,"Browse All Topics"),r.Gb(),r.dc(13,u,3,4,"option",8),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Hb(14,"div",9),r.dc(15,w,3,2,"ng-container",10),r.dc(16,T,3,0,"ng-container",10),r.Gb(),r.Gb()),2&t&&(r.tb(13),r.Tb("ngForOf",n.topics),r.tb(2),r.Tb("ngIf",n.articles.length>0),r.tb(1),r.Tb("ngIf",0==n.articles.length))},directives:[o.j,o.k,i.d],pipes:[g,d],styles:[".articles-header[_ngcontent-%COMP%]{align-items:flex-end}.articles-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.articles-header[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]{margin-left:auto}.articles-header[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.7rem 1rem;text-align:center;text-decoration:none;border-radius:3px}.main-article[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]{border:1px solid #000;padding:2.5rem 2rem;box-shadow:10px 10px 22px 3px rgba(0,0,0,.1)}.main-article[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .title-n-description-area[_ngcontent-%COMP%]{padding:0}.other-articles[_ngcontent-%COMP%]{display:flex}.other-articles[_ngcontent-%COMP%]   .latest-posts[_ngcontent-%COMP%], .other-articles[_ngcontent-%COMP%]   .old-posts[_ngcontent-%COMP%]{width:calc(50% - 1.5rem)}.other-articles[_ngcontent-%COMP%]   .old-posts[_ngcontent-%COMP%]{margin-left:auto}.other-articles[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]{padding:1rem 0 2rem;width:100%}.other-articles[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .title-n-description-area[_ngcontent-%COMP%]{margin:0 0 .7rem}.other-articles[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .title-n-description-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1.5rem 0;padding:0}.other-articles[_ngcontent-%COMP%]   .article-box[_ngcontent-%COMP%]:first-child   .article-box-inner[_ngcontent-%COMP%]   .title-n-description-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1.5rem 0;padding:0;font-size:1.3rem;line-height:1.3}.article-box[_ngcontent-%COMP%]{padding:2rem 0;border-top:1px solid #000;border-bottom:1px solid #000;margin:0 0 2rem 1rem}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .title-n-description-area[_ngcontent-%COMP%]{padding:0 1rem}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .title-n-description-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1.5rem 0;padding:0 0 1.5rem;border-bottom:1px solid #000}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .title-n-description-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .footer-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%], .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .header-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .footer-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .header-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;padding:0;margin:0}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .footer-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .header-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 2.5rem 0 0;position:relative;display:flex;align-items:center;justify-content:flex-end;line-height:1;color:#3c3c3b}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .footer-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%]   a.read-article-button[_ngcontent-%COMP%], .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .header-area[_ngcontent-%COMP%]   .topics[_ngcontent-%COMP%]   a.read-article-button[_ngcontent-%COMP%]{max-width:150px;line-height:1;background-color:#5757f7;color:#fff;text-align:center;padding:1rem;text-decoration:none;border-radius:3px}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .footer-area[_ngcontent-%COMP%]   .sub-read-article-link[_ngcontent-%COMP%], .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .header-area[_ngcontent-%COMP%]   .sub-read-article-link[_ngcontent-%COMP%]{padding:0 1rem}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .footer-area[_ngcontent-%COMP%]   .sub-read-article-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .header-area[_ngcontent-%COMP%]   .sub-read-article-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#170a7a;font-weight:700;text-decoration:underline}"]}),t})();var k=e("5/fe"),I=e("QmGl");function F(t,n){if(1&t&&(r.Fb(0),r.ec(1),r.Qb(2,"beautifyText"),r.Eb()),2&t){const t=r.Pb().$implicit;r.tb(1),r.fc(r.Rb(2,1,t))}}function D(t,n){if(1&t&&(r.Hb(0,"li"),r.dc(1,F,3,3,"ng-container",13),r.ec(2," \xa0\xa0 "),r.Gb()),2&t){const t=n.index;r.tb(1),r.Tb("ngIf",t<2)}}function L(t,n){if(1&t&&(r.Hb(0,"div",5),r.Hb(1,"div",6),r.Hb(2,"h3"),r.ec(3),r.Gb(),r.Hb(4,"div",7),r.Hb(5,"ul"),r.dc(6,D,3,1,"li",8),r.Gb(),r.Gb(),r.Hb(7,"span",9),r.ec(8),r.Qb(9,"timeConverter"),r.Gb(),r.Hb(10,"div",10),r.Db(11,"span",11),r.Db(12,"span",11),r.Db(13,"span",11),r.Db(14,"span",12),r.Db(15,"span",12),r.Gb(),r.Gb(),r.Gb()),2&t){const t=n.$implicit;r.Tb("routerLink",t.url),r.tb(3),r.fc(t.title),r.tb(3),r.Tb("ngForOf",t.categories),r.tb(2),r.fc(r.Rb(9,4,t.totalDuration))}}let A=(()=>{class t{constructor(t,n){this.apollo=t,this.journey=n,this.journies=[]}ngOnInit(){window.scroll(0,0),this.getJourneys()}getJourneys(){this.apollo.watchQuery({query:this.journey.getJourneys()}).valueChanges.subscribe(t=>{this.setJourneyData(t.data.journeys)})}setJourneyData(t){t.forEach(t=>{let n=[],e=[];t.articles.filter(t=>{n=n.concat(t.topics),t.templates.filter(t=>{e=e.concat(t.duration)})});let o=[...new Set(n)],i={id:t.id,title:t.title,categories:o,totalDuration:e.reduce((t,n)=>n+(t||t),0),url:"/journeys/view-journey/"+t.id};this.journies.push(i)})}}return t.\u0275fac=function(n){return new(n||t)(r.Cb(c.b),r.Cb(k.a))},t.\u0275cmp=r.wb({type:t,selectors:[["app-journeys"]],decls:10,vars:1,consts:[["rel","stylesheet","href",r.ic("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")],[1,"header-title"],[1,"p-0","m-0"],[1,"row","journey-wrapper"],["class","journey-box col col-lg-3",3,"routerLink",4,"ngFor","ngForOf"],[1,"journey-box","col","col-lg-3",3,"routerLink"],[1,"journey-box-inner"],[1,"journey-topics"],[4,"ngFor","ngForOf"],[1,"duration"],[1,"rating"],[1,"fa","fa-star","checked"],[1,"fa","fa-star"],[4,"ngIf"]],template:function(t,n){1&t&&(r.Db(0,"link",0),r.Hb(1,"section"),r.Hb(2,"div",1),r.Hb(3,"h2"),r.ec(4,"Featured journeys"),r.Gb(),r.Hb(5,"p",2),r.ec(6,"Explore in-depth topics and guided paths, or learn how to tackle specific tasks."),r.Gb(),r.Gb(),r.Hb(7,"div",3),r.Fb(8),r.dc(9,L,16,6,"div",4),r.Eb(),r.Gb(),r.Gb()),2&t&&(r.tb(9),r.Tb("ngForOf",n.journies))},directives:[o.j,i.c,o.k],pipes:[I.a,g],styles:[".journey-box[_ngcontent-%COMP%]{cursor:pointer}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]{border:1px solid #171714;padding:2rem 1.5rem;margin-bottom:2rem;min-height:18rem}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]   .logo-cta[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]   .logo-cta[_ngcontent-%COMP%]   img.logo-icon[_ngcontent-%COMP%]{width:90px;height:57px}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]   .logo-cta[_ngcontent-%COMP%]   a.new-button[_ngcontent-%COMP%]{min-width:1.5rem;padding:.4rem .7rem}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]{color:#666;margin:1rem 0 0;display:block}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{margin:4rem 0 0}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]{color:orange}"]}),t})();const Q=[{path:"",component:(()=>{class t{constructor(t,n){this.apollo=t,this.home=n,this.loading=!0}ngOnInit(){this.apollo.watchQuery({query:this.home.getUsers()}).valueChanges.subscribe(t=>{})}}return t.\u0275fac=function(n){return new(n||t)(r.Cb(c.b),r.Cb(b))},t.\u0275cmp=r.wb({type:t,selectors:[["app-home-page"]],decls:5,vars:0,consts:[[1,"container-fluid"],[1,"container"]],template:function(t,n){1&t&&(r.Db(0,"app-banner"),r.Hb(1,"div",0),r.Hb(2,"div",1),r.Db(3,"app-articles"),r.Db(4,"app-journeys"),r.Gb(),r.Gb())},directives:[l.a,j,A],styles:[""]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=r.Ab({type:t}),t.\u0275inj=r.zb({factory:function(n){return new(n||t)},imports:[[i.e.forChild(Q)],i.e]}),t})();const R=[{path:"",component:j}];let $=(()=>{class t{}return t.\u0275mod=r.Ab({type:t}),t.\u0275inj=r.zb({factory:function(n){return new(n||t)},imports:[[i.e.forChild(R)],i.e]}),t})();var S=e("Awto");let z=(()=>{class t{}return t.\u0275mod=r.Ab({type:t}),t.\u0275inj=r.zb({factory:function(n){return new(n||t)},imports:[[o.b,$,S.a]]}),t})();const J=[{path:"",component:A}];let U=(()=>{class t{}return t.\u0275mod=r.Ab({type:t}),t.\u0275inj=r.zb({factory:function(n){return new(n||t)},imports:[[i.e.forChild(J)],i.e]}),t})(),B=(()=>{class t{}return t.\u0275mod=r.Ab({type:t}),t.\u0275inj=r.zb({factory:function(n){return new(n||t)},imports:[[o.b,U,S.a]]}),t})();var q=e("B4M3"),N=e("zU0H");let W=(()=>{class t{}return t.\u0275mod=r.Ab({type:t}),t.\u0275inj=r.zb({factory:function(n){return new(n||t)},imports:[[o.b,E,z,B,q.ViewJourneyModule,N.BannerModule]]}),t})()}}]);