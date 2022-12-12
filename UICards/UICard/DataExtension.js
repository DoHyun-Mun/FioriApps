sap.ui.define(["sap/ui/integration/Extension", "sap/ui/model/json/JSONModel"], function (Extension, JSONModel) {
	"use strict";

	var DataExtension = Extension.extend("com.sap.sample.UICard.DataExtension");
    /**
            "data": {
				"request": {
					"url": "https://services.odata.org/V4/Northwind/Northwind.svc/Products",
					"parameters": {
						"$format": "json"
					}
				},
				"path": "/value"
			},  
     */
    // should return a promise
	DataExtension.prototype.getData = function () {
        var oContactModel = new JSONModel();
        oContactModel.loadData("https://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5", null, false, 'GET');
        return Promise.resolve(oContactModel.getData());
	};

	return DataExtension;
});
