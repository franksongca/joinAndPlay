angular.module('joinAndPlay.controllers')
  .controller('HomeCtrl', function($scope, $filter, FieldsData) {
    FieldsData.getFields().then(function (response) {
      $scope.fields = response.data;
    });

    $scope.distances = [
      {key: 'DISTANCE_1', distance: 2},
      {key: 'DISTANCE_2', distance: 5},
      {key: 'DISTANCE_3', distance: 10},
      {key: 'DISTANCE_4', distance: 15},
      {key: 'DISTANCE_5', distance: 20},
      {key: 'DISTANCE_6', distance: 30},
      {key: 'DISTANCE_7', distance: 40},
      {key: 'DISTANCE_8', distance: 50},
      {key: 'DISTANCE_9', distance: -1}
    ];

    $scope.selectDistance = 2;

    $scope.onSelect = function (distance) {
      $scope.selectDistance = distance;
    };

    $scope.translate = function (key) {
      return $filter('translate')(key);
    };
  });

