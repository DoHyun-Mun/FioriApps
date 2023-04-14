/**
 * This module was created by the BASEditor
 */
sap.ui.define(["sap/ui/integration/Designtime"], function (
    Designtime
) {
    "use strict";
    return function () {
        return new Designtime({
            form: {
                items: {
                    "title": {
						"manifestpath": "/sap.card/configuration/parameters/title/value",
						"label": "팀명을 입력하세요",
						"type": "string",
						"translatable": true
					},
                }
            },
            preview: {
                modes: "Abstract"
            }
        });
    };
});