Ext.define('App.view.main.ComponentMain',{
    extend:'Ext.tab.Panel',
    xtype:'componentmain',

    requires:[
        'App.view.main.CommonController',
        'App.view.main.CommonModel',

        'App.view.components.containers.AbsoluteLayout'
    ],
    controller: 'common',
    viewModel: 'common',

    items:[
        {
            bind:{
                title:'{view1}'
            },
            xtype: 'absolutelayout'
        }
    ]
});