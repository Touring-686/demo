// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.find("Canvas/bag/bagBg").active = false;;
        this.node.on(cc.Node.EventType.MOUSE_DOWN,this.onMouseDown,this);
    },

    start () {
    },

    onMouseDown:function (event){
        console.log("click");
        let state = cc.find("Canvas/bag/bagBg").active
        if(state){
            cc.find("Canvas/bag/bagBg").active = false;
            cc.find("Canvas/background/hero").active = true;
        }
        else{
            cc.find("Canvas/bag/bagBg").active = true;
            // 关闭人物移动
            cc.find("Canvas/background/hero").active = false;
        }
    },
    // update (dt) {},
});
