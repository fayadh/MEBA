FlowRouter.route('/', {
		name: 'home',
    action: (params, queryParams) => {
				BlazeLayout.render('MasterLayout', { main: "Home" });
    }
});

/////////////////////////////////////////////////////////////
////					PRODUCTS						 ////
/////////////////////////////////////////////////////////////


FlowRouter.route('/products/alloys', {
		name: 'alloys',
    action: (params, queryParams) => {
				BlazeLayout.render('MasterLayout', { main: "Alloys" });
    }
});

FlowRouter.route('/products', {
  name: 'products',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "Products"})
	}
});

FlowRouter.route('/products/alloys', {
  name: 'alloys',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "Alloys"})
	}
});

FlowRouter.route('/products/copper_based', {
  name: 'copperBased',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "CopperBased"})
	}
});

FlowRouter.route('/products/steel_parts_and_smelters', {
  name: 'steelPartsAndSmelters',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "SteelPartsAndSmelters"})
	}
});

FlowRouter.route('/products/cement_and_crusher', {
  name: 'cementAndCrusher',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "CementAndCrusher"})
	}
});

FlowRouter.route('/products/oil_field_consumable_parts', {
  name: 'oilFieldConsumableParts',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "OilFieldConsumableParts"})
	}
});

FlowRouter.route('/products/aluminum_based', {
  name: 'aluminumBased',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "AluminumBased"})
	}
});

FlowRouter.route('/products/machined_parts', {
  name: 'machinedParts',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "MachinedParts"})
	}
});

FlowRouter.route('/products/pump_parts', {
  name: 'pumpParts',
  action: (params, queryParams) => {
			BlazeLayout.render('MasterLayout', { main: "PumpParts"})
	}
});

FlowRouter.route('/products/drainage', {
  name: 'drainage',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "Drainage"})
	}
});

/////////////////////////////////////////////////////////////
////					PROFILE							 ////
/////////////////////////////////////////////////////////////

FlowRouter.route('/profile', {
  name: 'profile',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "Profile"})
	}
});

FlowRouter.route('/profile/centrifugal_casting', {
  name: 'centrifugalCasting',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "CentrifugalCasting"})
	}
});

FlowRouter.route('/profile/chemical_division', {
  name: 'centrifugalCasting',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "ChemicalDivision"})
	}
});

FlowRouter.route('/profile/foundry', {
  name: 'foundry',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "Foundry"})
	}
});

FlowRouter.route('/profile/heat_treatment', {
  name: 'heatTreatment',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "HeatTreatment"})
	}
});

FlowRouter.route('/profile/machine_shop', {
  name: 'machineShop',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "MachineShop"})
	}
});

FlowRouter.route('/profile/oil_and_gas', {
  name: 'oilAndGas',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "OilAndGas"})
	}
});

FlowRouter.route('/profile/partners', {
  name: 'partners',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "Partners"})
	}
});

FlowRouter.route('/profile/quality_control', {
  name: 'qualityControl',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "QualityControl"})
	}
})

FlowRouter.route('/profile/tool_room_and_pattern_shop', {
  name: 'toolRoomAndPatternShop',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "ToolRoomAndPatternShop"})
	}
})

/////////////////////////////////////////////////////////////
////					GLOBAL							 ////
/////////////////////////////////////////////////////////////

FlowRouter.route('/contact', {
  name: 'contactUs',
	action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "Contact"})
	}
});

FlowRouter.route('/news', {
  name: 'news',
  action: (params, queryParams) => {
		BlazeLayout.render('MasterLayout', { main: "News"})
	}
});

// Router.configure({
//     trackPageView: true
// });
