angular.module('joinAndPlay.services', [])

  .factory('FieldsData', function($http) {
    return {
      getFields: function() {
        return $http({
          method: 'GET',
          url: 'data/fields.json',
          headers: {
            accept: 'application/json'
          }
        });
      }
    };
  });
