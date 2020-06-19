sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MToast, MBox) {
	"use strict";
	return Controller.extend("search.INV.controller.view1", {
		onSearchInv: function () {
			//alert("Searching Invoices");
			debugger;
			var inv_number = this.byId("invNumber");
			var msg = 'Searching Invoice  ';
			//messsage toast - visible only for few seconds
			MToast.show(msg + inv_number.getValue());
			//MessageBox - comes with Action button
		    MBox.warning(("You have selected Search Option for invoice --" + inv_number.getValue()), {
				actions: [MBox.Action.OK, MBox.Action.CANCEL],
				emphasizedAction: MBox.Action.OK,
				onClose: function (sAction) {
					MToast.show("Action selected: " + sAction);
				}
			});
		}
	});
});