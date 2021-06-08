(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5/fe":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("UYTu"),r=n("fXoL");let i=(()=>{class t{constructor(){}getJourneys(){return o.a`
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
            ... on TemplateKnowledgeCheck {
              id
              title
              duration
            }
            ... on TemplateSummary {
              id
              title
              duration
            }
          }
        }
      }
    }`}getSingleJourney(t){return o.a`
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
          id
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
            ... on TemplateKnowledgeCheck {
              id
              title
              duration
            }

            ... on TemplateSummary {
              id
              title
              duration
            }
          } 
        }
      }
    }`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},B4M3:function(t,e,n){"use strict";n.r(e),n.d(e,"ViewJourneyModule",function(){return g});var o=n("ofXK"),r=n("tyNb"),i=n("fXoL"),c=n("/IUn"),a=n("5/fe"),l=n("QmGl");const s=function(t){return[t]};function b(t,e){if(1&t&&(i.Hb(0,"li",23),i.Hb(1,"strong"),i.ec(2),i.Gb(),i.Hb(3,"span",24),i.ec(4),i.Qb(5,"timeConverter"),i.Qb(6,"lowercase"),i.Gb(),i.Gb()),2&t){const t=e.$implicit,n=e.index;i.Tb("routerLink",i.Wb(9,s,"/articles/view-article/"+t.id)),i.tb(2),i.hc("",n+1,". ",t.title,""),i.tb(2),i.hc("",i.Rb(5,5,t.duration)," ",i.Rb(6,7,t.type),"")}}const d=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.apollo=t,this.journey=e,this.router=n,this.activatedRoute=o,this.journeyData=[]}ngOnInit(){window.scroll(0,0),this.getSingleJourney()}getSingleJourney(){this.apollo.watchQuery({query:this.journey.getSingleJourney({selectedID:this.activatedRoute.snapshot.params.id})}).valueChanges.subscribe(t=>{console.log(t.data.journey),this.setJourneyData(t.data.journey)})}setJourneyData(t){var e;let n=[],o=[],r=[],i=[],c=[],a=[];t.articles.filter(t=>{n=n.concat(t.topics),a=a.concat(t.credits),r=[0],t.authorS.filter(t=>{c=c.concat(t.name)}),t.templates.filter(t=>{r=r.concat(t.duration),o=o.concat(t.duration)}),i.push(Object.assign({},t,{duration:r.reduce((t,e)=>e+(t||t))}))});let l=[...new Set(n)];this.journeyData={id:t.id,title:t.title,coverImage:null===(e=t.coverImage)||void 0===e?void 0:e.url,summary:t.summary,appendix:t.appendix,categories:l,totalDuration:o.reduce((t,e)=>e+(t||t),0),articles:i,credits:a.reduce((t,e)=>e+(t||t),0),authours:c}}getAuthers(t){return null==t?void 0:t.toString().replace(",",", ")}}return t.\u0275fac=function(e){return new(e||t)(i.Cb(c.b),i.Cb(a.a),i.Cb(r.b),i.Cb(r.a))},t.\u0275cmp=i.wb({type:t,selectors:[["app-view-journey"]],decls:70,vars:18,consts:[["rel","stylesheet","href",i.ic("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-10"],[1,"cover-img"],["alt","",3,"src"],[1,"col-lg-7"],[1,"d-flex","dotlist","align-items-center"],[1,"fa","fa-circle"],[1,"created-by"],[1,"col-lg-2","d-flex","justify-content-end"],[1,"btn-primary","lg",3,"routerLink"],[1,"sm"],[1,"col-lg-9"],[1,"lg"],[3,"innerHTML"],[1,"col-lg-5"],[1,"col-lg-4","d-flex","justify-content-end"],[1,"topic-list-holder"],[1,"section-journey-steps"],[1,"col-lg-9","border-on"],[1,"row","justify-content-center","journey-article-list"],["class","d-flex justify-content-between",3,"routerLink",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between",3,"routerLink"],[1,"duration"]],template:function(t,e){1&t&&(i.Db(0,"link",0),i.Hb(1,"section",1),i.Hb(2,"div",2),i.Hb(3,"div",3),i.Hb(4,"div",4),i.Db(5,"img",5),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Hb(6,"section"),i.Hb(7,"div",1),i.Hb(8,"div",2),i.Hb(9,"div",6),i.Hb(10,"h2"),i.ec(11),i.Gb(),i.Hb(12,"ul",7),i.Hb(13,"li"),i.ec(14,"General"),i.Gb(),i.Hb(15,"li"),i.Db(16,"i",8),i.Gb(),i.Hb(17,"li"),i.ec(18),i.Qb(19,"timeConverter"),i.Gb(),i.Hb(20,"li"),i.Db(21,"i",8),i.Gb(),i.Hb(22,"li"),i.ec(23),i.Gb(),i.Gb(),i.Hb(24,"label",9),i.ec(25),i.Gb(),i.Gb(),i.Hb(26,"div",10),i.Hb(27,"div"),i.Hb(28,"button",11),i.ec(29,"Start journey"),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Hb(30,"section",12),i.Hb(31,"div",1),i.Hb(32,"div",2),i.Hb(33,"div",13),i.Hb(34,"h3",14),i.ec(35,"About this journey"),i.Gb(),i.Db(36,"p",15),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Hb(37,"section"),i.Hb(38,"div",1),i.Hb(39,"div",2),i.Hb(40,"div",16),i.Hb(41,"h4"),i.ec(42,"We\u2019ll cover"),i.Gb(),i.Db(43,"p",15),i.Gb(),i.Hb(44,"div",17),i.Hb(45,"div",18),i.Hb(46,"h5"),i.ec(47,"What\u2019s included"),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Hb(48,"section",19),i.Hb(49,"div",1),i.Hb(50,"div",2),i.Hb(51,"div",20),i.Hb(52,"h3"),i.ec(53,"Journey steps"),i.Gb(),i.Hb(54,"ul",7),i.Hb(55,"li"),i.ec(56),i.Gb(),i.Hb(57,"li"),i.Db(58,"i",8),i.Gb(),i.Hb(59,"li"),i.ec(60),i.Qb(61,"timeConverter"),i.Gb(),i.Hb(62,"li"),i.Db(63,"i",8),i.Gb(),i.Hb(64,"li"),i.ec(65),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Hb(66,"div",21),i.Hb(67,"div",13),i.Hb(68,"ul"),i.dc(69,b,7,11,"li",22),i.Gb(),i.Gb(),i.Gb(),i.Gb(),i.Gb()),2&t&&(i.tb(5),i.Tb("src",e.journeyData.coverImage,i.bc),i.tb(6),i.fc(e.journeyData.title),i.tb(7),i.fc(i.Rb(19,12,e.journeyData.totalDuration)),i.tb(5),i.gc("",e.journeyData.credits," CPD Credits"),i.tb(2),i.gc("Created by ",e.getAuthers(e.journeyData.authours),""),i.tb(3),i.Tb("routerLink",i.Wb(16,s,"/articles/view-article/"+e.journeyData.articles[0].id)),i.tb(8),i.Tb("innerHTML",e.journeyData.summary,i.Zb),i.tb(7),i.Tb("innerHTML",e.journeyData.appendix,i.Zb),i.tb(13),i.gc("",null==e.journeyData.articles?null:e.journeyData.articles.length," articles"),i.tb(4),i.fc(i.Rb(61,14,e.journeyData.totalDuration)),i.tb(5),i.gc("",e.journeyData.credits," CPD Credits"),i.tb(4),i.Tb("ngForOf",e.journeyData.articles))},directives:[r.c,o.j],pipes:[l.a,o.h],styles:[".cover-img[_ngcontent-%COMP%]{background-color:#d5d5d5;text-align:center}.cover-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20rem}h2[_ngcontent-%COMP%]{margin-bottom:1rem}ul.dotlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.8rem;padding-right:1.2rem}ul.dotlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.4rem;line-height:.4rem;color:#5757f7;display:block}.created-by[_ngcontent-%COMP%]{font-size:.7rem;padding-top:.5rem}.topic-list-holder[_ngcontent-%COMP%]{border:1px solid #171714;padding:1.5rem;width:15rem}.topic-list-holder[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:1rem;justify-content:space-between}.topic-list-holder[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{padding-bottom:0}.section-journey-steps[_ngcontent-%COMP%]{margin-bottom:10rem}.section-journey-steps[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .border-on[_ngcontent-%COMP%]{border-top:1px dotted #171714;padding-top:2rem}.section-journey-steps[_ngcontent-%COMP%]   .journey-article-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1.5rem}.section-journey-steps[_ngcontent-%COMP%]   .journey-article-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:1px solid #171714;padding:1rem 2rem;cursor:pointer}.section-journey-steps[_ngcontent-%COMP%]   .journey-article-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:1px solid #171714}.section-journey-steps[_ngcontent-%COMP%]   .journey-article-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f6f6ff}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=i.Ab({type:t}),t.\u0275inj=i.zb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(d)],r.e]}),t})();var p=n("Awto");let g=(()=>{class t{}return t.\u0275mod=i.Ab({type:t}),t.\u0275inj=i.zb({factory:function(e){return new(e||t)},imports:[[o.b,u,p.a]]}),t})()},P7dH:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("UYTu"),r=n("fXoL");let i=(()=>{class t{constructor(){}getArticles(t){return o.a`
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
    }`}getTopicsList(){return o.a`
    {
      topics {
        id 
        topics
      }
    }`}getSingleArticle(t){return o.a`
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

          ... on TemplateKnowledgeCheck {
            id
            title
            duration
            question  
            bodyContent {
              html
            }
          }

          ... on TemplateSummary {
            id
            title
            duration
            bodyContent {
              html
            }
          }
        }
      }
    }`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.yb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},XRsc:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n("fXoL");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.wb({type:t,selectors:[["app-banner"]],decls:12,vars:0,consts:[[1,"container"],[1,"row","justify-content-center","header-banner-section"],[1,"col-lg-6","px-5"],[1,"btn-primary"],[1,"col-lg-4","justify-content-center"],["src","assets/banner-image.png",1,"banner-image"]],template:function(t,e){1&t&&(o.Hb(0,"section"),o.Hb(1,"div",0),o.Hb(2,"div",1),o.Hb(3,"div",2),o.Hb(4,"h1"),o.ec(5,"Discover your path"),o.Gb(),o.Hb(6,"p"),o.ec(7,"Whether you\u2019re just getting started or an experienced professional, our hands-on approach helps you to build and grow your business online. "),o.Gb(),o.Hb(8,"button",3),o.ec(9,"Join for free"),o.Gb(),o.Gb(),o.Hb(10,"div",4),o.Db(11,"img",5),o.Gb(),o.Gb(),o.Gb(),o.Gb())},styles:[".header-banner-section[_ngcontent-%COMP%]{margin:5rem 0 0;border-bottom:1px solid #171714}.header-banner-section[_ngcontent-%COMP%]   img.banner-image[_ngcontent-%COMP%]{width:80%;margin-top:-15%}.header-banner-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:1rem;width:80%}"]}),t})()},zU0H:function(t,e,n){"use strict";n.r(e),n.d(e,"BannerModule",function(){return s});var o=n("ofXK"),r=n("tyNb"),i=n("XRsc"),c=n("fXoL");const a=[{path:"",component:i.a}];let l=(()=>{class t{}return t.\u0275mod=c.Ab({type:t}),t.\u0275inj=c.zb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(a)],r.e]}),t})(),s=(()=>{class t{}return t.\u0275mod=c.Ab({type:t}),t.\u0275inj=c.zb({factory:function(e){return new(e||t)},imports:[[o.b,l]]}),t})()}}]);