angular.module('joinAndPlay.controllers', [])

.controller('HomeCtrl', function($scope, FieldsData) {
  FieldsData.getFields().then(function (response) {
    $scope.fields = response.data;
  });
})

.controller('FieldCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, ChatsData) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = ChatsData.all();
  $scope.remove = function(chat) {
    ChatsData.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, ChatsData) {
  $scope.chat = ChatsData.get($stateParams.chatId);
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
