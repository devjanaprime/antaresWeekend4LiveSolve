var myApp = angular.module( 'myApp', [] );

myApp.controller( 'MyGalleryController', function(){
  var vm = this;
  vm.events = [];
  // actual content now
  var tempEvent = {
    description: 'Aaron and I with our lovely canines: Aarbor and Talisman',
    hearts: 0,
    imageUrl: 'images/moments_aaron.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'My sister Anjie and I at our sister Reena\'s wedding',
    hearts: 0,
    imageUrl: 'images/moments_anjie.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'Ari and I at the MOA Mirror Maze',
    hearts: 0,
    imageUrl: 'images/moments_ari.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'Last Friday after clases',
    hearts: 0,
    imageUrl: 'images/moments_friday.jpg',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'That time we drove Matt\'s jeep to the top of a waterfall',
    hearts: 0,
    imageUrl: 'images/moments_hirsch.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'My wife and I about to see Eddit Izzard',
    hearts: 0,
    imageUrl: 'images/moments_krystal.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'Going to get pizza with my nephew',
    hearts: 0,
    imageUrl: 'images/moments_sascha.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  // end content //
  // add a heart to an event
  vm.heartThisEvent = function( eventIndex ){
    console.log( 'in controller heartThisEvent:', eventIndex );
    // gimme a heart
    vm.events[ eventIndex ].hearts++;
  }; //end heartThisEvent

  vm.togglePic = function( eventIndex ){
    console.log( 'in controller togglePic:', eventIndex );
    console.log( 'vm.events at index:', vm.events[ eventIndex ] );
    console.log( 'vm.events showPic at index:', vm.events[ eventIndex ].showPic );
    vm.events[ eventIndex ].showPic = !vm.events[ eventIndex ].showPic;
    console.log( 'vm.events showPic at index after:', vm.events[ eventIndex ].showPic );
  }; //end togglePic
}); // end controller
