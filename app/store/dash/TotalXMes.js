Ext.define('OC.store.dash.TotalXMes', {
	extend: 'Ext.data.Store',

	fields: ['Mes', 'Qtd', 'Total'],

	//pageSize: 10, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',
		url: 'php/dash/TotalxMes.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: true

});