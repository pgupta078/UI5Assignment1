sap.ui.define([
	"sap/ui/core/mvc/XMLView"
	], function(XMLView){
		"use strict";
		XMLView.create({
			viewName:"search.INV.view.view1"
		}).then(function (oView) {
			oView.placeAt("content1");
		});
	}
	);