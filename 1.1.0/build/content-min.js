KISSY.add("kg/vc-modal/1.1.0/content",[],function(a,e,n,t){var o=t.exports=function(a){function e(a,e,n){var t=a.data,l=a.affix;e.data+='\n                <p class="modal-title">',s.line=7;var r=(o=l.title)!==n?o:(o=t.title)!==n?o:a.resolveLooseUp(["title"]);return e=e.write(r),e.data+="</P>\n                ",e}function n(a,e,n){var t=a.data,l=a.affix;e.data+="\n                  ",s.line=15;var r=(o=l.otherBtn)!==n?o:(o=t.otherBtn)!==n?o:a.resolveLooseUp(["otherBtn"]);return e=e.write(r),e.data+="\n                ",e}function t(a,e,n){var t=a.data,l=a.affix;e.data+='\n                <a class="btn btn-confirm">',s.line=18;var r=(o=l.confirmBtn)!==n?o:(o=t.confirmBtn)!==n?o:a.resolveLooseUp(["confirmBtn"]);return e=e.writeEscaped(r),e.data+="</a>\n                ",e}{var o,l=this,r=l.root,i=l.buffer,c=l.scope,s=(l.runtime,l.name,l.pos),d=c.data,v=c.affix,f=r.nativeCommands,m=r.utils,p=(m.callFn,m.callCommand,f.range,f.foreach,f.forin,f.each,f["with"],f["if"]);f.set,f.include,f.parse,f.extend,f.block,f.macro,f["debugger"]}i.data+='<div class="vc-modal';var B=" ",u=(o=v.cls)!==a?o:(o=d.cls)!==a?o:c.resolveLooseUp(["cls"]);B=" "+u,i=i.writeEscaped(B),i.data+='"  tabindex="-1">\n    <div class="modal-dialog';var h=" ";s.line=2;var L=(o=v.effect)!==a?o:(o=d.effect)!==a?o:c.resolveLooseUp(["effect"]);h=" "+L,i=i.writeEscaped(h),i.data+='">\n        <div class="modal-content">\n            <div class="modal-header">\n                <i class="close vc-modal-iconfont">&#xe600;</i>\n                ',s.line=6,s.line=6;var U=(o=v.title)!==a?o:(o=d.title)!==a?o:c.resolveLooseUp(["title"]);i=p.call(l,c,{params:[U],fn:e},i),i.data+='\n            </div>\n            <div class="modal-body">\n              ',s.line=11;var b=(o=v.content)!==a?o:(o=d.content)!==a?o:c.resolveLooseUp(["content"]);i=i.write(b),i.data+='\n            </div>\n            <div class="modal-footer">\n                ',s.line=14,s.line=14;var w=(o=v.otherBtn)!==a?o:(o=d.otherBtn)!==a?o:c.resolveLooseUp(["otherBtn"]);i=p.call(l,c,{params:[w],fn:n},i),i.data+="\n                ",s.line=17,s.line=17;var x=(o=v.confirmBtn)!==a?o:(o=d.confirmBtn)!==a?o:c.resolveLooseUp(["confirmBtn"]);i=p.call(l,c,{params:[x],fn:t},i),i.data+='\n                <a class="btn btn-close">',s.line=20;var g=(o=v.cancelBtn)!==a?o:(o=d.cancelBtn)!==a?o:c.resolveLooseUp(["cancelBtn"]);return i=i.writeEscaped(g),i.data+="</a>\n            </div>\n        </div>\n    </div>\n\n</div>\n",i};o.TPL_NAME=t.id||t.name});