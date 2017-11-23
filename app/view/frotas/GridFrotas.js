Ext.define('OC.view.frotas.GridFrotas', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridfrotas',

    store: 'OC.store.frotas.Frotas',

    columns: [{
        text: 'ID',
        width: 20,
        dataIndex: 'id'
    }, {
        text: 'Placa',
        type: 'string',
        dataIndex: 'placa',
        items: {
            xtype: 'textfield',
            width: 30,
            flex: 1,
            margin: 2,
            enableKeyEvents: true,
            listeners: {
                keyup: function() {
                    var store = this.up('gridfrotas').store;
                    store.clearFilter();
                    if (this.value) {
                        store.filter({
                            property: 'placa',
                            value: this.value,
                            anyMatch: true,
                            caseSensitive: false
                        });
                    }
                },
                buffer: 500
            }
        }
    }, {
        text: 'Renavam',
        type: 'string',
        dataIndex: 'renavam'
    }, {
        text: 'Ano/Modelo',
        type: 'string',
        dataIndex: 'ano_modelo'
    }, {
        text: 'Descrição',
        type: 'string',
        dataIndex: 'descricao'
    }, {
        text: 'Departamento',
        type: 'string',
        dataIndex: 'departamento'
    }, {
        menuDisabled: true,
        xtype: 'actioncolumn',
        width: 25,
        items: [{
            iconCls: 'icon-world_link',
            tooltip: 'Consulta Detran',
            handler: function(grid, rowIndex, colIndex) {
                var rec = grid.getStore().getAt(rowIndex);
                var str = rec.data.placa;
                var placa = str.replace(/-/g, "");
                window.open('http://consultas.detrannet.sc.gov.br/servicos/consultaveiculo.asp?placa=' + placa + '&renavam=' + rec.data.renavam, '_blank');
            }
        }]
    }, {
        menuDisabled: true,
        xtype: 'actioncolumn',
        width: 25,
        items: [{
            iconCls: 'icon-table_add',
            tooltip: 'Gerar Ordem',
            handler: function(grid, rowIndex, colIndex) {
                var rec = grid.getStore().getAt(rowIndex);
                var win = Ext.create('OC.view.consulta.ConsultaMaterial');
                var form = Ext.ComponentQuery.query('consultamaterial form#formObs')[0];
                form.getForm().setValues({
                    aplicacao: rec.data.placa,
                    departamento: rec.data.departamento
                })
            }
        }]
    }],
    split: true,
    region: 'north',
    forceFit: true,
    width: 1024,
    height: 728,
    renderTo: Ext.getBody(),


});