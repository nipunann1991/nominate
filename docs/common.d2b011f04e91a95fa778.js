(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5/fe":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("UYTu"),o=n("fXoL");let i=(()=>{class t{constructor(){}getJourneys(){return r.a`
    {
      journeys {
        id
        title
        articles {
          topics 
          templates {
            ... on TemplateFreeText {
              id
              title
              duration
            }
            ... on TemplateHorizontalTab {
              id
              title
              duration
            }
            ... on TemplateVideo {
              id
              duration
              title
            }
          }
        }
      }
    }`}getSingleJourney(t){return r.a`
    {
      journey(where: {id:  "${t.selectedID.toString()}" } ) {
        id
        title
        summary
        updatedAt
        appendix
        coverImage {
          url
        }
        articles {
          title
          type
          topics
          credits
          authorS{
            name
          }
          templates {
            ... on TemplateFreeText {
              id
              title
              duration
            }
            ... on TemplateHorizontalTab {
              id
              title
              duration
            }
            ... on TemplateVideo {
              id
              duration
              title
            }
          }
          
        }
      }
    }`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},B4M3:function(t,e,n){"use strict";n.r(e),n.d(e,"ViewJourneyModule",function(){return p});var r=n("ofXK"),o=n("tyNb"),i=n("fXoL"),a=n("/IUn"),c=n("5/fe"),u=n("QmGl");function l(t,e){if(1&t&&(i.Hb(0,"li",13),i.Hb(1,"strong"),i.cc(2),i.Gb(),i.Hb(3,"span",14),i.cc(4),i.Qb(5,"timeConverter"),i.Qb(6,"lowercase"),i.Gb(),i.Gb()),2&t){const t=e.$implicit;i.tb(2),i.dc(t.title),i.tb(2),i.fc("",i.Rb(5,3,t.duration)," ",i.Rb(6,5,t.type),"")}}const d=[{path:"",component:(()=>{class t{constructor(t,e,n,r){this.apollo=t,this.journey=e,this.router=n,this.activatedRoute=r,this.journeyData=[]}ngOnInit(){this.getSingleJourney()}getSingleJourney(){this.apollo.watchQuery({query:this.journey.getSingleJourney({selectedID:this.activatedRoute.snapshot.params.id})}).valueChanges.subscribe(t=>{console.log(t.data.journey),this.setJourneyData(t.data.journey)})}setJourneyData(t){var e;let n=[],r=[],o=[],i=[],a=[],c=[];t.articles.filter(t=>{n=n.concat(t.topics),c=c.concat(t.credits),o=[0],t.authorS.filter(t=>{a=a.concat(t.name)}),t.templates.filter(t=>{o=o.concat(t.duration),r=r.concat(t.duration)}),i.push(Object.assign({},t,{duration:o.reduce((t,e)=>e+(t||t))}))});let u=[...new Set(n)];this.journeyData={id:t.id,title:t.title,coverImage:null===(e=t.coverImage)||void 0===e?void 0:e.url,summary:t.summary,appendix:t.appendix,categories:u,totalDuration:r.reduce((t,e)=>e+(t||t),0),articles:i,credits:c.reduce((t,e)=>e+(t||t),0),authours:a}}getAuthers(t){return null==t?void 0:t.toString().replace(",",", ")}}return t.\u0275fac=function(e){return new(e||t)(i.Cb(a.b),i.Cb(c.a),i.Cb(o.b),i.Cb(o.a))},t.\u0275cmp=i.wb({type:t,selectors:[["app-view-journey"]],decls:42,vars:15,consts:[[1,"container-fluid","journey-page"],[1,"container"],[1,"journey-container","row"],[1,"journey-header","col-md-12"],["width","100%","alt","",3,"src"],[3,"innerHTML"],[1,"journey-appendix","row"],[1,"appendix","col-md-6"],[1,"whats-included","col-md-6"],[1,"journey-steps","col-md-12"],[1,"journey-desc"],[1,"journey-articles"],["class","articles",4,"ngFor","ngForOf"],[1,"articles"],[1,"duration"]],template:function(t,e){1&t&&(i.Hb(0,"div",0),i.Hb(1,"div",1),i.Hb(2,"div",2),i.Hb(3,"div",3),i.Db(4,"img",4),i.Hb(5,"h1"),i.cc(6),i.Gb(),i.Hb(7,"ul"),i.Hb(8,"li"),i.cc(9,"General"),i.Gb(),i.Hb(10,"li"),i.cc(11),i.Qb(12,"timeConverter"),i.Gb(),i.Hb(13,"li"),i.cc(14),i.Gb(),i.Gb(),i.Hb(15,"p"),i.cc(16),i.Gb(),i.Hb(17,"h2"),i.cc(18,"About this journey"),i.Gb(),i.Db(19,"p",5),i.Hb(20,"div",6),i.Hb(21,"div",7),i.Hb(22,"h3"),i.cc(23,"We\u2019ll cover"),i.Gb(),i.Db(24,"p",5),i.Gb(),i.Hb(25,"div",8),i.Hb(26,"h4"),i.cc(27,"What\u2019s included"),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Db(28,"hr"),i.Hb(29,"div",9),i.Hb(30,"h2"),i.cc(31,"Journey steps"),i.Gb(),i.Hb(32,"ul",10),i.Hb(33,"li"),i.cc(34),i.Gb(),i.Hb(35,"li"),i.cc(36),i.Qb(37,"timeConverter"),i.Gb(),i.Hb(38,"li"),i.cc(39),i.Gb(),i.Gb(),i.Hb(40,"ul",11),i.bc(41,l,7,7,"li",12),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Gb()),2&t&&(i.tb(4),i.Sb("src",e.journeyData.coverImage,i.Zb),i.tb(2),i.dc(e.journeyData.title),i.tb(5),i.dc(i.Rb(12,11,e.journeyData.totalDuration)),i.tb(3),i.ec("",e.journeyData.credits," CPD Credits"),i.tb(2),i.ec("Created by ",e.getAuthers(e.journeyData.authours),""),i.tb(3),i.Sb("innerHTML",e.journeyData.summary,i.Xb),i.tb(5),i.Sb("innerHTML",e.journeyData.appendix,i.Xb),i.tb(10),i.ec("",null==e.journeyData.articles?null:e.journeyData.articles.length," articles"),i.tb(2),i.dc(i.Rb(37,13,e.journeyData.totalDuration)),i.tb(3),i.ec("",e.journeyData.credits," CPD Credits"),i.tb(2),i.Sb("ngForOf",e.journeyData.articles))},directives:[r.j],pipes:[u.a,r.h],styles:[".journey-container[_ngcontent-%COMP%]{width:800px;margin:auto}.journey-container[_ngcontent-%COMP%]   ul.journey-articles[_ngcontent-%COMP%]{padding-left:0;border-top:1px solid #d5d5d5}.journey-container[_ngcontent-%COMP%]   ul.journey-articles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem;list-style:none;overflow:hidden;border-bottom:1px solid #d5d5d5}.journey-container[_ngcontent-%COMP%]   ul.journey-articles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.duration[_ngcontent-%COMP%]{float:right}"]}),t})()}];let s=(()=>{class t{}return t.\u0275mod=i.Ab({type:t}),t.\u0275inj=i.zb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(d)],o.e]}),t})();var b=n("Awto");let p=(()=>{class t{}return t.\u0275mod=i.Ab({type:t}),t.\u0275inj=i.zb({factory:function(e){return new(e||t)},imports:[[r.b,s,b.a]]}),t})()},P7dH:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("UYTu"),o=n("fXoL");let i=(()=>{class t{constructor(){}getArticles(t){return r.a`
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
    }`}getTopicsList(){return r.a`
    {
      topics {
        id 
        topics
      }
    }`}getSingleArticle(t){return r.a`
    {
      article(where: {id: "${t.selectedID.toString()}" }) {
        id
        title
        topics
        credits
        description
        coverImage {
          url
        }
        authorS {
          id
          name
          title
          profile_image {
            url
          }
        }
        templates {
          ... on TemplateFreeText {
            id
            duration
            title
            createdBy {
              picture
            }
            bodyContent {
              html
            }
          }
          ... on TemplateVideo {
            id
            duration
            title
            vimeoVideoUrl
            bodyContent {
              html
            }
          }
          ... on TemplateHorizontalTab {
            id
            title
            duration
            bodyContent {
              html
            }
            tabsContent {
              tabheadertitle
              content {
                html
              }
            }
          }
        }
      }
    }`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);