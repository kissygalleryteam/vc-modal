KISSY.add("kg/vc-modal/1.0.2/content",[],function(a,e,n,t){var o=t.exports=function(a){function e(a,e,n){var t=a.data,i=a.affix;e.data+='\n                <p class="modal-title">',s.line=7;var l=(o=i.title)!==n?o:(o=t.title)!==n?o:a.resolveLooseUp(["title"]);return e=e.write(l),e.data+="</P>\n                ",e}function n(a,e,n){var t=a.data,i=a.affix;e.data+="\n                  ",s.line=15;var l=(o=i.otherBtn)!==n?o:(o=t.otherBtn)!==n?o:a.resolveLooseUp(["otherBtn"]);return e=e.write(l),e.data+="\n                ",e}function t(a,e,n){var t=a.data,i=a.affix;e.data+='\n                <a class="btn btn-confirm" tabindex="11">',s.line=18;var l=(o=i.confirmBtn)!==n?o:(o=t.confirmBtn)!==n?o:a.resolveLooseUp(["confirmBtn"]);return e=e.writeEscaped(l),e.data+="</a>\n                ",e}{var o,i=this,l=i.root,r=i.buffer,c=i.scope,s=(i.runtime,i.name,i.pos),d=c.data,v=c.affix,f=l.nativeCommands,m=l.utils,p=(m.callFn,m.callCommand,f.range,f.foreach,f.forin,f.each,f["with"],f["if"]);f.set,f.include,f.parse,f.extend,f.block,f.macro,f["debugger"]}r.data+='<div class="vc-modal';var B=" ",u=(o=v.cls)!==a?o:(o=d.cls)!==a?o:c.resolveLooseUp(["cls"]);B=" "+u,r=r.writeEscaped(B),r.data+='"  tabindex="1">\n    <div class="modal-dialog';var b=" ";s.line=2;var h=(o=v.effect)!==a?o:(o=d.effect)!==a?o:c.resolveLooseUp(["effect"]);b=" "+h,r=r.writeEscaped(b),r.data+='">\n        <div class="modal-content">\n            <div class="modal-header">\n                <i class="close vc-modal-iconfont">&#xe600;</i>\n                ',s.line=6,s.line=6;var L=(o=v.title)!==a?o:(o=d.title)!==a?o:c.resolveLooseUp(["title"]);r=p.call(i,c,{params:[L],fn:e},r),r.data+='\n            </div>\n            <div class="modal-body">\n              ',s.line=11;var x=(o=v.content)!==a?o:(o=d.content)!==a?o:c.resolveLooseUp(["content"]);r=r.write(x),r.data+='\n            </div>\n            <div class="modal-footer">\n                ',s.line=14,s.line=14;var U=(o=v.otherBtn)!==a?o:(o=d.otherBtn)!==a?o:c.resolveLooseUp(["otherBtn"]);r=p.call(i,c,{params:[U],fn:n},r),r.data+="\n                ",s.line=17,s.line=17;var w=(o=v.confirmBtn)!==a?o:(o=d.confirmBtn)!==a?o:c.resolveLooseUp(["confirmBtn"]);r=p.call(i,c,{params:[w],fn:t},r),r.data+='\n                <a class="btn btn-close" tabindex="12">',s.line=20;var g=(o=v.cancelBtn)!==a?o:(o=d.cancelBtn)!==a?o:c.resolveLooseUp(["cancelBtn"]);return r=r.writeEscaped(g),r.data+="</a>\n            </div>\n        </div>\n    </div>\n\n</div>\n",r};o.TPL_NAME=t.id||t.name});