(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ry1Y:function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",function(){return x});var r=n("ofXK"),i=n("tyNb"),o=n("fXoL"),s=n("/IUn"),c=n("UYTu");let a=(()=>{class t{constructor(){}getRates(){return c.a`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }`}getUsers(){return c.a`
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
    }`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t{constructor(){}getArticles(t){return c.a`
    {
      articles(first: ${t.first.toString()}, orderBy: updatedAt_DESC, where: ${t.where.toString()}) {
        id
        publishedAt
        title 
        description
        topics
        type
        updatedAt 
        coverImage {
          id 
          url
        }
        authorS {
          name
          id
          createdAt 
        }
      }
    }`}getTopicsList(){return c.a`
    {
      topics {
        id 
        topics
      }
    }`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,e){if(1&t&&(o.Hb(0,"option",8),o.Xb(1),o.Gb()),2&t){const t=e.$implicit,n=o.Ob();o.Rb("value",t),o.tb(1),o.Yb(n.cleanTopicTitles(t))}}function u(t,e){if(1&t&&(o.Hb(0,"div",18),o.Db(1,"img",19),o.Gb()),2&t){const t=o.Ob().$implicit;o.tb(1),o.Rb("src",null==t.coverImage?null:t.coverImage.url,o.Ub)}}function p(t,e){if(1&t&&o.Db(0,"p",20),2&t){const t=o.Ob().$implicit;o.Rb("innerHTML",t.description,o.Tb)}}function d(t,e){if(1&t&&(o.Hb(0,"div",10),o.Hb(1,"div",11),o.Wb(2,u,2,1,"div",12),o.Hb(3,"div",13),o.Hb(4,"h3"),o.Xb(5),o.Gb(),o.Wb(6,p,1,1,"p",14),o.Gb(),o.Hb(7,"div",15),o.Hb(8,"div",16),o.Hb(9,"ul"),o.Hb(10,"li"),o.Xb(11),o.Gb(),o.Hb(12,"li"),o.Xb(13),o.Gb(),o.Gb(),o.Hb(14,"a",17),o.Xb(15,"Read Article"),o.Gb(),o.Gb(),o.Gb(),o.Gb(),o.Gb()),2&t){const t=e.$implicit,n=e.index;o.tb(2),o.Rb("ngIf",n<2),o.tb(3),o.Yb(t.title),o.tb(1),o.Rb("ngIf",n<1),o.tb(5),o.Yb(t.topics[0]),o.tb(2),o.Yb(null==t.authorS[0]?null:t.authorS[0].name)}}function g(t,e){if(1&t&&(o.Fb(0),o.Wb(1,d,16,5,"div",9),o.Eb()),2&t){const t=o.Ob();o.tb(1),o.Rb("ngForOf",t.articles)}}function h(t,e){1&t&&(o.Fb(0),o.Hb(1,"h4"),o.Xb(2,"No results found."),o.Gb(),o.Eb())}let f=(()=>{class t{constructor(t,e){this.apollo=t,this.article=e,this.articles=[],this.topics=[]}ngOnInit(){this.getArticles(),this.getTopicsList()}getArticles(t=!1,e=""){let n={};n=t?{first:10,where:"{topics_contains_all: "+e+" }"}:{first:10,where:"{}"},this.apollo.watchQuery({query:this.article.getArticles(n)}).valueChanges.subscribe(t=>{this.articles=t.data.articles})}getTopicsList(){this.apollo.watchQuery({query:this.article.getTopicsList()}).valueChanges.subscribe(t=>{this.topics=t.data.topics[0].topics})}cleanTopicTitles(t){return t.replace("_"," ")}onChangeTopics(t){""!=t?this.getArticles(!0,t):this.getArticles()}}return t.\u0275fac=function(e){return new(e||t)(o.Cb(s.b),o.Cb(b))},t.\u0275cmp=o.wb({type:t,selectors:[["app-articles"]],decls:14,vars:3,consts:[[1,"articles-header"],[1,"left-title"],[1,"sort-list"],["name","topic",1,"topic",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","articles-wrapper"],[4,"ngIf"],[3,"value"],["class","article-box",4,"ngFor","ngForOf"],[1,"article-box"],[1,"article-box-inner"],["class","image-area",4,"ngIf"],[1,"title-n-description-area"],[3,"innerHTML",4,"ngIf"],[1,"footer-area"],[1,"topics"],["href",""],[1,"image-area"],["alt","",3,"src"],[3,"innerHTML"]],template:function(t,e){1&t&&(o.Hb(0,"div",0),o.Hb(1,"div",1),o.Hb(2,"h2"),o.Xb(3,"Latest articles"),o.Gb(),o.Hb(4,"p"),o.Xb(5,"The latest hints and tips carefully handpicked to grow your business."),o.Gb(),o.Gb(),o.Hb(6,"div",2),o.Hb(7,"select",3),o.Mb("change",function(t){return e.onChangeTopics(t.target.value)}),o.Hb(8,"option",4),o.Xb(9,"Browse All Topics"),o.Gb(),o.Wb(10,l,2,2,"option",5),o.Gb(),o.Gb(),o.Gb(),o.Hb(11,"div",6),o.Wb(12,g,2,1,"ng-container",7),o.Wb(13,h,3,0,"ng-container",7),o.Gb()),2&t&&(o.tb(10),o.Rb("ngForOf",e.topics),o.tb(2),o.Rb("ngIf",e.articles.length>0),o.tb(1),o.Rb("ngIf",0==e.articles.length))},directives:[r.h,r.i],styles:[".articles-header[_ngcontent-%COMP%]{display:flex}.articles-header[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]{margin-left:auto}.articles-header[_ngcontent-%COMP%]   .sort-list[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.1rem .5rem}.article-box[_ngcontent-%COMP%]{width:33.33%}.article-box[_ngcontent-%COMP%]   .article-box-inner[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]}),t})();var y=n("5/fe"),m=n("QmGl");function v(t,e){if(1&t&&(o.Hb(0,"li"),o.Xb(1),o.Gb()),2&t){const t=e.$implicit;o.tb(1),o.Yb(t)}}function w(t,e){if(1&t&&(o.Hb(0,"div",2),o.Hb(1,"div",3),o.Hb(2,"h3"),o.Xb(3),o.Gb(),o.Hb(4,"ul"),o.Wb(5,v,2,1,"li",4),o.Gb(),o.Hb(6,"span",5),o.Xb(7),o.Pb(8,"timeConverter"),o.Gb(),o.Gb(),o.Gb()),2&t){const t=e.$implicit;o.Rb("routerLink",t.url),o.tb(3),o.Yb(t.title),o.tb(2),o.Rb("ngForOf",t.categories),o.tb(2),o.Yb(o.Qb(8,4,t.totalDuration))}}let H=(()=>{class t{constructor(t,e){this.apollo=t,this.journey=e,this.journies=[]}ngOnInit(){this.getJourneys()}getJourneys(){this.apollo.watchQuery({query:this.journey.getJourneys()}).valueChanges.subscribe(t=>{this.setJourneyData(t.data.journeys)})}setJourneyData(t){let e=[],n=[];t.forEach(t=>{t.articles.filter(t=>{e=e.concat(t.topics),t.templates.filter(t=>{n=n.concat(t.duration)})});let r=[...new Set(e)],i={id:t.id,title:t.title,categories:r,totalDuration:n.reduce((t,e)=>e+(t||t)),url:"/journeys/view-journey/"+t.id};this.journies.push(i)})}}return t.\u0275fac=function(e){return new(e||t)(o.Cb(s.b),o.Cb(y.a))},t.\u0275cmp=o.wb({type:t,selectors:[["app-journeys"]],decls:7,vars:1,consts:[[1,"row","journey-wrapper"],["class","journey-box col col-lg-3",3,"routerLink",4,"ngFor","ngForOf"],[1,"journey-box","col","col-lg-3",3,"routerLink"],[1,"journey-box-inner"],[4,"ngFor","ngForOf"],[1,"duration"]],template:function(t,e){1&t&&(o.Hb(0,"h2"),o.Xb(1,"Featured journeys"),o.Gb(),o.Hb(2,"p"),o.Xb(3,"Explore in-depth topics and guided paths, or learn how to tackle specific tasks. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At."),o.Gb(),o.Hb(4,"div",0),o.Fb(5),o.Wb(6,w,9,6,"div",1),o.Eb(),o.Gb()),2&t&&(o.tb(6),o.Rb("ngForOf",e.journies))},directives:[r.h,i.c],pipes:[m.a],styles:[".journey-box[_ngcontent-%COMP%]{cursor:pointer}.journey-box[_ngcontent-%COMP%]   .journey-box-inner[_ngcontent-%COMP%]{border:1px solid;padding:1.5rem}"]}),t})();const G=[{path:"",component:(()=>{class t{constructor(t,e){this.apollo=t,this.home=e,this.loading=!0}ngOnInit(){this.apollo.watchQuery({query:this.home.getUsers()}).valueChanges.subscribe(t=>{})}}return t.\u0275fac=function(e){return new(e||t)(o.Cb(s.b),o.Cb(a))},t.\u0275cmp=o.wb({type:t,selectors:[["app-home-page"]],decls:8,vars:0,consts:[[1,"container-fluid"],[1,"container"]],template:function(t,e){1&t&&(o.Hb(0,"div",0),o.Hb(1,"div",1),o.Hb(2,"h1"),o.Xb(3,"Home Page"),o.Gb(),o.Db(4,"hr"),o.Db(5,"app-articles"),o.Db(6,"hr"),o.Db(7,"app-journeys"),o.Gb(),o.Gb())},directives:[f,H],styles:[""]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(G)],i.d]}),t})();const O=[{path:"",component:f}];let j=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(O)],i.d]}),t})(),A=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(e){return new(e||t)},imports:[[r.b,j]]}),t})();const M=[{path:"",component:H}];let _=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(M)],i.d]}),t})();var P=n("Awto");let T=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(e){return new(e||t)},imports:[[r.b,_,P.a]]}),t})();var X=n("B4M3");let x=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(e){return new(e||t)},imports:[[r.b,C,A,T,X.ViewJourneyModule]]}),t})()}}]);