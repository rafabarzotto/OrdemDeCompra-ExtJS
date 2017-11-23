Ext.define('OC.view.frotas.ConsultaFrota', {
	extend: 'Ext.window.Window',

	alias: 'widget.consultafrota',

	title: 'Consulta Frota',

	requires: ['OC.view.frotas.GridFrotas',
		'Ext.form.FieldSet',
		'Ext.grid.plugin.CellEditing',
		'Ext.grid.column.Action',
		'Ext.grid.feature.Summary',
		'Ext.form.field.ComboBox',
		'Ext.form.field.Date',
		'OC.ux.grid.Printer'
	],

	iconCls: 'icon-grid',

	autoShow: true,
	modal: true,
	maximized: true,
	autoScroll: true,
	closeAction: 'destroy',
	layout: 'column',

	items: [{
		items: [{
			xtype: 'gridfrotas',
			columnWidth: 0.65
		}]
	}, {
		columnWidth: 0.35,
		margin: '0 0 0 10',
		xtype: 'fieldset',
		title: 'Detalhes do Veiculo',
		layout: 'anchor',
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'Placa',
			name: 'placa'
		}, {
			fieldLabel: 'Renavam',
			name: 'renavam'
		}, {
			fieldLabel: 'Ano/Modelo',
			name: 'ano_modelo'
		}, {
			fieldLabel: 'Descrição',
			name: 'descricao'
		}, {
			fieldLabel: 'Departamento',
			name: 'departamento'
		}, {
			xtype: 'radiogroup',
			fieldLabel: 'Rating',
			columns: 3,
			defaults: {
				name: 'rating' //Each radio has the same name so the browser will make sure only one is checked at once
			},
			items: [{
				inputValue: '0',
				boxLabel: 'A'
			}, {
				inputValue: '1',
				boxLabel: 'B'
			}, {
				inputValue: '2',
				boxLabel: 'C'
			}]
		}]
	}],

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			xtype: 'button',
			text: 'Buscar',
			itemId: 'buscar',
			iconCls: 'icon-add'
		}, {
			xtype: 'button',
			text: 'Imprimir Materiais',
			itemId: 'print',
			iconCls: 'icon-print'

		}]
	}]

});