Ext.define('OC.controller.Frotas', {
	extend: 'Ext.app.Controller',

	models: ['OC.model.User'],

	stores: ['OC.store.frotas.Frotas'],

	views: ['OC.view.frotas.GridFrotas', 'OC.view.frotas.ConsultaFrota'],


	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"gridfrotas": { // Alias GRID!
				render: this.onWindowRender,
				itemdblclick: this.onEditClick
			},
			"gridfrotas button#add": {
				//click: this.onAddClick
			},
			"gridfrotas button#add": {
				//click: this.onAddClick
			},
			"consultafrota button#print": {
				click: this.onPrint
			},
			// "usersform button#cancel": {
			// 	click: this.onCancelClick
			// },
			// "usersform button#save": {
			// 	click: this.onSaveClick
			// }
		})

	},


	onWindowRender: function(gridfrotas, eOpts) {
		gridfrotas.getStore().load();
	},

	onPrint: function(btn, eOpts) {
		var grid = Ext.ComponentQuery.query('consultafrota gridfrotas')[0];
		OC.ux.grid.Printer.printAutomatically = false;
		OC.ux.grid.Printer.print(grid);
	},

	// onAddClick: function(btn, eOpts) {
	// 	console.log('Clicou aqui');
	// 	var win = Ext.create('OC.view.usuarios.UsersForm');
	// // 	win.setTitle('Novo Usuário');
	// // },

	// onDeleteClick: function(btn, eOpts) {
	// 	var g = btn.up('gridfrotas grid');
	// 	var records = g.getSelectionModel().getSelection();
	// 	console.log(g);
	// 	console.log(records);
	// 	var store = g.getStore();
	// 	console.log(store);
	// 	store.remove(records);
	// 	store.sync();
	// },

	onEditClick: function(gridfrotas, record, item, index, e, eOpts) {
		//console.log(record[0]);
		var rec = record;
		//var form = Ext.ComponentQuery.query('consultafrota fieldset#formFrotas')[0];
		console.log(form.loadRecord(rec));
		if (rec) {
			//console.log(form.getForm().loadRecord(rec));
		}

		// console.log(record.get('placa'));
		// var win = Ext.create('OC.view.consulta.ConsultaMaterial');
		// var form = Ext.ComponentQuery.query('consultamaterial form#formObs')[0];
		// form.getForm().setValues({
		// 	aplicacao: record.get('placa'),
		// 	departamento: record.get('departamento')
		// })
	},

	// onCancelClick: function(btn, e, eOpts) {
	// 	var win = btn.up('window'); //pegar window
	// 	var form = win.down('form'); //pegar o form dentro da window
	// 	form.getForm().reset(); //resetar o form
	// 	win.close();
	// },

	// onSaveClick: function(btn, e, eOpts) {
	// 	var win = btn.up('window'), //pegar window
	// 		form = win.down('form'),
	// 		values = form.getValues(),
	// 		record = form.getRecord(),
	// 		grid = Ext.ComponentQuery.query('gridfrotas grid')[0],
	// 		store = grid.getStore();


	// 	if (record) {
	// 		//console.OC('edicao');
	// 		console.log(record);
	// 		record.set(values);
	// 		console.log(record);

	// 	} else {
	// 		//console.OC('novo');
	// 		var novousuario = Ext.create('OC.model.User', {
	// 			nome: values.nome,
	// 			login: values.login,
	// 			senha: OC.util.MD5.encode(values.senha),
	// 			email: values.email
	// 		});

	// 		console.log(novousuario);
	// 		store.add(novousuario);

	// 	}

	// 	store.sync();
	// 	Ext.Msg.alert('Salvo Com Sucesso!');
	// }



});