// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        nodeBody:cc.Node,
        anima:cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown(event){
        // console.log("press space");
        if(this.cantake && event.keyCode == cc.macro.KEY.k){
            console.log("press k");
            this.saveState();
            this.collect();
        }
    },

    saveState(){

    },

    setAnima(){
        if(this.anima){
            this.anima.play("takeItem");
        }
    },
    collect(){
        // this.setAnima();
        this.nodeBody.active = false ;
    },

    canTake(){
        return Global.itemType == 'items' && this.node.name == Global.itemName;
    },

    start () {

    },

    update (dt) {
        this.cantake = this.canTake();
    },
});
