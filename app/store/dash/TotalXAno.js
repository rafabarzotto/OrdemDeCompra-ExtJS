Ext.define('OC.store.dash.TotalXAno', {
	extend: 'Ext.data.Store',

	fields: ['Ano', 'Qtd', 'Total'],

	//pageSize: 10, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',
		url: 'php/dash/TotalxAno.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: true

});