sap.ui.define(["sap/ui/integration/Extension", "sap/ui/model/json/JSONModel", 'sap/m/MessageToast'], 

	function (Extension) {
	"use strict";

	var extension = Extension.extend("com.sap.test.UICardObject.extension");
    
    extension.prototype.init = function () {
		Extension.prototype.init.apply(this, arguments);
		this.attachAction(this._handleAction.bind(this));
	};

    /*
        "actionHandlers": {
            "submit": {
                "url": "{{destinations.bpa}}/v1/workflow-instances",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "withCredentials": true,
                "parameters": {
                    "definitionId": "jp10.potaldemosvc-y56vwri9.demoprocess.approval",
                    "context": {
                        "requestname": "{form>/reqName}",
                        "receivename": "{form>/inpEmail}",
                        "startdate": "{form>/startDate}",
                        "enddate": "{form>/endDate}",
                        "requestcontent": "{form>/comment}",
                        "condition": true,
                        "createemail": "{form>/inpEmail}"
                    }						
                }
            }
        },
     */

    extension.prototype._handleAction = function (oEvent) {
		var oCard = this.getCard();

		oCard.request({
			"url": "{{destinations.bpa}}/v1/workflow-instances",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "withCredentials": true,
            "parameters": {
                "definitionId": "jp10.potaldemosvc-y56vwri9.demoprocess.approval",
                "context": {
                    "requestname": "{form>/reqName}",
                    "receivename": "매니저",
                    "startdate": "{form>/startDate}",
                    "enddate": "{form>/endDate}",
                    "requestcontent": "{form>/comment}",
                    "condition": true,
                    "createemail": "{form>/inpEmail}"
                }						
            }
		}).then(function () {
			oCard.showMessage("{form>/inpEmail} 발신 완료", "Success");
		}).catch(function (sErrorMessage) {
			oCard.showMessage(sErrorMessage, "Error");
		});
    }

	return extension;
});
