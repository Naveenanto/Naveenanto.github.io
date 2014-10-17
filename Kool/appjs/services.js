'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myAppServices', []).
  factory('getService',function($http){
	  
	  var challengeService = {};

	  
	  challengeService.eventTitle = function(){
		  
		  return $http({
	
		  method: 'GET',
		  url: 'categories.json'
		  
	  });
		  
	  }

        challengeService.content = function(url){
            return $http({

                method:'GET',
                url: 'http://cms.kurukshetra.org.in/events/'+url+'.json'
            })
        }


	  
	  return challengeService;
	  
	  
  })
