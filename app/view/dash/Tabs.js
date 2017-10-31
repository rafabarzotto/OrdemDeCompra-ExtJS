Ext.define('OC.view.dash.Tabs', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.tabgraficos',

    xtype: 'basic-tabs',

    maximized: true,
    width: '100%', //1260
    defaults: {
        bodyPadding: 5,
        autoScroll: true
    },
    items: [{
        title: 'Total x Mês',
        items: Ext.create('OC.view.dash.ChartTotalXMes')
    }, {
        title: 'Total x Ano',
        items: Ext.create('OC.view.dash.GridTotalXAno')
    }]
});