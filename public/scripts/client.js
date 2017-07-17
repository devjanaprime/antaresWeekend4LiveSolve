var myApp = angular.module( 'myApp', [] );
var verbose = false;

myApp.controller( 'MyGalleryController', function(){
  var vm = this;
  vm.events = [];
  // actual content now
  var tempEvent = {
    description: 'Aaron and I with our lovely canines: Aarbor and Talisman',
    hearts: [],
    imageUrl: 'images/moments_aaron.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'My sister Anjie and I at our sister Reena\'s wedding',
    hearts: [],
    imageUrl: 'images/moments_anjie.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'Ari and I at the MOA Mirror Maze',
    hearts: [],
    imageUrl: 'images/moments_ari.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'Last Friday after clases',
    hearts: [],
    imageUrl: 'images/moments_friday.jpg',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'That time we drove Matt\'s jeep to the top of a waterfall',
    hearts: [],
    imageUrl: 'images/moments_hirsch.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'My wife and I about to see Eddit Izzard',
    hearts: [],
    imageUrl: 'images/moments_krystal.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  var tempEvent = {
    description: 'Going to get pizza with my nephew',
    hearts: [],
    imageUrl: 'images/moments_sascha.png',
    showPic: true
  }; // end temp event
  vm.events.push( tempEvent );
  // end content //
  // add a heart to an event
  vm.heartThisEvent = function( eventIndex ){
    if( verbose ) console.log( 'in controller heartThisEvent:', eventIndex );
    // gimme a heart
    vm.events[ eventIndex ].hearts.push( 'yay' + vm.events[ eventIndex ].hearts.length );
    if( verbose ) console.log( 'hearts', vm.events[ eventIndex ] );
  }; //end heartThisEvent

  vm.togglePic = function( eventIndex ){
    if( verbose ) console.log( 'in controller togglePic:', eventIndex );
    vm.events[ eventIndex ].showPic = !vm.events[ eventIndex ].showPic;
    if( verbose ) console.log( 'vm.events showPic at index after:', vm.events[ eventIndex ].showPic );
  }; //end togglePic
}); // end controller
