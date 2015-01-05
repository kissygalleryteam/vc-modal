KISSY.add('kg/vc-modal/1.0.0/content',[],function(S ,require, exports, module) {


var ret = module.exports = function content(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func4(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n                <p class="modal-title">';
pos.line = 7;
var id5 = ((t=(affix.title)) !== undefined ? t:((t = data.title) !== undefined ? t :scope.resolveLooseUp(["title"])));
buffer = buffer.write(id5);
buffer.data += '</P>\n                ';
return buffer;
}
function func8(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n                  ';
pos.line = 15;
var id9 = ((t=(affix.otherBtn)) !== undefined ? t:((t = data.otherBtn) !== undefined ? t :scope.resolveLooseUp(["otherBtn"])));
buffer = buffer.write(id9);
buffer.data += '\n                ';
return buffer;
}
function func11(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n                <a class="btn btn-confirm">';
pos.line = 18;
var id12 = ((t=(affix.confirmBtn)) !== undefined ? t:((t = data.confirmBtn) !== undefined ? t :scope.resolveLooseUp(["confirmBtn"])));
buffer = buffer.writeEscaped(id12);
buffer.data += '</a>\n                ';
return buffer;
}


buffer.data += '<div class="vc-modal';
var exp1 = ' ';
var id0 = ((t=(affix.cls)) !== undefined ? t:((t = data.cls) !== undefined ? t :scope.resolveLooseUp(["cls"])));
exp1 = (' ')+(id0);
buffer = buffer.writeEscaped(exp1);
buffer.data += '"  tabindex="-1">\n    <div class="modal-dialog';
var exp3 = ' ';
pos.line = 2;
var id2 = ((t=(affix.effect)) !== undefined ? t:((t = data.effect) !== undefined ? t :scope.resolveLooseUp(["effect"])));
exp3 = (' ')+(id2);
buffer = buffer.writeEscaped(exp3);
buffer.data += '">\n        <div class="modal-content">\n            <div class="modal-header">\n                <i class="close vc-modal-iconfont">&#xe600;</i>\n                ';
pos.line = 6;
pos.line = 6;
var id6 = ((t=(affix.title)) !== undefined ? t:((t = data.title) !== undefined ? t :scope.resolveLooseUp(["title"])));
buffer = ifCommand.call(tpl, scope, {params:[id6],fn: func4}, buffer);
buffer.data += '\n            </div>\n            <div class="modal-body">\n              ';
pos.line = 11;
var id7 = ((t=(affix.content)) !== undefined ? t:((t = data.content) !== undefined ? t :scope.resolveLooseUp(["content"])));
buffer = buffer.write(id7);
buffer.data += '\n            </div>\n            <div class="modal-footer">\n                ';
pos.line = 14;
pos.line = 14;
var id10 = ((t=(affix.otherBtn)) !== undefined ? t:((t = data.otherBtn) !== undefined ? t :scope.resolveLooseUp(["otherBtn"])));
buffer = ifCommand.call(tpl, scope, {params:[id10],fn: func8}, buffer);
buffer.data += '\n                ';
pos.line = 17;
pos.line = 17;
var id13 = ((t=(affix.confirmBtn)) !== undefined ? t:((t = data.confirmBtn) !== undefined ? t :scope.resolveLooseUp(["confirmBtn"])));
buffer = ifCommand.call(tpl, scope, {params:[id13],fn: func11}, buffer);
buffer.data += '\n                <a class="btn btn-close">';
pos.line = 20;
var id14 = ((t=(affix.cancelBtn)) !== undefined ? t:((t = data.cancelBtn) !== undefined ? t :scope.resolveLooseUp(["cancelBtn"])));
buffer = buffer.writeEscaped(id14);
buffer.data += '</a>\n            </div>\n        </div>\n    </div>\n\n</div>\n';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});