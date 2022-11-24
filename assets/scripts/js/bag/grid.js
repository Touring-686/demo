// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,


    properties: {
        gridLayout: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //8x+7y  = 200
        this.cellWidth = 0.105*this.gridLayout.width;
        this.cellHeight = 0.215*this.gridLayout.height;
        this.blankX = 0.022*this.gridLayout.width;
        this.blankY = 0.045*this.gridLayout.height;
    },


    addItem(){

    },

    

    start () {

    },

    // update (dt) {},
});
