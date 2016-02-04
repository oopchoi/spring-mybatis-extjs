Ext.define('App.view.components.containers.AbsoluteLayout', {
    extend:'Ext.panel.Panel',
    xtype:'absolutelayout',

    layout : 'absolute',
    width: 500,
    height: 500,
    items:[
        {
            xtype:'textareafield',
            fieldLabel:'억울하다',
            value:'layout을 absolute로 지정한 경우 컨테이너의 width, height를 반드시 지정해야 좌표를 잡아준다.',
            x:100,
            y:100
        },
        {
            xtype:'label',
            text:'그것도 모르고 한 시간 넘게 겁나게 헤멨다.',
            x:100,
            y:200
        }
    ]
});