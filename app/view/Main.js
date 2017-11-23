Ext.define('OC.view.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    xtype: 'app-main',

    title: 'Ordem de Compra',

    items: [{
        items: Ext.create('OC.view.dash.Tabs')
    }],

    dockedItems: [{

        xtype: 'toolbar',
        dock: 'top',
        //  height: 50,
        defaults: { //aplica em todos os itens
            //anchor: '100%',
            //scale: 'medium',
            //labelAlign: 'right'
                //mgsTarget: 'side'
        },

        items: [{
                text: 'Arquivo',
                arrowAlign: 'right',
                iconCls: 'icon-folder',
                itemId: 'arquivo',
                menu: [{
                    text: 'Gerar Ordem de Compra',
                    id: 'arqA',
                    iconCls: 'icon-date'
                }, {
                    text: 'Ordens Emitidas',
                    id: 'arqB',
                    iconCls: 'icon-folder'
                }, '-', {
                    text: 'Logout',
                    id: 'logout',
                    iconCls: 'icon-stop',
                }]
            },

            {
                xtype: 'tbspacer',
                width: 3
            },

            {
                text: 'Relatórios',
                arrowAlign: 'right',
                iconCls: 'icon-report',
                id: 'relatorios',
                menu: [{
                    text: 'Relatório Por Data',
                    id: 'relA',
                    iconCls: 'icon-date'
                }, '-', {
                    text: 'Graficos',
                    id: 'relB',
                    iconCls: 'icon-chart'
                }]
            },

            {
                xtype: 'tbspacer',
                width: 3
            },

            {
                text: 'Opções',
                arrowAlign: 'right',
                iconCls: 'icon-wrench',
                itemId: 'opcoes',
                menu: [{
                    text: 'Cadastro de Usuário',
                    id: 'opA',
                    iconCls: 'icon-user-add'
                }, {
                    text: 'Cadastro de Departamento',
                    id: 'opB',
                    iconCls: 'icon-door'
                }, {
                    text: 'Cancelar Ordem',
                    id: 'opC',
                    iconCls: 'icon-cancel'
                }]
            },

            {
                xtype: 'tbspacer',
                width: 3
            },

            {
                text: 'Frotas',
                arrowAlign: 'right',
                iconCls: 'icon-car',
                itemId: 'frotas',
                menu: [{
                    text: 'Consulta',
                    id: 'frotasA',
                    iconCls: 'icon-car_add',
                }]
            },

            {
                text: 'Ajuda',
                arrowAlign: 'right',
                iconCls: 'icon-help',
                itemId: 'sobre',
                menu: [{
                    text: 'Sobre',
                }]
            }

        ]

    }, ]


});