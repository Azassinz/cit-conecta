(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{188:function(t,e,u){"use strict";var r=u(189),s=u.n(r);e.a={props:{tag:String,data:{type:Object,required:!0}},computed:{getAttributes(){const t={...this.default,...this.data};return t.src=this.youtubeEmbed(t.src)||t.src,t}},methods:{youtubeEmbed(t){if(!t.includes("youtube.com")||"iframe"!==this.tag)return!1;return"https://www.youtube.com/embed/"+s()(t)}}}},189:function(t,e,u){t.exports=function(t,e){if(null==e&&(e={fuzzy:!0}),/youtu\.?be/.test(t)){var u,r=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(u=0;u<r.length;++u)if(r[u].test(t))return r[u].exec(t)[1];if(e.fuzzy){var s=t.split(/[\/\&\?=#\.\s]/g);for(u=0;u<s.length;++u)if(/^[^#\&\?]{11}$/.test(s[u]))return s[u]}}return null}},215:function(t,e,u){"use strict";u.r(e);var r={name:"LazyLoadImage",mixins:[u(188).a],data:()=>({default:{class:"lazy-load-image",src:"",alt:""}})},s=u(0),n=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("img",this._b({},"img",this.getAttributes,!1))}),[],!1,null,null,null);e.default=n.exports}}]);