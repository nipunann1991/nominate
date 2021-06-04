(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5/fe":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n("UYTu"),r=n("fXoL");let a=(()=>{class e{constructor(){}getJourneys(){return i.a`
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
            }
            ... on TemplateVideo {
              id
              duration
              title
            }
          }
        }
      }
    }`}getSingleJourney(e){return i.a`
    {
      journey(where: {id:  "${e.selectedID.toString()}" } ) {
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
          templates {
            ... on TemplateFreeText {
              id
              title
              duration
            }
            ... on TemplateHorizontalTab {
              id
            }
            ... on TemplateVideo {
              id
              duration
              title
            }
          }
          
        }
      }
    }`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.yb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},B4M3:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewJourneyModule",function(){return d});var i=n("ofXK"),r=n("tyNb"),a=n("fXoL"),o=n("/IUn"),s=n("5/fe"),c=n("QmGl");function l(e,t){if(1&e&&(a.Hb(0,"li",13),a.Hb(1,"strong"),a.Xb(2),a.Gb(),a.Hb(3,"span",14),a.Xb(4),a.Pb(5,"timeConverter"),a.Gb(),a.Gb()),2&e){const e=t.$implicit;a.tb(2),a.Yb(e.title),a.tb(2),a.ac("",a.Qb(5,3,e.duration)," ",e.type,"")}}const u=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.apollo=e,this.journey=t,this.router=n,this.activatedRoute=i,this.journeyData=[]}ngOnInit(){this.getSingleJourney()}getSingleJourney(){this.apollo.watchQuery({query:this.journey.getSingleJourney({selectedID:this.activatedRoute.snapshot.params.id})}).valueChanges.subscribe(e=>{console.log(e.data.journey),this.setJourneyData(e.data.journey)})}setJourneyData(e){var t;let n=[],i=[],r=[],a=[];e.articles.filter(e=>{n=n.concat(e.topics),r=[0],e.templates.filter(e=>{r=r.concat(e.duration),i=i.concat(e.duration)}),a.push(Object.assign({},e,{duration:r.reduce((e,t)=>t+(e||e))}))});let o=[...new Set(n)],s={id:e.id,title:e.title,coverImage:null===(t=e.coverImage)||void 0===t?void 0:t.url,summary:e.summary,appendix:e.appendix,categories:o,totalDuration:i.reduce((e,t)=>t+(e||e)),articles:a};this.journeyData=s,console.log(this.journeyData)}}return e.\u0275fac=function(t){return new(t||e)(a.Cb(o.b),a.Cb(s.a),a.Cb(r.b),a.Cb(r.a))},e.\u0275cmp=a.wb({type:e,selectors:[["app-view-journey"]],decls:36,vars:12,consts:[[1,"container-fluid","journey-page"],[1,"container"],[1,"journey-container","row"],[1,"journey-header","col-md-12"],["width","100%","alt","",3,"src"],[3,"innerHTML"],[1,"journey-appendix","row"],[1,"appendix","col-md-6"],[1,"whats-included","col-md-6"],[1,"journey-steps","col-md-12"],[1,"journey-desc"],[1,"journey-articles"],["class","articles",4,"ngFor","ngForOf"],[1,"articles"],[1,"duration"]],template:function(e,t){1&e&&(a.Hb(0,"div",0),a.Hb(1,"div",1),a.Hb(2,"div",2),a.Hb(3,"div",3),a.Db(4,"img",4),a.Hb(5,"h1"),a.Xb(6),a.Gb(),a.Hb(7,"ul"),a.Hb(8,"li"),a.Xb(9,"General"),a.Gb(),a.Hb(10,"li"),a.Xb(11),a.Pb(12,"timeConverter"),a.Gb(),a.Gb(),a.Hb(13,"h2"),a.Xb(14,"About this journey"),a.Gb(),a.Db(15,"p",5),a.Hb(16,"div",6),a.Hb(17,"div",7),a.Hb(18,"h3"),a.Xb(19,"We\u2019ll cover"),a.Gb(),a.Db(20,"p",5),a.Gb(),a.Hb(21,"div",8),a.Hb(22,"h4"),a.Xb(23,"What\u2019s included"),a.Gb(),a.Gb(),a.Gb(),a.Gb(),a.Db(24,"hr"),a.Hb(25,"div",9),a.Hb(26,"h2"),a.Xb(27,"Journey steps"),a.Gb(),a.Hb(28,"ul",10),a.Hb(29,"li"),a.Xb(30),a.Gb(),a.Hb(31,"li"),a.Xb(32),a.Pb(33,"timeConverter"),a.Gb(),a.Gb(),a.Hb(34,"ul",11),a.Wb(35,l,6,5,"li",12),a.Gb(),a.Gb(),a.Gb(),a.Gb(),a.Gb()),2&e&&(a.tb(4),a.Rb("src",t.journeyData.coverImage,a.Ub),a.tb(2),a.Yb(t.journeyData.title),a.tb(5),a.Yb(a.Qb(12,8,t.journeyData.totalDuration)),a.tb(4),a.Rb("innerHTML",t.journeyData.summary,a.Tb),a.tb(5),a.Rb("innerHTML",t.journeyData.appendix,a.Tb),a.tb(10),a.Zb("",null==t.journeyData.articles?null:t.journeyData.articles.length," Articles"),a.tb(2),a.Yb(a.Qb(33,10,t.journeyData.totalDuration)),a.tb(3),a.Rb("ngForOf",t.journeyData.articles))},directives:[i.h],pipes:[c.a],styles:[".journey-container[_ngcontent-%COMP%]{width:800px;margin:auto}.journey-container[_ngcontent-%COMP%]   ul.journey-articles[_ngcontent-%COMP%]{padding-left:0;border-top:1px solid #d5d5d5}.journey-container[_ngcontent-%COMP%]   ul.journey-articles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem;list-style:none;overflow:hidden;border-bottom:1px solid #d5d5d5}.journey-container[_ngcontent-%COMP%]   ul.journey-articles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.duration[_ngcontent-%COMP%]{float:right}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Ab({type:e}),e.\u0275inj=a.zb({factory:function(t){return new(t||e)},imports:[[r.d.forChild(u)],r.d]}),e})();var h=n("Awto");let d=(()=>{class e{}return e.\u0275mod=a.Ab({type:e}),e.\u0275inj=a.zb({factory:function(t){return new(t||e)},imports:[[i.b,p,h.a]]}),e})()},QmGl:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("fXoL");let r=(()=>{class e{transform(e){var t=e/60,n=Math.floor(t),i=Math.round(60*(t-n));return 0==n?i+"min":n+" hour(s) and "+i+" min"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.Bb({name:"timeConverter",type:e,pure:!0}),e})()},UYTu:function(e,t,n){"use strict";var i=n("mrSG");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"==typeof Symbol&&null!=Symbol.iterator&&Symbol,"function"==typeof Symbol&&null!=Symbol.asyncIterator&&Symbol;var a="function"==typeof Symbol&&null!=Symbol.toStringTag?Symbol.toStringTag:"@@toStringTag";function o(e,t){for(var n,i=/\r\n|[\n\r]/g,r=1,a=t+1;(n=i.exec(e.body))&&n.index<t;)r+=1,a=t+1-(n.index+n[0].length);return{line:r,column:a}}function s(e,t){var n=e.locationOffset.column-1,i=l(n)+e.body,r=t.line-1,a=t.line+(e.locationOffset.line-1),o=t.column+(1===t.line?n:0),s="".concat(e.name,":").concat(a,":").concat(o,"\n"),u=i.split(/\r\n|[\n\r]/g),p=u[r];if(p.length>120){for(var h=Math.floor(o/80),d=o%80,f=[],E=0;E<p.length;E+=80)f.push(p.slice(E,E+80));return s+c([["".concat(a),f[0]]].concat(f.slice(1,h+1).map(function(e){return["",e]}),[[" ",l(d-1)+"^"],["",f[h+1]]]))}return s+c([["".concat(a-1),u[r-1]],["".concat(a),p],["",l(o-1)+"^"],["".concat(a+1),u[r+1]]])}function c(e){var t=e.filter(function(e){return void 0!==e[1]}),n=Math.max.apply(Math,t.map(function(e){return e[0].length}));return t.map(function(e){var t,i=e[1];return l(n-(t=e[0]).length)+t+(i?" | "+i:" |")}).join("\n")}function l(e){return Array(e+1).join(" ")}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,T(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),v(n,e)})(e)}function f(e,t,n){return(f=E()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&v(r,n.prototype),r}).apply(null,arguments)}function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,n,i,c=(t=l,n=E(),function(){var e,i=T(t);if(n){var r=T(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return p(this,e)});function l(e,t,n,i,a,s,u){var d,f,E,v,T;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),T=c.call(this,e);var N,y=Array.isArray(t)?0!==t.length?t:void 0:t?[t]:void 0,m=n;!m&&y&&(m=null===(N=y[0].loc)||void 0===N?void 0:N.source);var b,I=i;!I&&y&&(I=y.reduce(function(e,t){return t.loc&&e.push(t.loc.start),e},[])),I&&0===I.length&&(I=void 0),i&&n?b=i.map(function(e){return o(n,e)}):y&&(b=y.reduce(function(e,t){return t.loc&&e.push(o(t.loc.source,t.loc.start)),e},[]));var _,O=u;if(null==O&&null!=s){var D=s.extensions;"object"==r(_=D)&&null!==_&&(O=D)}return Object.defineProperties(h(T),{name:{value:"GraphQLError"},message:{value:e,enumerable:!0,writable:!0},locations:{value:null!==(d=b)&&void 0!==d?d:void 0,enumerable:null!=b},path:{value:null!=a?a:void 0,enumerable:null!=a},nodes:{value:null!=y?y:void 0},source:{value:null!==(f=m)&&void 0!==f?f:void 0},positions:{value:null!==(E=I)&&void 0!==E?E:void 0},originalError:{value:s},extensions:{value:null!==(v=O)&&void 0!==v?v:void 0,enumerable:null!=O}}),null!=s&&s.stack?(Object.defineProperty(h(T),"stack",{value:s.stack,writable:!0,configurable:!0}),p(T)):(Error.captureStackTrace?Error.captureStackTrace(h(T),l):Object.defineProperty(h(T),"stack",{value:Error().stack,writable:!0,configurable:!0}),T)}return(i=[{key:"toString",value:function(){return function(e){var t,n=e.message;if(e.nodes)for(var i=0,r=e.nodes;i<r.length;i++){var a=r[i];a.loc&&(n+="\n\n"+s((t=a.loc).source,o(t.source,t.start)))}else if(e.source&&e.locations)for(var c=0,l=e.locations;c<l.length;c++)n+="\n\n"+s(e.source,l[c]);return n}(this)}},{key:a,get:function(){return"Object"}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(l.prototype,i),l}(d(Error));function y(e,t,n){return new N("Syntax Error: ".concat(n),void 0,e,[t])}var m=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),b=n("klf5"),I=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),_=n("rWdj");function O(e,t){if(!Boolean(e))throw new Error(t)}var D=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};"string"==typeof e||O(0,"Body must be a string. Received: ".concat(Object(_.a)(e),".")),this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||O(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||O(0,"column in locationOffset is 1-indexed and must be positive.")}var t;return(t=[{key:a,get:function(){return"Source"}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}(),A=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),x=n("BLR7"),k=function(){function e(e){var t=new b.b(I.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==I.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=g(this,e)}while(e.kind===I.COMMENT);return e},e}();function S(e){return isNaN(e)?I.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function g(e,t){for(var n=e.source,i=n.body,r=i.length,a=t.end;a<r;){var o=i.charCodeAt(a),s=e.line,c=1+a-e.lineStart;switch(o){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++e.line,e.lineStart=a;continue;case 13:10===i.charCodeAt(a+1)?a+=2:++a,++e.line,e.lineStart=a;continue;case 33:return new b.b(I.BANG,a,a+1,s,c,t);case 35:return R(n,a,s,c,t);case 36:return new b.b(I.DOLLAR,a,a+1,s,c,t);case 38:return new b.b(I.AMP,a,a+1,s,c,t);case 40:return new b.b(I.PAREN_L,a,a+1,s,c,t);case 41:return new b.b(I.PAREN_R,a,a+1,s,c,t);case 46:if(46===i.charCodeAt(a+1)&&46===i.charCodeAt(a+2))return new b.b(I.SPREAD,a,a+3,s,c,t);break;case 58:return new b.b(I.COLON,a,a+1,s,c,t);case 61:return new b.b(I.EQUALS,a,a+1,s,c,t);case 64:return new b.b(I.AT,a,a+1,s,c,t);case 91:return new b.b(I.BRACKET_L,a,a+1,s,c,t);case 93:return new b.b(I.BRACKET_R,a,a+1,s,c,t);case 123:return new b.b(I.BRACE_L,a,a+1,s,c,t);case 124:return new b.b(I.PIPE,a,a+1,s,c,t);case 125:return new b.b(I.BRACE_R,a,a+1,s,c,t);case 34:return 34===i.charCodeAt(a+1)&&34===i.charCodeAt(a+2)?P(n,a,s,c,t,e):F(n,a,s,c,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return w(n,a,o,s,c,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return j(n,a,s,c,t)}throw y(n,a,C(o))}return new b.b(I.EOF,r,r,e.line,1+a-e.lineStart,t)}function C(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(S(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(S(e),".")}function R(e,t,n,i,r){var a,o=e.body,s=t;do{a=o.charCodeAt(++s)}while(!isNaN(a)&&(a>31||9===a));return new b.b(I.COMMENT,t,s,n,i,r,o.slice(t+1,s))}function w(e,t,n,i,r,a){var o=e.body,s=n,c=t,l=!1;if(45===s&&(s=o.charCodeAt(++c)),48===s){if((s=o.charCodeAt(++c))>=48&&s<=57)throw y(e,c,"Invalid number, unexpected digit after 0: ".concat(S(s),"."))}else c=L(e,c,s),s=o.charCodeAt(c);if(46===s&&(l=!0,s=o.charCodeAt(++c),c=L(e,c,s),s=o.charCodeAt(c)),69!==s&&101!==s||(l=!0,43!==(s=o.charCodeAt(++c))&&45!==s||(s=o.charCodeAt(++c)),c=L(e,c,s),s=o.charCodeAt(c)),46===s||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(s))throw y(e,c,"Invalid number, expected digit but got: ".concat(S(s),"."));return new b.b(l?I.FLOAT:I.INT,t,c,i,r,a,o.slice(t,c))}function L(e,t,n){var i=e.body,r=t,a=n;if(a>=48&&a<=57){do{a=i.charCodeAt(++r)}while(a>=48&&a<=57);return r}throw y(e,r,"Invalid number, expected digit but got: ".concat(S(a),"."))}function F(e,t,n,i,r){for(var a,o,s,c,l=e.body,u=t+1,p=u,h=0,d="";u<l.length&&!isNaN(h=l.charCodeAt(u))&&10!==h&&13!==h;){if(34===h)return d+=l.slice(p,u),new b.b(I.STRING,t,u+1,n,i,r,d);if(h<32&&9!==h)throw y(e,u,"Invalid character within String: ".concat(S(h),"."));if(++u,92===h){switch(d+=l.slice(p,u-1),h=l.charCodeAt(u)){case 34:d+='"';break;case 47:d+="/";break;case 92:d+="\\";break;case 98:d+="\b";break;case 102:d+="\f";break;case 110:d+="\n";break;case 114:d+="\r";break;case 116:d+="\t";break;case 117:var f=(a=l.charCodeAt(u+1),o=l.charCodeAt(u+2),s=l.charCodeAt(u+3),c=l.charCodeAt(u+4),M(a)<<12|M(o)<<8|M(s)<<4|M(c));if(f<0){var E=l.slice(u+1,u+5);throw y(e,u,"Invalid character escape sequence: \\u".concat(E,"."))}d+=String.fromCharCode(f),u+=4;break;default:throw y(e,u,"Invalid character escape sequence: \\".concat(String.fromCharCode(h),"."))}p=++u}}throw y(e,u,"Unterminated string.")}function P(e,t,n,i,r,a){for(var o=e.body,s=t+3,c=s,l=0,u="";s<o.length&&!isNaN(l=o.charCodeAt(s));){if(34===l&&34===o.charCodeAt(s+1)&&34===o.charCodeAt(s+2))return u+=o.slice(c,s),new b.b(I.BLOCK_STRING,t,s+3,n,i,r,Object(x.a)(u));if(l<32&&9!==l&&10!==l&&13!==l)throw y(e,s,"Invalid character within String: ".concat(S(l),"."));10===l?(++s,++a.line,a.lineStart=s):13===l?(10===o.charCodeAt(s+1)?s+=2:++s,++a.line,a.lineStart=s):92===l&&34===o.charCodeAt(s+1)&&34===o.charCodeAt(s+2)&&34===o.charCodeAt(s+3)?(u+=o.slice(c,s)+'"""',c=s+=4):++s}throw y(e,s,"Unterminated string.")}function M(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function j(e,t,n,i,r){for(var a=e.body,o=a.length,s=t+1,c=0;s!==o&&!isNaN(c=a.charCodeAt(s))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++s;return new b.b(I.NAME,t,s,n,i,r,a.slice(t,s))}var B=function(){function e(e,t){var n=function(e){return e instanceof D}(e)?e:new D(e);this._lexer=new k(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(I.NAME);return{kind:m.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:m.DOCUMENT,definitions:this.many(I.SOF,this.parseDefinition,I.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(I.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(I.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(I.BRACE_L))return{kind:m.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(I.NAME)&&(t=this.parseName()),{kind:m.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(I.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(I.PAREN_L,this.parseVariableDefinition,I.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:m.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(I.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(I.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(I.DOLLAR),{kind:m.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:m.SELECTION_SET,selections:this.many(I.BRACE_L,this.parseSelection,I.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(I.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,i=this.parseName();return this.expectOptionalToken(I.COLON)?(e=i,t=this.parseName()):t=i,{kind:m.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(I.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){return this.optionalMany(I.PAREN_L,e?this.parseConstArgument:this.parseArgument,I.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(I.COLON),{kind:m.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:m.ARGUMENT,name:this.parseName(),value:(this.expectToken(I.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(I.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(I.NAME)?{kind:m.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:m.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:m.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:m.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case I.BRACKET_L:return this.parseList(e);case I.BRACE_L:return this.parseObject(e);case I.INT:return this._lexer.advance(),{kind:m.INT,value:t.value,loc:this.loc(t)};case I.FLOAT:return this._lexer.advance(),{kind:m.FLOAT,value:t.value,loc:this.loc(t)};case I.STRING:case I.BLOCK_STRING:return this.parseStringLiteral();case I.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:m.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:m.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:m.NULL,loc:this.loc(t)};default:return{kind:m.ENUM,value:t.value,loc:this.loc(t)}}case I.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:m.STRING,value:e.value,block:e.kind===I.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:m.LIST,values:this.any(I.BRACKET_L,function(){return t.parseValueLiteral(e)},I.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:m.OBJECT,fields:this.any(I.BRACE_L,function(){return t.parseObjectField(e)},I.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(I.COLON),{kind:m.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(I.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(I.AT),{kind:m.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(I.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(I.BRACKET_R),e={kind:m.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(I.BANG)?{kind:m.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:m.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===I.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(I.STRING)||this.peek(I.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),i=this.many(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);return{kind:m.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(I.COLON);var n=this.parseNamedType();return{kind:m.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),i=this.parseDirectives(!0);return{kind:m.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),a=this.parseFieldsDefinition();return{kind:m.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:a,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken(I.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken(I.AMP)||this.peek(I.NAME));return t}return this.delimitedMany(I.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(I.BRACE_L)&&this._lexer.lookahead().kind===I.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(I.BRACE_L,this.parseFieldDefinition,I.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(I.COLON);var r=this.parseTypeReference(),a=this.parseDirectives(!0);return{kind:m.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:a,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(I.PAREN_L,this.parseInputValueDef,I.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(I.COLON);var i,r=this.parseTypeReference();this.expectOptionalToken(I.EQUALS)&&(i=this.parseValueLiteral(!0));var a=this.parseDirectives(!0);return{kind:m.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:a,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),a=this.parseFieldsDefinition();return{kind:m.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:a,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:m.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(I.EQUALS)?this.delimitedMany(I.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:m.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(I.BRACE_L,this.parseEnumValueDefinition,I.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseDirectives(!0);return{kind:m.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:m.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(I.BRACE_L,this.parseInputValueDef,I.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===I.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:m.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:m.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:m.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:m.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:m.UNION_TYPE_EXTENSION,name:t,directives:n,types:i,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:m.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:m.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(I.AT);var n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var a=this.parseDirectiveLocations();return{kind:m.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:a,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(I.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==A[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new b.a(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw y(this._lexer.source,t.start,"Expected ".concat(G(e),", found ").concat(U(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==I.NAME||t.value!==e)throw y(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(U(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===I.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return y(this._lexer.source,t.start,"Unexpected ".concat(U(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var i=[];!this.expectOptionalToken(n);)i.push(t.call(this));return i},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}return[]},t.many=function(e,t,n){this.expectToken(e);var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n},e}();function U(e){var t=e.value;return G(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function G(e){return function(e){return e===I.BANG||e===I.DOLLAR||e===I.AMP||e===I.PAREN_L||e===I.PAREN_R||e===I.SPREAD||e===I.COLON||e===I.EQUALS||e===I.AT||e===I.BRACKET_L||e===I.BRACKET_R||e===I.BRACE_L||e===I.PIPE||e===I.BRACE_R}(e)?'"'.concat(e,'"'):e}var V=new Map,K=new Map,Y=!0,H=!1;function X(e){return e.replace(/[\s,]+/g," ").trim()}function J(e){var t,n,r,a=X(e);if(!V.has(a)){var o=function(e,t){return new B(e,t).parseDocument()}(e,{experimentalFragmentVariables:H});if(!o||"Document"!==o.kind)throw new Error("Not a valid GraphQL document.");V.set(a,function(e){var t=new Set(e.definitions);t.forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(n){var i=e[n];i&&"object"==typeof i&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}((t=o,n=new Set,r=[],t.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var t=e.name.value,i=X((o=e.loc).source.body.substring(o.start,o.end)),a=K.get(t);a&&!a.has(i)?Y&&console.warn("Warning: fragment with name "+t+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):a||K.set(t,a=new Set),a.add(i),n.has(i)||(n.add(i),r.push(e))}else r.push(e);var o}),Object(i.a)(Object(i.a)({},t),{definitions:r}))))}return V.get(a)}function Q(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var i=e[0];return t.forEach(function(t,n){i+=t&&"Document"===t.kind?t.loc.source.body:t,i+=e[n+1]}),J(i)}var q,z=Q;(q=Q||(Q={})).gql=z,q.resetCaches=function(){V.clear(),K.clear()},q.disableFragmentWarnings=function(){Y=!1},q.enableExperimentalFragmentVariables=function(){H=!0},q.disableExperimentalFragmentVariables=function(){H=!1},Q.default=Q,t.a=Q}}]);