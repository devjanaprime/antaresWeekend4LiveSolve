var myApp = angular.module( 'myApp', [] );

myApp.controller( 'MyGalleryController', function(){
  var vm = this;
  vm.events = [];
  /// - delete soon!
  var tempEvent = {
    description: 'just a test',
    imageUrl: 'asdf',
    hearts: 0
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'just another test',
    imageUrl: 'qwer',
    hearts: 0
  }; // end temp event
  vm.events.push( tempEvent );
  /// - end temp stuff - ///
  // add a heart to an event
  vm.heartThisEvent = function( eventIndex ){
    console.log( 'in controller heartThisEvent:', eventIndex );
    // gimme a heart
    vm.events[ eventIndex ].hearts++;
  }; //end heartThisEvent
}); // end controller
