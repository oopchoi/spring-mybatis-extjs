/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',

    requires: [
        'App.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'a',  dataIndex: 'name' },
        { text: 'b', dataIndex: 'email', flex: 1 },
        { text: 'c', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
