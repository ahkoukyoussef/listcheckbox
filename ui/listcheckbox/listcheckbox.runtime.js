TW.Runtime.Widgets.listcheckbox= function () {
	var widgetProperties = this.properties;

	// this is called on your widget anytime bound data changes
	this.updateProperty = function	(updatePropertyInfo) {
		
		console.log("ListCheckBox : updateProperty executes");
		
		if(updatePropertyInfo.TargetProperty === 'DATA') {
			var singleProperty = updatePropertyInfo.SinglePropertyValue;
			this.setProperty('DATA', singleProperty);
			this.afterRender();
		}
		
		if(updatePropertyInfo.TargetProperty === 'RESULT_DATA') {
			var singleProperty = updatePropertyInfo.SinglePropertyValue;
			this.setProperty('RESULT_DATA', singleProperty);
			this.afterRender();
		}
		
		
	}
	
	this.renderHtml = function () {
		console.log("ListCheckBox : renderHtml executes");
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName). In
		// this example, we'll just return static HTML
		return 	'<div id="widget" class="table-responsive" style="width:100%;height:100%"></div>';
	};

	this.afterRender = function () {
		
		console.log("ListCheckBox widgetProperties : ");
		console.log(widgetProperties);
		
		console.log("ListCheckBox : afterRender executes");
		// Propreties
		var SHOW_TITLE = widgetProperties['SHOW_TITLE'];
//			var DATA = ["Ready","Set","Go","Carrying","Weight","World","Merry","Go","Round"];
			var DATA = [];
			var dataRuntime = widgetProperties['DATA'];
			if(dataRuntime != null && dataRuntime!=undefined){							
			  for(var p=0; p<dataRuntime.rows.length ; p++) {
				var row = dataRuntime.rows[p];
				myValue= row["key"];
				DATA.push([myValue]);
			   };
	      	}		 
		var TITLE = widgetProperties['TITLE'];
		var ELEMENT_HEIGHT = widgetProperties['ELEMENT_HEIGHT']+"px";
		var SORT_ALPHABATICLY = widgetProperties['SORT_ALPHABATICLY'];
		
		
		// Initialize content
		var widgetContent = ""; 		

		// Table 
		var widgetContent = widgetContent + '<table class="table table-hover table-bordered" style="width:100%;text-align:left;">';					

		// Table Header
		if(SHOW_TITLE){
		var widgetContent = widgetContent + '<tr> <td style="font-weight:bold;text-align:center;background-color:white;height:'+ELEMENT_HEIGHT+'">'+TITLE+'</td>  </tr>';
		}

		if(SORT_ALPHABATICLY){

			DATA.sort(); 

		}


		// Table Elements 	
		for( var i = 0 ; i < DATA.length ; i++){

			widgetContent = widgetContent + '<tr><td style="height:'+ELEMENT_HEIGHT+'">';
			widgetContent = widgetContent + '<input type="checkbox" id="cbox'+i+'" value="checkbox'+i+'"> ';
			widgetContent = widgetContent + DATA[i] + '</td></tr>';

		}


		// Close Table
		widgetContent = widgetContent + '</table>';
		document.getElementById("widget").innerHTML = widgetContent;

		for(var i = 0 ; i < DATA.length ; i++){
			
			document.getElementById("cbox"+i).addEventListener("click", function(){
				
				var cbox = "";
				var listStates = [];

				// Initialize DATA

				for( var i = 0 ; i < DATA.length ; i++){

				var element = {key :DATA[i] , state : "false"}
				listStates.push(element);

				}	

				
				
				for( var i = 0 ; i < listStates.length ; i++){
				
					cbox = "cbox"+i;
				
						if(document.getElementById(cbox).checked) {
							listStates[i].state = true;
							
						}
					 	else {
					  		listStates[i].state = false;
						}
					console.log(listStates[i]);
					
				}

				//widgetProperties['RESULT_DATA'] = listStates;	
				return listStates;
				
			}, false); 
		
		}
		
	};
	
 		

};