Ext.define('OC.view.dash.ChartTotalXMes', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.charttotalxmes',

    requires: [
        'Ext.data.JsonStore',
        'Ext.chart.theme.Base',
        'Ext.chart.series.Series',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric'
    ],

    initComponent: function() {

        Ext.apply(this, {
            layout: 'fit',
            height: 500,
            items: {
                xtype: 'chart',
                animate: true,
                shadow: true,
                store: Ext.create('OC.store.dash.TotalXMes'),
                axes: [{
                    type: 'Numeric',
                    position: 'left',
                    fields: ['Total'],
                    label: {
                        renderer: Ext.util.Format.numberRenderer('0.0')
                    },
                    title: 'Total de Ordens e Valor',
                    grid: true,
                    minimum: 0
                }, {
                    type: 'Category',
                    position: 'bottom',
                    fields: ['Mes'],
                    title: 'Mês do Ano'
                }],
                series: [{
                    type: 'column',
                    axis: 'left',
                    highlight: true,
                    tips: {
                        trackMouse: true,
                        width: 140,
                        height: 28,
                        renderer: function(storeItem, item) {
                            //this.setTitle('R$:  ' + storeItem.get('Total')); 
                            this.setTitle('R' + Ext.util.Format.usMoney(storeItem.get('Total')));
                        }
                    },
                    label: {
                        display: 'insideEnd',
                        'text-anchor': 'center',
                        field: 'Total',
                        color: '#333',
                        renderer: Ext.util.Format.numberRenderer('0,0.0')
                    },
                    xField: 'Mes',
                    yField: 'Total',
                    renderer: function(sprite, record, attr, index, store) {
                        var fieldValue = Math.random() * 20 + 10;
                        var value = (record.get('Total') >> 0) % 5;
                        var color = ['rgb(213, 70, 121)',
                            'rgb(44, 153, 201)',
                            'rgb(146, 6, 157)',
                            'rgb(49, 149, 0)',
                            'rgb(249, 153, 0)'
                        ][value];
                        return Ext.apply(attr, {
                            fill: color
                        });
                    }
                }]

            }
        });

        this.callParent(arguments);
    }
});