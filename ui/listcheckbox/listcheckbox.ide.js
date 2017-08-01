TW.IDE.Widgets.listcheckbox = function () {

	this.widgetIconUrl = function() {
		return  "'../Common/extensions/ListCheckbox/ui/listcheckbox/default_widget_icon.ide.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'ListCheckbox',
			'description': 'The widget will take an INFOTABLE\'s Information and will output the same INFOTABLE with a slight change, the state of the Infotables elements, whether they are true (checked) or false (not checked).',
			'category': ['Common'],
			'supportsAutoResize': true,  
			'properties': {
				'DATA':{
					'description': 'List Checkbox Input data',
					'isBindingTarget': true,
					'isEditable': true,
					'baseType': 'INFOTABLE',
					'warnIfNotBoundAsTarget': true	
				},
				'TITLE':{
					'description': 'List Checkbox Header Title',
					'isBindingTarget': true,
					'isEditable': true,
					'baseType': 'STRING',
					'warnIfNotBoundAsTarget': true	
				},
				'ELEMENT_HEIGHT': {
					'description': 'Height of the Header and the content elements of the list',
					'baseType': 'NUMBER',
					'defaultValue': "40",
					'isBindingTarget': false,
					'isEditable': true,
					'warnIfNotBoundAsTarget': false
				},
				'SHOW_TITLE': {
					'description': 'Either show or hide the title',
					'baseType': 'BOOLEAN',
					'isEditable': true,
					'isBindingTarget': false,
					'warnIfNotBoundAsTarget': false
				},
				'SORT_ALPHABATICLY': {
					'description': 'Either sort alphabaticly or not the elements of the list',
					'baseType': 'BOOLEAN',
					'isEditable': true,
					'isBindingTarget': true,
					'warnIfNotBoundAsTarget': false
				},
				'RESULT_DATA':{
					'description': 'List Checkbox Output data',
					'isBindingSource': true,
					'isEditable': true,
					'baseType': 'INFOTABLE',
					'warnIfNotBoundAsTarget': true	
				}			
				
			}
		}
	};

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case 'DATA':
				refreshHtml = true;
			break;
			case 'RESULT_DATA' :
				refreshHtml = true;
			break;
			default:
				refreshHtml = true;
				break;
		}
		return refreshHtml;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return 	'<div class="widget-content widget-listcheckbox">' +
					'<span class="listcheckbox-property">' + this.getProperty('ListCheckbox Property') + '</span>' +
				'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()

		// get a reference to the value element
		valueElem = this.jqElement.find('.listcheckbox-property');
		// update that DOM element based on the property value that the user set
		// in the mashup builder
		valueElem.text(this.getProperty('ListCheckbox Property'));
	};
	
	
	this.afterAddBindingSource = function (bindingInfo) {
		if (bindingInfo.targetProperty == 'DATA') {
			this.updatedProperties();
		}
		if (bindingInfo.targetProperty == 'RESULT_DATA') {
			this.updatedProperties();
		}
	};

};