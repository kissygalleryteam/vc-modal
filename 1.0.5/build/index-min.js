KISSY.add("kg/vc-modal/1.0.5/index",["base","node","event","promise","ua","kg/xtemplate/3.3.3/runtime","kg/vc-modal/1.0.5/index.css"],function(e,t,a,n){{var o,i,l=t("base"),s=t("node"),d=t("event"),r=t("promise"),c=t("ua"),m=t("kg/xtemplate/3.3.3/runtime");t("kg/vc-modal/1.0.5/index.css")}o=function(e){var t=e=function(e){function t(e,t,a){var n=e.data,i=e.affix;t.data+='\n                <p class="modal-title">',r.line=7;var l=(o=i.title)!==a?o:(o=n.title)!==a?o:e.resolveLooseUp(["title"]);return t=t.write(l),t.data+="</P>\n                ",t}function a(e,t,a){var n=e.data,i=e.affix;t.data+="\n                  ",r.line=15;var l=(o=i.otherBtn)!==a?o:(o=n.otherBtn)!==a?o:e.resolveLooseUp(["otherBtn"]);return t=t.write(l),t.data+="\n                ",t}function n(e,t,a){var n=e.data,i=e.affix;t.data+='\n                <a class="btn btn-confirm" tabindex="11">',r.line=18;var l=(o=i.confirmBtn)!==a?o:(o=n.confirmBtn)!==a?o:e.resolveLooseUp(["confirmBtn"]);return t=t.writeEscaped(l),t.data+="</a>\n                ",t}{var o,i=this,l=i.root,s=i.buffer,d=i.scope,r=(i.runtime,i.name,i.pos),c=d.data,m=d.affix,f=l.nativeCommands,v=l.utils,h=(v.callFn,v.callCommand,f.range,f.foreach,f.forin,f.each,f["with"],f["if"]);f.set,f.include,f.parse,f.extend,f.block,f.macro,f["debugger"]}s.data+='<div class="vc-modal';var u=" ",p=(o=m.cls)!==e?o:(o=c.cls)!==e?o:d.resolveLooseUp(["cls"]);u=" "+p,s=s.writeEscaped(u),s.data+='"  tabindex="1">\n    <div class="modal-dialog';var g=" ";r.line=2;var B=(o=m.effect)!==e?o:(o=c.effect)!==e?o:d.resolveLooseUp(["effect"]);g=" "+B,s=s.writeEscaped(g),s.data+='">\n        <div class="modal-content">\n            <div class="modal-header">\n                <i class="close vc-modal-iconfont">&#xe600;</i>\n                ',r.line=6,r.line=6;var b=(o=m.title)!==e?o:(o=c.title)!==e?o:d.resolveLooseUp(["title"]);s=h.call(i,d,{params:[b],fn:t},s),s.data+='\n            </div>\n            <div class="modal-body">\n              ',r.line=11;var $=(o=m.content)!==e?o:(o=c.content)!==e?o:d.resolveLooseUp(["content"]);s=s.write($),s.data+='\n            </div>\n            <div class="modal-footer">\n                ',r.line=14,r.line=14;var x=(o=m.otherBtn)!==e?o:(o=c.otherBtn)!==e?o:d.resolveLooseUp(["otherBtn"]);s=h.call(i,d,{params:[x],fn:a},s),s.data+="\n                ",r.line=17,r.line=17;var w=(o=m.confirmBtn)!==e?o:(o=c.confirmBtn)!==e?o:d.resolveLooseUp(["confirmBtn"]);s=h.call(i,d,{params:[w],fn:n},s),s.data+='\n                <a class="btn btn-close" tabindex="12">',r.line=20;var k=(o=m.cancelBtn)!==e?o:(o=c.cancelBtn)!==e?o:d.resolveLooseUp(["cancelBtn"]);return s=s.writeEscaped(k),s.data+="</a>\n            </div>\n        </div>\n    </div>\n\n</div>\n",s};return t.TPL_NAME=n.id||n.name,e}(),i=function(t){function a(e,t){var a=new u(e);return a.render(t)}var n=l,i=s,f=d,v=r,h=c,u=m,p=o,g=(i.all,{effect:"fadeInDown",cls:"",title:"确认",cancelBtn:"关闭"}),B=i.one("body");return t=n.extend({renderAppend:function(t,n){var o=this;t=t||o.get("tpl"),n=n||o.get("data");var i=a(t,n),l=e.one(i);B.append(l),o.fire("render",{$modal:l}),this.$modal=l,this.$dialog=l.one(".modal-dialog")},initializer:function(){var t=this;this.autoHide=!0;var a=this.get("effect"),n=this.get("cls"),o=this.get("title"),l=this.get("content"),s=this.get("confirmBtn"),d=this.get("cancelBtn"),r=(this.get("otherBtn"),{});a&&(r.effect=a),n&&(r.cls=n),o&&(r.title=o),l&&(r.content=l),s&&(r.confirmBtn=s),d&&(r.cancelBtn=d);var c=e.merge(g,r);this.set("data",c),this.get("tpl")||this.set("tpl",p),this.renderAppend(),this.$modal.on("click",function(e){var a=i.one(e.target);a.hasClass("vc-modal")&&t.hide()}),f.delegate(this.$modal,"click",".close",function(e){e.preventDefault(),t.hide()});this.get("confirmFun"),this.get("closeFun");f.delegate(this.$modal,"click",".btn-confirm",function(e){t.fire("confirm.modal",{modal:t.$modal}),e.preventDefault(),t.autoHide&&t.defer.resolve(),t.autoHide=!0}),f.delegate(this.$modal,"click",".btn-close",function(e){t.fire("cancel.modal",{modal:t.$modal}),e.preventDefault(),t.autoHide&&t.defer.reject(),t.autoHide=!0}),this.$modal.on("keypress",function(){var e=i.one(document.activeElement);e.parent(".vc-modal")&&document.activeElement.click()})},show:function(t,a,n){var o=this;e.isFunction(t)?t.call({modal:o.$modal}):e.isString(t)&&this.$modal.one(".modal-body").html(t);try{a&&a.call(this)}catch(i){}B.addClass("modal-show"),this.$modal.css("display","block"),document.body.offsetWidth,this.$modal.addClass("in"),this.$modal.getDOMNode().focus();try{n&&n.call(this)}catch(i){}o.defer=new v.Defer;var l=o.defer.promise;return l.done(function(){o.hide()},function(){o.hide()}),l},hide:function(){var e=this;h.ie&&h.ie<=8?(this.$modal.removeClass("in").removeAttr("style"),B.removeClass("modal-show")):(this.$modal.removeClass("in"),setTimeout(function(){e.$modal.removeAttr("style"),B.removeClass("modal-show")},300))},closeAutoHide:function(){this.autoHide=!1}},{ATTRS:{tpl:{value:""},data:{value:{}}}})}(),n.exports=i});