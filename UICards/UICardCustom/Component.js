sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("com.sap.sample.UICardCustom.Component", {
/* manifest를 사용 안할 경우 아래와 같은 Properties 와 Manifest 안의 속성들을 기술 합니다.
        metadata : {
            manifest : "json",           // 구성 요소 클래스를 지정합니다. manifest.json 파일 
            abstract : true ,           // Component 클래스가 다른 구성 요소의 기반 역할을 하는 추상 클래스인지 지정합니다 . 
            library : "sap.ui.core" ,   // 지정 합니다. 구성 요소가 
            version : "1.0" ,           // 구성 요소 
            properties : {              // 컨트롤 또는 뷰와 동일한 방식으로 구성 요소에 대해 정의 
               config : "any"
            }
       }
*/       
	});

	return Component;

});
