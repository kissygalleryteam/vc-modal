## 综述

VcModal是简单的模拟对话框组件。

![http://gtms02.alicdn.com/tps/i2/TB1DApgHXXXXXbOXXXXFvIM3VXX-434-180.png](http://gtms02.alicdn.com/tps/i2/TB1DApgHXXXXXbOXXXXFvIM3VXX-434-180.png)


## 初始化组件
		
    S.use('kg/vc-modal/1.1.0/index', function (S, VcModal) {
         var vc-modal = new VcModal();
    })

## API说明
    * 初始化参数说明
        * var modal = new VcModal({
            effect: 'fadeInDown', //dailog出现的效果，默认‘fadeInDown’
            cls: '',              //用户自定义class，默认不存在
            title: "确认",         //dailog标题，默认‘确认’
            content: ''           //dailog内容，默认不存在
            confirmBtn: ''        //dailog确认按钮，默认不存在
            cancelBtn: "关闭"     //dailog取消按钮，默认叫做'关闭'
            otherBtn: ''         //dailog第三个按钮，默认不存在
          });
    
    
    * 实例方法说明
      * modal.show(param): 显示modal， 返回promise对象
    
      * modal.hide(): 隐藏modal
    
      * modal.closeAutoHide(): 关闭默认的关闭行为
