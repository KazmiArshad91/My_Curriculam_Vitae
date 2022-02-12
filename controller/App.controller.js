sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/m/library',
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, library, Fragment) {
	"use strict";

	return Controller.extend("my.Test.controller.App", {



		onDisplayCV: function (oEvent) {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");

		},

		onChange: function (oEvent) {

			var name = this.getView().byId("ObjectPageLayout").getSelectedSection();

		},


		onInit: function () {

			var oModel1 = new sap.ui.model.json.JSONModel({
				Skills: [{
						"Technical_Skill": "OO_ABAP",
						"Value": "90"
					}, {
						"Technical_Skill": "ABAP",
						"Value": "90"
					}, {
						"Technical_Skill": "ABAP ON HANA",
						"Value": "80"
					}, {
						"Technical_Skill": "CDS",
						"Value": "85"
					}, {
						"Technical_Skill": "FIORI/UI5",
						"Value": "80"
					}, {
						"Technical_Skill": "RAP",
						"Value": "95"
					}

				]

			});

			this.getView().setModel(oModel1);
		

		}



	});
});