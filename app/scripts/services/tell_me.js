'use strict';

/**
 * @ngdoc service
 * @name askAwayApp.tellMe
 * @description
 * # tellMe
 * Factory in the askAwayApp.
 */
angular.module('askAwayApp')
  .factory('tellMe', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('https://yesno.wtf/api', {}, {
     query: {
       method:'GET',
       params:{
         'answer': 'yes',
         'forced': false,
         'image': 'https://yesno.wtf/assets/yes/2.gif'
       },
       isArray:false
     }
   });
  });


  /*    YESNO PARAMS
        "answer": "yes",
        "forced": false,
        "image": "https://yesno.wtf/assets/yes/2.gif"
        return $resource('https://yesno.wtf/api?q=:location&units=imperial&APPID=YOUR_API_KEY_HERE'
        */

  /*
  PER ANGULARJS DOCUMENTATION (https://docs.angularjs.org/api/ngResource/service/$resource)
  $resource(url, [paramDefaults], [actions], options);
  */
