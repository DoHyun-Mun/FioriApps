sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.sample.UICardCustom.Logic", {
        onInit: function () {
			//var oProductsModel =  new JSONModel(sap.ui.require.toUrl("com/sap/sample/UICardCustom/model/sample.json"));
			//this.getView().setModel(oProductsModel, "products");

            var oContactModel = new JSONModel();
            oContactModel.loadData("https://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5", null, true, 'GET');
            //loadData(sURL, oParameters?, bAsync?, sType?, bMerge?, bCache?, mHeaders?) : Promise|undefined
            this.getView().setModel(oContactModel, "products");
		}
	});
});