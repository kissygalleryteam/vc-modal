## 综述

版本1.0.2

vc-modal组件的制作思路是满足大众化普遍的需求力求使用简单；

vc-modal组件的css样式特殊性的值都很小，这一方面很容易被干扰，另一方面你可以很方便覆盖原生的样式定制你的UI；

如果你的dialog的高度是确定，那几种效果你都可以使用；如果高度是不确定的，建议你使用默认效果， 其他几种效果要求你在show出dialog的时候设置明确的dailog高度和宽度值；

vc-modal组件支持在pad和modal上使用，pc上支持到ie8+, 对于ie7-浏览器没测试， 未知支持情况。这里所说的支持ie8+并不包括动画效果。


vc-modal组件支持无障碍操作，对键盘操作进行了有限支持。

欢迎大家反馈，对于特殊应用场景有提供了方式去扩展， 如果给你带来不便，非常抱歉，希望您能反馈并指教。

## 初始化组件
```javascript
S.use('kg/vc-modal/1.0.0/index', function (S, VCModal) {
    var modal = new VCModal();
});
```


## API
** 对于var modal = new VCModal(options)来说：**

### options是个object，其中属性有：
* effect：弹窗出现的效果，非必填， 默认是’fadeInDown’，效果类似bootstrap的modal效果；
* cls：用户自定义class， 非必填，会在组件的容器将加入这个class，方便用户定制UI；
* title：dialog的标题，必填，对应的值会防止在.modal-title中；
* content： dialog的内容，必填，组件直接将对应的值当做html代码直接插入.modal-body中；
* confirmBtn: dialog的确定按钮的名称，非必填，如果不填这个属性，dailog将不会有确认按钮；
* cancelBtn: dialog的取消按钮的名称，非必填，dialog默认有一个名叫“关闭“按钮，你可以修改这个按钮的叫法；
* otherBtn：非必填，组件默认只支持确认和关闭按钮， 如果你一些特别的需求，你可以定制你的第N个按钮，这个属性是html代码，组件只是将代码防止在对应位置，样式和行为都由你确定。

    ** 以上没说明数据类型的，都是字符串类型 **
    
    ** 以上以. 开始的字符串，比如 .modal-body是指class=“modal-body”的结点 **
 


### modal对象实例上的属性：
* $modal： modal的容器对象
* $dialog： modal的dailog对象

    ** $开头的属性都是kissy封装的dom结点。 **


### modal对象实例上的方法：
* show(contentHtml, beforeShowFun, afterShowFun)：
    * contentHtml：必填参数，可以是字符串或者function， 如果是字符串将会以html形式注入.modal-body中;
如果是function, 组件将改变function运行环境，在这个function中使用this.modal， 能得到$modal属性；
	* beforeShowFun：非必填参数， dialog显示前执行的函数，执行环境是当前modal对象实例;
	* afterShowFun： 非必填参数，dialog显示后执行的函数，执行环境是当前modal对象实例;
    * 返回的数据， promise对象；这就表示你可以这样使用modal.show().then(function(){}, function(){}), 如果用户点击确认按钮，会执行then中的第一个函数，如果用户点击取消按钮，会执行then中第二个函数。如果你不喜欢这样使用，可以在modal对象实例上绑定confirm.modal或者cancel.modal方法，分别在用户点击确认和取消按钮时候会触发。


* hide(): 隐藏modal， 无需参数；此方法无数据返回；

* closeAutoHide():  默认情况下，如果触发组件的确认和关闭按钮，都会让modal关闭； 有的时候你想触发这两个按钮不关闭modal，可以使用这个方法，此方法无数据返回。注意：每调用一次只生效一次。


