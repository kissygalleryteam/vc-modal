KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('vc-modal', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/vc-modal/1.1.0/']});