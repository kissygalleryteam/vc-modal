KISSY.add('kg/vc-modal/1.0.2/index',["./index.css","base","node","event","promise","ua","kg/xtemplate/3.3.3/runtime","./content"],function(S ,require, exports, module) {
 //加载CSS
require('./index.css');

var Base = require('base');
var Node = require('node');
var Event = require('event');
var Promise = require('promise');
var UA = require('ua');


var XTemplateRuntime = require("kg/xtemplate/3.3.3/runtime");

var tpl = require('./content');
var $ = Node.all;

var _templateData = {
  effect: 'fadeInDown',
  cls: '',
  title: "确认",
  cancelBtn: "关闭"
}

var $body = Node.one('body');
//=============== 以上所有变量都是VCModal对象实例的共同属性；

/**
 * 说明： 组件对象中有一个属性$modal, 就是这个弹窗对象。
 *
 */
module.exports = Base.extend({
  renderAppend: function (tpl, data) {
    var self = this;
    tpl = tpl || self.get('tpl');
    data = data || self.get('data');
    var html = xtpl(tpl, data);
    var $modal = S.one(html);
    $body.append($modal);
    self.fire('render', {$modal: $modal});
    this.$modal = $modal;
    this.$dialog = $modal.one('.modal-dialog');
  },

  //初始化函数
  initializer: function(){
    var self = this;

    this.autoHide = true;

    var effect = this.get('effect');  //弹窗出现的效果
    var cls = this.get('cls');//用户自定义class
    var title = this.get('title');
    var content = this.get('content');
    var confirmBtn = this.get('confirmBtn');
    var cancelBtn = this.get('cancelBtn');
    var otherBtn = this.get('otherBtn');//第三个按钮

    var userData = {};
    effect && (userData.effect = effect);
    cls && (userData.cls = cls);
    title && (userData.title = title);
    content && (userData.content = content);
    confirmBtn && (userData.confirmBtn = confirmBtn);
    cancelBtn && (userData.cancelBtn = cancelBtn);

    var _data = S.merge(_templateData, userData);

    this.set("data", _data);


    if(!this.get('tpl')){this.set('tpl',tpl);};
    this.renderAppend();

    //点击黑色区域
    this.$modal.on("click", function(event){
      var $target = Node.one(event.target);
      if($target.hasClass('vc-modal')){
        self.hide();
      }
    });

    //点击dialog的x
    Event.delegate(this.$modal, 'click', '.close', function(event){
      event.preventDefault();
      self.hide();
    });


    var confirmFun = this.get('confirmFun');
    var closeFun = this.get('closeFun');

    //点击确定按钮
    Event.delegate(this.$modal, 'click', '.btn-confirm', function(event){
      //触发确认事件(先执行)
      self.fire('confirm.modal', {modal: self.$modal});

      event.preventDefault();
      if(self.autoHide){
        self.defer.resolve();
      }
      self.autoHide = true;
    });

    //点击关闭按钮
    Event.delegate(this.$modal, 'click', '.btn-close', function(event){
      //触发取消事件
      self.fire('cancel.modal', {modal: self.$modal});

      event.preventDefault();
      if(self.autoHide){
        self.defer.reject();
      }
      self.autoHide = true;
    });

    //增加对enter键支持
    this.$modal.on('keypress', function(event){
        var $focusDom = Node.one(document.activeElement);
        if($focusDom.parent('.vc-modal')){
          document.activeElement.click();//获得焦点的DOM触发click
        }
    });

  },


  /**
   *
   * @param contentHtml: 弹窗的主题内容；可以是字符串或者一个function
   * @param beforeShowFun: 弹窗出现前执行
   * @param afterShowFun: 弹窗出现后执行
   * @returns {*}
   */
  show: function(contentHtml, beforeShowFun, afterShowFun){
    var self = this;
    if(S.isFunction(contentHtml)){
      contentHtml.call({modal: self.$modal});
    }else if(S.isString(contentHtml)){
      this.$modal.one('.modal-body').html(contentHtml);
    }

    try{
      beforeShowFun && beforeShowFun.call(this);
    }catch(e){
    }

    $body.addClass("modal-show");
    this.$modal.css("display", "block");

    document.body.offsetWidth;
    this.$modal.addClass("in");
    this.$modal.getDOMNode().focus();

    try{
      afterShowFun && afterShowFun.call(this);
    }catch(e){
    }


    self.defer = new Promise.Defer();
    var promise = self.defer.promise;
    promise
      .done(function () {
        self.hide();
      }, function(){
        self.hide();
      });

    return promise;
  },

  /**
   *
   */
  hide: function(){
    var self = this;
    if(UA.ie && UA.ie <=8){
      this.$modal.removeClass('in').removeAttr('style');
      $body.removeClass("modal-show");
    }else{
      this.$modal.removeClass('in');
      setTimeout(function(){
        self.$modal.removeAttr('style');
        $body.removeClass("modal-show");
      }, 300);
    }
  },

  /**
   * 关闭自动关闭
   */
  closeAutoHide: function(){
    this.autoHide = false;
  }

}, {
  ATTRS: {
    tpl: {value: ''},
    data: {value: {}}
  }
});


/**
 * xtemplate
 * @param tpl
 * @param data
 * @returns {String|*}
 */
function xtpl(tpl,data){
  var instance = new XTemplateRuntime(tpl);
  return instance.render(data);
}




});