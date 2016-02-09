Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'Loading',
	notFoundTemplate: 'NotFound'
})

Router.configure({
    trackPageView: true
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

/////////////////////////////////////////////////////////////
////					PRODUCTS						 ////
/////////////////////////////////////////////////////////////

Router.route('products', {
  name: 'products',
  controller: 'ProductsController',
  where: 'client'
});

Router.route('products/alloys', {
  name: 'alloys',
  controller: 'AlloysController',
  where: 'client'
});

Router.route('products/copper_based', {
  name: 'copperBased',
  controller: 'CopperBasedController',
  where: 'client'
});

Router.route('products/steel_parts_and_smelters', {
  name: 'steelPartsAndSmelters',
  controller: 'SteelPartsAndSmeltersController',
  where: 'client'
});

Router.route('products/cement_and_crusher', {
  name: 'cementAndCrusher',
  controller: 'CementAndCrusherController',
  where: 'client'
});

Router.route('products/oil_field_consumable_parts', {
  name: 'oilFieldConsumableParts',
  controller: 'OilFieldConsumablePartsController',
  where: 'client'
});

Router.route('products/aluminum_based', {
  name: 'aluminumBased',
  controller: 'AluminumBasedController',
  where: 'client'
});

Router.route('products/machined_parts', {
  name: 'machinedParts',
  controller: 'MachinedPartsController',
  where: 'client'
});

Router.route('products/pump_parts', {
  name: 'pumpParts',
  controller: 'PumpPartsController',
  where: 'client'
});

Router.route('products/drainage', {
  name: 'drainage',
  controller: 'DrainageController',
  where: 'client'
});

/////////////////////////////////////////////////////////////
////					PROFILE							 ////
/////////////////////////////////////////////////////////////

Router.route('profile', {
  name: 'profile',
  controller: 'ProfileController',
  where: 'client'
});

Router.route('profile/centrifugal_casting', {
  name: 'centrifugalCasting',
  controller: 'CentrifugalCastingController',
  where: 'client'
});

Router.route('profile/foundry', {
  name: 'foundry',
  controller: 'FoundryController',
  where: 'client'
});

Router.route('profile/heat_treatment', {
  name: 'heatTreatment',
  controller: 'HeatTreatmentController',
  where: 'client'
});

Router.route('profile/machine_shop', {
  name: 'machineShop',
  controller: 'MachineShopController',
  where: 'client'
});

Router.route('profile/quality_control', {
  name: 'qualityControl',
  controller: 'QualityControlController',
  where: 'client'
});

Router.route('profile/tool_room_and_pattern_shop', {
  name: 'toolRoomAndPatternShop',
  controller: 'ToolRoomAndPatternShopController',
  where: 'client'
}); 

/////////////////////////////////////////////////////////////
////					GLOBAL							 ////
/////////////////////////////////////////////////////////////

//Implement with FlowRouter.
// Router.route('contact', {
//   name: 'contactUs',
//   controller: 'ContactUsController',
//   where: 'client'
// });

Router.route('news', {
  name: 'news',
  controller: 'NewsController',
  where: 'client'
});