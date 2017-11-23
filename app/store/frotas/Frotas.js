Ext.define('OC.store.frotas.Frotas', {
	extend: 'Ext.data.Store',

	fields: ['id', 'placa', 'renavam', 'ano_modelo', 'descricao', 'departamento'],

	proxy: {
		type: 'ajax',
		url: 'php/veiculos/listaVeiculos.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: false

});