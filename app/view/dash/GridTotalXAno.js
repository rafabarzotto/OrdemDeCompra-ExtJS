Ext.define('OC.view.dash.GridTotalXAno', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridtotalxano',
    
    height: 300,
    width: 300, //1260

    initComponent: function(){

        var store = Ext.create('OC.store.dash.TotalXAno');

        Ext.apply(this, {
            height: this.height,
            store: store,
            stripeRows: true,
            columnLines: true,
            columns: [{
                text   : 'Ano',
                width    : 75,
                dataIndex: 'Ano'
            },{
                text   : 'Total Gasto no Ano',
                width    : 200,
                renderer : 'usMoney',
                dataIndex: 'Total'
            }]
        });

        this.callParent(arguments);
    }
});
