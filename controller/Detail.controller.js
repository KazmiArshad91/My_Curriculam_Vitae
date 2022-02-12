sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function(Controller, JSONModel,History) {
	"use strict";

	var PageController = Controller.extend("my.Test.controller.Detail", {

		onInit : function () {
			
			if (	!this._oModel ) {
			this._sValidPath = "model/Arshad_Kazmi.pdf";
		
			this._oModel = new JSONModel({
				Source: this._sValidPath,
				Title: "My Curriculam Vitae",
				Height: "1000px"
			});
			this.getView().setModel(this._oModel); }
		},



		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
		
				this.getOwnerComponent().getRouter().navTo("app", null, true);

			}
		}

	
	});


});